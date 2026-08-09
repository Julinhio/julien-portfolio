import Section from "./Section";
import { PRINCIPLES } from "../data/principles";

export default function HowIWork() {
  return (
    <Section id="how-i-work" tone="ink">
      <h2 className="display max-w-[17ch] text-[clamp(2rem,5.5vw,4rem)]">
        How I keep systems understandable, reversible and reliable
      </h2>

      <ol className="mt-16 sm:mt-24">
        {PRINCIPLES.map((item, index) => (
          <li
            key={item.title}
            className="rule-inverted grid gap-x-10 gap-y-5 py-10 sm:py-14 md:grid-cols-[7rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <span
              aria-hidden="true"
              className="display block text-[clamp(2.75rem,7vw,4.75rem)] leading-none text-accent-soft [font-variant-numeric:tabular-nums]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="max-w-measure">
              <h3 className="display text-[clamp(1.375rem,3vw,2rem)]">
                {item.title}
              </h3>
              {/* Principle and example share one size and one colour. The example
                  is the evidence, so it must not read as a footnote to the rule. */}
              <p className="mt-5 max-w-[64ch] text-[1.0625rem] font-medium leading-relaxed text-paper-dim">
                {item.principle}
              </p>
              <p className="mt-4 max-w-[64ch] text-[1.0625rem] leading-relaxed text-paper-dim">
                {item.example}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
