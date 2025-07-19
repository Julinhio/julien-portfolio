export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center py-12">
      <img
        src="https://avatars.githubusercontent.com/u/your-avatar.png"
        alt="Julien Avatar"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-blue-200 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Julien 👋</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Welcome to my portfolio! I'm a passionate developer focused on building interactive, user-friendly web experiences. Explore my projects, learn about my background, or chat with my AI assistant.
      </p>
      <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">See My Projects</a>
    </section>
  );
} 