import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Branding & Description */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">LinkSphere</h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering businesses with scalable networking, cloud
            infrastructure, and cybersecurity solutions. Stay connected and
            secure with LinkSphere.
          </p>
          <div className="flex space-x-6 mt-6">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/5">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {["Home", "Features", "About", "Team", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-500 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/4">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:contact@linksphere.com"
              className="hover:text-blue-500"
            >
              contact@linksphere.com
            </a>
          </p>
          <p className="mt-2">
            Address: LinkSphere HQ, 500 Data Lane, Cyber City, TX 75001, USA
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LinkSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
