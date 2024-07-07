import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Carousel = () => {
  const images = [
    {
      id: 1,
      title: "Fleabag",
      desc: "Series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.",
      img: "https://media.vanityfair.com/photos/5d8a774c7670e90008a636ba/master/pass/fleabag-season-2.jpg",
    },
    {
      id: 2,
      title: "Girls",
      desc: "A comedy about the experiences of a group of girls in their early 20s.",
      img: "https://static01.nyt.com/images/2023/03/19/fashion/GIRLS-REWATCH/GIRLS-REWATCH-superJumbo.jpg",
    },
    {
      id: 3,
      title: "Killing Eve",
      desc: "After a series of events, the lives of a security operative and an assassin become inextricably linked.",
      img: "https://m.media-amazon.com/images/M/MV5BZDJmODFjMzEtNTE4MS00OGViLTk4OGYtZjg3OGFhM2VlOTliXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-black p-4 md:p-8">
      <div className="relative w-full h-[300px] md:h-[459px] rounded-lg overflow-hidden">
        <img
          src={images[current].img}
          alt={images[current].title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-lg"></div>
        <div className="absolute bottom-4 md:bottom-10 left-4 md:left-20 py-4 md:py-24 text-white space-y-2 md:space-y-3">
          <div className="py-2 md:py-4">
            <h1 className="text-2xl md:text-4xl py-2 md:py-5 font-bold">{images[current].title}</h1>
            <p className="text-sm md:text-lg max-w-lg tracking-wide font-normal leading-[19.8px]">
              {images[current].desc}
            </p>
          </div>
          <div className="flex space-x-2 md:space-x-3">
            <button className="bg-[#B0EDDB] text-[#16181E] px-4 md:px-8 py-2 md:py-3 rounded-[30px] font-bold text-sm md:text-lg">
              Watch
            </button>
            <div className="bg-white bg-opacity-50 gap-2 md:gap-4 text-[#F9F9F9] px-3 md:px-4 py-2 rounded-2xl flex items-center justify-center">
              <button className="text-sm md:text-xl font-medium">Details</button>
              <FaAngleDown className="text-lg md:text-2xl text-[#F9F9F9] text-center" />
            </div>
            <button className="bg-white bg-opacity-50 text-[#F9F9F9] text-xl md:text-2xl px-3 md:px-4 py-1 md:py-2 rounded">
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 md:bottom-12 bg-slate-500 gap-1 md:gap-2 p-1 md:p-2 px-2 md:px-3 bg-opacity-10 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2"
        style={{ borderRadius: "20px" }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full cursor-pointer ${
              index === current ? "bg-[#B0EDDB]" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>

      {!isMobile && (
        <>
          {current !== 0 && (
            <div className="absolute top-1/2 left-4 md:left-12 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="text-white text-xl md:text-2xl px-2 md:px-3 py-1 rounded-full"
              >
                <GrFormPrevious className="text-xl md:text-2xl" />
              </button>
            </div>
          )}
          {current !== images.length - 1 && (
            <div className="absolute top-1/2 right-4 md:right-12 transform -translate-y-1/2">
              <button
                onClick={handleNext}
                className="text-white text-xl md:text-2xl px-2 md:px-3 py-1 rounded-full"
              >
                <MdNavigateNext className="text-xl md:text-2xl" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carousel;