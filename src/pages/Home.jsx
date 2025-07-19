import { Rocket, Bot, Code2, Hand } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-[calc(100vh-4rem)] px-6 flex flex-col items-center justify-center text-center">
      {/* Avatar */}
      <img
        src="https://i.pravatar.cc/150?img=32"
        alt="Julien Avatar"
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-6 hover:scale-105 transition"
      />

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center gap-2">
        Hi, I'm Julien <Hand className="text-yellow-400 w-7 h-7" />
      </h1>

      {/* Tagline */}
      <p className="max-w-xl text-lg sm:text-xl text-gray-300 leading-relaxed">
        I craft automations, build AI-powered tools, and create smooth user
        experiences for modern web apps. Explore my work, background, and meet
        my virtual assistant.
      </p>

      {/* CTA */}
      <a
        href="/projects"
        className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow transition"
      >
        <Rocket className="w-5 h-5" />
        See My Projects
      </a>

      {/* Icons Row */}
      <div className="mt-10 flex gap-10 text-gray-400">
        <div className="flex flex-col items-center hover:text-white transition">
          <Code2 className="w-6 h-6 mb-1" />
          <span className="text-sm">Developer</span>
        </div>
        <div className="flex flex-col items-center hover:text-white transition">
          <Bot className="w-6 h-6 mb-1" />
          <span className="text-sm">AI Builder</span>
        </div>
        <div className="flex flex-col items-center hover:text-white transition">
          <Rocket className="w-6 h-6 mb-1" />
          <span className="text-sm">Automator</span>
        </div>
      </div>
    </div>
  );
}
