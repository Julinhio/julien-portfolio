import { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft, Clock, Zap, FileText, Mail, CheckCircle, 
  Users, Brain, Sparkles, Timer, Target, TrendingUp,
  Phone, Edit3, Send, Download, Play, Pause, RotateCcw,
  MessageSquare, Lightbulb, Rocket, Star, Coffee, Award
} from "lucide-react";
import { Link } from "react-router-dom";

const ProposalFlowPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [particles, setParticles] = useState([]);

  const workflowSteps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "You're on a call with a hot prospect. They're excited, you're taking notes.",
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      duration: "15-30 min",
      visual: "🎯 Live conversation"
    },
    {
      id: 2, 
      title: "Smart Form Fill",
      description: "While they talk, you fill our structured form. Pain points, budget, timeline - captured in real-time.",
      icon: Edit3,
      color: "from-green-500 to-emerald-500", 
      duration: "2-3 min",
      visual: "📝 Real-time capture"
    },
    {
      id: 3,
      title: "AI Magic",
      description: "GPT-4 transforms your inputs into a professional proposal. Custom content, perfect structure, your brand.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      duration: "30 seconds",
      visual: "🤖 AI processing"
    },
    {
      id: 4,
      title: "Brand Injection", 
      description: "Your logo, colors, and style get automatically applied to a Google Slides template.",
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
      duration: "15 seconds", 
      visual: "🎨 Auto-branding"
    },
    {
      id: 5,
      title: "Instant Delivery",
      description: "PDF generated and sent while you're still saying goodbye. Strike while the iron is hot.",
      icon: Send,
      color: "from-cyan-500 to-blue-500",
      duration: "5 seconds",
      visual: "⚡ Immediate send"
    }
  ];

  const demoSteps = [
    "Prospect mentions they need help with social media...",
    "You capture: 'Social media strategy, $5k budget, 3-month timeline, and project requirements'",
    "AI generates: Executive summary, strategy overview, deliverables...", 
    "Template applies your branding automatically...",
    "PDF sent to prospect@company.com - Done! 🚀"
  ];

  const results = [
    { metric: "95%", label: "Faster proposal creation", icon: Timer },
    { metric: "78%", label: "Higher conversion rate", icon: TrendingUp },
    { metric: "100%", label: "Brand consistency", icon: Award },
    { metric: "3 min", label: "Average completion time", icon: Clock }
  ];

  // Auto-play workflow animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % workflowSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, workflowSteps.length]);

  // Demo typing effect
  useEffect(() => {
    let currentChar = 0;
    const currentText = demoSteps[demoStep] || demoSteps[0];
    
    // Clear any existing text first
    setTypedText("");
    
    const typing = setInterval(() => {
      if (currentChar <= currentText.length) {
        setTypedText(currentText.substring(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typing);
        // Pause at the end, then move to next step
        setTimeout(() => {
          setDemoStep(prev => (prev + 1) % demoSteps.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [demoStep]);

  // Particle system for AI section
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 2 + 1
      });
    }
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 105 ? -5 : particle.y + particle.speed,
        opacity: particle.opacity > 0.1 ? particle.opacity - 0.005 : 0.6
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Problem/Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-purple-300 text-sm font-medium">AI-Powered Automation</span>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                  ProposalFlow
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Turn discovery calls into signed contracts in <span className="text-blue-400 font-bold">3 minutes</span>. 
              No more "I'll send you a proposal next week" - strike while the iron is hot.
            </p>

            {/* Problem/Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-red-300 font-semibold mb-3">❌ The Old Way</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Scribbled notes during calls</li>
                  <li>• Hours writing proposals later</li>
                  <li>• Lost momentum = lost deals</li>
                  <li>• Inconsistent messaging</li>
                </ul>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-green-300 font-semibold mb-3">✅ The ProposalFlow Way</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Fill form while they talk</li>
                  <li>• AI writes the proposal</li>
                  <li>• Sent before call ends</li>
                  <li>• Perfect branding every time</li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isPlaying ? "Pause Demo" : "Watch It Work"}
              </button>
              
              <Link
                to="/talk"
                className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Build This For Me
              </Link>
            </div>
          </div>

          {/* Right: Visual Demo */}
          <div className="relative">
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      opacity: particle.opacity,
                      transform: `scale(${particle.size / 3})`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  Live Demo
                </h3>
                
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm min-h-[120px]">
                  <div className="text-green-400 mb-2">$ proposalflow.run</div>
                  <div className="text-gray-300">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xs text-gray-500">Step {demoStep + 1} of {demoSteps.length}</div>
                  <button 
                    onClick={() => {setDemoStep(0); setTypedText("");}}
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Restart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Workflow */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-400">From call to contract in 5 simple steps</p>
        </div>

        <div className="relative">
          {/* Workflow Steps */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`flex-1 relative transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-100 opacity-70'
                  }`}
                  onMouseEnter={() => !isPlaying && setActiveStep(index)}
                >
                  <div className={`bg-gray-800/40 backdrop-blur border rounded-2xl p-6 h-full ${
                    isActive ? 'border-blue-500/50 shadow-xl shadow-blue-500/20' : 'border-gray-700/50'
                  }`}>
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isActive ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-gray-700 text-gray-400'
                      }`}>
                        {step.id}
                      </div>
                      <div className="text-xs text-gray-500">{step.duration}</div>
                    </div>

                    {/* Icon */}
                    <div className={`bg-gradient-to-br ${step.color} ${isActive ? 'bg-opacity-20' : 'bg-opacity-10'} p-3 rounded-xl mb-4 w-fit`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    </div>

                    {/* Content */}
                    <h3 className={`font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mb-3 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                      {step.description}
                    </p>
                    <div className={`text-xs font-mono ${isActive ? 'text-blue-300' : 'text-gray-600'}`}>
                      {step.visual}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Connector Arrow (not on last item) */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <div className={`w-8 h-0.5 ${isActive ? 'bg-blue-500' : 'bg-gray-600'} transition-colors duration-500`}></div>
                      <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-b-2 border-transparent ${
                        isActive ? 'border-l-blue-500' : 'border-l-gray-600'
                      } transition-colors duration-500`}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Play Controls */}
          <div className="text-center mt-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pause Animation" : "Play Animation"}
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Real Results
          </h2>
          <p className="text-gray-400">Numbers don't lie - this system works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-xl mb-4 w-fit mx-auto">
                  <Icon className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-sm text-gray-400">{result.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            Under the Hood
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Tech Stack</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Make.com</strong> - Workflow orchestration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>GPT-4</strong> - Content generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Tally Forms</strong> - Data capture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Google Slides API</strong> - Template engine</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Gmail API</strong> - Delivery system</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Key Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Real-time form integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">AI-powered content generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Custom brand templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Automatic PDF generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Instant delivery system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Want ProposalFlow For Your Business?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I can build a custom version tailored to your industry, branding, and workflow. 
            Let's chat about turning your sales process into a conversion machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/talk"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Let's Build It Together
            </Link>
            <Link
              to="/projects"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              See More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalFlowPage;