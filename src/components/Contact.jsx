import Section from "./Section";
import { LINKS } from "../data/links";

const ROW =
  "display block py-6 text-[clamp(1.75rem,4.5vw,3rem)] transition-colors duration-150 sm:py-8";

function ContactRow({ href, external, children }) {
  if (!href) {
    return (
      <li className="rule">
        <button
          type="button"
          disabled
          className={`${ROW} w-full cursor-not-allowed text-left text-ink-muted`}
        >
          {children}
        </button>
      </li>
    );
  }

  return (
    <li className="rule">
      <a
        href={href}
        className={`${ROW} text-ink hover:text-accent`}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <Section id="contact" className="bg-paper-dim">
      <p className="display max-w-[22ch] text-[clamp(1.75rem,4.5vw,3.25rem)]">
        Interested in operations, automation, AI systems, or just comparing notes?
      </p>

      <ul className="mt-14 border-b border-ink-line sm:mt-20">
        <ContactRow href={LINKS.email}>Email</ContactRow>
        <ContactRow href={LINKS.linkedin} external>
          LinkedIn
        </ContactRow>
        <ContactRow href={LINKS.resume}>Resume</ContactRow>
      </ul>
    </Section>
  );
}
