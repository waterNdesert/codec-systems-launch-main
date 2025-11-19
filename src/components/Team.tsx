import KayodeAkintundeImg from "@/assets/Team/KayodeAkintunde.png";
import GraceOnuohaImg from "@/assets/Team/GraceOnuoha.png";
import AbiodunOgunjobiImg from "@/assets/Team/AbiodunOgunjobi.jpg";
import TobiOloladeImg from "@/assets/Team/TobiOlolade.png";
import TobiBismarkImg from "@/assets/Team/TobiBismark.png";

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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-codec-mediumGray max-w-2xl mx-auto">
            Experienced professionals driving innovation in fintech and
            communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-codec-black mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
