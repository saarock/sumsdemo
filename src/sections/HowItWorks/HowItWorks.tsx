import { stepsData } from "./StepsData";

const HowItWorks = () => {
  return (
    <>
      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
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
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>

            {/* Vertical Accent Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent transform -translate-x-1/2 z-10 opacity-50"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-20">
              {stepsData.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    <div className="relative mb-4 sm:mb-6">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${
                          step.active
                            ? "bg-gradient-to-br from-orange-500 to-orange-600"
                            : "bg-gray-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                            step.active
                              ? "text-white"
                              : "text-gray-600 group-hover:text-white"
                          }`}
                        />
                      </div>

                      {/* Active Indicator */}
                      {step.active && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
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
      </section>
    </>
  );
};

export default HowItWorks;
