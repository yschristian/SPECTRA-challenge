import React from 'react';
import { RightHand } from "../RightHand/RightHand";
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full">
        <div className="h-20 w-[70%] flex items-center justify-between gap-12 px-10 bg-black">
          <a href="/" className="flex items-center gap-3">
            <div className="text-[30px] tracking-[0.24em] text-white font-black " style={{lineHeight:"36px"}}>
              SPECTRA
            </div>
          </a>
          <div className="hidden xl:flex gap-8">
            <a 
              href="#"  
              // className={({ isActive }) => 
              //   isActive 
              //     ? "text-[#b7f7e3] text-2xl py-2 font-semibold border-b-4 border-[#b7f7e3]" 
              //     : "text-white text-2xl py-2 font-semibold hover:text-[#b7f7e3]"
              // }
              className='text-white text-2xl py-2 font-semibold hover:text-[#b7f7e3]'
              style={{lineHeight:"24px"}}
            >
              Movies
            </a>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#b7f7e3] text-2xl py-2 font-semibold border-b-4 border-[#b7f7e3]" 
                  : "text-white text-2xl py-2 font-semibold hover:text-[#b7f7e3]"
              }
              style={{lineHeight:"24px"}}
            >
              TV Shows
            </NavLink>
            <NavLink 
              to="/discover" 
              className={({ isActive }) => 
                isActive 
                  ? "text-[#b7f7e3] text-2xl py-2 font-semibold border-b-4 border-[#b7f7e3]" 
                  : "text-white text-2xl py-2 font-semibold hover:text-[#b7f7e3]"
              }
              style={{lineHeight:"24px"}}
            >
              Discover
            </NavLink>
          </div>
        </div>
        <RightHand />
      </div>
    </div>
  );
};

export default Layout;
