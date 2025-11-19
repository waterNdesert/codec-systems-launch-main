import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-codec-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/logo.svg"
              alt="TheCodec Systems"
              className="h-12 w-auto"
            />
            <p className="text-white/70">
              Building possibilities via communication technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/recalo"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Recalo
                </Link>
              </li>
              <li>
                <Link
                  to="/products/recalolite"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  RecaloLite
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sivvar"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Sivvar
                </Link>
              </li>
              <li>
                <Link
                  to="/products/intellio"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Intellio
                </Link>
              </li>
              <li>
                <Link
                  to="/products/verivo"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Verivo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="text-primary" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="text-primary" />
                <span>contactus@thecodecsystems.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="text-primary mt-1" />
                <span>42b Lanre Awolokun, Gbagada, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>
            &copy; {new Date().getFullYear()} TheCodec Systems Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
