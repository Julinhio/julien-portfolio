export default function About() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-2xl">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 mb-4">
        I'm Julien, a web developer with a passion for building beautiful and functional web applications. My background includes experience in frontend and backend development, UI/UX design, and a love for learning new technologies.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-2">Skills</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>React, Vite, JavaScript, TypeScript</li>
        <li>TailwindCSS, CSS3, HTML5</li>
        <li>Node.js, Express</li>
        <li>UI/UX Design</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
} 