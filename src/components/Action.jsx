// The transparent border keeps every variant on the same height.
const BASE =
  "inline-flex items-center justify-center rounded-sm border border-transparent px-6 py-3.5 text-[0.8125rem] font-medium uppercase tracking-label transition-colors duration-150";

const VARIANTS = {
  solid: "border-ink bg-ink text-paper hover:border-accent hover:bg-accent",
  outline: "border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
};

/**
 * Call to action. Renders an anchor when `href` is set, and a disabled button
 * when it isn't — so an action that has no destination yet stays honest
 * instead of pointing at a dead URL.
 */
export default function Action({ href, variant = "outline", external = false, children }) {
  const className = `${BASE} ${VARIANTS[variant]}`;

  if (!href) {
    return (
      <button
        type="button"
        disabled
        className={`${BASE} cursor-not-allowed border-ink/15 text-ink-muted`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}
