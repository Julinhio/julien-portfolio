import { useState, useEffect, useRef } from "react";
import { 
  Send, Mic, MicOff, Calendar, Mail, Phone, FileText, 
  Bot, User, Zap, Brain, Coffee, Clock, Copy, ThumbsUp,
  Volume2, VolumeX, Settings, Sparkles, MessageCircle,
  ChevronDown, Play, Pause
} from "lucide-react";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const ASSISTANT_ID = "asst_qVWJJeBWoNn7s8Erg7JRK6Tv";

const quickActions = [
  { icon: Calendar, label: "Book a Call", action: "book_call", color: "from-blue-500 to-cyan-500" },
  { icon: Mail, label: "Send Email", action: "send_email", color: "from-green-500 to-emerald-500" },
  { icon: FileText, label: "Get My CV", action: "get_cv", color: "from-purple-500 to-pink-500" },
  { icon: Coffee, label: "Coffee Chat", action: "coffee_chat", color: "from-orange-500 to-red-500" }
];

const suggestedQuestions = [
  "Tell me about your automation projects",
  "How can you help my business save time?",
  "What's your experience with Make.com?",
  "Can you build an AI workflow for me?",
  "What's your rate for a consultation?",
  "Show me your latest work"
];

const initialMessages = [
  {
    id: 1,
    type: "ai",
    content: "Hey there! 👋 I'm Julien AI, a digital doppelganger. I can help you learn about his work, book calls, or even start planning your next automation project!",
    timestamp: new Date(),
    typing: false
  }
];

