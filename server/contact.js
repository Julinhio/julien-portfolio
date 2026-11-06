/**
 * Contact form handler, independent of the hosting runtime. The Vercel
 * function (api/contact.js) and the local dev server (vite.config.js) both call
 * handleContact() and send back whatever it returns.
 *
 * Server-only: the recipient address and the Resend key are read from the
 * environment here and never reach the browser.
 *
 * Environment
 *   RESEND_API_KEY          required  Resend API key (sending access is enough)
 *   CONTACT_TO_EMAIL        required  where messages are delivered
 *   CONTACT_FROM_EMAIL      required  sender on a domain verified in Resend,
 *                                     e.g. "Portfolio <contact@your-domain>"
 *   CONTACT_ALLOWED_ORIGINS optional  comma-separated origins allowed to post
 *                                     (defaults to the request's own host)
 *   UPSTASH_REDIS_REST_URL  optional  shared rate limit across instances
 *   UPSTASH_REDIS_REST_TOKEN optional
 *   CONTACT_DRY_RUN=1       optional  log instead of sending (local testing)
 */

import { LIMITS, validateContact } from "../shared/contact-rules.js";

const RATE_LIMIT = { max: 5, windowSeconds: 60 * 60 }; // per IP and per hour
const MAX_BODY_BYTES = 20_000;

// Best-effort fallback when Upstash isn't configured: it only protects one
// warm serverless instance, so production should set the Upstash variables.
const memoryHits = new Map();

function reply(status, body) {
  return { status, body };
}

async function isRateLimited(ip, env) {
  const key = `contact:${ip}`;

  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const response = await fetch(`${env.UPSTASH_REDIS_REST_URL}/pipeline`, {
        method: "POST",
        headers: { Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}` },
        body: JSON.stringify([
          ["INCR", key],
          ["EXPIRE", key, String(RATE_LIMIT.windowSeconds), "NX"],
        ]),
      });
      if (response.ok) {
        const [incr] = await response.json();
        return Number(incr?.result) > RATE_LIMIT.max;
      }
      console.error(`[contact] rate limiter returned ${response.status}; falling back to memory`);
    } catch (error) {
      console.error("[contact] rate limiter unreachable; falling back to memory", error);
    }
  }

  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowSeconds * 1000;
  const hits = (memoryHits.get(key) || []).filter((time) => time > windowStart);
  hits.push(now);
  memoryHits.set(key, hits);
  if (memoryHits.size > 5000) memoryHits.clear(); // bound memory on a long-lived instance
  return hits.length > RATE_LIMIT.max;
}

function originAllowed(origin, host, env) {
  // Browsers always send Origin on a cross-site POST. No Origin means a
  // non-browser client, which the other checks still apply to.
  if (!origin) return true;
  const allowed = (env.CONTACT_ALLOWED_ORIGINS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  if (allowed.length > 0) return allowed.includes(origin);
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

async function sendWithResend(values, env) {
  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    "",
    values.message,
    "",
    "Sent from the portfolio contact form.",
  ].join("\n");

  if (env.CONTACT_DRY_RUN === "1") {
    console.info("[contact] dry run, message not sent:\n" + text);
    return { ok: true };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: values.email,
      subject: `Portfolio message from ${values.name}`.slice(0, 150),
      text,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    // Logged server-side only; the visitor gets a generic message.
    console.error(`[contact] Resend refused the message (${response.status}): ${await response.text()}`);
    return { ok: false };
  }
  return { ok: true };
}

/**
 * @param {object} request
 * @param {string} request.method
 * @param {unknown} request.body     parsed JSON body (or a raw string)
 * @param {string} [request.ip]
 * @param {string} [request.origin]
 * @param {string} [request.host]
 * @param {object} env               process.env or equivalent
 * @returns {Promise<{status: number, body: object}>}
 */
export async function handleContact({ method, body, ip = "unknown", origin, host }, env) {
  if (method !== "POST") return reply(405, { error: "Method not allowed." });

  if (!originAllowed(origin, host, env)) {
    return reply(403, { error: "This form can only be sent from the website." });
  }

  let input = body;
  if (typeof input === "string") {
    if (input.length > MAX_BODY_BYTES) return reply(413, { error: "Your message is too long." });
    try {
      input = JSON.parse(input);
    } catch {
      return reply(400, { error: "The form data couldn’t be read. Please try again." });
    }
  }
  if (!input || typeof input !== "object") {
    return reply(400, { error: "The form data couldn’t be read. Please try again." });
  }

  const dryRun = env.CONTACT_DRY_RUN === "1";
  if (!dryRun && (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL)) {
    console.error("[contact] RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing.");
    return reply(503, { error: "The form is temporarily unavailable." });
  }

  if (await isRateLimited(ip, env)) {
    return reply(429, { error: "Too many messages from this connection. Please try again in an hour." });
  }

  // Bots: a filled honeypot or an instant submission gets a fake success, so
  // they have no signal to adapt to. Nothing is sent.
  // fillMs is measured in the browser (time between form display and submit),
  // so it doesn't depend on the visitor's clock matching the server's.
  const elapsed = Number(input.fillMs);
  if ((typeof input.website === "string" && input.website.trim() !== "") || !(elapsed >= LIMITS.minFillMs)) {
    console.warn(`[contact] submission discarded as automated (ip ${ip})`);
    return reply(200, { ok: true });
  }

  const { values, errors } = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return reply(422, { error: "Please check the highlighted fields.", errors });
  }

  try {
    const result = await sendWithResend(values, env);
    if (!result.ok) {
      return reply(502, {
        error: "Your message couldn’t be delivered right now. Please try again in a few minutes.",
      });
    }
  } catch (error) {
    console.error("[contact] sending failed", error);
    return reply(502, {
      error: "Your message couldn’t be delivered right now. Please try again in a few minutes.",
    });
  }

  return reply(200, { ok: true });
}
