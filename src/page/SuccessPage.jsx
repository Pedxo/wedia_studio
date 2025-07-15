import React from 'react';
import SuccessDarkIcon from "../assets/ClientRequest1.png";
import SuccessLightIcon from "../assets/ClientRequest.png";
import { useTheme } from '../themeContext/ThemeContext';
import { useNavigate } from 'react-router-dom';


const SuccessPage = () => {
    const {isDark} = useTheme();
    const navigate = useNavigate();

    const handleRedirectToHome = () => {
        navigate("/")
    }
  return (
    <div className={`min-h-screen w-full  ${isDark ? "text-white" : "text-black"} flex flex-col gap-10 items-center justify-center md:px-20 px-2 py-20`}>
        <img src={isDark ? SuccessDarkIcon : SuccessLightIcon} alt="Success" className="md:w-40 md:h-40 w-28 h-28"/>
        <h3 className='text-center text-[9px] sm:text-sm'>
            Thanks for trusting Wedia. We'll review your project and <br /> reach out withing 24 hours.
        </h3>
        <button 
        onClick={handleRedirectToHome}
        className={` ${isDark ? "text-black" : "text-white"} text-xs sm:text-sm rounded-[14px] bg-[#ff3ea5] cursor-pointer px-4 py-3 md:w-64 w-full hover:bg-pink-700`}>
            Go to Homepage
        </button>
    </div>
  )
}

export default SuccessPage