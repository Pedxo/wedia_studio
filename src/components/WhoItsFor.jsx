import React from 'react';
import AIStation from "../assets/Frame21.jpg";
import Research from "../assets/Frame22.jpg";
import EnterpriseAI from "../assets/Frame23.jpg";
import NLPVision from "../assets/Frame24.jpg";
import Autonomous from "../assets/Frame25.jpg";
import Group42 from "../assets/Group42.png"

const WhoItsFor = () => {
  

    const itemsTop = [

        { img: AIStation, caption: "AI Startups", label: 'RLHF for instruction-tuned models' },
        { img: Research, caption: "Research Labs ", label: 'Labeling for images, text, and speech' },
        { img: EnterpriseAI, caption: "Enterprise AI Teams ", label: 'LLM Evaluation and content scoring' },
      ];
    
      const itemsBottom = [
        { img: NLPVision, caption:"Evals System", label: 'Bias & fairness checking' },
        { img: Autonomous, caption: "NLP & Vision Projects ", label: 'Multi-language labeling' },

      ];

  return (
    <section className="relative z-0 py-6 md:px-20 px-10 text-center overflow-hidden font-sans">
    <h2 className="text-3xl font-bold mb-4">Who It’s For</h2>
    <p className='text-xs sm:text-sm text-gray-400 mb-6'>Built for Builders of AI</p>

    {/* Top Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {itemsTop.map((item, index) => (
        <div key={index} className="relative flex items-center justify-center px-2">
          <img
            src={item.img}
            alt={item.label}
            className="w-[347px] h-[189px] rounded-[24px]"
          />

          <h2 className='absolute top-13 text-center text-gray-200 text-lg sm:text-2xl font-bold'>{item.caption}</h2>

          <p className="absolute text-center text-white dark:text-gray-200 text-[14px] sm:text-[16px] font-semibold px-2">
            {item.label}
            </p>
        </div>
      ))}
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
      {itemsBottom.map((item, index) => (
        <div key={index} className="relative flex items-center justify-center px-2">
          <img
            src={item.img}
            alt={item.label}
            className="w-[347px] h-[189px] rounded-[24px]"
          />

          <h2 className='absolute top-13 text-center text-gray-200 text-lg sm:text-2xl font-bold'>{item.caption}</h2>

          <p className="absolute text-center text-white dark:text-gray-200 text-[14px] sm:text-[16px] font-semibold px-2">
            {item.label}
            </p>
        </div>
      ))}
    </div>
     {/* Absolute Image (between this and next section) */}
     <img
       src={Group42}
        alt="Bridge Illustration"
        className="absolute left-0 top-2 w-20 md:w-20 animate-floating"
    />

    
  </section>
  )
}

export default WhoItsFor