// A fixed column count keeps the grid exactly as wide as its container. An
// auto-fill track count would be resolved against max-content here and push
// the whole section past the viewport on narrow screens.
const GRID =
  "grid w-full min-w-0 max-w-[32rem] gap-[3px] grid-cols-[repeat(25,minmax(0,1fr))] sm:grid-cols-[repeat(40,minmax(0,1fr))]";

function DotGrid({ count, tone }) {
  return (
    <div aria-hidden="true" className={GRID}>
      {Array.from({ length: count }, (unused, index) => (
        <span key={index} className={`aspect-square rounded-[1px] ${tone}`} />
      ))}
    </div>
  );
}

function Row({ value, count, tone, valueTone }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-8 gap-y-4 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)]">
      <p
        className={`display min-w-0 text-[clamp(2.5rem,7vw,4rem)] leading-none [font-variant-numeric:tabular-nums] ${valueTone}`}
      >
        {value}
      </p>
      <DotGrid count={count} tone={tone} />
    </div>
  );
}

/**
 * One dot per module, at the same dot size in both rows, so the drop reads as
 * a change in mass rather than a change in scale. No legend by design.
 */
export default function ModuleReduction() {
  return (
    <figure className="my-14 sm:my-20">
      <Row value="375" count={375} tone="bg-ink/25" valueTone="text-ink" />

      <p
        aria-hidden="true"
        className="py-6 text-2xl leading-none text-ink-muted sm:pl-[2.25rem]"
      >
        &darr;
      </p>

      <Row value="18" count={18} tone="bg-accent" valueTone="text-accent" />
    </figure>
  );
}
