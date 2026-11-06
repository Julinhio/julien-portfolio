import ContactForm from "./ContactForm";
import { CONTACT, LINKS } from "../data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="shell py-12 sm:py-16">
      <div className="on-ink grid gap-10 rounded-2xl bg-ink p-7 text-white sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:p-14">
        <div>
          <h2 className="max-w-[16ch] text-[clamp(1.625rem,3.4vw,2.25rem)] font-semibold leading-tight tracking-tight">
            {CONTACT.title}
          </h2>
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/70">{CONTACT.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn border-white/25 text-white hover:border-white"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn border-white/25 text-white hover:border-white"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
