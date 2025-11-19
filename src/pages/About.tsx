import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import aboutImage from "@/assets/about-illustration.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src={aboutImage}
                alt="About TheCodec Systems"
                className="w-full h-auto levitate rounded-2xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                We are a <span className="text-primary">Fintech</span> &
                Consultancy Company
              </h1>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  TheCodec Systems Limited has been at the forefront of innovation in
                  telecommunications and fintech for over two decades. Our commitment
                  to excellence has made us a trusted partner for organizations across
                  Africa.
                </p>

                <p>
                  We specialize in voice verification systems, multichannel
                  communication platforms, and payment solutions that drive business
                  growth. Our team of experts combines deep technical knowledge with
                  practical industry experience to deliver solutions that truly work.
                </p>

                <p>
                  From small businesses to large enterprises, we've helped countless
                  organizations transform their communication infrastructure and
                  payment systems. Our custom-built solutions like Recalo, Sivvar, and
                  Verivo are designed to meet the unique challenges of the African
                  market.
                </p>

                <p>
                  Our consultancy services extend beyond implementation. We work
                  closely with clients to understand their specific needs and provide
                  ongoing support to ensure long-term success. With TheCodec Systems,
                  you're not just getting a service provider – you're gaining a
                  strategic partner committed to your growth.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-codec-black hover:bg-codec-darkGray transition-colors"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Asterisk Expertise Section */}
        <section className="mt-32 bg-codec-lightGray py-20 px-8 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-6">
              Powered by <span className="text-primary">Asterisk</span>
            </h2>
            <p className="text-lg text-codec-mediumGray leading-relaxed">
              Our team comprises certified experts in Asterisk, the world's leading open-source 
              telephony framework. This powerful platform forms the backbone of many of our 
              products, including Recalo and our IP-PBX solutions. With over two decades of 
              experience in Asterisk development and customization, we deliver robust, scalable 
              communication systems that power businesses across Africa. From database-driven 
              IVR systems to advanced call center solutions, our Asterisk expertise enables us 
              to build tailored telecommunications infrastructure that meets the unique needs 
              of modern enterprises.
            </p>
          </div>
        </section>
      </main>

      {/* Team Section */}
      <Team />

      <Footer />
    </div>
  );
};

export default About;
