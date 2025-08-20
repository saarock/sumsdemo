import { Button } from "../../components";
import { ArrowRight } from "lucide-react";

const StundetHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 py-8 lg:py-0 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="flex-1 lg:ml-8 max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Launch Your <span className="text-orange-500">Career Now</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            Each student gets personalized career guidance, real-world projects,
            and direct connections to top employers. Build your network, build
            your future with our comprehensive career platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
              START YOUR JOURNEY
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-[600px] mx-auto lg:mx-0">
          <div className="relative">
            <img
              src="/images/hero_right.png"
              alt="Students working together in modern office space"
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
              <div className="text-lg sm:text-2xl font-bold text-orange-500">
                95%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Job Placement Rate
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StundetHero;
