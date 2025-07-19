import { useState } from "react";
import { ExternalLink, Github, Play, Zap, Database, Bot, Code, Workflow, Eye, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Lead Qualification System",
    description: "End-to-end automation that scores, routes, and nurtures leads using AI analysis and multi-channel workflows.",
    category: "automation",
    tech: ["Make.com", "OpenAI GPT-4", "Supabase", "Webhooks"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { saved: "40hrs/week", conversion: "+65%", leads: "2.3k+" },
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI Content Pipeline",
    description: "Automated content creation, SEO optimization, and multi-platform publishing with AI-powered quality control.",
    category: "ai",
    tech: ["Make.com", "Claude API", "Airtable", "Buffer API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    status: "Beta",
    metrics: { posts: "500+", time: "85% faster", engagement: "+120%" },
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Customer Support Automation",
    description: "Intelligent ticket routing, auto-responses, and escalation system with sentiment analysis.",
    category: "automation",
    tech: ["Make.com", "Supabase", "React", "OpenAI"],
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { response: "90% faster", satisfaction: "4.8/5", tickets: "15k+" },
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "E-commerce Order Orchestrator",
    description: "Full order lifecycle automation from purchase to delivery with real-time inventory sync.",
    category: "fullstack",
    tech: ["React", "Node.js", "Supabase", "Stripe", "Make.com"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { orders: "10k+", errors: "-95%", processing: "3x faster" },
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Data Migration Engine",
    description: "No-code solution for complex data transformations and migrations between different systems.",
    category: "tools",
    tech: ["Airtable", "Make.com", "Custom APIs", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    status: "Tool",
    metrics: { records: "1M+", accuracy: "99.8%", time: "10x faster" },
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "AI Sales Assistant",
    description: "Intelligent CRM that analyzes conversations, suggests next actions, and automates follow-ups.",
    category: "ai",
    tech: ["OpenAI", "Make.com", "Supabase", "React"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    status: "Demo",
    metrics: { deals: "+45%", time: "60% less", accuracy: "92%" },
    demoUrl: "#",
    githubUrl: "#"
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: Eye },
  { id: "automation", name: "Automation", icon: Workflow },
  { id: "ai", name: "AI Integration", icon: Bot },
  { id: "fullstack", name: "Full-Stack", icon: Code },
  { id: "tools", name: "Tools", icon: Zap }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Beta": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Demo": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Tool": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real automation solutions I've built for businesses. From AI integrations to full-stack apps, 
            each project solves actual problems and saves real time.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${
                project.featured ? 'ring-1 ring-blue-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-yellow-300 font-medium">Featured</span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Action Buttons */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <button className="bg-gray-900/80 backdrop-blur p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Play className="w-4 h-4 text-white" />
                  </button>
                  <button className="bg-gray-900/80 backdrop-blur p-2 rounded-full hover:bg-gray-700 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-blue-300 font-bold text-sm">{value}</div>
                      <div className="text-gray-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600/50">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Got a Project in Mind?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's build something amazing together. I specialize in turning complex workflows into elegant automation solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}