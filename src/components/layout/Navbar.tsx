import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="max-w-7xl mx-auto border-2 nunito-regular p-2"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="text-xl text-black bg-amber-200 p-2 border"
          aria-label="Spanish Learning Home"
        >
          spanish knower
        </a>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-4 text-gray-600 font-medium">
          <li>
            <a
              href="/exercises"
              className="bg-[#F03603] text-white py-2 px-4 hover:bg-white hover:text-[#F03603] transition-colors border-[#F03603] border-2"
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href="/exercises"
              className="bg-green-500 text-white py-2 px-4 hover:bg-white hover:text-green-500 transition-colors border-green-500 border-2"
            >
              Check your level
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-black hover:bg-black hover:text-white py-2 px-4 border-2 transition-colors border-black"
            >
              Sign in
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <li>
          <a
            href="/exercises"
            className="block bg-[#F03603] text-white py-2 px-4 hover:bg-white hover:text-[#F03603] transition-colors border-[#F03603] border-2"
          >
            Get Started
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-black hover:bg-black hover:text-white py-2 px-4 border-2 transition-colors border-black"
          >
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;