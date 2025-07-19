import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { RiMenu5Line } from "react-icons/ri"
import { Link } from "react-router-dom";
import Logo from "../assets/wedia.svg";
import { useTheme } from "../themeContext/ThemeContext"

const Navbar = () => {
  const { isDark, setIsDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[93%] mx-auto py-12 relative z-10">
      {/*Navigation menu bar*/}
      <nav
        className={`flex justify-between items-center font-sans px-10 py-4 rounded-[20px] transition-all duration-300 shadow-sm backdrop-blur-md
        ${isDark
            ? "bg-[#d9d9d9]/[0.03] text-white"
            : "bg-[#d9d9d9]/[0.4] text-black"}`}
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10" />
        </Link>

        {/*Navigation items */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          <li><a href="#home" className="hover:text-pink-500">Home</a></li>
          <li><a href="#how-it-works" className="hover:text-pink-500">How It Works</a></li>
          <li><a href="#why-wedia" className="hover:text-pink-500">Why Wedia</a></li>
          <li><a href="#who-its-for" className="hover:text-pink-500">What It's For</a></li>
        </ul>
        {/*Book Demo*/}
        <div>
          <Link to="/book-demo">
          <button
          className={`hidden md:block font-semibold cursor-pointer hover:text-[#ff3ea5] transition
          ${isDark ? "text-white" : "text-black"}`}>
            BOOK DEMO
          </button>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {/*Request button*/}
          <Link to="/request-form">
            <button
              className={`hidden md:block px-4 py-3 rounded-lg  text-sm cursor-pointer font-semibold hover:bg-pink-700 transition
            ${isDark ? "bg-[#ff3ea5] text-black" : "bg-[#ff3ea5] text-white"}`}
            >
              Request A Project
            </button>
          </Link>
          {/*Hamburgar and close button*/}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={30} /> : <RiMenu5Line size={30} />}
            </button>
          </div>

          {/*Theme toggle button*/}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 px-3 py-1 cursor-pointer rounded  hover:bg-white/10 transition"
            title="Toggle Theme"
          >
            {isDark ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className={`flex justify-start mt-4 rounded-[20px] shadow-md p-6 transition-all duration-300 ${isDark ? "bg-[#d9d9d9]/[0.03] text-white" : "bg-[#d9d9d9]/[0.4] text-black"
          }`}>
          <div className="flex flex-col gap-10">
            {/*Navigation items */}
            <ul className="flex flex-col justify-start gap-5 text-xs">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">How It Works</a></li>
              <li><a href="#" className="hover:text-pink-500">Why Wedia</a></li>
            </ul>
            {/*Book Demo*/}
          <div>
            <Link to="/book-demo">
            <button
            className={`font-semibold cursor-pointer hover:text-[#ff3ea5] transition
            ${isDark ? "text-white" : "text-black"}`}>
              BOOK DEMO
            </button>
            </Link>
          </div>
            {/*Request button*/}
            <Link to="/request-form">
              <button
                className={`px-4 py-2 text-[12px] rounded-lg  cursor-pointer font-semibold hover:bg-pink-700 transition
            ${isDark ? "bg-[#ff3ea5] text-black" : "bg-[#ff3ea5] text-white"}`}
              >
                Request A Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;