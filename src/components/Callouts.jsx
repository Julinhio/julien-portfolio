/**
 * Short salient points sitting next to a deep dive. Deliberately not prose:
 * each one leads with its claim, then explains it in a line or two.
 * Ruled rather than boxed, so a set of two doesn't leave a hole in the grid.
 */
export default function Callouts({ items }) {
  const columns =
    items.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <ul className={`mt-12 grid gap-x-8 gap-y-9 sm:mt-14 ${columns}`}>
      {items.map((item) => (
        <li key={item.lead} className="border-t-2 border-ink pt-5">
          <p className="text-[0.9375rem] font-semibold leading-snug text-ink">
            {item.lead}
          </p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
