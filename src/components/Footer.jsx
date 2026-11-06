import { LINKS } from "../data/site";

export default function Footer() {
  return (
    <footer className="shell flex flex-col gap-3 py-10 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Julien Gaichet · Remote</p>
      <div className="flex items-center gap-5">
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-ink">
          LinkedIn ↗
        </a>
        <a href={LINKS.github} target="_blank" rel="noreferrer noopener" className="hover:text-ink">
          GitHub ↗
        </a>
        <span className="font-mono">Built with APIs, not templates.</span>
      </div>
    </footer>
  );
}
