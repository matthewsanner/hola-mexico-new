import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-navy-blue text-white p-8">
      <div className="container mx-auto space-y-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-4">
            {/* Quick Links */}
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="hover:underline">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/classes" className="hover:underline">
                  Classes & Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About / Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact / Book
                </Link>
              </li>
            </ul>

            {/* Contact Information */}
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:holamexicohola@gmail.com"
                className="hover:underline">
                holamexicohola@gmail.com
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                [Número]
              </a>
            </p>

            {/* Newsletter */}
            <p className="mt-4">
              Stay updated with our latest courses and tips. Subscribe to our
              newsletter.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {/* Call to Action */}
            <h3 className="text-xl font-semibold">
              Ready to start learning Spanish?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact us today
              </a>{" "}
              or{" "}
              <a href="/schedule" className="text-blue-600 hover:underline">
                schedule your free trial class
              </a>
              !
            </h3>

            {/* About Us */}
            <p className="text-sm">
              Welcome to Hola México Hola – a place where every student finds
              their own path to mastering Spanish. At HMH, each lesson is an
              opportunity to grow and overcome challenges, all while learning in
              an environment that values authenticity and personalized
              education. Here we share some experiences from our students who,
              with dedication and effort, have made remarkable strides in their
              Spanish journey. Their stories reflect HMH&apos;s commitment to
              providing quality education tailored to each individual&apos;s
              goals and needs.
            </p>

            {/* Legal */}
            <div className="mt-4 text-sm">
              <p>© 2024 Hola México Hola. All rights reserved.</p>
              <p>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>{" "}
                |
                <a href="/terms-of-service" className="hover:underline">
                  {" "}
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
