import { FaLink } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaLink className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-blue-600">LinkSphere</h1>
        </div>

        {/*  Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium tracking-wide">
          {["home", "services", "about", "testimonials", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative group uppercase text-sm hover:text-blue-600 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-blue-600 mt-1"></span>
                </a>
              </li>
            )
          )}
        </ul>

        {/* Join  */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
          Join LinkSphere
        </button>

        {/* Hamburger  */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4 font-medium text-gray-700 uppercase tracking-wide">
          {["home", "features", "about", "team", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block py-2 border-b border-gray-200 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-semibold">
              Join LinkSphere
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
