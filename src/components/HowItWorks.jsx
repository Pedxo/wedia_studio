import React from 'react';
import UploadIcon from "../assets/solar_upload.png";
import CheckMarkIcon from "../assets/checkmark.png";
import DatabaseIcon from "../assets/solar_database.png";
import Group46 from "../assets/Group46.png"
import { useTheme } from '../themeContext/ThemeContext';


const HowItWorks = () => {
  const { isDark } = useTheme();

    const steps = [
        {
          icon: UploadIcon,
          title: 'Submit Your Idea',
          text: "Tell us what you need, the kind of data, how much, and when you need it done."
        },
        {
          icon: CheckMarkIcon,
          title: 'We Review & Match',
          text: "Our team vets your request and instantly assigns the right human labellers."
        },
        {
          icon: DatabaseIcon,
          title: 'Get Tagged, Fast',
          text: "Receive high-quality, clean, labeled data—ready to train your AI."
        },
      ];
    
  return (
    <section className="relative py-6 md:px-20 px-10 bg-transparent overflow-hidden font-sans">
      <h2 className="text-3xl font-bold text-center mb-3">How It Works</h2>
      <p className='text-center text-xs sm:text-sm text-gray-500 mb-8'>Here's how Wedia works</p>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {steps.map((step, index) => (
          <div key={index} className={`py-16 px-8 rounded-xl shadow-md backdrop-blur-md
          ${isDark ? "bg-[#ffffff0a]" : "bg-[#d9d9d9]/[0.4]"}`}>
            <img
              src={step.icon}
              alt={step.title}
              className="mx-auto w-16 h-16 mb-4"
            />
            <h3 className="text-[14px] sm:text-lg font-semibold">{step.title}</h3>
            <p className='text-[11px] sm:text-sm text-gray-400 mt-4'>{step.text}</p>
          </div>
        ))}
      </div>

      {/* Absolute Side Image */}
      <img
        src={Group46}
        alt="Side Illustration"
        className="md:block absolute right-0 md:top-1/2 top-70 w-20 z-0 opacity-70 animate-floating"
      />
    </section>
  )
}

export default HowItWorks