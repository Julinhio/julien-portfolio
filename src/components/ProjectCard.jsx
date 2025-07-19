export default function ProjectCard({ title = "Project Title", description = "Short project description.", link = "#" }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-1 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline mt-auto" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
} 