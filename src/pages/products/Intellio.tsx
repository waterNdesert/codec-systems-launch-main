import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductNav from "@/components/ProductNav";
import intellioImage from "@/assets/Products/intelliokg.png";
import IntellioLogo from "@/assets/Products/e-intellio-logo.png";

const Intellio = () => {
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
                  src={IntellioLogo}
                  alt="e-Intellio logo"
                  className="h-14 w-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                  <span className="text-primary"></span>
                </h1>
              </div>

              <h2 className="text-3xl font-bold text-codec-darkGray">
                Advanced Traffic & Security Data Telco System
              </h2>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  e-Intellio represents the cutting edge of telco security and
                  traffic management. Designed for telecommunications providers
                  and enterprises with complex network infrastructure, it
                  provides comprehensive visibility into network traffic
                  patterns and potential security threats.
                </p>

                <p>
                  Real-time monitoring capabilities allow you to detect
                  anomalies, prevent fraud, and optimize network performance.
                  Advanced analytics help you understand usage patterns, predict
                  capacity needs, and make informed infrastructure decisions.
                </p>

                <p>
                  The security module includes sophisticated threat detection
                  algorithms, automated alert systems, and detailed forensic
                  tools for investigating incidents. Integration with existing
                  security infrastructure ensures e-Intellio enhances rather
                  than replaces your current systems. With compliance reporting
                  built-in, meeting regulatory requirements is straightforward.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={intellioImage}
                alt="e-Intellio Traffic & Security"
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

export default Intellio;
