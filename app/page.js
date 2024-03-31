"use client";

import { useState, useEffect, useContext, createContext } from "react";
import Ads from "@/components/Ads";
import Card from "@/components/Card";
import Spotlight from "@/components/Spotlight";

export const ThemeContext = createContext();

const Home = () => {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };
  return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      <div
        className={` px-10 py-10 ${
          lightMode ? "bg-backgroundlight" : "bg-backgrounddark"
        }  max-sm:px-5 max-sm:py-5`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <button
              onClick={toggleTheme}
              className={`${lightMode ? "text-white" : "text-black"} ${
                lightMode ? "bg-black" : "bg-white"
              } px-3 py-2 rounded`}
            >
              {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
          <div>
            <h2
              className={` font-poppins  ${
                lightMode ? "text-black" : "text-white"
              } text-[24px] leading-[36px] font-semibold`}
            >
              Sports
            </h2>
          </div>
          <div className="flex gap-3 max-ss:flex-col ">
            <Card />
            <Ads />
          </div>
        </div>
        <div className="flex justify-center items-center mt-14">
          <button className=" px-[30px] py-[10px] bg-[#2C9CF0] rounded text-white font-inter text-[14px] font-semibold   ">
            Show More
          </button>
        </div>
        <div className=" flex justify-center items-center mt-14">
          <Spotlight />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
