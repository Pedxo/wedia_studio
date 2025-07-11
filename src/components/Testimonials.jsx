import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Group45 from "../assets/Group45.png";
import Group43 from "../assets/Group43.png";
import 'swiper/css';
import 'swiper/css/pagination';
import {useTheme} from "../themeContext/ThemeContext"


const testimonials = [
  {
    quote: `Wedia helped us tag over 500,000\n  
records under a week—with\n  
flawless accuracy.`,
    name: "CTO SynthAI",
  },
  {
    quote: `Wedia helped us tag over 500,000\n  
records under a week—with\n  
flawless accuracy.`,
    name: "CTO SynthAI",
  },
  {
    quote: `Wedia helped us tag over 500,000\n  
records under a week—with\n  
flawless accuracy.`,
    name: "CTO SynthAI",
  },
  {
    quote: `Wedia helped us tag over 500,000\n  
records under a week—with\n  
flawless accuracy.`,
    name: "CTO SynthAI",
  },
];



const Testimonials = () => {
  const {isDark} = useTheme()

    return (
    <section className="relative z-[30] py-10 md:px-20 px-8 text-center bg-transparent overflow-visible font-sans">
      <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <p className='text-[12px] sm:text-sm text-gray-500 mb-8'>What our clients says</p>
     
    <div className="max-w-4xl mx-auto">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{ delay: 10000 }}
      pagination={{
        clickable: true,
        el: ".custom-pagination",
        renderBullet: (i, c) => `<span class="${c} inline-block w-3 h-3 rounded-full bg-[#ff3ea5] mx-1"></span>`,
      }} >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div 
              className={`backdrop-blur-md md:py-20 md:px-4 py-10 px-2 max-w-3xl w-full mx-auto rounded-[24px] shadow-md
              ${isDark ? "bg-[#ffffff0a] " : "bg-[#d9d9d9]/[0.4]"}`}>
                <p className="text-sm sm:text-lg mb-8 whitespace-pre-line">“{testimonial.quote}”</p>
                <h4 className="font-semibold text-[#ff3ea5] text-xs sm:text-sm">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-6"></div>
      </div>

      {/* Absolute floating image between "Why Wedia" and this */}
    <img
      src={Group45}
      alt="Floating Graphic"
      className="absolute md:left-40 left-[-40px] top-[-30px] w-35 z-[30] animate-floating  pointer-events-none"
    />
    {/* Absolute right-side image between testimonial and CTA */}
    <img
        src={Group43}
        alt="Decorative"
        className="absolute md:right-45 right-[-40px] top-[90%] w-35 z-[30] animate-floating  pointer-events-none"
      />
    </section>
    )
}

export default Testimonials