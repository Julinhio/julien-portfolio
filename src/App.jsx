import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import { usePath, useScrollOnPathChange } from "./lib/router";
import { getProject } from "./data/projects";

function resolve(path) {
  const normalized = path.replace(/\/+$/, "") || "/";
  if (normalized === "/") return <HomePage />;

  const match = normalized.match(/^\/projects\/([a-z0-9-]+)$/);
  const project = match && getProject(match[1]);
  return project ? <ProjectPage key={project.slug} project={project} /> : <NotFound />;
}

export default function App() {
  const path = usePath();
  useScrollOnPathChange(path);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{resolve(path)}</main>
      <Footer />
    </>
  );
}
