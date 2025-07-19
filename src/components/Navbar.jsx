import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Terminal, Wifi } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "AI", path: "/ai" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-xl font-bold text-white hover:text-blue-300 transition-all duration-300"
          >
            <div className="relative">
              <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Julien.dev
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-1 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full px-2 py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600/80 to-cyan-600/80 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`
                  }
                  end={item.path === "/"}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-sm"></div>
                      )}
                      {item.name === "AI" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-full px-3 py-2">
              <Wifi className="w-4 h-4 text-green-400" />
              <span className="text-xs text-gray-300">Online</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1 w-6 h-6 group"
            >
              <div className={`w-full h-0.5 bg-gray-300 group-hover:bg-white transition-all duration-300 transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-300 group-hover:bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-300 group-hover:bg-white transition-all duration-300 transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </div>

{/* Mobile Menu */}
<div className={`md:hidden mt-4 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto max-h-96' : 'opacity-0 pointer-events-none max-h-0 overflow-hidden'}`}>  <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 space-y-2">
    {navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `block px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
            isActive 
              ? 'text-white bg-gradient-to-r from-blue-600/80 to-cyan-600/80' 
              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
          }`
        }
        end={item.path === "/"}
      >
        {item.name}
      </NavLink>
    ))}
  </div>
</div>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </nav>
  );
}