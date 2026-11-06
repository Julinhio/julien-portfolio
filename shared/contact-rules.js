/**
 * Contact form rules, shared by the browser (instant feedback) and the server
 * (the only check that counts). Keep this file free of secrets: it ships to
 * the browser.
 */

export const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 20, max: 5000 },
  // A human needs a few seconds to fill the form; bots usually don't wait.
  minFillMs: 3000,
};

// Pragmatic address check: one @, no spaces, a dot in the domain.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value) {
  if (typeof value !== "string") return "";
  // Drop control characters except tab, line feed and carriage return.
  return Array.from(value)
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code === 9 || code === 10 || code === 13 || (code >= 32 && code !== 127);
    })
    .join("")
    .trim();
}

/**
 * Returns { values, errors }. `errors` is empty when the submission is valid.
 * Messages are written for the visitor.
 */
export function validateContact(input) {
  const values = {
    name: clean(input?.name).replace(/\s+/g, " "),
    email: clean(input?.email).toLowerCase(),
    message: clean(input?.message),
  };
  const errors = {};

  if (values.name.length < LIMITS.name.min) errors.name = "Please enter your name.";
  else if (values.name.length > LIMITS.name.max) errors.name = `Please keep your name under ${LIMITS.name.max} characters.`;

  if (!values.email) errors.email = "Please enter your email so I can reply.";
  else if (values.email.length > LIMITS.email.max || !EMAIL_PATTERN.test(values.email))
    errors.email = "This email address doesn’t look valid.";

  if (values.message.length < LIMITS.message.min)
    errors.message = `Please write at least ${LIMITS.message.min} characters.`;
  else if (values.message.length > LIMITS.message.max)
    errors.message = `Please keep your message under ${LIMITS.message.max} characters.`;

  return { values, errors };
}
