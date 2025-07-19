import React from 'react';
import Padlock from "../assets/padlock.png";
import VerifiedCheck from "../assets/verified-check.png";
import { useTheme } from "../themeContext/ThemeContext";
import Bolt from "../assets/solar_bolt.png";




const WhyChooseWedia = () => {
    const { isDark } = useTheme();

    const features = [
        {
            icon: VerifiedCheck,
            title: 'Verified Human Labellers',
            text: "We hand-pick top talent for maximum precision and context understanding."
        },
        {
            icon: Bolt,
            title: 'Fast Turnaround',
            text: "Scale as needed. Our labeling force is always ready."
        },
        {
            icon: Padlock,
            title: 'Secure & Confidential',
            text: "Your data stays yours—fully NDA-backed and encrypted."
        },
    ];

    return (
        <section className="relative py-6 md:px-20 px-10 text-center overflow-hidden font-sans">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Wedia</h2>
            <p className='text-xs sm:text-sm text-gray-500 mb-8'>Human-Grade Tagging, Machine-Level Accuracy</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {features.map((feature, index) => {
                    const isMiddle = index === 1;
                    return (
                        <div
                            key={index}
                            className={`py-16 px-6 rounded-xl shadow-md backdrop-blur-md transition-all duration-300 ${
                                isMiddle
                                  ? "bg-[#ff3ea5] text-white"
                                  : isDark
                                  ? "bg-[#ffffff0a] text-white/80"
                                  : "bg-[#d9d9d9]/[0.4] text-black"
                              }`}
                            >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="mx-auto w-16 h-16 mb-4"
                            />
                            <h3 className={`text-[14px] sm:text-lg font-semibold mb-4 ${isMiddle ? "text-white" : ""}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-[11px] sm:text-sm ${isMiddle ? "text-white/90" : "text-gray-400"}`}>
                                {feature.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default WhyChooseWedia