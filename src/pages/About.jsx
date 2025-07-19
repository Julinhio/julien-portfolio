import { useState, useEffect } from "react";
import { 
  Brain, Code, Zap, Database, Bot, Rocket, Coffee, Globe, 
  MapPin, Calendar, Trophy, Target, Users, Clock, 
  ArrowRight, Download, Mail, Linkedin, Github 
} from "lucide-react";

const skills = [
  { name: "AI Integration", level: 95, icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "Make.com Automation", level: 98, icon: Zap, color: "from-blue-500 to-cyan-500" },
  { name: "React Development", level: 88, icon: Code, color: "from-green-500 to-emerald-500" },
  { name: "Supabase", level: 92, icon: Database, color: "from-orange-500 to-red-500" },
  { name: "No-Code Solutions", level: 96, icon: Bot, color: "from-yellow-500 to-orange-500" },
  { name: "API Integration", level: 90, icon: Globe, color: "from-indigo-500 to-purple-500" }
];

const timeline = [
  {
    year: "2024",
    title: "AI Automation Specialist",
    company: "Letahost & Invest Malin",
    description: "Leading automation initiatives, building AI-powered workflows, and creating no-code solutions that save 100+ hours per week across teams.",
    tech: ["Make.com", "OpenAI", "Claude", "Supabase", "React"],
    highlight: true
  },
  {
    year: "2023",
    title: "Career Pivot to Tech",
    company: "Self-Learning Journey",
    description: "Intensive transition from linguistics to tech. Built 15+ automation projects, mastered modern web development, and discovered passion for AI.",
    tech: ["JavaScript", "React", "Automation", "APIs"],
    highlight: false
  },
  {
    year: "2022",
    title: "French Linguist",
    company: "Language Services",
    description: "Specialized in French language consulting and translation. This background gives me unique perspective on communication and user experience.",
    tech: ["French", "Translation", "Communication"],
    highlight: false
  }
];

const stats = [
  { label: "Automations Built", value: 50, suffix: "+", icon: Zap },
  { label: "Hours Saved Weekly", value: 200, suffix: "+", icon: Clock },
  { label: "Happy Clients", value: 25, suffix: "+", icon: Users },
  { label: "Coffee Consumed", value: 9999, suffix: "", icon: Coffee }
];

const techStack = [
  "Make.com", "OpenAI", "Claude", "Supabase", "React", "Node.js", 
  "Airtable", "Zapier", "Webhooks", "APIs", "TypeScript", "Tailwind"
];

export default function About() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [matrixChars, setMatrixChars] = useState([]);

  // Animate stats on load
  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(interval);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 50);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Reveal skills progressively
  useEffect(() => {
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const chars = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ";
    const newChars = [];
    for (let i = 0; i < 50; i++) {
      newChars.push({
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5,
        speed: Math.random() * 2 + 1
      });
    }
    setMatrixChars(newChars);

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: char.y > 100 ? -10 : char.y + char.speed,
        char: Math.random() > 0.98 ? chars[Math.floor(Math.random() * chars.length)] : char.char
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-green-400 font-mono text-sm pointer-events-none"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              opacity: char.opacity,
              transform: `translateY(${char.y}px)`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Julien"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/50 mx-auto"
            />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Julien Automata
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Chiang Mai, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for Projects</span>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
            From French linguist to AI automation wizard. I bridge the gap between human communication and machine efficiency, 
            building intelligent systems that actually solve real problems. Currently crafting the future of work automation 
            at Letahost & Invest Malin.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            <button className="group flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  {animatedStats[index]}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    visibleSkills.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: visibleSkills.includes(index) ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Journey Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-8 mb-12">
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                  item.highlight 
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 border-blue-400 shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-800 border-gray-600'
                }`}>
                  <span className="text-sm font-bold text-white">{item.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-300 font-medium mb-3">{item.company}</p>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Cloud */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-full px-6 py-3 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-300 group-hover:text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Let's Build Something Amazing</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you need intelligent automation, AI integration, or a full-stack solution, 
              I'm here to turn your vision into reality.
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </button>
              <button className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                <Github className="w-5 h-5" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}