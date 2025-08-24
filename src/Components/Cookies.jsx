import React, { useState } from "react";
import { MdCookie } from "react-icons/md";

function Cookies() {
  const [visibility, setvisibility] = useState(true);

  return (
    <div className="flex justify-center items-center">
      {visibility && (
        <div className="fixed z-50 bottom-2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] bg-[rgb(252,240,226)] rounded-2xl flex flex-col lg:flex-row items-center justify-between px-4 py-3 gap-4 shadow-lg">
          {/* Icon + Text */}
          <div className="flex items-start sm:items-center gap-3 flex-1 ">
            <MdCookie className="text-[rgb(165,141,118)] size-8 sm:size-9 lg:size-11 shrink-0" />
            <p className="text-[rgba(62,57,49,1)] text-sm sm:text-base">
              Our website uses cookies. By continuing navigating, we assume your
              permission to deploy cookies as detailed in our
              <a href="https://www.google.com" className="underline ml-1">
                Cookie Policy
              </a>
              {" & "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/*  (Buttons) */}
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <button
              onClick={() => {
                setvisibility(false);
              }}
              className="bg-white text-[rgba(109,94,71,1)] px-4 py-2 rounded-full border border-[rgba(109,94,71,1)] hover:scale-105 hover:cursor-pointer transition"
            >
              Accept All
            </button>
            <button
              onClick={() => {
                setvisibility(false);
              }}
              className="bg-white text-[rgba(109,94,71,1)] px-4 py-2 rounded-full border border-[rgba(109,94,71,1)] hover:scale-105 hover:cursor-pointer transition"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cookies;
