"use client";

import { useState, useRef } from "react";

import {
  Play,
  Pause,
  PlayCircle,
  Minimize2,
  Maximize2,
  X,
  Scissors,
} from "lucide-react";
import { stats, videos } from "./AcademiaInActionDatas";

const AcademiaInAction = () => {
  const mainVideo = videos.find((video) => video.large);
  const otherVideos = videos.filter((video) => !video.large);

  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>({});
  const [minimizedVideos, setMinimizedVideos] = useState<{
    [key: string]: boolean;
  }>({});
  const [maximizedVideo, setMaximizedVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const toggleVideo = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideos[videoId]) {
      video.pause();
      setPlayingVideos((prev) => ({ ...prev, [videoId]: false }));
    } else {
      video.play();
      setPlayingVideos((prev) => ({ ...prev, [videoId]: true }));
    }
  };

  const toggleMinimize = (videoId: string) => {
    setMinimizedVideos((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  const toggleMaximize = (videoId: string) => {
    if (maximizedVideo === videoId) {
      setMaximizedVideo(null);
    } else {
      setMaximizedVideo(videoId);
    }
  };

  const closeMaximized = () => {
    setMaximizedVideo(null);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {maximizedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={closeMaximized}
              className="absolute top-4 left-4 z-10 w-12 h-12 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-200 shadow-lg"
            >
              <Scissors className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={closeMaximized}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <video
              src={
                maximizedVideo === "main"
                  ? mainVideo?.src
                  : otherVideos[Number.parseInt(maximizedVideo.split("-")[1])]
                      ?.src
              }
              className="w-full h-full object-contain"
              controls
              autoPlay
            />
          </div>
        </div>
      )}

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-200/40 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300/35 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient bg-300% bg-size-300">
              Academia in Action
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg sm:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Discover how SUMS transforms educational experiences through real
            stories and innovative solutions
          </p>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Watch our collection of inspiring videos showcasing student success,
            faculty excellence, and industry partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {mainVideo && (
            <div
              className={`group transition-all duration-500 ${
                minimizedVideos["main"]
                  ? "lg:col-span-1 scale-75 opacity-60"
                  : ""
              }`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>

                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button
                    onClick={() => toggleMinimize("main")}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    <Minimize2 className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    onClick={() => toggleMaximize("main")}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    <Maximize2 className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                <div className="relative">
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${mainVideo.gradient} flex items-center justify-center overflow-hidden cursor-pointer`}
                    onClick={() => toggleVideo("main")}
                  >
                    <video
                      //@ts-ignore
                      ref={(el) => (videoRefs.current["main"] = el)}
                      src={mainVideo.src}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      controls={false}
                      playsInline
                      poster={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(
                        mainVideo.title
                      )}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                    <button
                      className="relative z-10 w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white hover:scale-125 transition-all duration-300 group-hover:shadow-blue-500/25"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVideo("main");
                      }}
                    >
                      {playingVideos["main"] ? (
                        <Pause
                          className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300"
                          fill="currentColor"
                        />
                      ) : (
                        <Play
                          className="w-8 h-8 text-blue-600 ml-1 group-hover:text-purple-600 transition-colors duration-300"
                          fill="currentColor"
                        />
                      )}
                    </button>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">
                          {mainVideo.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {mainVideo.description}
                        </p>
                        <div className="flex items-center mt-3 text-xs text-gray-500">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Featured Video
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherVideos.map((video, index) => (
              <div
                key={index}
                className={`group transition-all duration-500 ${
                  minimizedVideos[`video-${index}`] ? "scale-50 opacity-40" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-400 transform group-hover:scale-105 group-hover:-translate-y-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-400 blur-lg"></div>

                  <div className="absolute top-2 right-2 z-20 flex gap-1">
                    <button
                      onClick={() => toggleMinimize(`video-${index}`)}
                      className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
                    >
                      <Minimize2 className="w-3 h-3 text-gray-700" />
                    </button>
                    <button
                      onClick={() => toggleMaximize(`video-${index}`)}
                      className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
                    >
                      <Maximize2 className="w-3 h-3 text-gray-700" />
                    </button>
                  </div>

                  <div className="relative">
                    <div
                      className={`relative aspect-video bg-gradient-to-br ${video.gradient} flex items-center justify-center overflow-hidden cursor-pointer`}
                      onClick={() => toggleVideo(`video-${index}`)}
                    >
                      <video
                        //@ts-ignore

                        ref={(el) => (videoRefs.current[`video-${index}`] = el)}
                        src={video.src}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        controls={false}
                        playsInline
                        poster={`/placeholder.svg?height=300&width=400&query=${encodeURIComponent(
                          video.title
                        )}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                      <button
                        className="w-14 h-14 relative z-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group-hover:shadow-xl"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVideo(`video-${index}`);
                        }}
                      >
                        {playingVideos[`video-${index}`] ? (
                          <Pause
                            className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                            fill="currentColor"
                          />
                        ) : (
                          <Play
                            className="w-5 h-5 text-gray-700 ml-0.5 group-hover:text-blue-600 transition-colors duration-300"
                            fill="currentColor"
                          />
                        )}
                      </button>
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {video.description}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        Available Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-blue-100/50 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-8">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-${stat.color} to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.count}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                  <div
                    className={`w-12 h-0.5 bg-gradient-to-r from-${stat.color} to-purple-400 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiaInAction;
