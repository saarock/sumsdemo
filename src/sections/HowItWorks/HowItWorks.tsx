import { useCallback } from "react";
import { stepsData } from "./StepsData";
import { useHowItWorks } from "../../context/HowItWorksContext";
import AssessAndAlignDetailed from "../AssessAndAlignDetailed/AssessAndAlignDetailed";
import Connext from "../Connect/Connext";
import Upskill from "../Upskill/Upskill";
import Place from "../Place/Place";

const HowItWorks = () => {
  const { one, two, three, four, currentStateNum } = useHowItWorks();

  const ActOnClick = useCallback((position: number) => {
    switch (position) {
      case 1:
        one();
        break;
      case 2:
        two();
        break;
      case 3:
        three();
        break;
      case 4:
        four();
        break;
      default:
        one();
        break;
    }
  }, []);

  return (
    <>
      {/* How It Works Section */}
      <section className="sm:py-16 lg:py-20 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-16 max-w-4xl mx-auto">
            Four strategic steps to transform careers and communities. Click
            each step to explore the journey!
          </p>

          {/* Process Flow */}
          <div className="relative">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden lg:block absolute left-0 right-0 h-1.5 bg-gray-200 transform -translate-y-1/2 z-0 top-12">
              <div
                className="bg-gradient-to-br from-orange-600 to-orange-500 h-1.5 top-0 left-0"
                style={{
                  position: "absolute",
                  borderRadius: "3rem",

                  width:
                    currentStateNum === 1
                      ? "25%"
                      : currentStateNum === 2
                      ? "50%" // Define the width for when currentStateNum is 2
                      : currentStateNum === 3
                      ? "75%" // Define the width for when currentStateNum is 3
                      : currentStateNum === 4
                      ? "100%" // Define the width for when currentStateNum is 4
                      : "100%", // Default width if none of the conditions are met

                  transition: "width 0.3s ease-in-out", // Smooth transition for width change
                }}
              ></div>
            </div>

            {/* Vertical Accent Line */}
            {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent transform -translate-x-1/2 z-10 opacity-50"></div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-20">
              {stepsData.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="group cursor-pointer flex flex-col items-center"
                    onClick={() => ActOnClick(index + 1)}
                  >
                    <div className="relative mb-4 sm:mb-6">
                      <Icon
                        className={`w-2 h-2 sm:w-10 sm:h-10   ${
                          index + 1 <= currentStateNum
                            ? "text-orange-500"
                            : "text-gray-600 "
                        }`}
                      />

                      {/* Active Indicator */}
                      {/* {step.active && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )} */}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
           {currentStateNum === 1 && <AssessAndAlignDetailed />}
      {currentStateNum === 2 && <Connext />}
      {currentStateNum === 3 && <Upskill />}
      {currentStateNum === 4 && <Place />}
      {}
      </section>
   
    </>
  );
};

export default HowItWorks;
