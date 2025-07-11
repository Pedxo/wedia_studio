import React from 'react';
import GroupImage from "../assets/Group-image.png";
import BgImage from "../assets/bg-color.svg";
import {useTheme} from "../themeContext/ThemeContext"

const HeroSection = () => {
    const { isDark } = useTheme();

    return (
        <>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-6 w-full font-sans'>
                
                {/* Mobile Section */}
                {/* <div className="md:hidden w-full relative mt-2 px-3">
                    <img
                        src={GroupImage}
                        alt="Top Image"
                        className="z-10 animate-floating w-[90%]"
                    />

                </div> */}

                {/* Left Text and call action Section */}
                <div className="md:w-1/2 w-full space-y-6 px-2">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                        Smarter <span className="text-pink-500">AI</span> Starts with <br />
                        Smarter Data.
                    </h1>
                    <p className={`text-xs sm:text-sm absolute ${
                        isDark ? "text-[#d9d9d9]/[0.6]" : "text-gray-400"}`}>
                        Wedia connects you with elite human taggers to turn your raw data into high performance AI training  sets.
                    </p>
                    <button
                        className={`text-[12px] sm:text-sm px-4 py-3 rounded-lg md:mt-12 mt-16 cursor-pointer font-semibold hover:bg-pink-700 transition
                    ${isDark ? "bg-[#ff3ea5] text-black" : "bg-[#ff3ea5] text-white"}`}
                    >
                        Request A Project
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 w-full relative md:mt-0 mt-2 ">
                    <img
                        src={GroupImage}
                        alt="Top Image"
                        className="z-10 animate-floating md:w-[100%]"
                    />

                </div>
            </div>
            <div className=''>
                <img src={BgImage} alt="Bg image" className='w-full'/>
            </div>
        </>
    )
}

export default HeroSection