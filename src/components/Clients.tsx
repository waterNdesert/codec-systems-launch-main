import AeroContractorsLogo from "@/assets/Clients/AeroContractors.png";
import DeloitteLogo from "@/assets/Clients/Deloitte.png";
import VentureGardenLogo from "@/assets/Clients/ventureGarden.png";
import EtranzactLogo from "@/assets/Clients/etranzact.png";
import AveonLogo from "@/assets/Clients/aveonoffshore.png";
import BanwoLogo from "@/assets/Clients/BanwoandIghodalo.png";
import CartterLogo from "@/assets/Clients/cartterbiggs.png";
import AlatLogo from "@/assets/Clients/alat.png";
import FmdqLogo from "@/assets/Clients/fmdq.png";
import GalaxyLogo from "@/assets/Clients/galaxybackbone.png";
import FortisLogo from "@/assets/Clients/fortis.png";
import { motion } from "framer-motion";
import { useState } from "react";

const clients = [
  { name: "Aero Contractors", logo: AeroContractorsLogo },
  { name: "Deloitte Nigeria", logo: DeloitteLogo },
  { name: "V Garden (VGG)", logo: VentureGardenLogo },
  { name: "Deloitte Ghana", logo: DeloitteLogo },
  { name: "Alat", logo: AlatLogo },
  { name: "Galaxy", logo: GalaxyLogo },
  {
    name: "Etranzact",
    logo: EtranzactLogo,
  },
  {
    name: "Banwo & Ighodalo",
    logo: BanwoLogo,
  },
  { name: "FMDQ Group", logo: FmdqLogo },
  {
    name: "Aveon Offshore",
    logo: AveonLogo,
  },
  {
    name: "Cartter Biggs",
    logo: CartterLogo,
  },
  {
    name: "Fortis Mobile Money",
    logo: FortisLogo,
  },
];

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-codec-lightGray/30 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
            Trusted by <span className="text-primary bg-gradient-to-r from-primary to-codec-darkGreen bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-codec-mediumGray max-w-2xl mx-auto">
            Delivering excellence to leading organizations across Africa
          </p>
        </motion.div>

        {/* Infinite Scroll Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex ${isPaused ? '' : 'animate-scroll'}`}>
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-32 h-32 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
