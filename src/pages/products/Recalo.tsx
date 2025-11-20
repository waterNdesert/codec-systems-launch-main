import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductNav from "@/components/ProductNav";
import recaloImage from "@/assets/Products/desktopRecallo.png";
import RecaloLogo from "@/assets/Products/RecalloLogo.png";

const Recalo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img
                  src={RecaloLogo}
                  alt="Recalo logo"
                  loading="lazy"
                  className="h-14 w-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                  <span className="text-primary"></span>
                </h1>
              </div>

              <h2 className="text-3xl font-bold text-codec-darkGray">
                API-Driven Multichannel & Multitenant Contact Centre Solution
              </h2>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  Recalo is our flagship enterprise contact center solution
                  designed for organizations that demand the highest level of
                  functionality and customization. Built with a powerful
                  API-first architecture, Recalo seamlessly integrates with your
                  existing systems.
                </p>

                <p>
                  With multichannel support including voice, SMS, email, and
                  chat, your team can manage all customer interactions from a
                  single unified platform. The multitenant architecture makes it
                  perfect for service providers managing multiple clients.
                </p>

                <p>
                  Advanced features include intelligent call routing, real-time
                  analytics, call recording, quality monitoring, and
                  comprehensive reporting dashboards. Recalo scales effortlessly
                  from small teams to enterprise-level operations with thousands
                  of agents.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={recaloImage}
                alt="Recalo Contact Center"
                loading="lazy"
                className="w-full max-w-lg h-auto levitate rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <ProductNav />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recalo;
