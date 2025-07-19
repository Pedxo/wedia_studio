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
        ? "bg-[#0D0D0D] text-white"
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