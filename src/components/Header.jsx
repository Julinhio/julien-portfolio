import Link from "./Link";

const NAV = [
  { label: "Work", to: "/#work" },
  { label: "Approach", to: "/#approach" },
  { label: "About", to: "/#background" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-line/70 bg-page/90 backdrop-blur">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 text-sm font-semibold">
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center rounded-md bg-ink font-mono text-[0.625rem] font-bold text-white"
          >
            JG
          </span>
          Julien Gaichet
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hidden rounded-md px-2.5 py-1.5 text-[0.8125rem] text-ink-muted transition-colors hover:text-ink sm:inline-flex"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn-accent px-3 py-1.5 text-[0.8125rem]">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
