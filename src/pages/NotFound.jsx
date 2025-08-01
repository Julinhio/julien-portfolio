import { useState, useEffect } from "react";
import { Home, ArrowRight, Zap, AlertCircle } from "lucide-react";

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");
  const [particles, setParticles] = useState([]);

  // Subtle glitch effect - just occasional flicker
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchText("4Ø4");
        setTimeout(() => setGlitchText("404"), 150);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Floating particles - much fewer and subtler
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2
      });
    }
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 105 ? -5 : particle.y + particle.speed,
        opacity: particle.opacity > 0.05 ? particle.opacity - 0.002 : 0.3
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: `scale(${particle.size / 2})`
            }}
          />
        ))}
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          {/* 404 with gradient text */}
          <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent select-none">
            {glitchText}
          </h1>

          {/* Error message in glass card */}
          <div className="bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8 mb-8 max-w-md">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Page Not Found</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Looks like this page got lost in the automation matrix. 
              Don't worry, my AI assistant can help you find what you're looking for.
            </p>
          </div>

          {/* Action buttons - your standard style */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Go Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/talk"
              className="group flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ask My AI
            </a>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 mt-8 text-sm text-gray-500">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span>Route disconnected • AI assistant still online</span>
          </div>
        </div>
      </div>
    </div>
  );
}