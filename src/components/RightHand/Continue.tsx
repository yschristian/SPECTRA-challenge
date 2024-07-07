import React, { useState } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { IoMdThumbsDown } from "react-icons/io";

interface Movie {
  title: string;
  episodesLeft: number;
  image: string;
  progress: number;
}

interface MovieCardProps {
  movie: Movie;
  isActive: boolean;
}

export const ContinueSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies: Movie[] = [
    {
      title: "Sex in the City",
      episodesLeft: 1,
      image: "https://hips.hearstapps.com/hmg-prod/images/unknown-2-1631561212.jpeg",
      progress: 80,
    },
    {
      title: "You",
      episodesLeft: 5,
      image: "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg",
      progress: 80,
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
          <h3 className="text-white text-2xl font-bold" style={{ lineHeight: "24px" }}>
            Continue
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex -ml-[100px]">
              <button
                onClick={prevMovie}
                disabled={currentIndex === 0}
                className={`text-white text-2xl p-1 rounded transition-colors ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#555]'
                }`}
              >
                <GrFormPrevious />
              </button>
              <button
                onClick={nextMovie}
                disabled={currentIndex === movies.length - 1}
                className={`text-white text-2xl p-1 rounded transition-colors ${
                  currentIndex === movies.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#555]'
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
                currentIndex === movies.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#555]'
              }`}
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-hidden w-full px-8">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} isActive={index === currentIndex} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, isActive }) => (
  <div
    className={`bg-[#16181E] border-[#16181E] border-[1px] p-4 rounded-lg w-[250px] transition-all duration-300 ${
      isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
    }`}
  >
    <div className="flex">
      <img
        src={movie.image}
        alt={movie.title}
        className="h-24 w-16 object-cover rounded-lg mb-2"
      />
      <div className="ml-4">
        <h4 className="text-white py-2 text-[16px] font-bold leading-4">
          {movie.title}
        </h4>
        <p className="text-[#F9F9F9] text-sm my-3 leading-[14px] font-normal">
          {movie.episodesLeft} Episode{movie.episodesLeft !== 1 ? 's' : ''} left
        </p>
        <div className="w-[125px] bg-[#F9F9F9] h-1">
          <div className="bg-[#B0EDDB] h-full" style={{ width: `${movie.progress}%` }}></div>
        </div>
      </div>
    </div>
    <div className="flex gap-8 mt-4">
      <div className="bg-[#43454A] h-[40px] w-[55px] rounded-2xl p-3">
        <IoMdThumbsDown className="text-[#F9F9F9] w-[20px] h-[20px]" />
      </div>
      <button className="bg-[#B0EDDB] h-[40px] pt-[13px] pr-[41px] pb-[13px] pl-[41px] text-[#16181E] w-full rounded-[30px] font-extrabold text-sm">
        Watch
      </button>
    </div>
  </div>
);

export default ContinueSection;
