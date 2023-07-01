"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Importing & Exporting.",
      "Providing best user experience for customers.",
      "Delivery on time in demand.",
      "Founded By. Art Vandelay",
      "Manufacture of Fine Latex Goods"
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="h-55 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-2xl uppercase font-bold">
        Welcome to Vandelay Iundusties
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default Banner;