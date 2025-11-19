import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Pages/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-codec-lightGray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-codec-black">
              Building Possibilities via{" "}
              <span className="text-primary">Communication Technology</span>
            </h1>

            <p className="text-xl text-codec-mediumGray leading-relaxed">
              2 decades of excellence in voice verification, payment solutions &
              multichannel communication systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-codec-black hover:bg-primary transition-all duration-300 group"
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
                className="border-2 border-codec-black hover:bg-codec-black hover:text-white transition-all duration-300"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Communication Technology Solutions"
              className="w-full h-auto levitate rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
