import React from "react";

const GradientShapes = ({ position }) => {
  const commonStyle =
    "bg-[#FF3EA5] opacity-[0.25] blur-[120px] filter drop-shadow-xl";

  return (
    <>
      {/* Top Right Pink Glow Sphere */}
      {position === "top" && (
        <div
          className={`absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full ${commonStyle} z-0`}
        />
      )}

      {/* HeroSection Lower Edge Spheres */}
      {position === "middle" && (
        <>
          <div
            className={`absolute left-[-150px] top-[50%] w-[350px] h-[350px] rounded-full ${commonStyle} z-0`}
          />
          <div
            className={`absolute right-[-150px] top-[70%] w-[350px] h-[350px] rounded-full ${commonStyle} z-0`}
          />
        </>
      )}

      {/* Below Hero (Repeat pattern) */}
      {position === "bottom" && (
        <>
          <div
            className={`absolute left-[-150px] top-[80%] w-[350px] h-[350px] rounded-full ${commonStyle} z-0`}
          />
          <div
            className={`absolute right-[-150px] top-[95%] w-[350px] h-[350px] rounded-full ${commonStyle} z-0`}
          />
        </>
      )}
    </>
  );
};

export default GradientShapes;
