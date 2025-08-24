import React, { useState } from "react";
import { CiGlobe, CiSearch, CiUser } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi"; // Burger + Close icons
import logo from "../assets/WhiteLogo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // menuOpen state : burger menu open/close control

  return (
    <>
      {/* Navbar ka main container */}
      <div className="w-full bg-[rgb(159,141,118)] h-[88px] flex fixed z-50 top-0 justify-between items-center px-4 md:px-10">
        {/* HamBurger Button sirf visible on phone */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)} // click karne pe menuOpen toggle
        >
          {menuOpen ? <FiX /> : <FiMenu />}{" "}
          {/* agar open hoga to close icon, ni tau burger icon */}
        </button>

        {/* Logo nd language selector */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-5 md:h-7 mx-auto md:mx-0" />

          {/* Language selector desktop only */}
          <div className="hidden md:flex items-center ml-6">
            <CiGlobe className="text-white size-6" />
            <select
              name="Language"
              id="Language"
              className="text-white bg-[rgb(164,141,118)] outline-none border-none"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>

        {/* Desktop Menu links */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <a href="#">About</a>
          <select className="text-white bg-[rgb(164,141,118)] outline-none border-none">
            <option value="Community">Community</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="News">News</option>
          </select>
          <select className="text-white bg-[rgb(164,141,118)] outline-none border-none">
            <option value="Shop">Shop</option>
            <option value="Spray">Spray</option>
            <option value="Roller">Roller</option>
          </select>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
        </div>

        {/* Right side icons (Search, Cart, User) */}
        <div className="flex items-center gap-5 text-white text-2xl">
          {/* Mobile pe sirf icons  */}
          <CiSearch className="md:text-2xl" />
          <PiHandbagLight className="md:text-2xl" />
          <CiUser className="md:text-2xl " />
        </div>
      </div>

      {/* Mobile Menu dropdown humburger click pe open hoga */}
      {menuOpen && (
        <div className="md:hidden fixed top-[88px] left-0 w-full bg-[rgb(159,141,118)] text-white flex flex-col items-center gap-4 py-6 z-40">
          <a href="#" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <select className="text-white bg-[rgb(164,141,118)] outline-none border-none">
            <option value="Community">Community</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="News">News</option>
          </select>
          <select className="text-white bg-[rgb(164,141,118)] outline-none border-none">
            <option value="Shop">Shop</option>
            <option value="Spray">Spray</option>
            <option value="Roller">Roller</option>
          </select>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            FAQs
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
