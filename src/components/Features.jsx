import React from 'react';
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import { useTheme } from '../themeContext/ThemeContext';

const Features = () => {
    const {isDark} = useTheme();

    const images = [
        { src: Frame1, 
        caption: 'Human labellers for your enterprise data.',
         text: "Get human to tag your proprietary data for your AI products." },
        { src: Frame2, 
        caption: 'Quality AI needs quality data.', 
        text: "Get a fleet of expert labellers for a high training data." },
        { src: Frame3, 
        caption: 'Get human help smart data labelling.', 
        text: "On-demand creative human labellers to handle your data labelling tasks." },

    ]
  return (
    <section className='md:px-20 py-6 px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt="" />
                        <h2 className="mt-4 text-sm sm:text-lg font-semibold">{image.caption}</h2>
                        <p className={`${
                            isDark ? "text-[#d9d9d9]/[0.6]": "text-gray-400"} text-xs sm:text-sm mt-2`}>{image.text}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Features