import Action from "./Action";
import { LINKS } from "../data/links";

export default function Hero() {
  return (
    <section className="flex min-h-[88svh] items-center bg-paper pb-24 pt-24 sm:pb-32 sm:pt-28 lg:pb-40">
      <div className="shell">
        <h1 className="display max-w-[15ch] text-[clamp(2.5rem,8.5vw,7rem)]">
          Operations{" "}
          <span className="font-normal italic text-accent">&amp;</span> Automation
          Specialist
        </h1>

        <p className="mt-8 max-w-[42ch] text-[clamp(1.0625rem,2.2vw,1.375rem)] font-medium leading-snug text-ink sm:mt-10">
          Executive-facing operations, AI workflows &amp; automation across APAC and
          Europe
        </p>

        <p className="mt-6 max-w-[50ch] font-display text-[clamp(1rem,1.7vw,1.1875rem)] leading-relaxed text-ink-muted">
          I turn ambiguous business needs into structured workflows,
          decision-ready systems, and reliable operational tools.
        </p>

        <div className="mt-12 flex flex-wrap gap-3 sm:mt-14 sm:gap-4">
          <Action href="#selected-work" variant="solid">
            View selected work
          </Action>
          <Action href={LINKS.resume}>Download resume</Action>
          <Action href={LINKS.linkedin} external>
            LinkedIn
          </Action>
        </div>
      </div>
    </section>
  );
}
