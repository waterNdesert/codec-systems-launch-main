import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductNav from "@/components/ProductNav";
import verivoImage from "@/assets/Products/verivoImg.png";
import VerivoLogo from "@/assets/Products/VerivoLogo.png";

const Verivo = () => {
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
                  src={VerivoLogo}
                  alt="Verivo logo"
                  className="h-14 w-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                  <span className="text-primary"></span>
                </h1>
              </div>

              <h2 className="text-3xl font-bold text-codec-darkGray">
                The Ultimate Multichannel Solution for Seamless OTP Delivery
              </h2>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  Verivo revolutionizes OTP delivery with its intelligent
                  multichannel approach. No more relying on a single channel and
                  hoping it works – Verivo automatically selects the best
                  delivery method based on user preferences, network conditions,
                  and historical success rates.
                </p>

                <p>
                  Whether through SMS, voice call, email, WhatsApp, or push
                  notification, Verivo ensures your users receive their
                  authentication codes quickly and reliably. The system includes
                  smart fallback mechanisms – if one channel fails, it
                  automatically tries the next most reliable option.
                </p>

                <p>
                  Advanced security features protect against fraud and abuse.
                  Rate limiting, geographic restrictions, and anomaly detection
                  work together to prevent unauthorized access attempts.
                  Comprehensive analytics give you insights into delivery
                  performance, helping you optimize costs while maintaining
                  excellent user experience.
                </p>

                <p>
                  Integration is straightforward with our RESTful API and SDKs
                  for popular programming languages. Verivo scales automatically
                  to handle traffic spikes, ensuring your authentication system
                  never becomes a bottleneck. Templates and customization
                  options let you maintain brand consistency across all
                  communication channels.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={verivoImage}
                alt="Verivo OTP Solution"
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

export default Verivo;
