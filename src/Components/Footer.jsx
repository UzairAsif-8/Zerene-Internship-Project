import React from "react";
import img from "../assets/FooterBG.svg";
import logo from "../assets/WhiteLogo.svg";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className="relative">
      <img
        className="h-[650px] lg:h-[430px] md:h-[460px] xl:[h-430px] w-full object-cover"
        src={img}
        alt="BGimg"
      />

      {/* Content Overlay */}
      <div className="inset-0 absolute text-center gap-6 flex flex-col justify-center items-center px-4">
        {/* Newsletter */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[rgba(108,94,74,1)] mt-8 sm:mt-12">
          Subscribe to our newsletter
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl text-[rgba(165,141,118,1)]">
          Signup to receive news and updates
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <input
            className="bg-white border-none p-3 w-full text-center text-[rgba(165,141,118,1)] text-sm sm:text-base"
            type="text"
            placeholder="your-email@example.com"
          />
          <button
            className="text-white bg-[rgba(108,94,74,1)] px-6 py-3 hover:cursor-pointer hover:scale-105 transition"
            type="submit"
          >
            Submit
          </button>
        </div>

        {/* Social Icons */}
        <div className="text-white text-4xl sm:text-4xl md:text-4xl flex gap-6 sm:gap-8 justify-center mt-4">
          <CiFacebook />
          <IoLogoInstagram />
          <CiMail />
        </div>

        {/* Footer Bottom */}
        <div className="w-full max-w-6xl border-t border-white/70 mt-8 pt-6 flex flex-col sm:flex-col md:flex-row md:justify-between items-center gap-4 px-4">
          {/* Logo */}
          <img className="h-6 w-auto" src={logo} alt="Logo" />

          {/* Links */}
          <div className="text-white flex flex-col sm:flex-row gap-3 sm:gap-5 text-sm font-light text-center sm:text-left">
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Product Return Policy</a>
          </div>

          {/* Copyright */}
          <p className="text-white text-xs sm:text-sm font-light text-center">
            Copyright &copy; 2023 ZERENE All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
