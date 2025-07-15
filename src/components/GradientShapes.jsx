import React from "react";

const GradientShapes = ({ position }) => {
  const commonStyle =
    "bg-[#FF3EA5] opacity-[0.25] blur-[120px] filter drop-shadow-xl";

  return (
    <>
      {/* Top Right Pink Glow Sphere */}
      {position === "top" && (
        <>
        <div
          className={`absolute top-[-200px] right-[-200px] md:w-[400px] md:h-[400px] w-[100px] h-[100px] rounded-full ${commonStyle} z-0`}
        />  
        <div
          className={`absolute top-[700px] right-[-200px] md:w-[400px] md:h-[400px] w-[100px] h-[100px] rounded-full ${commonStyle} z-0`}
        />        
        </>
      )}

      {/* HeroSection Lower Edge Spheres */}
      {position === "middle" && (
        <>
          <div
            className={`absolute left-[-150px] top-[30%] md:w-[250px] md:h-[250px] w-[100px] h-[100px] rounded-full ${commonStyle} z-0`}
          />
          <div
            className={`absolute right-[-150px] top-[45%] md:w-[250px] md:h-[250px] w-[100px] h-[100px] rounded-full ${commonStyle} z-0`}
          />
        </>
      )}

      {/* Below Hero (Repeat pattern) */}
      {position === "bottom" && (
        <>
          <div
            className={`absolute left-[-150px] top-[57%] md:w-[300px] md:h-[300px] w-[100px] h-[100px] rounded-full ${commonStyle} z-0`}
          />
          <div
            className={`absolute right-[-150px] top-[65%] md:w-[300px] md:h-[300px] w-[100px] h-[100px] rounded-full ${commonStyle} z-0`}
          />
        </>
      )}
    </>
  );
};

export default GradientShapes;
