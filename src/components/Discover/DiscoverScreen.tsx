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

export const DiscoverScreen: React.FC = () => {
  const images: Image[] = [
    {
      id: 1,
      title: "Sex Education",
      star: 4.5,
      ep: "24 Ep",
      subtitle: "Comedy,Teen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohUtID5zxfd7Hbz9wyTZ1ack5NGyYeW87vw&s",
    },
    {
      id: 2,
      title: "Beef",
      star: 4,
      ep: "10Ep",
      subtitle: "Drama Comedy",
      img: "https://upload.wikimedia.org/wikipedia/en/f/fe/Beef_%28TV_series%29_poster.jpg",
    },
    {
      id: 3,
      title: "Don't Look Up",
      star: 4.5,
      ep: "",
      subtitle: "Comedy,Thriller",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMRaA3VejTIxeonXxOoe9Ztvv3_j62IT8lA&s",
    },
    {
      id: 4,
      title: "Murder Mystry",
      star: 5,
      ep: "",
      subtitle: "Comedy Action",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/230328120904-01-murder-mystery-2.jpg",
    },
    {
      id: 5,
      title: "Emily in Paris",
      star: 5,
      ep: "32 Ep",
      subtitle: "Comedy",
      img: "https://media.vanityfair.com/photos/61bd030a37b4f754b92b1274/1:1/w_1333,h_1333,c_limit/chic-season-2-emily-in-paris.jpg",
    },
    {
      id: 6,
      title: "The end of the F* World",
      star: 4.5,
      ep: "26 Ep",
      subtitle: "Drama Comedy",
      img: "https://pyxis.nymag.com/v1/imgs/4cd/212/81283ed5194911027fd285de7b326616f0-04-end-of-the-world.rsquare.w400.jpg",
    },
    {
      id: 7,
      title: "I am not okay with it",
      star: 4,
      ep: "21 Ep",
      subtitle: "Teen,Comedy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJTnj3-_IUm2z1iLguiEbjqCK6rgpzEoG-g&s",
    },
    {
      id: 8,
      title: "Orange is New Black",
      star: 4.5,
      ep: "120 Ep",
      subtitle: "Fantasy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7dZRpmkG1kSLNwFGnOK6t-41Fa7aiVwi9Q&s",
    },
    {
      id: 9,
      title: "Ricky Gervais",
      star: 4.5,
      ep: "",
      subtitle: "Dark Comedy",
      img: "https://images.firstpost.com/wp-content/uploads/2022/05/Ricky-640.jpg?im=FitAndFill=(596,336)",
    },
    {
      id: 10,
      title: "Ali Wong: Baby Cobra",
      star: 4.5,
      ep: "",
      subtitle: "Stand up",
      img: "https://ew.com/thmb/wC6CZeCmNCcUiRj2jWLIf_q4zeA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ali-wong-2000-7d84dfa208fa4cf3ab8c30625910708a.jpg",
    },
  ];

  return (
    <div className="bg-black p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
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
                <h3 className="text-[24px] sm:text-xl font-bold" style={{lineHeight:"24px"}}>{image.title}</h3>
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

              <div className="flex items-center justify-between px-1 w-full text-gray-400">
                <h3
                  className="text-base sm:text-lg text-gray-400 font-normal"
                  style={{ lineHeight: "18px" }}
                >
                  {image.ep}
                </h3>
                <h3 className="text-base sm:text-lg text-gray-400 font-normal truncate max-w-[120px]">
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

export default DiscoverScreen;
