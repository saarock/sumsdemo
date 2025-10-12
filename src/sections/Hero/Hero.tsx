"use client";
import React from "react";
import { Users } from "lucide-react";
import { Button } from "../../components";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center  min-h-[500px] lg:min-h-[650px] px-4 sm:px-6 py-8 lg:py-0 bg-center bg-no-repeat bg-cover justify-center"
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
          {/* Base Image */}
          {/* <img
            src="/images/hero_left.png"
            alt="Education ecosystem"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
          /> */}

          {/* Overlay Collaboration Card */}
          {/* <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/30 max-w-[280px]">
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
            <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Live Collaboration</p>
                <p className="text-sm text-gray-600">24 participants active</p>
              </div>
            </div>
          </div> */}

          {/* Floating Stat */}
          {/* <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-white/30">
            <div className="text-lg sm:text-2xl font-bold text-orange-500">
              200+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Organizations Engaged
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
