import React from "react";
import image from "../assets/OurBelief.jpg";
function Belief() {
  return (
    <>
      <div className="relative w-full h-[400px]  bg-[rgb(252,248,237)] ">
        <img src={image} alt="Image" className="w-full h-full object-cover" />
        {/* Overlay color */}
        <div className="absolute inset-0 bg-[rgba(57,41,26,0.7)]"></div>
        {/* Content on overlay */}
        <div className="absolute inset-0 flex lg:flex-row xl:flex-row mg-flex-col flex-col  justify-center items-center ">
          <div className="flex flex-col lg:pr-20 md:pr-5px pr-3px gap-y-4">
            <h1 className="lg:pl-20 md:pl-5px pl-3px text-[rgba(165,141,118,1)] text-2xl text-center lg:text-left md:text-center xl:text-left ">
              Our Beliefs
            </h1>
            <h2 className="lg:pl-20 md:pl-5px pl-3px text-white lg:text-4xl xl:text-4xl text-2xl md:text-3xl text-center lg:text-left md:text-center xl:text-left ">
              Zerene crafts immersive sensory experiences and transforms
              everyday spaces into sanctuaries of tranquility.
            </h2>
            <p className="lg:pl-20 md:pl-5px pl-3px pb-5 lg:pb-0 xl:pb-0 md:pb-4 text-white text-center lg:text-left md:text-center xl:text-left  ">
              ___________________
            </p>
          </div>
          <div className="lg:pr-20 md:pr-5px pr-3px text-center lg:text-left md:text-center xl:text-left">
            <p className="text-white pb-7 ">
              Our beliefs amplify the brand's vision, establishing its core
              principles, moulding its culture, and directing every decision and
              action we take.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Belief;
