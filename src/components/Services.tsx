import {
  Phone,
  CreditCard,
  Radio,
  Lightbulb,
  Network,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Phone,
    title: "Call/Contact Centre",
    description:
      "Full-featured systems for SMEs & enterprises, powered by our custom solution Recallo, with a light version RecalloLite.",
  },
  {
    icon: CreditCard,
    title: "CodecPay",
    description:
      "Fast & secure payment gateway - the fastest in Africa for seamless transactions.",
  },
  {
    icon: Radio,
    title: "IVR Systems",
    description:
      "Interactive voice response with multilingual capabilities for enhanced customer experience.",
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    description:
      "Voice solutions, database-driven IVRs, Asterisk IP-PBX customizations and expert guidance.",
  },
  {
    icon: Network,
    title: "IP-PBX Solutions",
    description:
      "Unified communications with voicemail-to-email, video calling, and advanced features.",
  },
  {
    icon: Headphones,
    title: "VOIP",
    description:
      "High-quality VoIP & SIP trunking services for reliable business communications.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-codec-lightGray/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-4">
            Our{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-codec-darkGreen bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-codec-mediumGray max-w-2xl mx-auto">
            Comprehensive voice and communication solutions tailored to your
            business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-4 bg-gradient-to-br from-codec-lightGray to-primary/10 group-hover:from-primary/20 group-hover:to-primary/30 rounded-xl transition-all duration-300 shadow-md"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-codec-black mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-codec-mediumGray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
