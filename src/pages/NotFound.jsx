import Link from "../components/Link";

export default function NotFound() {
  return (
    <section className="shell py-24 sm:py-32">
      <p className="kicker text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn’t exist.</h1>
      <p className="mt-4 text-ink-muted">The link may be out of date. The projects are all listed on the home page.</p>
      <Link to="/#work" className="btn-solid mt-8">
        See all projects
      </Link>
    </section>
  );
}
