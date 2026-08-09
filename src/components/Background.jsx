import Section from "./Section";

export default function Background() {
  return (
    <Section id="background">
      <h2 className="display text-[clamp(2rem,5.5vw,4rem)]">Background</h2>

      {/* Long-form copy is set in the sans face at a single ink value. The
          display serif is reserved for headings and short lead lines: its
          hairlines are thin enough that subpixel rendering tints them, which
          makes running text look unevenly coloured. */}
      <p className="mt-10 max-w-[58ch] text-[clamp(1.125rem,2.2vw,1.375rem)] leading-[1.55] text-ink sm:mt-14">
        Before moving into operations and automation, I spent 12 years as a French
        linguist and quality reviewer on international accounts, working across
        strict processes, confidential content, client escalations and distributed
        teams. That background still shapes how I document, communicate and
        approach quality today.
      </p>

      <p className="label mt-12 text-ink-muted sm:mt-16">
        Ho Chi Minh City · GMT+7 · Remote across APAC / Europe
      </p>
    </Section>
  );
}
