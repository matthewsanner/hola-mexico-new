import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-navy-blue p-8 text-white">
      <div className="mx-auto max-w-[1400px]">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col items-center space-y-4">
            {/* Quick Links */}
            <h3 className="sr-only mb-2 text-lg font-bold">Quick Links</h3>
            <ul className="flex flex-wrap justify-center space-x-3">
              <li>
                <Link to="/" className="underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="underline">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/classes" className="underline">
                  Classes & Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="underline">
                  About / Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="underline">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/blog" className="underline">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="underline">
                  Contact / Book
                </Link>
              </li>
            </ul>

            {/* Call to Action */}
            <p className="text-center text-lg font-semibold">
              Ready to start learning Spanish?{" "}
              <a href="/contact" className="text-mx-yellow underline">
                Contact us today
              </a>{" "}
              to schedule your free trial class!
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/holamexicohola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram size={30} aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/holamexicohola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook size={30} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/hola-m%C3%A9xico-hola-spanish-lessons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Visit our LinkedIn page"
              >
                <FaLinkedin size={30} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-4">
            {/* Contact Information */}
            <h3 className="sr-only mb-2 text-lg font-bold">Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:holamexicohola@gmail.com" className="underline">
                holamexicohola@gmail.com
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a href="tel:+525520616969" className="underline">
                +52 55 2061 6969
              </a>
            </p>
            <p>
              Office:{" "}
              <a href="tel:+525570254108" className="underline">
                +52 55 7025 4108
              </a>
            </p>

            {/* Legal */}
            <div className="mt-4">
              <p>©2025 Hola México Hola</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
