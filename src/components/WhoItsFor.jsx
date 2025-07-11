import React from 'react';
import AIStation from "../assets/Frame21.png";
import Research from "../assets/Frame22.png";
import EnterpriseAI from "../assets/Frame23.png";
import NLPVision from "../assets/Frame24.png";
import Autonomous from "../assets/Frame25.png";
import Group42 from "../assets/Group42.png"

const WhoItsFor = () => {
  

    const itemsTop = [
        { img: AIStation, label: 'AI Station' },
        { img: Research, label: 'Research Labs' },
        { img: EnterpriseAI, label: 'Enterprises AI Teams' },
      ];
    
      const itemsBottom = [
        { img: NLPVision, label: 'NLP & Vision Projects' },
        { img: Autonomous, label: 'Autonomous Systems' },
      ];

  return (
    <section className="relative z-0 py-6 md:px-20 px-10 text-center overflow-hidden font-sans">
    <h2 className="text-3xl font-bold mb-4">Who It’s For</h2>
    <p className='text-xs sm:text-sm text-gray-400 mb-6'>Built for Builders of AI</p>
    {/* Top Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {itemsTop.map((item, index) => (
        <div key={index}>
          <img
            src={item.img}
            alt={item.label}
          />
        </div>
      ))}
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
      {itemsBottom.map((item, index) => (
        <div key={index}>
          <img
            src={item.img}
            alt={item.label}
          />
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