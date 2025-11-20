import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-codec-black via-codec-darkGray to-codec-black text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <img
              src="/logo.svg"
              alt="TheCodec Systems"
              loading="lazy"
              className="h-12 w-auto"
            />
            <p className="text-white/70">
              Building possibilities via communication technology
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/recalo"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Recallo
                </Link>
              </li>
              <li>
                <Link
                  to="/products/recalolite"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  RecalloLite
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sivvar"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Sivvar
                </Link>
              </li>
              <li>
                <Link
                  to="/products/intellio"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Intellio
                </Link>
              </li>
              <li>
                <Link
                  to="/products/verivo"
                  className="text-white/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Verivo
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white/70"
              >
                <Phone size={16} className="text-primary" />
                <span>02013302933</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white/70"
              >
                <Mail size={16} className="text-primary" />
                <span>contactus@thecodecsystems.com</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 text-white/70"
              >
                <MapPin size={16} className="text-primary mt-1" />
                <span>42b Lanre Awolokun, Gbagada, Lagos, Nigeria</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 text-center text-white/70"
        >
          <p>
            &copy; {new Date().getFullYear()} TheCodec Systems Limited. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
