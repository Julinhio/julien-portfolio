import Link from "./Link";
import { HERO, LINKS, STATS } from "../data/site";

export default function Hero() {
  return (
    <section className="shell pb-14 pt-16 sm:pb-20 sm:pt-24">
      <p className="kicker flex items-center gap-2 text-ink-muted">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ok" />
        {HERO.status}
      </p>

      <h1 className="mt-6 max-w-[20ch] text-[clamp(2.25rem,6.2vw,4.25rem)] font-semibold leading-[1.02] tracking-tightest">
        {HERO.title}
        <span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-soft">{HERO.lead}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/#work" className="btn-solid">
          See selected work <span aria-hidden="true">↓</span>
        </Link>
        <a href={LINKS.cv} download={LINKS.cvFileName} className="btn-outline">
          Download CV <span className="font-mono text-[0.6875rem] text-ink-muted">PDF</span>
        </a>
      </div>

      <dl className="mt-14 grid grid-cols-2 border-y border-ink-line sm:mt-20 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={[
              "flex flex-col gap-2 py-6 pr-4",
              index % 2 === 1 ? "border-l border-ink-line pl-4" : "",
              index >= 2 ? "border-t border-ink-line lg:border-t-0" : "",
              index === 2 ? "lg:border-l lg:pl-4" : "",
            ].join(" ")}
          >
            <dt className="max-w-[24ch] text-xs leading-snug text-ink-muted">
              <Link to={`/projects/${stat.project}`} className="hover:text-ink hover:underline">
                {stat.label}
              </Link>
            </dt>
            <dd className="order-first text-[clamp(1.75rem,3.6vw,2.25rem)] font-semibold leading-none tracking-tight [font-variant-numeric:tabular-nums]">
              {stat.value}
              {stat.suffix && <span className="text-ink-muted">{stat.suffix}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
