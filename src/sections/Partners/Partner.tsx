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
          <div className="flex animate-[slide_20s_linear_infinite] whitespace-nowrap items-center">
            {/* Duplicate partners array for infinite scroll */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 m-7"
              >
                <img
                  src={`/images/logos/${partner}`}
                  alt="Partner Logo"
                  className="h-12 sm:h-16 object-contain transition-transform duration-300 transform hover:scale-110"
                />
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
