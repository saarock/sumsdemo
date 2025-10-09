import { ArrowRight } from "lucide-react";
import { Button } from "../../components";
import React from "react";

const heroData = {
  tagline: "🎓 Powering Education in Nepal",
  title: [
    { text: "SUMS:", gradient: null },
    { text: "Powering", gradient: "from-orange-500 to-orange-600" },
    { text: "Education", gradient: "from-gray-100 to-gray-300" },
  ],
  description: [
    "SUMS Nepal is an integrated technology service platform designed to power the next generation of education in Nepal.",
    "By combining essential academic and administrative tools into one user-friendly system, SUMS addresses core challenges faced by Higher Education Institutions and prepares students for the demands of the global market.",
  ],
  highlight:
    "🇳🇵 Nepal-Focused Design — specifically developed to align with operational realities and accreditation requirements of Nepali institutions.",
  buttonText: "Get In Touch",
  backgroundImage: "/images/hero_right.png",
};

export default function AcademiaHero() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[650px] px-4 sm:px-6 py-8 lg:py-0 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="flex-1 lg:ml-8 text-center lg:text-left mb-8 lg:mb-0 relative z-10 max-w-3xl">
        {/* Tagline */}
        <div className="inline-block px-3 sm:px-4 py-2 bg-orange-100/90 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-5">
          {heroData.tagline}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
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

        {/* Description */}
        {heroData.description.map((desc, index) => (
          <p
            key={index}
            className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
          >
            {desc}
          </p>
        ))}

        {/* Highlight box */}
        {/* <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 mb-8 border border-white/30 shadow-md">
          <p className="text-orange-300 text-base sm:text-lg font-medium">
            {heroData.highlight}
          </p>
        </div> */}

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
            {heroData.buttonText}
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
