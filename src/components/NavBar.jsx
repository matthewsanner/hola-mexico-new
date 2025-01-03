import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-navy-blue text-white p-4">
      <ul className="flex space-x-4 w-full items-center">
        <li className="flex-1">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/methodology" className="nav-link">
            Methodology
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/classes" className="nav-link">
            Classes & Courses
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/about" className="nav-link">
            About / Testimonials
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/contact"
            className="bg-red-400 text-black py-2 px-6 rounded-full hover:bg-red-600 transition-colors block text-center">
            Book a class today!
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
