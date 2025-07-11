import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import createRouter from "./Router";
import GradientShapes from "./components/GradientShapes";
import {useTheme, ThemeProvider} from "./themeContext/ThemeContext"


const AppWrapper = () => {
  const { isDark } = useTheme();
  const router = createRouter();

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-300
      ${isDark
        ? "bg-gradient-to-r from-[#1A1E1C] via-[#1A1E1C] to-[#2a1b23] text-white"
        : "bg-gradient-to-r from-white via-[#ffeff6] to-[#ffe0eb] text-black"}`}
    >
      <GradientShapes position="top" />
      <GradientShapes position="middle" />
      <GradientShapes position="bottom" />
      <RouterProvider router={router} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}