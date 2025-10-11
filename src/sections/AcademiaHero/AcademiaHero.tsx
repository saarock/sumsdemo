"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components";

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
      className="relative flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[650px] px-4 sm:px-6 py-8 lg:py-0 bg-center bg-no-repeat bg-cover justify-center"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      {/* Left Content */}
      <div className="flex-1 lg:ml-8 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 relative z-10">
        <div className="inline-block px-3 sm:px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          {heroData.tagline}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
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
            className="text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
          >
            {desc}
          </p>
        ))}

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
            {heroData.buttonText}
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="flex-1 w-full max-w-lg lg:max-w-[600px] mx-auto lg:mx-0 relative z-10">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
          {/* Base Image */}
          <img
            src="/images/hero_left.png"
            alt="Education ecosystem"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
