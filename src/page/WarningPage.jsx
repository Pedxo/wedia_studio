import React from 'react';
import WarnDarkIcon from "../assets/ClientRequest3.png";
import WarnLightIcon from "../assets/ClientRequest2.png";
import { useTheme } from '../themeContext/ThemeContext';
import { useNavigate } from 'react-router-dom'


const WarningPage = () => {
    const {isDark} = useTheme();
    const navigate = useNavigate();

    const handleBackToRequestForm = () => {
        navigate("/request-form")
    }

  return (
    <div className={`min-h-screen w-full  ${isDark ? "text-white" : "text-black"} flex flex-col gap-10 items-center justify-center md:px-20 px-2 `}>
        <img src={isDark ? WarnDarkIcon : WarnLightIcon } alt="Success" className="md:w-40 md:h-40 w-28 h-28"/>
        <h3 className='text-center text-[9px] sm:text-sm'>
            Oops! Something went wrong. Please try again or refresh <br />the page.
        </h3>
        <button 
        onClick={handleBackToRequestForm}
        className={` ${isDark ? "text-black" : "text-white"} font-semibold text-xs sm:text-sm rounded-[14px] bg-[#ff3ea5] cursor-pointer px-4 py-3 md:w-64 w-full hover:bg-pink-700`}>
            Submit Again
        </button>
    </div>
  )
}

export default WarningPage