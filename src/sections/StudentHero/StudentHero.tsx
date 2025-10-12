import { ArrowRight } from "lucide-react";
import { Button } from "../../components";

const StudentHero = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-[500px] lg:min-h-[650px] px-4 sm:px-6 py-8 lg:py-0 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/images/student_learning.JPG)` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 relative z-10 max-w-2xl">
        <div className="inline-block px-3 sm:px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          🚀 Transforming Education
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Launch Your <span className="text-orange-500">Career Now</span>
        </h1>

        <p className="text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
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

      {/* Right Visual Section */}
      <div className="flex-1 w-full max-w-lg lg:max-w-[600px] mx-auto lg:mx-0 relative z-10">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
          {/* Base Image */}
          {/* <img
            src="/images/hero_left.png"
            alt="Career Launch"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default StudentHero;
