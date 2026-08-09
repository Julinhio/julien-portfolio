/**
 * Single source of truth for every outbound URL on the page.
 * Set `resume` to a path (e.g. "/resume.pdf") once the file exists; until then
 * every resume action renders as a disabled control instead of a broken link.
 */
export const LINKS = {
  email: "mailto:julinhio@hotmail.com",
  linkedin: "https://www.linkedin.com/in/jgaichet/",
  resume: null,
};
