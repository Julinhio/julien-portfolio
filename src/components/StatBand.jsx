/**
 * The headline figures. Numerals dominate; the labels stay deliberately quiet.
 * Reversed column so the value sits on top while the pair keeps its
 * label-then-value reading order.
 */
export default function StatBand({ stats }) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt className="label mt-4 max-w-[14ch] text-ink-muted">{stat.label}</dt>
          <dd className="display text-[clamp(2.75rem,6vw,4rem)] leading-none [font-variant-numeric:tabular-nums]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
