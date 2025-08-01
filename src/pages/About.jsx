import { useState, useEffect } from "react";
import { 
  Brain, Code, Zap, Database, Bot, Rocket, Coffee, Globe, 
  MapPin, Calendar, Trophy, Target, Users, Clock, 
  ArrowRight, Download, Mail, Linkedin, Github, ExternalLink 
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
    company: "Property Management Company",
    description: "Leading automation initiatives and building AI-powered workflows that save 100+ hours per week across teams. Architecting sophisticated automation systems, developing custom internal tools with React and Supabase, and creating seamless integrations between no-code platforms and front-end applications. Focus on building scalable solutions that bridge business challenges with cutting-edge technology, from mobile-first inspection apps to AI-powered customer support systems.",
    tech: ["Make.com", "OpenAI", "Claude", "Supabase", "React", "n8n"],
    highlight: true
  },
  {
    year: "2023",
    title: "Career Pivot to Tech",
    company: "Strategic Transition + Make.com L4 Certification",
    description: "After sensing AI's impact on the language industry, made a proactive decision to work with AI rather than compete against it. Intensive self-directed learning in JavaScript, web development fundamentals, and automation platforms. Built 15+ real-world automation projects while pursuing advanced certifications. Transitioned from fighting technological change to embracing and leveraging it, combining linguistic expertise with technical skills to create unique value propositions.",
    tech: ["JavaScript", "React", "Make.com L4", "Automation", "APIs", "ClickUp", "Airtable"],
    highlight: false
  },
  {
    year: "2013",
    title: "Language Industry Expert",
    company: "Freelance and consulting",
    description: "Started as Freelance, and founded and led Good Trends, navigating the evolving language industry landscape for over a decade. Expanded from translation to comprehensive linguistic services including transcreation, marketing localization, and technical documentation. Built and managed dedicated linguistic teams, developed QA frameworks, and pioneered the integration of AI and ML tools while maintaining quality standards. Specialized in language asset management, client collaboration, and training development across global markets.",
    tech: ["Project Management", "Quality Assurance", "Team Leadership", "AI Integration", "Translation Technology"],
    highlight: false
  },
  {
    year: "2010's",
    title: "International Experience",
    company: "Europe (UK, Spain, Slovakia, Switzerland)",
    description: "Diverse European experience building cultural adaptability and multilingual communication skills. Participated in European Voluntary Service in Slovakia working with youth programs, developed hospitality expertise in London, and provided customer support for major tech companies like Apple and telecommunications firms in Barcelona. This international foundation enhanced problem-solving abilities and cross-cultural communication skills that now benefit global client relationships.",
    tech: ["Customer Service", "Cultural Adaptation", "Multilingual Communication", "Youth Work", "Hospitality"],
    highlight: false
  },
  {
    year: "2005",
    title: "Master's in Physical Oceanography",
    company: "Université des Antilles",
    description: "Specialized in Physical Oceanography with focus on fluid dynamics, ocean physics, and climatological studies. Deep dive into wave and tide mechanics, and ocean dynamics' impact on climate systems. Extensive work with advanced modeling techniques culminating in a four-month internship developing tsunami prediction models for coastal impact analysis. This rigorous scientific training built strong analytical foundations and computational modeling skills that now drive my systematic approach to automation and complex problem-solving.",
    tech: ["Fluid Dynamics", "Physics", "Computational Modeling", "Meteorology", "Research", "Data Analysis"],
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
              <span>Not actively looking, but always listening</span>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
          From French linguist to AI automation wizard, I’ve always been obsessed with how things work—whether it’s language, systems, or workflows. After years spent fine-tuning words for global brands, I pivoted into the world of no-code and AI automation, where I now design smart, scalable systems that actually solve real problems. I split my time between Vietnam and Thailand, work remotely for a property management company operating in France and Europe. My tools? Make.com, Supabase, OpenAI, Claude, Webhooks, and a healthy dose of curiosity. Outside of work, I’m into boxing, trail running, padel, and trying to stay sharp—mentally and physically.
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

        {/* Certifications & Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Make.com L4 Certification */}
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Make.com Level 4 Partner</h3>
                  <p className="text-blue-300 text-sm">Advanced Automation Certification</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Certified Level 4 scenario for Make.com's official Partner Program. Automated a monthly weather report 
                by processing raw JSON data from two unstable APIs with advanced error handling for 429 responses, 
                data iteration and aggregation with inline functions, and dynamic email composition under a 30-operation budget.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Advanced Error Handling", "JSON Processing", "API Integration", "Dynamic Composition"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
              <a 
                href="https://partnertraining.make.com/certificates/kzass4vmnn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Certification
              </a>
            </div>

            {/* Master's Degree */}
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Master's in Applied Sciences</h3>
                  <p className="text-purple-300 text-sm">Physics of Environment (2005)</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Strong analytical foundation in environmental physics, data analysis, and scientific methodology. 
                This technical background supports my systematic approach to automation and complex problem-solving.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Data Analysis", "Scientific Method", "Research", "Environmental Systems"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
              <a 
                href="https://www.linkedin.com/in/jgaichet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Julinhio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}