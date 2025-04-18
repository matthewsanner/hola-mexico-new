import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-navy-blue p-4 text-white">
      <div className="container mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        {/* Left Section - Logo/Text */}
        <Link to="/">
          <h1 className="px-2 text-2xl font-bold uppercase tracking-widest">
            HMH IMMERSIVE SPANISH EDUCATION
          </h1>
        </Link>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/holamexicohola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/holamexicohola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/hola-m%C3%A9xico-hola-spanish-lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
