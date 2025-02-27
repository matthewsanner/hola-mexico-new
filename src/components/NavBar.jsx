import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-navy-blue">
      <nav className="mx-auto max-w-[1400px] lg:p-4">
        <div className="flex items-center justify-center">
          {/* Hamburger Icon (only visible on small screens) */}
          <button
            onClick={toggleMenu}
            className="p-4 text-white focus:outline-none lg:hidden"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu (visible on larger screens and when toggled on smaller screens) */}
        <ul
          className={`w-full items-center px-4 transition-all lg:flex lg:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="flex-1">
            <Link to="/" className="nav-link rounded-t-full lg:rounded-full">
              Home
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/methodology" className="nav-link lg:rounded-full">
              Methodology
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/classes" className="nav-link lg:rounded-full">
              Classes & Courses
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/about" className="nav-link lg:rounded-full">
              About / Testimonials
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/faq" className="nav-link lg:rounded-full">
              FAQ
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/blog" className="nav-link lg:rounded-full">
              Blog
            </Link>
          </li>
          <li className="flex-1">
            <Link
              to="/contact"
              className={
                "block rounded-b-full bg-mx-yellow px-6 py-2 text-center text-black transition-colors hover:bg-lt-mx-yellow lg:rounded-full"
              }
            >
              Book a class today!
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
