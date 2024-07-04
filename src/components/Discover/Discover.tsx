import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import DiscoverScreen from './DiscoverScreen';

const Discover = () => {
  const discover = [
    { id: 1, title: "Movie" },
    { id: 2, title: "TV Show" },
    { id: 3, title: "Anime" },
    { id: 4, title: "Cartoon" },
    { id: 5, title: "Latest" },
    { id: 6, title: "Action" },
    { id: 7, title: "Drama" },
    { id: 8, title: "Crime" },
    { id: 9, title: "Art Haus" },
    { id: 10, title: "Comedy" },
    { id: 11, title: "War" },
    { id: 12, title: "Fantasy" },
    { id: 13, title: "Horror" },
    { id: 14, title: "Stand Up" },
    { id: 15, title: "Travel" },
    { id: 16, title: "Biography" },
    { id: 17, title: "Musical" },
    { id: 18, title: "Sci Fi" },
    { id: 19, title: "True Crime" },
    { id: 20, title: "Detective" },
  ];

  const streamingServices = [
    "Netflix", "HBO", "Disney+", "Amazon Prime", "Apple TV", "Hulu",
  ];

  return (
    <div className="bg-black min-h-screen py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mb-10">
          {discover.map((item) => (
            <button
              key={item.id}
              className="text-[#82827D] border border-[#82827D] py-1 px-2 md:py-2 md:px-4 rounded-full text-xs md:text-sm"
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-44">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
            {streamingServices.map((service) => (
              <div key={service} className="text-[#41413E] text-xl md:text-2xl lg:text-4xl font-bold">
                {service}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <SelectButton text="Genre" />
            <SelectButton text="Director" className="w-[180px] md:w-[223px]" />
            <SelectButton text="Year" />
            <button className="bg-[#B0EDDB] text-[#16181E] py-2 px-6 md:py-3 md:px-10 rounded-[30px] font-extrabold text-base md:text-lg">
              Go !
            </button>
          </div>
        </div>
      </div>
      <DiscoverScreen />
    </div>
  );
};

const SelectButton = ({ text, className = "" }:any) => (
  <div className={`bg-black flex justify-center items-center w-[120px] h-[40px] md:w-[126px] md:h-[48px] text-[#82827D] border border-[#82827D] py-2 px-4 rounded-[30px] text-sm md:text-base ${className}`}>
    <span>{text}</span>
    <FaAngleDown className="ml-2" />
  </div>
);

export default Discover;