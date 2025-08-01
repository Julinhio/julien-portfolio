import { Rocket, Bot, Code2, ArrowRight, Zap, Database, Cpu, Terminal, Languages, Brain, Waves, Globe2, TrendingUp, Users, Clock, Play } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentStory, setCurrentStory] = useState(0);

  const journeyStories = [
    { text: "Physicist turned linguist turned automation wizard", icon: Brain },
    { text: "From tsunami models to Make.com workflows", icon: Waves },
    { text: "10 years in languages, now building AI systems", icon: Languages },
    { text: "Embracing AI instead of competing against it", icon: Bot }
  ];

  const liveProjects = [
    { 
      name: "Fiche Logement", 
      status: "Mobile inspection app with photo & video upload/sync",
      tech: "Cursor + Supabase + Make",
      impact: "15hrs/week saved"
    },
    { 
      name: "Mon Équipe IA", 
      status: "4 specialized AI assistants for property teams",
      tech: "React + n8n + OpenAI",
      impact: "24/7 expert advice"
    },
    { 
      name: "ProposalFlow", 
      status: "AI proposals generated during discovery calls",
      tech: "Make + GPT-4 + Webhooks",
      impact: "Minutes not hours"
    }
  ];

  const skills = [
    { 
      icon: Bot, 
      label: "AI Integration", 
      desc: "GPT-4, Claude APIs & Smart Workflows",
      projects: "6 live systems"
    },
    { 
      icon: Zap, 
      label: "Make.com Expert", 
      desc: "Level 4 Certified Partner", 
      projects: "50+ automations"
    },
    { 
      icon: Code2, 
      label: "Full-Stack Dev", 
      desc: "React, Supabase, Mobile-First", 
      projects: "Custom apps"
    },
    { 
      icon: Languages, 
      label: "Communication", 
      desc: "10 years language industry experience", 
      projects: "Global teams"
    }
  ];

  // Enhanced mouse tracking
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Story rotation
  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentString = journeyStories[currentIndex].text;
      
      if (!isDeleting && currentChar <= currentString.length) {
        setTypedText(currentString.substring(0, currentChar));
        currentChar++;
      } else if (isDeleting && currentChar >= 0) {
        setTypedText(currentString.substring(0, currentChar));
        currentChar--;
      }
      
      if (currentChar === currentString.length + 1) {
        setTimeout(() => isDeleting = true, 2500);
      }
      
      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % journeyStories.length;
        setCurrentStory(currentIndex);
      }
    };
    
    const interval = setInterval(typeEffect, isDeleting ? 50 : 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
      {/* Dynamic background elements based on mouse position */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${20 + mousePosition.x * 30}%`,
            top: `${20 + mousePosition.y * 20}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1500"
          style={{
            right: `${10 + mousePosition.x * 20}%`,
            bottom: `${10 + mousePosition.y * 30}%`,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl transition-all duration-700"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>


          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Julien Gaichet
          </h1>
          
          {/* Dynamic story with icon */}
          <div className="flex items-center justify-center gap-3 mb-8 min-h-[3rem]">
            {journeyStories[currentStory] && (
              <>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 rounded-lg">
                  {React.createElement(journeyStories[currentStory].icon, { className: "w-5 h-5 text-blue-300" })}
                </div>
                <div className="text-lg md:text-xl text-gray-300 font-mono">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              </>
            )}
          </div>

          {/* Personal elevator pitch */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            I spent 10 years building a language consulting business, then saw AI coming and made a strategic pivot. 
            Now I create intelligent automation systems that solve real business problems. From mobile inspection apps 
            to AI-powered proposal generators, I turn manual processes into scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              See Real Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/talk"
              className="group inline-flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Talk to My AI
            </a>
          </div>
        </div>

        {/* Live Projects Showcase */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Currently Running
            </h2>
            <p className="text-gray-400">Real automation systems I've built and deployed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">{project.name}</h3>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-gray-400 mb-3">{project.status}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-blue-300">{project.tech}</span>
                  <span className="text-green-300 font-medium">{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills with real context */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                  <p className="text-sm text-gray-400 mb-2">{skill.desc}</p>
                  <span className="text-xs text-blue-300 font-medium">{skill.projects}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-sm text-gray-500">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm text-gray-500">Automations Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-sm text-gray-500">Hours Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">L4</div>
              <div className="text-sm text-gray-500">Make.com Certified</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Automate Your Business?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I combine business experience with technical expertise to build automation systems that actually work. 
              Let's discuss how I can solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                My Story
              </a>
              <a
                href="/talk"
                className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Bot className="w-5 h-5" />
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}