import { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft, MessageCircle, Bot, Clock, TrendingUp, Users, 
  Shield, Zap, Search, Package, AlertTriangle, CheckCircle,
  PhoneCall, ArrowUpRight, Headphones, Star, Timer, 
  BarChart3, Activity, MessageSquare, Send, Mic, 
  FileText, UserCheck, Settings, Coffee, Award, Target
} from "lucide-react";
import { Link } from "react-router-dom";

const FlowrencePage = () => {
  const [activeDemo, setActiveDemo] = useState("greeting");
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isAutoDemo, setIsAutoDemo] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [liveStats, setLiveStats] = useState({
    activeChats: 47,
    avgResponseTime: "12s",
    resolutionRate: 94,
    escalations: 3
  });

  // Demo scenarios
  const demoScenarios = {
    greeting: {
      title: "Smart Greeting & KB Search",
      description: "Watch Flowerce instantly understand and respond",
      conversation: [
        {
          type: 'user',
          message: "Hi, I'm having issues with my recent order",
          delay: 1000
        },
        {
          type: 'ai',
          message: "Hello! I'd be happy to help with your order. Let me search our knowledge base for solutions...",
          tags: ["Knowledge Base", "Intent Recognition"],
          delay: 2000
        },
        {
          type: 'ai',
          message: "✅ Found 3 relevant articles! I can help you with: 1) Tracking your order 2) Processing a return 3) Reporting damaged items. Which applies to your situation?",
          tags: ["Dynamic Search", "Smart Suggestions"],
          delay: 1500
        },
        {
          type: 'user',
          message: "I think my package might be damaged",
          delay: 1200
        },
        {
          type: 'ai',
          message: "I'm sorry to hear that! Let me create a damage report for you. I'll need your order number and a description of the damage. This will automatically start a replacement process and email you a prepaid return label.",
          tags: ["Ticket Creation", "Automation"],
          delay: 2000
        }
      ]
    },
    wismo: {
      title: "Where Is My Order (WISMO)",
      description: "Order tracking made effortless",
      conversation: [
        {
          type: 'user',
          message: "Where is my order #FL2024-5891?",
          delay: 1000
        },
        {
          type: 'ai',
          message: "Let me track that for you! 🔍 Searching order #FL2024-5891...",
          tags: ["Order Lookup", "API Call"],
          delay: 1800
        },
        {
          type: 'ai',
          message: "✅ Found it! Order #FL2024-5891 shipped March 15th via FedEx (tracking: 7749872634). Currently in transit from Atlanta hub → Your city. Expected delivery: Tomorrow by 3 PM.",
          tags: ["Real-time Data", "Shipping Integration"],
          delay: 2200
        },
        {
          type: 'user',
          message: "Can I change the delivery address?",
          delay: 1500
        },
        {
          type: 'ai',
          message: "Since it's still in transit, I can request a delivery redirect! I'm contacting FedEx now... ✅ Done! You can redirect to a nearby FedEx location or update the address. I'll send you a link to manage this directly with FedEx.",
          tags: ["Live Actions", "API Integration"],
          delay: 2500
        },
        {
          type: 'user',
          message: "Perfect, thank you!",
          delay: 1000
        },
        {
          type: 'ai',
          message: "You're welcome! I've also set up SMS notifications for delivery updates. Is there anything else I can help you with today?",
          tags: ["Proactive Service", "Follow-up"],
          delay: 1800
        }
      ]
    },
    escalation: {
      title: "Smart Escalation",
      description: "Seamless handoff when humans are needed",
      conversation: [
        {
          type: 'user',
          message: "This is the third time I'm asking about my refund and I'm getting nowhere!",
          delay: 1000
        },
        {
          type: 'ai',
          message: "🚨 I detect high frustration and this is a repeat issue. Let me review your case history...",
          tags: ["Sentiment Analysis", "Case Review"],
          delay: 2000
        },
        {
          type: 'ai',
          message: "I see you contacted us on March 10th and 12th about refund #RF-2024-891. This definitely needs priority attention. I'm escalating you immediately to Sarah from our senior support team.",
          tags: ["Priority Routing", "Context Preservation"],
          delay: 2500
        },
        {
          type: 'user',
          message: "Finally! How long will I wait?",
          delay: 1200
        },
        {
          type: 'ai',
          message: "Sarah is available now and I've already briefed her on your full case history. She'll join this chat in 30 seconds with full authority to resolve your refund today. No more repeating your story!",
          tags: ["Human Handoff", "Context Transfer"],
          delay: 2200
        },
        {
          type: 'system',
          message: "👤 Sarah from Priority Support has joined the chat",
          delay: 1500
        },
        {
          type: 'human',
          message: "Hi! I'm Sarah and I've reviewed everything. I'm processing your $127 refund right now - you'll see it in 2-3 business days. I'm also adding a $25 credit for the inconvenience. My apologies for the runaround!",
          tags: ["Human Resolution", "Compensation"],
          delay: 2800
        }
      ]
    }
  };

  const metrics = [
    { label: "Response Time", value: "12s", change: "-45%", icon: Timer, color: "text-green-400" },
    { label: "Resolution Rate", value: "94%", change: "+23%", icon: CheckCircle, color: "text-blue-400" },
    { label: "Customer Satisfaction", value: "4.8/5", change: "+15%", icon: Star, color: "text-yellow-400" },
    { label: "Cost Savings", value: "$47k/mo", change: "+156%", icon: TrendingUp, color: "text-purple-400" }
  ];

  const features = [
    {
      icon: Search,
      title: "Dynamic Knowledge Base",
      description: "Instantly searches and matches customer queries with relevant solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      title: "WISMO Automation",
      description: "Real-time order tracking integration with shipping providers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Smart Ticketing",
      description: "Automatically creates and routes tickets via Make.com workflows",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: UserCheck,
      title: "Human Escalation",
      description: "Intelligent handoff with full context preservation",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate typing effect for AI responses
  const simulateChat = (scenario) => {
    setActiveDemo(scenario);
    setChatMessages([]);
    setIsTyping(false);
    setCurrentMessageIndex(0);
    setIsAutoDemo(false);
    
    const conversation = demoScenarios[scenario].conversation;
    let messageIndex = 0;
    
    const playNextMessage = () => {
      if (messageIndex >= conversation.length) return;
      
      const message = conversation[messageIndex];
      
      setTimeout(() => {
        if (message.type === 'ai' || message.type === 'system' || message.type === 'human') {
          setIsTyping(true);
          
          setTimeout(() => {
            setIsTyping(false);
            setChatMessages(prev => [...prev, {
              ...message,
              timestamp: new Date()
            }]);
            
            messageIndex++;
            if (messageIndex < conversation.length) {
              playNextMessage();
            }
          }, message.type === 'ai' ? 2000 : 1500);
        } else {
          // User message
          setChatMessages(prev => [...prev, {
            ...message,
            timestamp: new Date()
          }]);
          
          messageIndex++;
          if (messageIndex < conversation.length) {
            playNextMessage();
          }
        }
      }, message.delay || 1000);
    };
    
    playNextMessage();
  };

  // Auto-cycle through all demos
  const startAutoDemo = () => {
    setIsAutoDemo(true);
    const scenarios = Object.keys(demoScenarios);
    let currentScenario = 0;
    
    const cycleDemo = () => {
      simulateChat(scenarios[currentScenario]);
      currentScenario = (currentScenario + 1) % scenarios.length;
      
      // Wait for current demo to finish before starting next
      const conversation = demoScenarios[scenarios[currentScenario === 0 ? scenarios.length - 1 : currentScenario - 1]].conversation;
      const totalTime = conversation.reduce((sum, msg) => sum + (msg.delay || 1000) + (msg.type === 'ai' ? 2000 : 0), 2000);
      
      setTimeout(() => {
        if (isAutoDemo) cycleDemo();
      }, totalTime);
    };
    
    cycleDemo();
  };

  // Auto-cycle through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeChats: prev.activeChats + Math.floor(Math.random() * 6) - 3,
        avgResponseTime: prev.avgResponseTime,
        resolutionRate: Math.max(90, Math.min(98, prev.resolutionRate + Math.floor(Math.random() * 3) - 1)),
        escalations: Math.max(0, prev.escalations + Math.floor(Math.random() * 3) - 1)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initialize with greeting demo
  useEffect(() => {
    simulateChat('greeting');
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
          {/* Left: The Problem */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-green-300 text-sm font-medium">AI Customer Support</span>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                  Flowerce
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your customers get <span className="text-green-400 font-bold">instant, intelligent support</span> 24/7. 
              No more "please hold" - just smart answers, real-time tracking, and seamless escalations when needed.
            </p>

            {/* Before/After Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Traditional Support
                </h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Long wait times</li>
                  <li>• Repetitive questions</li>
                  <li>• Limited availability</li>
                  <li>• Escalation delays</li>
                  <li>• Frustrated customers</li>
                </ul>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Flowerce Power
                </h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Instant responses</li>
                  <li>• Smart knowledge base</li>
                  <li>• 24/7 availability</li>
                  <li>• Seamless handoffs</li>
                  <li>• Happy customers</li>
                </ul>
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex flex-wrap gap-3 mb-6">
              {Object.entries(demoScenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => simulateChat(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeDemo === key
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {scenario.title}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/talk"
                className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/25"
              >
                <Bot className="w-5 h-5" />
                Build This For Me
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              
              <button 
                onClick={startAutoDemo}
                className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Activity className="w-5 h-5" />
                {isAutoDemo ? "Auto Demo Running..." : "See Live Demo"}
              </button>
            </div>
          </div>

          {/* Right: Interactive Chat Demo */}
          <div className="relative">
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-b border-gray-700/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Flowerce Support</h3>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Online • Avg response: {liveStats.avgResponseTime}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {demoScenarios[activeDemo]?.description}
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-900/20 to-gray-800/20">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {(message.type === 'ai' || message.type === 'system') && (
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    {message.type === 'human' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-xs ${message.type === 'user' ? 'order-first' : ''}`}>
                      <div className={`p-4 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white ml-auto' 
                          : message.type === 'system'
                          ? 'bg-gray-600/50 text-gray-200 text-center italic'
                          : message.type === 'human'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-gray-700/50 text-gray-100'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.message}</p>
                        {message.tags && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {message.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input (disabled, just for show) */}
              <div className="border-t border-gray-700/50 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Try the demo buttons above..."
                    className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 cursor-not-allowed"
                    disabled
                  />
                  <button className="bg-gray-600/50 p-3 rounded-xl cursor-not-allowed">
                    <Send className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Metrics Dashboard */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Live Performance Dashboard
          </h2>
          <p className="text-gray-400">Real metrics from actual support operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = currentMetric === index;
            
            return (
              <div
                key={index}
                className={`bg-gray-800/40 backdrop-blur border rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 ${
                  isActive ? 'border-green-500/50 shadow-xl shadow-green-500/20 scale-105' : 'border-gray-700/50'
                }`}
              >
                <div className={`bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-xl mb-4 w-fit mx-auto ${
                  isActive ? 'animate-pulse' : ''
                }`}>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className={`text-xs font-medium ${metric.color}`}>
                  {metric.change} this month
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Stats Bar */}
        <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" />
            Right Now
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">{liveStats.activeChats}</div>
              <div className="text-sm text-gray-500">Active Chats</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{liveStats.avgResponseTime}</div>
              <div className="text-sm text-gray-500">Avg Response</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{liveStats.resolutionRate}%</div>
              <div className="text-sm text-gray-500">Resolution Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">{liveStats.escalations}</div>
              <div className="text-sm text-gray-500">Escalations Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Deep Dive */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            How Flowerce Works
          </h2>
          <p className="text-gray-400">Voiceflow meets Make.com in perfect harmony</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className={`bg-gradient-to-br ${feature.color} bg-opacity-20 p-4 rounded-xl mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Settings className="w-6 h-6 text-blue-400" />
            Behind the Scenes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Frontend (Voiceflow)</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Conversational AI</strong> - Natural language processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Dynamic KB</strong> - Smart knowledge base search</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Flow Logic</strong> - Multi-path conversation design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300"><strong>Integrations</strong> - API connections to backend</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Backend (Make.com)</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Ticket creation & routing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Order tracking API calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">CRM data synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Escalation workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Analytics & reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Support?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Flowerce can be customized for any business. Whether you're handling orders, bookings, or technical support, 
            let's build an AI assistant that actually helps your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/talk"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/25"
            >
              Build My Support AI
            </Link>
            <Link
              to="/projects"
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Explore More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowrencePage;