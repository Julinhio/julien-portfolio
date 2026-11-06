import { PRINCIPLES, STACK } from "../data/site";

export default function Approach() {
  return (
    <section id="approach" className="shell py-16 sm:py-24">
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">How I work</h2>

      <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
        {PRINCIPLES.map((item, index) => (
          <li key={item.title} className="border-t-2 border-ink pt-5">
            <span className="kicker text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="card mt-14 p-6 sm:p-8">
        <h3 className="kicker text-ink-muted">What the projects run on</h3>
        <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-ink-soft">{STACK.intro}</p>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STACK.groups.map((group) => (
            <div key={group.title}>
              <h4 className="kicker text-ink-muted">{group.title}</h4>
              <ul className="mt-3 space-y-1.5 text-[0.8125rem] text-ink">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
