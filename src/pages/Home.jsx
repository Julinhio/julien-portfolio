import { Rocket, Bot, Code2, ArrowRight, Zap, Database, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { icon: Bot, label: "AI Integration", desc: "GPT APIs & Smart Automation" },
    { icon: Database, label: "No-Code Tools", desc: "Make.com, Supabase, Airtable" },
    { icon: Cpu, label: "Full-Stack", desc: "React, Node.js, APIs" },
    { icon: Zap, label: "Automation", desc: "Workflow Design & Optimization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div 
          className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Available for Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Julien Automata
          </h1>
          
          {/* Subtitle with typewriter effect */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="font-mono">AI Automation Specialist</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            I design and build intelligent automation systems using AI, no-code tools, and modern web technologies. 
            Turning manual processes into smart, scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/ai"
              className="group inline-flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Chat with My AI
            </a>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/40 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.label}</h3>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Work Preview */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-4 text-white">Latest Experiments</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Prototypes, automations, and AI integrations I've been building lately
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "GPT Workflow Automator", tech: "Make.com + OpenAI", status: "Live" },
              { title: "Smart Data Pipeline", tech: "Supabase + React", status: "Beta" },
              { title: "No-Code Dashboard", tech: "Airtable + Custom API", status: "Demo" }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">{project.status}</span>
                </div>
                <p className="text-sm text-gray-400">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action */}
        <div className="fixed bottom-8 right-8 z-20">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 group">
            <Code2 className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}