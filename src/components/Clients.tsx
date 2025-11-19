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
    logo: "https://via.placeholder.com/150x150?text=Fortis",
  },
];

const Clients = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-codec-lightGray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-codec-mediumGray max-w-2xl mx-auto">
            Delivering excellence to leading organizations across Africa
          </p>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-32 object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
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
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
