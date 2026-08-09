import Section from "./Section";
import { LINKS } from "../data/links";

// One treatment for all three rows. A row without a destination is plain text,
// not a greyed-out control, so nothing on the list reads as broken.
const ROW = "display block py-6 text-[clamp(1.75rem,4.5vw,3rem)] text-ink sm:py-8";

function ContactRow({ href, external, children }) {
  return (
    <li className="rule">
      {href ? (
        <a
          href={href}
          className={`${ROW} transition-colors duration-150 hover:text-accent`}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        >
          {children}
        </a>
      ) : (
        <span className={ROW}>{children}</span>
      )}
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
