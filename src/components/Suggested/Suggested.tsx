import React from "react";
import { IoIosAdd } from "react-icons/io";

interface Image {
  id: number;
  title: string;
  star: number;
  ep: string;
  subtitle: string;
  img: string;
}

export const Suggested: React.FC = () => {
  const images: Image[] = [
    {
      id: 1,
      title: "House M.D",
      star: 4.5,
      ep: "80 Ep",
      subtitle: "Drama, Detective",
      img: "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 2,
      title: "Behind Hey Eyes",
      star: 5,
      ep: "6 Ep",
      subtitle: "Thriller",
      img: "https://m.media-amazon.com/images/M/MV5BZmY5MzYxZTItOTQyYy00MzNkLTkxNzItMGQzMDJlMTk4YzI5XkEyXkFqcGdeQWFybm8@._V1_.jpg",
    },
    {
      id: 3,
      title: "Scrubs",
      star: 5,
      ep: "76 Ep",
      subtitle: "Comedy",
      img: "https://lh4.googleusercontent.com/proxy/ovKgb-8yF3nVVBGhNPP_ieihNELHf5_YFfYOmCRhcB4U9-A_2ES6HPUeJUplHzOthGqtetoUlYabf-2EWYtlUCy9u2JU",
    },
    {
      id: 4,
      title: "Brasic",
      star: 5,
      ep: "30 Ep",
      subtitle: "Comedy, Crime",
      img: "https://m.media-amazon.com/images/M/MV5BYTEzN2QzYWMtZWViYi00NTdjLTgxOTMtYTlmMzNjNDBhOGUxXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return (
    <div className="bg-black p-4 sm:p-8">
      <div className="flex items-center mb-4 space-x-8">
        <h2
          className="text-white font-bold text-3xl sm:text-2xl"
          style={{ lineHeight: "30px" }}
        >
          Suggested for You
        </h2>
        <a
          href="#"
          className="text-gray-400 text-lg font-semibold sm:text-base "
          style={{ lineHeight: "18px" }}
        >
          See More &gt;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative bg-gray-900 rounded-lg overflow-hidden"
          >
            <img
              src={image.img}
              alt={image.title}
              className="w-full h-[298px] object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
            <div className="absolute top-1 left-4 text-white w-full pr-4">
              <div className="mb-36">
                <h3 className="text-lg sm:text-xl font-bold">{image.title}</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex text-[#B0EDDB]">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-lg sm:text-xl ${
                          i < image.star ? "text-[#B0EDDB]" : "text-gray-600"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-4 sm:space-x-20 px-1 w-full text-gray-400">
                <div className="w-1/2">
                  <h3
                    className="text-base sm:text-lg text-gray-400 font-normal"
                    style={{ lineHeight: "18px" }}
                  >
                    {image.ep}
                  </h3>
                </div>
                <h3 className="text-base sm:text-lg text-gray-400 font-normal w-1/2 truncate">
                  {image.subtitle}
                </h3>
              </div>

              <div className="flex items-center justify-between mt-2 space-x-2 mr-2">
                <div className="bg-[#43454A] h-[40px] w-[55px] rounded-2xl p-4 flex items-center justify-center">
                  <IoIosAdd
                    className="text-[#F9F9F9] w-[20px] h-[20px]"
                    style={{ lineHeight: "18px" }}
                  />
                </div>
                <button
                  className="bg-[#B0EDDB] h-[40px] px-4 sm:px-6 text-[#16181E] rounded-[30px] font-extrabold text-xs sm:text-sm"
                  style={{ lineHeight: "18px" }}
                >
                  Watch
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
