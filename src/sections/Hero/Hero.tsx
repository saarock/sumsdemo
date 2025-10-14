"use client";
import React from "react";
import { Users } from "lucide-react";
import { Button } from "../../components";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 py-8 lg:py-0 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/images/hero_right.png)` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      {/* Left Content */}
      <div className="flex-1 lg:ml-8 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 relative z-10">
        <div className="inline-block px-3 sm:px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          🚀 Empowering Learning
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          <span className="text-orange-500">Transforming Education</span>
          <br />
          <span className="text-orange-500">Through Innovation</span>
        </h1>

        <p className="text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          SUMS bridges academia and industry to build future-ready learners through a
          digital ecosystem powered by Finnish innovation and global collaboration.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="flex-1 w-full max-w-lg lg:max-w-[600px] mx-auto lg:mx-0 relative z-10">
        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
          {/* You can optionally add back your images and cards here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
