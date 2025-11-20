import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductNav from "@/components/ProductNav";
import sivvarImage from "@/assets/Products/fullMock.png";
import SivvarLogo from "@/assets/Products/sivvar.png";

const Sivvar = () => {
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
                  src={SivvarLogo}
                  alt="Sivvar logo"
                  loading="lazy"
                  className="h-14 w-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-codec-black leading-tight">
                  <span className="text-primary"></span>
                </h1>
              </div>

              <h2 className="text-3xl font-bold text-codec-darkGray">
                Discover Nigerian Businesses with Data Telco Intelligence
              </h2>

              <div className="space-y-4 text-lg text-codec-mediumGray leading-relaxed">
                <p>
                  Sivvar is your gateway to discovering over 10,000 Nigerian
                  businesses through our innovative data telco application.
                  Whether you're looking for potential clients, partners, or
                  market intelligence, Sivvar provides comprehensive business
                  information at your fingertips.
                </p>

                <p>
                  Our platform aggregates data from multiple sources to give you
                  a complete picture of the Nigerian business landscape. Search
                  by industry, location, company size, and more. Get detailed
                  profiles including contact information, business activities,
                  and key decision makers.
                </p>

                <p>
                  Sivvar isn't just a directory – it's a business intelligence
                  tool. Track industry trends, identify emerging opportunities,
                  and make data-driven decisions about your market strategy. The
                  mobile-first design ensures you can access critical business
                  information anywhere, anytime.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={sivvarImage}
                alt="Sivvar Business Directory"
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

export default Sivvar;
