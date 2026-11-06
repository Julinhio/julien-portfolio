import Link from "./Link";

/** Compact table of projects, each row linking to its page. */
export default function ProjectList({ title, projects }) {
  return (
    <div>
      <div className="flex items-baseline justify-between border-b border-ink-line pb-3">
        <h3 className="kicker text-ink-muted">{title}</h3>
        <span className="kicker hidden text-ink-muted sm:inline">Type</span>
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.slug} className="border-b border-ink-line">
            <Link
              to={`/projects/${project.slug}`}
              className="group grid gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_auto] sm:items-center"
            >
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9375rem] font-semibold group-hover:text-accent">
                {project.title}
              </span>
              <span className="text-sm leading-relaxed text-ink-muted">{project.listLine}</span>
              <span className="kicker flex items-center gap-2 text-ink-muted sm:justify-end">
                {project.type}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
