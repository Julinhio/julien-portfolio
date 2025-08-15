import { useState, useEffect } from "react";
import { 
  ArrowLeft, Smartphone, Database, Zap, Camera, FileText, 
  Users, Shield, Clock, CheckCircle, Globe, Workflow,
  Play, Pause, RotateCcw, Monitor, Tablet, Upload,
  Settings, Bell, Eye, Download, Star, TrendingUp,
  Code, Bot, Cloud, Layers, Map, Target
} from "lucide-react";
// import { Link } from "react-router-dom";

const FicheLogementPage = () => {
  const [activeDemo, setActiveDemo] = useState("overview");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Perfect responsive interface that works flawlessly on phones, tablets, and desktop",
      color: "from-blue-500 to-cyan-500",
      stats: "100% responsive"
    },
    {
      icon: Camera,
      title: "Smart Media Upload",
      description: "Photos and videos upload directly to Google Drive with automated organization",
      color: "from-green-500 to-emerald-500",
      stats: "Zero failures"
    },
    {
      icon: Database,
      title: "Supabase Backend",
      description: "Secure authentication, real-time data sync, and role-based permissions",
      color: "from-purple-500 to-pink-500",
      stats: "Real-time sync"
    },
    {
      icon: Workflow,
      title: "Automation Engine",
      description: "Make.com workflows triggered by status changes, handling Drive organization and notifications",
      color: "from-orange-500 to-red-500",
      stats: "3 webhooks"
    },
    {
      icon: FileText,
      title: "PDF Generation",
      description: "Automatic generation of branded property and cleaning instruction PDFs",
      color: "from-indigo-500 to-purple-500",
      stats: "Instant PDFs"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Intelligent notifications when critical property issues are detected",
      color: "from-red-500 to-pink-500",
      stats: "Real-time alerts"
    }
  ];

  const techStack = [
    { name: "React + Vite", role: "Frontend Framework", color: "text-blue-400" },
    { name: "Tailwind CSS", role: "Styling System", color: "text-cyan-400" },
    { name: "Supabase", role: "Backend & Auth", color: "text-green-400" },
    { name: "Make.com", role: "Automation Platform", color: "text-purple-400" },
    { name: "Google Drive API", role: "File Storage", color: "text-orange-400" },
    { name: "Monday.com", role: "Project Management", color: "text-pink-400" }
  ];

  const workflow = [
    {
      step: 1,
      title: "Property Inspection",
      description: "Coordinator uses mobile app on-site to fill 23 sections with photos/videos",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2, 
      title: "Real-time Upload",
      description: "Media files upload to Google Drive, organized automatically by property",
      icon: Upload,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Data Processing", 
      description: "Form data saved to Supabase with role-based access and offline sync",
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 4,
      title: "PDF Generation",
      description: "Branded property sheets and cleaning instructions generated automatically",
      icon: FileText,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 5,
      title: "Automation Triggers",
      description: "Make.com workflows organize files, update Monday.com, send notifications",
      icon: Zap,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const results = [
    { metric: "15hrs/week", label: "Time saved", icon: Clock },
    { metric: "100%", label: "Offline capability", icon: Shield },
    { metric: "0", label: "Upload failures", icon: CheckCircle },
    { metric: "23", label: "Form sections", icon: Map }
  ];

  // Auto-cycle through features
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentFeature(prev => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, features.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <a 
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </a>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-blue-300 text-sm font-medium">Full-Stack Solution</span>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                  Fiche Logement
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Complete property inspection ecosystem that replaced an outdated Jotform workflow. 
              From <span className="text-blue-400 font-bold">mobile data collection</span> to 
              <span className="text-green-400 font-bold"> automated Drive organization</span> and 
              <span className="text-purple-400 font-bold"> real-time notifications</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{result.metric}</div>
                    <div className="text-xs text-gray-400">{result.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://fiche-logement.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 inline-flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href="https://github.com/Julinhio/fiche-logement_ia-githubcopilot-v1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>

          {/* Right: Feature Showcase */}
          <div className="relative">
            <div className="bg-gray-800/30 backdrop-blur border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-blue-300">Key Features</h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = index === currentFeature;
                  return (
                    <div
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30' 
                          : 'bg-gray-700/30 hover:bg-gray-600/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gray-600'}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-1 ${isActive ? 'text-blue-300' : 'text-gray-300'}`}>
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-400 mb-2">{feature.description}</p>
                          <span className="text-xs font-medium text-blue-400">{feature.stats}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            End-to-End Workflow
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From property inspection to automated file organization, every step is designed for efficiency and reliability.
          </p>
        </div>

        <div className="relative">
          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent transform translate-x-4"></div>
                  )}
                  
                  <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700/40 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-900/30 rounded-lg p-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div>
                  <div className={`font-semibold ${tech.color}`}>{tech.name}</div>
                  <div className="text-sm text-gray-400">{tech.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">System Architecture</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">23-Section Form Structure</div>
                  <div className="text-sm text-gray-400">Complete property documentation with conditional logic</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Role-Based Access Control</div>
                  <div className="text-sm text-gray-400">Coordinators, Admins, and Super Admins with proper permissions</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Webhook Automation System</div>
                  <div className="text-sm text-gray-400">3 separate triggers for Drive organization, PDF sync, and alerts</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Offline-First Design</div>
                  <div className="text-sm text-gray-400">Works without internet, syncs when connection restored</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Business Impact</h3>
            <div className="space-y-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Time Efficiency</span>
                  <span className="text-green-400 font-bold">+400%</span>
                </div>
                <div className="text-sm text-gray-400">From hours of manual work to minutes of automated processing</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Data Accuracy</span>
                  <span className="text-blue-400 font-bold">100%</span>
                </div>
                <div className="text-sm text-gray-400">Eliminated manual transcription errors and lost files</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Mobile Adoption</span>
                  <span className="text-purple-400 font-bold">100%</span>
                </div>
                <div className="text-sm text-gray-400">All coordinators successfully transitioned to mobile-first workflow</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Need a Similar Solution?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            This project showcases full-stack development, automation design, and mobile-first UX. 
            I can build custom solutions that transform your business processes just like this one did.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/talk"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Discuss Your Project
            </a>
            <a
              href="/projects"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheLogementPage;