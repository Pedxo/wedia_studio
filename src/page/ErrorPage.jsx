import React from 'react';
import ErrorDarkIcon from "../assets/ClientRequest4.png";
import ErrorLightIcon from "../assets/ClientRequest5.png";
import { useTheme } from '../themeContext/ThemeContext';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const {isDark} = useTheme();
    const navigate = useNavigate();

    const handleBackToRequestForm = () => {
        navigate("/request-form")
    }
  return (
    <div className={`min-h-screen w-full  ${isDark ? "text-white" : "text-black"} flex flex-col gap-10 items-center justify-center md:px-20 px-2 py-20`}>
        <img src={isDark ? ErrorDarkIcon : ErrorLightIcon } alt="Success" className="md:w-40 md:h-40 w-28 h-28"/>
        <h3 className='text-center text-[9px] sm:text-sm'>
            Submission failed. Kindly check your inputs and try again. if the issue <br /> persists, contact our support team.
        </h3>
        <button 
        onClick={handleBackToRequestForm}
        className={` ${isDark ? "text-black" : "text-white"} text-xs sm:text-sm rounded-[14px] bg-[#ff3ea5] cursor-pointer px-4 py-3 md:w-64 w-full hover:bg-pink-700`}>
            Return to Appication Form
        </button>
    </div>
  )
}

export default ErrorPage