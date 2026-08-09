const CHIP =
  "inline-flex items-center rounded-sm px-3 py-2 text-[0.8125rem] leading-tight";

function Row({ label, steps, emphasis }) {
  return (
    <div className="rule grid gap-x-8 gap-y-4 py-8 md:grid-cols-[7rem_minmax(0,1fr)]">
      <p className="label pt-2 text-ink-muted">{label}</p>

      <ol className="flex flex-wrap items-stretch gap-y-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-stretch">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="flex items-center px-1.5 text-ink-muted sm:px-2"
              >
                &rarr;
              </span>
            )}
            <span
              className={
                emphasis
                  ? `${CHIP} bg-ink font-medium text-paper`
                  : `${CHIP} border border-ink-line text-ink-muted`
              }
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Before / after of the same visit. The point is the density difference
 * between the two rows, so the second row is both longer and heavier.
 */
export default function FlowDiagram({ before, after }) {
  return (
    <div>
      <Row label="Before" steps={before} />
      <Row label="After" steps={after} emphasis />
    </div>
  );
}
