import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import aboutImage from "@/assets/Pages/about-illustration.png";

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
                loading="lazy"
                className="w-full h-auto levitate rounded-2xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                Your Voice <span className="text-primary">Solutions</span>{" "}
                Partner
              </h1>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  TheCodec Systems Limited has been at the forefront of
                  innovation in telecommunications and voice solutions for over
                  two decades. Our commitment to excellence has made us a
                  trusted partner for organizations across Africa.
                </p>

                <p>
                  We specialize in voice verification systems, multichannel
                  communication platforms, and payment solutions that drive
                  business growth. Our team of experts combines deep technical
                  knowledge with practical industry experience to deliver
                  solutions that truly work.
                </p>

                <p>
                  From small businesses to large enterprises, we've helped
                  countless organizations transform their communication
                  infrastructure and payment systems. Our custom-built solutions
                  like Recallo, Sivvar, and Verivo are designed to meet the
                  unique challenges of the African market.
                </p>

                <p>
                  Our consultancy services extend beyond implementation. We work
                  closely with clients to understand their specific needs and
                  provide ongoing support to ensure long-term success. With
                  TheCodec Systems, you're not just getting a service provider –
                  you're gaining a strategic partner committed to your growth.
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

        {/* Open-Source Telephony Expertise Section */}
        <section className="mt-32 bg-codec-lightGray py-20 px-8 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-6">
              Experts in{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-codec-darkGreen bg-clip-text text-transparent">
                Asterisk, FreeSWITCH, Kamailio & OpenSIPS
              </span>
            </h2>
            <p className="text-xl text-codec-mediumGray mb-4 font-semibold">
              Powering modern telephony with 20+ years of innovation.
            </p>
            <p className="text-lg text-codec-mediumGray leading-relaxed">
              Our team is highly experienced in leading open‑source telephony
              platforms such as Asterisk, FreeSWITCH, Kamailio, and OpenSIPS.
              With over two decades of hands‑on development and customization,
              we build robust, scalable communication systems from IP‑PBX
              solutions and IVR platforms to advanced call center
              infrastructures, tailored to meet the needs of modern enterprises
              across Africa.
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
