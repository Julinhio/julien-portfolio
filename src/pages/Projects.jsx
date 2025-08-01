import { useState } from "react";
import { ExternalLink, Github, Play, Zap, Database, Bot, Code, Workflow, Eye, Star, FileText, Users, Smartphone, Brain, Shield, Calculator } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fiche Logement",
    description: "Rebuilt old Jotform + Monday.com inspection flow into a mobile-first, database-driven app with offline capability and automated PDF generation.",
    category: "fullstack",
    tech: ["React", "Supabase", "Airtable", "Make.com", "PDF Generation"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { 
      saved: "15hrs/week", 
      offline: "100% capable", 
      uploads: "Zero failures" 
    },
    demoUrl: null,
    githubUrl: null,
    featured: true,
    details: "Mobile-first inspection app with conditional logic, real-time photo/video uploads to Google Drive, and automated PDF generation. Handles offline scenarios with reliable sync.",
    highlights: [
      "Mobile-first responsive design",
      "Offline-capable with sync",
      "Automated media migration to Google Drive",
      "On-the-fly PDF generation",
      "Zero ghost bundles"
    ]
  },
  {
    id: 2,
    title: "Mon Équipe IA",
    description: "AI-powered team of 4 specialized assistants for property management teams with secure authentication and conversation storage.",
    category: "ai",
    tech: ["React", "Supabase", "Vercel", "n8n", "OpenAI", "Webhooks"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { 
      agents: "4 specialists", 
      teams: "Property mgmt", 
      storage: "Full history" 
    },
    demoUrl: null,
    githubUrl: null,
    featured: true,
    details: "Specialized AI assistant team with Legal, Negotiation, Education, and General agents. Each agent is trained for specific property management tasks.",
    highlights: [
      "4 specialized AI agents",
      "Secure Supabase authentication",
      "Complete conversation logging",
      "Context-aware responses",
      "Property management focused"
    ]
  },
  {
    id: 3,
    title: "ProposalFlow",
    description: "AI-powered proposal generator that creates polished, customized proposals right after discovery calls using structured forms and GPT-4.",
    category: "ai",
    tech: ["Make.com", "GPT-4", "Tally Forms", "Google Slides", "PDF Generation", "Gmail API"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { 
      time: "Minutes not hours", 
      consistency: "100% branded", 
      conversion: "Immediate" 
    },
    demoUrl: null,
    githubUrl: null,
    featured: true,
    details: "Complete proposal automation system that transforms discovery call notes into professional, branded proposals. Agents fill a form during client meetings, triggering AI-powered content generation and automatic delivery.",
    highlights: [
      "Real-time form filling during calls",
      "GPT-4 powered content generation",
      "Custom branded Google Slides templates",
      "Automatic PDF conversion",
      "Direct client delivery via email",
      "CRM integration and tracking"
    ]
  },
  {
    id: 4,
    title: "Industry News - LinkedIn Posts",
    description: "Automated content curation and LinkedIn posting system for industry news and updates with engagement tracking.",
    category: "automation",
    tech: ["Make.com", "LinkedIn API", "RSS Feeds", "Content Curation"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { 
      posts: "Daily", 
      engagement: "+120%", 
      automation: "100%" 
    },
    demoUrl: null,
    githubUrl: null,
    featured: false,
    details: "Automated content pipeline that curates industry news and publishes engaging LinkedIn posts with optimal timing.",
    highlights: [
      "RSS feed monitoring",
      "Content curation logic",
      "Automated LinkedIn posting",
      "Engagement optimization",
      "Scheduling intelligence"
    ]
  },
  {
    id: 5,
    title: "Flowerce - AI Customer Support",
    description: "AI-powered customer support system with intelligent ticket routing, auto-responses, and escalation protocols.",
    category: "ai",
    tech: ["Make.com", "OpenAI", "Ticket Routing", "Knowledge Base", "API"],
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { 
      response: "Instant", 
      accuracy: "95%", 
      escalation: "Smart" 
    },
    demoUrl: null,
    githubUrl: null,
    featured: false,
    details: "Intelligent customer support automation with AI-powered responses and smart escalation to human agents when needed.",
    highlights: [
      "AI-powered responses",
      "Smart ticket routing",
      "Knowledge base integration",
      "Escalation protocols",
      "Multi-channel support"
    ]
  },
  {
    id: 6,
    title: "Smart Email Auto-Responder",
    description: "Intelligent email automation with context-aware responses and automatic follow-up sequences based on customer behavior.",
    category: "automation",
    tech: ["Make.com", "Email Processing", "NLP", "Customer Journey", "Analytics"],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
    status: "Live",
    metrics: { 
      response: "24/7", 
      relevance: "Context-aware", 
      followup: "Automated" 
    },
    demoUrl: null,
    githubUrl: null,
    featured: false,
    details: "Smart email responder that understands context and customer intent to provide relevant responses and trigger appropriate follow-up sequences.",
    highlights: [
      "Context-aware responses",
      "Automated follow-up sequences",
      "Customer journey mapping",
      "Intent recognition",
      "Performance analytics"
    ]
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: Eye },
  { id: "fullstack", name: "Full-Stack Apps", icon: Code },
  { id: "ai", name: "AI Integration", icon: Bot },
  { id: "automation", name: "Automation", icon: Workflow }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Certified": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Demo": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "ai": return Brain;
      case "automation": return Zap;
      case "fullstack": return Code;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Real Automation Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Actual solutions I've built for businesses. From mobile apps to AI assistants, 
            each project solves real problems and delivers measurable results.
          </p>
          
          {/* Quick stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">6+</div>
              <div className="text-sm text-gray-500">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-500">Hours Saved Weekly</div>
            </div>
          </div>
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
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const isExpanded = expandedProject === project.id;
            
            return (
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
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur p-2 rounded-full">
                    <CategoryIcon className="w-4 h-4 text-blue-400" />
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
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
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

                  {/* Expand/Details Button */}
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="w-full bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600/50 mb-4"
                  >
                    {isExpanded ? "Hide Details" : "View Details"}
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-gray-700/30">
                      <p className="text-gray-300 text-sm mb-3">{project.details}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-blue-300">Key Features:</h4>
                        {project.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            <span className="text-xs text-gray-400">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Note */}
                  <div className="text-center">
                    <span className="text-xs text-gray-500">
                      {project.demoUrl ? "Live demo available" : "Internal/Private project"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Automate Your Business?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              These are just a few examples of what's possible. Let's discuss how I can build custom automation solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/talk"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Discuss Your Project
              </a>
              <a
                href="/about"
                className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}