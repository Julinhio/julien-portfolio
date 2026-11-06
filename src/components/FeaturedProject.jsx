import Link from "./Link";
import ProjectVisual from "./ProjectVisual";

export default function FeaturedProject({ project }) {
  const href = `/projects/${project.slug}`;

  return (
    <article className="card grid overflow-hidden lg:grid-cols-2">
      <div className="p-6 sm:p-8">
        <p className="kicker text-accent">
          {String(project.featured).padStart(2, "0")} · {project.type}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-[1.375rem]">
          <Link to={href} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs text-ink-muted">{project.org}</p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{project.summary}</p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-ink-muted" />
              {item}
            </li>
          ))}
        </ul>

        <ul aria-label="Main tools" className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <Link to={href} className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent">
          Read the case study <span aria-hidden="true" className="text-accent">→</span>
        </Link>
      </div>

      <div className="flex items-center border-t border-ink-line bg-panel p-6 sm:p-8 lg:border-l lg:border-t-0">
        <ProjectVisual visual={project.visual} />
      </div>
    </article>
  );
}
