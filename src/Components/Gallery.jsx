import React from "react";
import gallery from "../Data/Gallery.json";

function Gallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center mx-6 sm:mx-10 md:mx-0 lg:mx-28 mb-16">
      {gallery.map((pic, index) => (
        <img
          key={index}
          src={pic.image}
          alt="galleryIMG"
          className="w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] object-cover"
        />
      ))}
    </div>
  );
}

export default Gallery;
