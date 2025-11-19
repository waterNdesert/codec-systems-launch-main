import { Phone, CreditCard, Radio, Lightbulb, Network, Headphones } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Call/Contact Centre",
    description:
      "Full-featured systems for SMEs & enterprises, powered by our custom solution Recalo, with a light version RecaloLite.",
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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-codec-black mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-codec-mediumGray max-w-2xl mx-auto">
            Comprehensive communication and fintech solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover-scale"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-codec-lightGray group-hover:bg-primary/10 rounded-xl transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-codec-black mb-4">
                  {service.title}
                </h3>
                <p className="text-codec-mediumGray leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
