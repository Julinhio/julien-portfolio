import { useRef, useState } from "react";
import { LIMITS, validateContact } from "../../shared/contact-rules.js";
import { LINKS } from "../data/site";

const FIELD =
  "mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none";

const FALLBACK = "You can also reach me on LinkedIn.";

/** Turns a failed response into one sentence for the visitor. */
function failureMessage(status, body) {
  if (body?.error) return body.error;
  if (status === 429) return "Too many messages from this connection. Please try again in an hour.";
  if (status === 503) return "The form is temporarily unavailable.";
  return "Something went wrong on my side and your message wasn’t sent. Please try again in a few minutes.";
}

export default function ContactForm() {
  // Set once, on first render: the server rejects forms submitted faster than
  // a person could fill them in.
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
  const [notice, setNotice] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    const { errors: found } = validateContact(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Only a duration is sent: comparing the browser clock with the
        // server clock would discard visitors whose clock is off.
        body: JSON.stringify({ ...data, fillMs: Date.now() - startedAt }),
      });
      const body = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("sent");
        formRef.current?.reset();
        return;
      }
      if (body?.errors) setErrors(body.errors);
      setStatus("failed");
      setNotice(failureMessage(response.status, body));
    } catch {
      setStatus("failed");
      setNotice("Your message couldn’t be sent: the connection failed. Please check it and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-white/15 bg-white/[0.06] p-6">
        <p className="text-base font-semibold text-white">Thanks, your message has been sent.</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          It went straight to my inbox. I’ll reply to the email address you gave.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-white underline underline-offset-4 hover:text-accent-soft"
        >
          Send another message
        </button>
      </div>
    );
  }

  const describe = (field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-xs font-medium text-white/80">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={LIMITS.name.max}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe("name")}
            className={FIELD}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-accent-soft">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-medium text-white/80">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={LIMITS.email.max}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe("email")}
            className={FIELD}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-accent-soft">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-xs font-medium text-white/80">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={LIMITS.message.max}
          placeholder="The role, the process, or the problem you’d like to solve."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describe("message")}
          className={`${FIELD} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-accent-soft">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: invisible to people, tempting to bots. Filled = discarded. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-accent disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-white/55">Your message is only used to reply to you.</p>
      </div>

      <div aria-live="polite">
        {status === "failed" && notice && (
          <p role="alert" className="rounded-lg border border-accent-soft/40 bg-accent-soft/10 px-3.5 py-2.5 text-sm text-white">
            {notice}{" "}
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">
              {FALLBACK}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
