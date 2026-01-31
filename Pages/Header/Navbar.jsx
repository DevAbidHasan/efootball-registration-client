import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950 border-b border-zinc-800 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white tracking-wide">
            <span className="text-green-400">E</span>Football
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tournament" className="nav-link">Tournament</Link>
            <a href="/#rules" className="nav-link">
  Rules
</a>
            <Link to="/contact" className="nav-link">Contact</Link>

            <Link
              to="/registration"
              className="px-4 py-2 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-800">
          <div className="px-4 py-4 space-y-4">
            <Link onClick={() => setIsOpen(false)} to="/" className="mobile-link">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/tournament" className="mobile-link">Tournament</Link>
            {/* <Link  to="/rules" className="mobile-link">Rules</Link> */}

            <a onClick={() => setIsOpen(false)} href="/#rules" className="mobile-link">
  Rules
</a>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="mobile-link">Contact</Link>

            <Link
              onClick={() => setIsOpen(false)}
              to="/registration"
              className="block text-center bg-green-500 text-black py-2 rounded-md font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
