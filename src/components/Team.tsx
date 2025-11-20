import KayodeAkintundeImg from "@/assets/Team/KayodeAkintunde.png";
import GraceOnuohaImg from "@/assets/Team/GraceOnuoha.png";
import AbiodunOgunjobiImg from "@/assets/Team/AbiodunOgunjobi.jpg";
import TobiOloladeImg from "@/assets/Team/TobiOlolade.png";
import TobiBismarkImg from "@/assets/Team/TobiBismark.png";
import { motion } from "framer-motion";

const team = [
  {
    name: "Kayode Akintunde",
    role: "CEO | Systems Architect",
    image: KayodeAkintundeImg,
  },
  {
    name: "Grace Onuoha",
    role: "COO | Technical Team Head",
    image: GraceOnuohaImg,
  },
  {
    name: "Abiodun Ogunjobi",
    role: "Partner",
    image: AbiodunOgunjobiImg,
  },
  {
    name: "Tobi Ololade",
    role: "Lead Fintech Consultant",
    image: TobiOloladeImg,
  },
  {
    name: "Tobi Bismark",
    role: "Lead Product Supports Engineer",
    image: TobiBismarkImg,
  },
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-codec-lightGray/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-4">
            Meet Our <span className="text-primary bg-gradient-to-r from-primary to-codec-darkGreen bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-codec-mediumGray max-w-2xl mx-auto">
            Experienced professionals driving innovation in fintech and
            communications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-gray-200/50 hover:border-primary/30"
            >
              <div className="aspect-square overflow-hidden relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-codec-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center relative">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-2xl font-bold text-codec-black mb-2 relative z-10 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium relative z-10">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
