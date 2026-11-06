import Hero from "../components/Hero";
import FeaturedProject from "../components/FeaturedProject";
import ProjectList from "../components/ProjectList";
import Approach from "../components/Approach";
import Background from "../components/Background";
import ContactSection from "../components/ContactSection";
import { FEATURED, MORE_PROFESSIONAL, PERSONAL } from "../data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="work" className="shell py-12 sm:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">Selected work</h2>
          <p className="font-mono text-xs text-ink-muted">
            Client work · Conciergerie Cardin (Letahost &amp; Invest Malin) · 2025–2026
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {FEATURED.map((project) => (
            <FeaturedProject key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-16 space-y-14">
          <ProjectList title="More professional projects" projects={MORE_PROFESSIONAL} />
          <ProjectList title="Personal projects & experiments" projects={PERSONAL} />
        </div>
      </section>

      <Approach />
      <Background />
      <ContactSection />
    </>
  );
}