export default function AIChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [particles, setParticles] = useState([]);
  const [aiMood, setAiMood] = useState("idle"); // idle, thinking, excited, helpful
  const [threadId, setThreadId] = useState(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Initialize thread when component mounts
  useEffect(() => {
    const initializeThread = async () => {
      try {
        const thread = await openai.beta.threads.create();
        setThreadId(thread.id);
        console.log("Thread created:", thread.id);
      } catch (error) {
        console.error("Failed to create thread:", error);
      }
    };
    
    initializeThread();
  }, []);

  // Particle system for AI thinking
  useEffect(() => {
    if (aiMood === "thinking") {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 300,
          y: Math.random() * 300,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 2 + 1
        });
      }
      setParticles(newParticles);

      const interval = setInterval(() => {
        setParticles(prev => prev.map(particle => ({
          ...particle,
          y: particle.y > 320 ? -10 : particle.y + particle.speed,
          opacity: particle.opacity > 0.1 ? particle.opacity - 0.01 : 0.5
        })));
      }, 50);

      return () => clearInterval(interval);
    } else {
      setParticles([]);
    }
  }, [aiMood]);

  // Auto scroll to bottom
  useEffect(() => {
    // Only scroll when AI responds (last message is from AI)
    if (messages.length > 1 && messages[messages.length - 1].type === "ai") {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  // Function to handle book_call
  const handleBookCall = async (args) => {
    console.log("Book call requested with:", args);
    
    // Here you could:
    // 1. Send email to yourself
    // 2. Open Calendly
    // 3. Save to database
    // For now, let's just return a success message
    
    return {
      success: true,
      message: `Thanks ${args.name}! I'll get back to you at ${args.email} about your ${args.project_type} project. Check your email for a calendar link.`,
      calendar_link: "https://calendly.com/julien-automata" // Replace with your real link
    };
  };

  // Assistant API integration
  const simulateAIResponse = async (userMessage) => {
    if (!threadId) {
      console.error("No thread ID available");
      return;
    }

    setIsTyping(true);
    setAiMood("thinking");
    
    try {
      console.log("Using thread ID:", threadId);
      
      // Add message to thread
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: userMessage
      });

      // Run the assistant
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: ASSISTANT_ID
      });

      console.log("Run created:", run.id);

      // Wait and check for function calls using REST API instead of SDK
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Try to get run status using fetch instead of the broken SDK method
      let runStatus;
      try {
        const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${run.id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'OpenAI-Beta': 'assistants=v2'
          }
        });
        runStatus = await response.json();
        console.log("Run status via fetch:", runStatus.status);
        
        if (runStatus.status === 'requires_action') {
          console.log("Function call required:", runStatus.required_action);
          
          const toolCall = runStatus.required_action.submit_tool_outputs.tool_calls[0];
          const functionName = toolCall.function.name;
          const functionArgs = JSON.parse(toolCall.function.arguments);
          
          console.log("Calling function:", functionName, "with args:", functionArgs);
          
          let functionResult;
          if (functionName === 'book_call') {
            functionResult = await handleBookCall(functionArgs);
          } else {
            functionResult = { error: "Unknown function" };
          }
          
          // Submit the function result using fetch
          await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${run.id}/submit_tool_outputs`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
              'OpenAI-Beta': 'assistants=v2',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              tool_outputs: [{
                tool_call_id: toolCall.id,
                output: JSON.stringify(functionResult)
              }]
            })
          });
          
          console.log("Function result submitted, waiting for response...");
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      } catch (error) {
        console.log("Fetch method also failed:", error);
      }

      // Get the assistant's response directly
      const threadMessages = await openai.beta.threads.messages.list(threadId);
      console.log("Messages retrieved:", threadMessages.data.length);
      
      const assistantMessage = threadMessages.data.find(msg => 
        msg.role === 'assistant' && 
        msg.created_at > Date.now()/1000 - 20
      );
      
      if (assistantMessage) {
        console.log("Found assistant message:", assistantMessage.content[0].text.value);
        
        const aiMessage = {
          id: Date.now(),
          type: "ai",
          content: assistantMessage.content[0].text.value,
          timestamp: new Date(),
          typing: false
        };

        setMessages(prev => [...prev, aiMessage]);
        setAiMood("helpful");
        
        setTimeout(() => setAiMood("idle"), 2000);
      } else {
        console.log("No assistant message found, trying again...");
        // Try again after more time
        await new Promise(resolve => setTimeout(resolve, 3000));
        const retryMessages = await openai.beta.threads.messages.list(threadId);
        const retryAssistantMessage = retryMessages.data.find(msg => 
          msg.role === 'assistant' && 
          msg.created_at > Date.now()/1000 - 30
        );
        
        if (retryAssistantMessage) {
          const aiMessage = {
            id: Date.now(),
            type: "ai",
            content: retryAssistantMessage.content[0].text.value,
            timestamp: new Date(),
            typing: false
          };

          setMessages(prev => [...prev, aiMessage]);
          setAiMood("helpful");
          
          setTimeout(() => setAiMood("idle"), 2000);
        } else {
          throw new Error("No assistant response found after 8 seconds");
        }
      }
    } catch (error) {
      console.error("Assistant API Error:", error);
      // Fallback response
      const errorMessage = {
        id: Date.now(),
        type: "ai",
        content: "I'm experiencing some technical difficulties. Please try again in a moment!",
        timestamp: new Date(),
        typing: false
      };
      setMessages(prev => [...prev, errorMessage]);
      setAiMood("idle");
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
      typing: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    simulateAIResponse(inputValue);
  };

  const handleQuickAction = (action) => {
    let message = "";
    switch (action) {
      case "book_call":
        message = "I'd like to book a consultation call with Julien";
        break;
      case "send_email":
        message = "Can you help me send an email to Julien?";
        break;
      case "get_cv":
        message = "Can I get Julien's CV or resume?";
        break;
      case "coffee_chat":
        message = "I'd love to have a casual coffee chat about automation";
        break;
    }
    setInputValue(message);
  };

  const getAiAvatarClass = () => {
    switch (aiMood) {
      case "thinking": return "animate-pulse bg-gradient-to-br from-purple-500 to-blue-500";
      case "excited": return "animate-bounce bg-gradient-to-br from-green-500 to-cyan-500";
      case "helpful": return "bg-gradient-to-br from-blue-500 to-cyan-500";
      default: return "bg-gradient-to-br from-gray-600 to-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white pt-32 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className={`w-24 h-24 rounded-full ${getAiAvatarClass()} p-1 shadow-2xl relative overflow-hidden`}>
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center relative">
                <Bot className="w-10 h-10 text-white" />
                {aiMood === "thinking" && (
                  <div className="absolute inset-0">
                    {particles.map(particle => (
                      <div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: `${(particle.x / 300) * 100}%`,
                          top: `${(particle.y / 300) * 100}%`,
                          opacity: particle.opacity,
                          transform: `scale(${particle.size / 4})`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Chat with Julien AI
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet my AI twin! Trained on my expertise in automation, AI integration, and no-code solutions. 
            Ask about projects, book calls, or get automation advice. It's like talking to me, but 24/7! 🤖
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${action.color} bg-opacity-20 hover:bg-opacity-30 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 group`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                Try Asking
              </h3>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="w-full text-left text-sm text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  >
                    "{question}"
                  </button>
                ))}
              </div>
            </div>

            {/* AI Status */}
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                AI Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Status</span>
                  <span className="text-sm text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    {threadId ? "Connected" : "Connecting..."}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Response Time</span>
                  <span className="text-sm text-blue-400">~3s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Mood</span>
                  <span className={`text-sm capitalize ${
                    aiMood === "thinking" ? "text-purple-400" :
                    aiMood === "excited" ? "text-green-400" :
                    aiMood === "helpful" ? "text-blue-400" : "text-gray-400"
                  }`}>
                    {aiMood}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-gray-700/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Julien AI Assistant</h3>
                      <p className="text-xs text-gray-400">
                        {isTyping ? "Thinking..." : threadId ? "Online • Powered by OpenAI" : "Connecting..."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsSoundOn(!isSoundOn)}
                      className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                    <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div 
                ref={chatContainerRef}
                className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-900/20 to-gray-800/20"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "ai" && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-xs lg:max-w-md ${message.type === "user" ? "order-first" : ""}`}>
                      <div className={`p-4 rounded-2xl ${
                        message.type === "user" 
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white ml-auto" 
                          : "bg-gray-700/50 text-gray-100"
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.type === "user" && (
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
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
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-700/50 p-4">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask anything about my work, my background..."
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      disabled={!threadId}
                    />
                    <button
                      onClick={() => setIsListening(!isListening)}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-colors ${
                        isListening ? "text-red-400 hover:text-red-300" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || !threadId}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:from-gray-600 disabled:to-gray-600 p-3 rounded-xl transition-all duration-300 disabled:cursor-not-allowed group"
                  >
                    <Send className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}