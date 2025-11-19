import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductNav from "@/components/ProductNav";
import recaloLiteImage from "@/assets/Products/rc-lite-image.png";
import RecalloLogo from "@/assets/Products/RecalloLogo.png";

const RecaloLite = () => {
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
                  src={RecalloLogo}
                  alt="RecaloLite logo"
                  className="h-14 w-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                  <span className="text-primary"></span>
                </h1>
              </div>

              <h2 className="text-3xl font-bold text-codec-darkGray">
                Streamlined Contact Center for Growing Businesses
              </h2>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  RecaloLite brings essential contact center capabilities to
                  small and medium-sized businesses without the complexity of
                  enterprise solutions. Perfect for teams just starting their
                  customer service journey or those who need core functionality
                  without extensive customization.
                </p>

                <p>
                  Despite its "lite" designation, RecaloLite doesn't compromise
                  on quality. You get reliable call routing, basic IVR
                  functionality, call queuing, and essential reporting features
                  – everything you need to deliver excellent customer service.
                </p>

                <p>
                  Quick to deploy and easy to use, RecaloLite gets your team up
                  and running in days, not weeks. The intuitive interface
                  requires minimal training, and our straightforward pricing
                  makes it accessible for businesses of all sizes. As your needs
                  grow, upgrading to the full Recalo platform is seamless.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={recaloLiteImage}
                alt="RecaloLite Contact Center"
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

export default RecaloLite;
