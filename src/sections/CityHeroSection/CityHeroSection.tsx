import { useCallback } from "react";
import { Button } from "../../components";

export const CityHeroSection = () => {
  const actOnEvents = useCallback((id: string) => {
    if (id === "1") {
      window.scrollBy({
        top: 700,
        behavior: "smooth",
      });
    } else if (id === "2") {
      window.scrollBy({
        top: 3100,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 py-8 lg:py-0 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/images/city.jpg)` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Left Content */}
      <div className="flex-1 lg:ml-8 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 relative z-10">
        <div className="inline-block px-3 sm:px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          🌆 Empowering Cities
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          <span className="text-orange-500">Transform Your City</span>
          <br />
          <span className="text-orange-500">Into an Innovation Hub</span>
        </h1>

        <p className="text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          Retain talent, create jobs, and solve local challenges with
          innovation-driven initiatives powered by collaboration and smart
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <Button
            onClick={() => actOnEvents("1")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
          >
            See How It Works
          </Button>
          <Button
            onClick={() => actOnEvents("2")}
            className="bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="flex-1 w-full max-w-lg lg:max-w-[600px] mx-auto lg:mx-0 relative z-10">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
          {/* Base Image (optional — you can replace or keep it same as background) */}
          {/* <img
            src="/images/futuristic-modern-stadium-architecture-with-orange.jpg"
            alt="City Innovation Hub"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
          /> */}

          {/* Floating Stat Example (optional, can be enabled later) */}
          {/* <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-white/30">
            <div className="text-lg sm:text-2xl font-bold text-orange-500">50+</div>
            <div className="text-xs sm:text-sm text-gray-600">Cities Connected</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
