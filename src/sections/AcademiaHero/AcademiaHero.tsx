import React from "react";
import { Button } from "../../components";

const heroData = {
  title: [
    { text: "SUMS Nepal:", gradient: null },
    { text: "Powering", gradient: "from-orange-500 to-orange-600" },
    { text: "Education", gradient: "from-gray-900 to-gray-700" },
  ],
  description: [
    "SUMS Nepal is an integrated technology service platform designed to power the next generation of education in Nepal. By combining essential academic and administrative tools into a single, user-friendly",
    "system & services SUMS addresses the core challenges faced by Higher Education Institute and prepares students for the demands of the global market.",
  ],
  highlight:
    "🇳🇵 Nepal Focused Design - Specifically developed to align with operational realities and accreditation requirements of Nepali institutions.",
  buttonText: "GET IN TOUCH",
};

const AcademiaHero = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Dynamic Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {heroData.title.map((part, index) => (
            <React.Fragment key={index}>
              {part.gradient ? (
                <span
                  className={`bg-gradient-to-r ${part.gradient} bg-clip-text text-transparent`}
                >
                  {part.text}
                </span>
              ) : (
                part.text
              )}
              <br />
            </React.Fragment>
          ))}
        </h1>

        {/* Dynamic Descriptions */}
        {heroData.description.map((desc, index) => (
          <p
            key={index}
            className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            {desc}
          </p>
        ))}

        {/* Highlight */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-orange-100 shadow-lg">
          <p className="text-orange-600 text-base sm:text-lg font-medium">
            {heroData.highlight}
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
            <span className="relative z-10">{heroData.buttonText}</span>
            {/* <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 z-" /> */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcademiaHero;
