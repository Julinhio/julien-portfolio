import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "AI", path: "/ai" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">Julien</Link>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive ? 'underline text-blue-600' : ''}`
              }
              end={item.path === "/"}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
} 