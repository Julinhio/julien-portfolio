import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Portfolio Website", description: "A personal portfolio built with React, Vite, and Tailwind.", link: "#" },
  { title: "AI Chatbot", description: "Conversational AI assistant for my site.", link: "#" },
  { title: "Open Source Contribution", description: "Various PRs to open source projects.", link: "#" },
  { title: "Design System", description: "Reusable UI components and styles.", link: "#" },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
} 