import React from "react";
import butterfly from "../assets/butterfly.svg";
function SloganLine() {
  return (
    <>
      <div className="bg-[rgba(165,141,118,1)] lg:h-[56px] text-center md:h-auto h-auto flex justify-center items-center w-full gap-2 lg:flex-row md:flex-col sm:flex-col flex-col sm:h-auto  text-white">
        <img className="size-5 text-center" src={butterfly} alt="butterlfy" />
        <p>
          Join our Zerene community of kindred spirits for special offers, learn
          about new product launches and receive <b>10% off your first order</b>{" "}
          when you sign up!
        </p>
        <img className="size-5" src={butterfly} alt="butterlfy" />
      </div>
    </>
  );
}

export default SloganLine;
