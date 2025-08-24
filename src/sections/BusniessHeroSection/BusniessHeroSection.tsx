import { Button } from "../../components";
import { Users } from "lucide-react";

const BusniessHeroSection = () => {
  return (
    <>
      {/* Business Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 py-8 lg:py-0">
        {/* Left Content */}
        <div className="flex-1 lg:ml-8 max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
          <div className="inline-block px-3 sm:px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            🤝 Building Business Ecosystem
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            <span className="text-orange-500">Connect.</span>
            <br />
            <span className="text-orange-500">Collaborate.</span>
            <br />
            <span className="text-orange-500">Co-create.</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            SUMS Nepal invites organizations—private companies, NGOs, social
            enterprises, industry associations—to collaborate and build
            workforce innovation together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
              Join Ecosystem
            </Button>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="flex-1 w-full max-w-lg lg:max-w-[600px] mx-auto lg:mx-0">
          <div className="relative">
            {/* Base Image */}
            <img
              src="/images/hero_right.png"
              alt="Business ecosystem collaboration"
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />

            {/* Overlay Collaboration Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200 max-w-[280px]">
              {/* Grid of participants */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
                  >
                    <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                  </div>
                ))}
              </div>
              {/* Active Collaboration Box */}
              <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Live Collaboration
                  </p>
                  <p className="text-sm text-gray-600">24 participants active</p>
                </div>
              </div>
            </div>

            {/* Floating Stat */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-orange-500">
                200+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Organizations Engaged
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusniessHeroSection;
