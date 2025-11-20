import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Pages/hero-illustration.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-codec-lightGray to-primary/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-codec-black"
            >
              Building Possibilities via{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-codec-darkGreen bg-clip-text text-transparent">
                Communication Technology
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-codec-mediumGray leading-relaxed"
            >
              2 decades of excellence in voice verification, payment solutions &
              multichannel communication systems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-codec-black hover:bg-primary transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Link to="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-codec-black hover:bg-codec-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <img
              src={heroImage}
              alt="Communication Technology Solutions"
              loading="lazy"
              className="w-full h-auto levitate rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
