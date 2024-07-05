import React from "react";
import { RightHand } from "../RightHand/RightHand";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full">
        <div className="h-20 w-[70%] flex items-center justify-between gap-12 px-10 bg-black">
          <a href="/" className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693253 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM24.5109 17.0229L10.7966 23.88C10.6223 23.9671 10.4286 24.0082 10.234 23.9994C10.0394 23.9905 9.85024 23.9321 9.68454 23.8296C9.51885 23.7271 9.3821 23.584 9.2873 23.4138C9.19249 23.2436 9.14277 23.052 9.14286 22.8571V9.14286C9.14297 8.94812 9.19283 8.75665 9.28771 8.58659C9.3826 8.41654 9.51936 8.27356 9.68503 8.1712C9.85069 8.06885 10.0398 8.01053 10.2343 8.00177C10.4288 7.993 10.6224 8.0341 10.7966 8.12114L24.5109 14.9783C24.7004 15.0733 24.8598 15.2192 24.9712 15.3996C25.0826 15.5801 25.1416 15.7879 25.1416 16C25.1416 16.2121 25.0826 16.4199 24.9712 16.6004C24.8598 16.7808 24.7004 16.9267 24.5109 17.0217V17.0229Z"
                fill="#B0EDDB"
              />
            </svg>

            <div
              className="text-[30px] tracking-[0.24em] text-white font-black "
              style={{ lineHeight: "36px" }}
            >
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
              className="text-white text-2xl py-2 font-semibold hover:text-[#b7f7e3]"
              style={{ lineHeight: "24px" }}
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
              style={{ lineHeight: "24px" }}
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
              style={{ lineHeight: "24px" }}
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
