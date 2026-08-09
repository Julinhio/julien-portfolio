/**
 * The investigation, in order. Reads as a trail: a marker per step, each one
 * short, the rule running between them.
 */
export default function Timeline({ steps }) {
  return (
    <ol className="mt-12 sm:mt-14">
      {steps.map((step, index) => (
        <li
          key={step.label}
          className="relative grid gap-x-8 gap-y-3 border-l border-ink-line pb-10 pl-8 last:border-transparent last:pb-0 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-10"
        >
          <span
            aria-hidden="true"
            className={`absolute -left-[0.3125rem] top-[0.4375rem] h-[0.625rem] w-[0.625rem] rounded-full ${
              index === steps.length - 1 ? "bg-accent" : "bg-ink"
            }`}
          />
          <p className="label pt-1 text-ink-muted">{step.label}</p>
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
