
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CallToActionCard = () => {
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true); // For animation

  const keywords = ["Call", "Onboard", "Import", "Plug-in"];


  const handleRequest = () => {
    navigate("/request-form");
  };
  const handleBookDemoRoute = () => {
    navigate("/book-demo");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % keywords.length);
        setFade(true); // trigger fade in
      }, 400); // match animation duration
    }, 3000);
    return () => clearInterval(interval);
  }, [])
  return (
    <section className="relative z-0 py-16 md:px-20 px-8 flex justify-center items-center overflow-hidden font-sans">
      <div className="bg-[#ff3ea5] text-black rounded-[24px] shadow-lg md:px-8 px-4 py-16 max-w-3xl w-full text-center relative z-[10]">
        <h2 className="text-lg md:text-4xl font-semibold mb-8">
          <span
            className={`inline-block text-white transition-all duration-500 ease-in-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
          >
            {keywords[currentWordIndex]}
          </span>{" "} Fleet of creative humans <br /> for on-demand tasks.
        </h2>
        <p className="text-[10px] sm:text-sm mb-8 max-w-xl mx-auto text-gray-800 font-normal">
          Ready to plug in human intelligence?  <br /> Let’s help your models learn faster — and smarter.
        </p>

        <p className='text-black font-semibold mb-2 text-sm 
        cursor-pointer hover:underline'
        onClick={handleBookDemoRoute}>Schedule a call </p>
        <button
          onClick={handleRequest}
          className="bg-white text-xs sm:text-sm text-[#ff3ea5] cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-[10px] font-semibold transition">
          Request A Project
        </button>
      </div>
    </section>

  )
}

export default CallToActionCard