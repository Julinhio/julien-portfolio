// Vercel serverless function: POST /api/contact. Logic lives in server/contact.js.
import { handleContact } from "../server/contact.js";

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const first = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (first || "").split(",")[0].trim() || req.headers["x-real-ip"] || "unknown";
}

export default async function handler(req, res) {
  const { status, body } = await handleContact(
    {
      method: req.method,
      body: req.body,
      ip: clientIp(req),
      origin: req.headers.origin,
      host: req.headers["x-forwarded-host"] || req.headers.host,
    },
    process.env
  );

  res.setHeader("Cache-Control", "no-store");
  res.status(status).json(body);
}
