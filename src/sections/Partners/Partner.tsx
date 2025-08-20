import { partners } from "./Partners";


const Partner = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          They Trust Us
        </h2>
        <p className="text-gray-600 mb-8">
          Leading organizations that trust our platform
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-[slide_20s_linear_infinite] whitespace-nowrap">
            {/* Duplicate partners array for infinite scroll */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 text-2xl sm:text-3xl font-bold text-gray-400 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Partner;
