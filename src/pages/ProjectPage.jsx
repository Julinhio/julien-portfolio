import { useEffect } from "react";
import Link from "../components/Link";
import { KIND_LABELS, PROJECTS } from "../data/projects";
import ProjectVisual from "../components/ProjectVisual";

function Block({ title, children }) {
  return (
    <section className="grid gap-x-10 gap-y-3 border-t border-ink-line py-10 md:grid-cols-[11rem_minmax(0,1fr)]">
      <h2 className="kicker pt-1 text-ink-muted">{title}</h2>
      <div className="max-w-[68ch]">{children}</div>
    </section>
  );
}

function Paragraphs({ items }) {
  return (
    <div className="prose-block text-[1rem] leading-relaxed text-ink-soft">
      {items.map((text) => (
        <p key={text.slice(0, 32)}>{text}</p>
      ))}
    </div>
  );
}

export default function ProjectPage({ project }) {
  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  useEffect(() => {
    document.title = `${project.title} · Julien Gaichet`;
    return () => {
      document.title = "Julien Gaichet · Process & automation builder";
    };
  }, [project]);

  return (
    <article className="shell pb-16 pt-10 sm:pt-14">
      <Link to="/#work" className="text-sm text-ink-muted hover:text-ink">
        <span aria-hidden="true">←</span> All work
      </Link>

      <header className="mt-8">
        <p className="kicker flex flex-wrap gap-x-2 text-accent">
          <span>{KIND_LABELS[project.kind]}</span>
          <span aria-hidden="true">·</span>
          <span>{project.type}</span>
        </p>
        <h1 className="mt-3 max-w-[22ch] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tightest">
          {project.title}
        </h1>
        <p className="mt-3 font-mono text-xs text-ink-muted">
          {project.org} · {project.period}
        </p>
        {project.summary && (
          <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-soft">{project.summary}</p>
        )}
      </header>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-line bg-ink-line lg:grid-cols-4">
        {project.results.map((result) => (
          <div key={result.label} className="flex flex-col gap-2 bg-white p-5">
            <dt className="text-xs leading-snug text-ink-muted">{result.label}</dt>
            <dd className="order-first text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-none tracking-tight [font-variant-numeric:tabular-nums]">
              {result.value}
            </dd>
          </div>
        ))}
      </dl>
      {project.resultsNote && <p className="mt-3 text-xs text-ink-muted">{project.resultsNote}</p>}

      {project.visual && project.visual.kind !== "stats" && (
        <div className="mt-8 rounded-xl border border-ink-line bg-panel p-6 sm:p-8">
          <div className="max-w-xl">
            <ProjectVisual visual={project.visual} />
          </div>
        </div>
      )}

      <div className="mt-12">
        <Block title="The problem">
          <Paragraphs items={project.problem} />
        </Block>
        <Block title="What I built">
          <Paragraphs items={project.solution} />
        </Block>
        <Block title="My role">
          <Paragraphs items={project.role} />
        </Block>

        {project.deepDives?.map((dive) => (
          <Block key={dive.title} title="Up close">
            <h3 className="mb-4 text-lg font-semibold tracking-tight">{dive.title}</h3>
            <Paragraphs items={dive.body} />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {dive.points.map((point) => (
                <li key={point.slice(0, 32)} className="border-l-2 border-ink pl-4 text-sm leading-relaxed text-ink-muted">
                  {point}
                </li>
              ))}
            </ul>
          </Block>
        ))}

        <Block title="Built with">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="chip py-1.5 text-[0.75rem]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            The tools inside this system, not a list of languages I write by hand. On coded projects I write the
            specs, review and ship; AI coding agents write most of the code.
          </p>
        </Block>

        <Block title="Status">
          <p className="text-[1rem] leading-relaxed text-ink-soft">{project.status}</p>
        </Block>
      </div>

      <nav aria-label="More projects" className="mt-6 flex flex-col gap-4 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/#work" className="btn-outline">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <Link to={`/projects/${next.slug}`} className="group text-right">
          <span className="kicker block text-ink-muted">Next project</span>
          <span className="mt-1 block text-base font-semibold group-hover:text-accent">
            {next.title} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </nav>

      <div className="mt-12 rounded-xl border border-ink-line bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="text-[0.9375rem] font-medium">Working on something similar?</p>
        <Link to="/#contact" className="btn-accent mt-4 sm:mt-0">
          Get in touch
        </Link>
      </div>
    </article>
  );
}
