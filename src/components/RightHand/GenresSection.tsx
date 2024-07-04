import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export const GenresSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    {
      title: "Stand-Up",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/unknown-2-1631561212.jpeg",
    },
    {
      title: "Based on True Stories",
      image:
        "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg",
    },
    {
      title: "Popular on Netflix",
      image:
        "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg",
    },
    {
      title: "Dark Comedies",
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
    <div className="bg-[#1A1A19] py-8 h-full w-full">
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full px-8 items-center mb-4">
          <h3 className="text-white text-2xl font-bold" style={{lineHeight:"24px"}}>Genres</h3>
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
        <div className="flex flex-wrap gap-4 justify-center w-full px-8">
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

const MovieCard = ({ movie, isActive }: any) => (
  <div
    className={`w-[calc(50%-1rem)] transition-all duration-300`}
    style={{
      backgroundImage: `url(${movie.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "200px",
      borderRadius: "0.75rem",
    }}
  >
    <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-md">
      <h4 className="text-white text-[18px] font-bold leading-5">{movie.title}</h4>
    </div>
  </div>
);

export default GenresSection;
