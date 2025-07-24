import React from 'react';
import { useTheme } from '../themeContext/ThemeContext';

const WorkSupport = () => {
    const { isDark } = useTheme()
    return (
        <div className='flex flex-col items-center justify-center md:px-20 py-6 px-10 font-sans w-full max-w-4xl mx-auto'>
            <div className='mb-6'>
                <h3 className={` ${isDark ? "text-gray-300" : "text-black"} text-xs sm:text-sm text-center`}>
                    Our contractors support AI teams building next-gen models across frontier <br /> labs, startups, and
                    research groups
                </h3>
            </div>
            <div className='mt-8 text-center '>
                <h1 className={`text-lg sm:text-3xl font-semibold ${isDark ? "text-white" : "text-black"}`}>
                    Tailored to Your Stack, Trained for Your Needs
                </h1>
                <p className={`text-[10px] sm:text-[12px] ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Whether you use custom tools, open-source platforms, or specialized evaluation pipelines, our
                    people are adaptable and ready to learn. We train fast, align deeply, and integrate smoothly into
                    your workflows.
                </p>
            </div>
            <div className='mt-10 text-center '>
                <h1 className={`text-lg sm:text-3xl font-semibold ${isDark ? "text-white" : "text-black"}`}>
                  Human-in-the-loop force 
                </h1>
                <p className={`text-[10px] sm:text-[12px] ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Our database consists of scalable contractors skilled <br /> in RLHF and evals, ready to label or 
                  review your AI data on-demand.
                </p>
            </div>
        </div>
    )
}

export default WorkSupport