import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation } from 'react-router-dom';

export const RightHand = () => {
  const location = useLocation();

  const bgColor = location.pathname === '/discover' ? 'bg-black' : 'bg-[#1A1A19]';

  return (
    <>
      <div className={`w-[30%] flex flex-col justify-between ${bgColor}`}>
        <div className="flex flex-grow items-center justify-center gap-8">
          <a href="#" className="text-white text-center ">
            <IoSearch className="w-[24px] h-[24px]" />
          </a>
          <a href="#" className="text-white text-center ">
            <IoIosNotificationsOutline className="w-[24px] h-[24px]" />
          </a>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </>
  );
};