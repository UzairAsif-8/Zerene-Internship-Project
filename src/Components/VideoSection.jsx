import React from "react";
import image from "../assets/Aeroplane.png";

function VideoSection() {
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 my-10">
      <img
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-5xl h-auto"
        src={image}
        alt="video"
      />
    </div>
  );
}

export default VideoSection;
