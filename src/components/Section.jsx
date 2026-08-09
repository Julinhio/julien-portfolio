/**
 * Page section primitive: vertical rhythm, reading shell, and surface tone.
 * `tone="ink"` flips the section to the inverted surface.
 */
export default function Section({ id, tone = "paper", className = "", children }) {
  const isInk = tone === "ink";

  return (
    <section
      id={id}
      className={[
        isInk ? "surface-ink bg-ink text-paper" : "bg-paper text-ink",
        "py-24 sm:py-32 lg:py-44",
        className,
      ].join(" ")}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
