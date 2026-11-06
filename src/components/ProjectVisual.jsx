/**
 * The right-hand panel of a featured project: a small diagram of how the
 * system works, or its key figures. Shapes are described in projects.js.
 */

function Node({ label, tag, ai = false, dark = false }) {
  const tone = dark
    ? "border-ink bg-ink text-white"
    : ai
      ? "border-accent/60 bg-white text-ink"
      : "border-ink-line bg-white text-ink";

  return (
    <div className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-[0.8125rem] ${tone}`}>
      <span>{label}</span>
      {tag && (
        <span
          className={`shrink-0 font-mono text-[0.625rem] uppercase tracking-wide ${
            dark ? "text-white/60" : ai ? "text-accent" : "text-ink-muted"
          }`}
        >
          {tag}
        </span>
      )}
    </div>
  );
}

function Pipeline({ visual }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Node label={visual.source} />
        <span aria-hidden="true" className="h-px w-5 bg-ink/40" />
        <span className="rounded-md bg-ink px-2.5 py-1.5 text-[0.75rem] font-medium text-white">
          {visual.target}
        </span>
      </div>
      <ul className="mt-3 space-y-2 border-l border-ink/20 pl-4">
        {visual.steps.map((step) => (
          <li key={step.label}>
            <Node {...step} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stats({ visual }) {
  return (
    <dl className="grid grid-cols-2 gap-2.5">
      {visual.tiles.map((tile) => (
        <div key={tile.label} className="flex flex-col gap-1.5 rounded-lg border border-ink-line bg-white p-4">
          <dt className="text-xs leading-snug text-ink-muted">{tile.label}</dt>
          <dd className="order-first text-2xl font-semibold leading-none tracking-tight [font-variant-numeric:tabular-nums]">
            {tile.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Merge({ visual }) {
  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        {visual.inputs.map((input) => (
          <Node key={input.label} {...input} />
        ))}
      </div>
      <Node label={visual.core.label} tag={visual.core.tag} dark />
      <div className="grid grid-cols-3 gap-2.5">
        {visual.outputs.map((output) => (
          <Node key={output.label} {...output} />
        ))}
      </div>
    </div>
  );
}

const KINDS = { pipeline: Pipeline, stats: Stats, merge: Merge };

export default function ProjectVisual({ visual }) {
  const Shape = KINDS[visual.kind];
  return (
    <figure className="w-full">
      {visual.caption && <figcaption className="kicker mb-4 text-ink-muted">{visual.caption}</figcaption>}
      <Shape visual={visual} />
    </figure>
  );
}
