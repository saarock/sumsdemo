import { Button } from '../../components';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Cities = () => {
  const benefits = [
    "Traffic, waste, governance solutions",
    "Youth solve real issues",
    "Cost-effective pilots",
    "Culture of innovation & entrepreneurship",
    "Local talent for local jobs",
    "Increased employment & sustainable growth",
    "Skilled graduates for emerging industries"
  ];

  return (
    <>
      {/* For Cities Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-3 sm:px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                FOR CITIES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="text-purple-600">Smarter Solutions</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                Harness the energy and creativity of Nepal's youth to solve
                urban challenges. Get innovative solutions at a fraction of
                traditional consulting costs.
              </p>

              {/* Dynamic Benefits List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div className="flex items-center gap-3 justify-center lg:justify-start" key={index}>
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 text-base sm:text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Success Story */}
              {/* <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-purple-600 mb-2">
                  Success Story
                </h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  <span className="font-semibold text-purple-600">
                    Biratnagar:
                  </span>{" "}
                  Student-developed traffic management system reduced congestion
                  by 15% in pilot areas.
                </p>
              </div> */}

              {/* Build Your City Button */}
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
                Build Your City
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none order-first lg:order-last">
              <img
                src="./images/young.jpg"
                alt="Young people with tablet and city skyline"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cities;
