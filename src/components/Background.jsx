import { BACKGROUND, INTRO } from "../data/site";

export default function Background() {
  return (
    <section id="background" className="shell py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">About me</h2>
          <div className="prose-block mt-6 text-[0.9375rem] leading-relaxed text-ink-soft">
            {INTRO.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="kicker mt-8 text-ink-muted">
            Remote · {BACKGROUND.languages.join(" · ")}
          </p>
        </div>

        <ol aria-label="Career" className="lg:pt-2">
          {BACKGROUND.timeline.map((entry) => (
            <li
              key={entry.period}
              className="grid gap-x-8 gap-y-1 border-t border-ink-line py-6 sm:grid-cols-[7rem_minmax(0,1fr)]"
            >
              <span className="font-mono text-xs text-ink-muted">{entry.period}</span>
              <div>
                <h3 className="text-[0.9375rem] font-semibold">{entry.role}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
