import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export const CollectionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    {
      title: "Girl's Night In",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/unknown-2-1631561212.jpeg",
    },
    {
      title: "Award Winning",
      image:
        "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg",
    },
  ];

  const nextMovie = () => {
    if (currentIndex < movies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevMovie = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#1A1A19] py-8 w-full">
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full px-8 items-center mb-4">
          <h3 className="text-white text-2xl font-bold" style={{lineHeight:"24px"}}>Collections</h3>
          <div className="flex items-center gap-4">
            <div className="flex -ml-[100px]">
              <button
                onClick={prevMovie}
                disabled={currentIndex === 0}
                className={`text-white text-2xl p-1 rounded transition-colors ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#555]"
                }`}
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={nextMovie}
                disabled={currentIndex === movies.length - 1}
                className={`text-white text-2xl p-1 rounded transition-colors ${
                  currentIndex === movies.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#555]"
                }`}
              >
                <MdNavigateNext />
              </button>
            </div>
            <h3 className="text-white text-lg">See More</h3>
            <button
              onClick={nextMovie}
              disabled={currentIndex === movies.length - 1}
              className={`text-white text-2xl p-1 rounded transition-colors ${
                currentIndex === movies.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#555]"
              }`}
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-hidden w-full px-8">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ movie, isCurrent }: any) => (
  <div
    className={` border-[#16181E] w-[250px] transition-all duration-300 `}
  >
    {/* ${isCurrent ? 'opacity-100 scale-100' : 'opacity-50 scale-95'} */}
    <div
      className="flex rounded-md p-3"
      style={{
        backgroundImage: `url(${movie.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="ml-4 ">
        <h4 className="text-white text-[16px] mb-24 font-bold leading-4" style={{lineHeight:"16px"}}>
          {movie.title}
        </h4>
        <div className="flex gap-8 mt-4">
          <div className="bg-[#F9F9F9] border-[2p] h-[40px] w-[55px] rounded-2xl p-3 bg-opacity-50 flex items-center justify-center">
            <IoIosAdd className="text-[#F9F9F9] w-[32px] h-[32px] text-lg" />
          </div>
          <button className="bg-[#B0EDDB] h-[40px] pt-[13px] pr-[41px] pb-[13px] pl-[41px] text-[#16181E] w-full rounded-[30px] font-extrabold text-sm">
            Watch
          </button>
        </div>
      </div>
    </div>
  </div>
);
