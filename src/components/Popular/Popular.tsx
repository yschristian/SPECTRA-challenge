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

export const Popular: React.FC = () => {
  const images: Image[] = [
    {
      id: 1,
      title: "Friends",
      star: 4.5,
      ep: "267 Ep",
      subtitle: "Sitcom",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Friends_season_one_cast.jpg/330px-Friends_season_one_cast.jpg",
    },
    {
      id: 2,
      title: "The Green Planet",
      star: 4,
      ep: "6Ep",
      subtitle: "Documentary",
      img: "https://media.themoviedb.org/t/p/w94_and_h141_bestv2/vmdPMlNQIWf7R7sjYTVmnNgcucf.jpg",
    },
    {
      id: 3,
      title: "Game of Thrones",
      star: 4.5,
      ep: "120 Ep",
      subtitle: "Fantasy",
      img: "https://resizing.flixster.com/z8ZxTVTr1HyRw_S9wyc2dgn2gOk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_i_v9_ac.jpg",
    },
    {
      id: 4,
      title: "Sherlock Holmes",
      star: 5,
      ep: "80 Ep",
      subtitle: "Thriller",
      img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/04/sherlock-bbc-benedict-cumberbatch.jpeg",
    },
  ];

  return (
    <div className="bg-black p-4 sm:p-8">
      <div className="flex items-center mb-4 space-x-8">
        <h2 className="text-white font-bold text-3xl sm:text-2xl" style={{lineHeight:"30px"}}>Popular on Spectra</h2>
        <a href="#" className="text-gray-400 text-lg font-semibold sm:text-base " style={{lineHeight:"18px"}}>
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
                <div className="w-full">
                  <h3
                    className="text-base sm:text-lg text-gray-400 font-normal"
                    style={{ lineHeight: "18px" }}
                  >
                    {image.ep}
                  </h3>
                </div>
                <h3 className="text-base sm:text-lg text-gray-400 font-normal">
                  {image.subtitle}
                </h3>
              </div>

              <div className="flex items-center justify-between mt-2 space-x-2 mr-2">
                <div className="bg-[#43454A] h-[40px] w-[55px] rounded-2xl p-4 flex items-center justify-center">
                  <IoIosAdd className="text-[#F9F9F9] w-[20px] h-[20px]" style={{lineHeight:"18px"}} />
                </div>
                <button className="bg-[#B0EDDB] h-[40px] px-4 sm:px-6 text-[#16181E] rounded-[30px] font-extrabold text-xs sm:text-sm" style={{lineHeight:"18px"}}>
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

export default Popular;