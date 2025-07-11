import React from 'react';


const CallToActionCard = () => {
  return (
    <section className="relative z-0 py-16 md:px-20 px-8 flex justify-center items-center overflow-hidden font-sans">
    <div className="bg-[#ff3ea5] text-black rounded-[24px] shadow-lg px-8 py-16 max-w-3xl w-full text-center relative z-[10]">
      <h2 className="text-lg md:text-4xl font-semibold mb-8">
        <span className='text-white'>Call</span> Fleet of creative humans <br /> for on-demand tasks.
      </h2>
      <p className="text-[10px] sm:text-sm mb-8 max-w-xl mx-auto text-gray-800 font-normal">
        Need more human workforce? We supply a fleet of humans demand for task to <br /> to produce high-quality training data
      </p>
      <button className="bg-white text-xs sm:text-sm text-[#ff3ea5] hover:bg-gray-100 px-6 py-3 rounded-[10px] font-semibold transition">
        Request A Project
      </button>
    </div>
  </section>
  )
}

export default CallToActionCard