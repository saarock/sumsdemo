import { stats, videos } from "./AcademiaInActionDatas";

const AcademiaInAction = () => {
  const mainVideo = videos.find((video) => video.large);
  const otherVideos = videos.filter((video) => !video.large);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Academia in Action
          </span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Discover how SUMS transforms educational experiences through real
          stories and innovative solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Main Featured Video */}
          {mainVideo && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div
                className={`relative aspect-video bg-gradient-to-br ${mainVideo.gradient} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <button className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group">
                  <div
                    className={`w-0 h-0 border-l-[16px] border-l-${mainVideo.buttonColor} border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1`}
                  ></div>
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {mainVideo.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {mainVideo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`relative aspect-video bg-gradient-to-br ${video.gradient} flex items-center justify-center`}
                >
                  <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all duration-300">
                    <div
                      className={`w-0 h-0 border-l-[12px] border-l-${video.buttonColor} border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1`}
                    ></div>
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-2xl sm:text-3xl font-bold text-${stat.color} mb-1`}
              >
                {stat.count}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademiaInAction;
