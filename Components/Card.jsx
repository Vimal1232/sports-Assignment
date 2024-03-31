"use client";

import { useContext } from "react";
import Data from "../Data/Carddata.json";
import Image from "next/image";
import { ThemeContext } from "@/app/page";

const Card = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <section>
      <div className=" grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-vmd:grid-cols-1 max-ss:grid-cols-2 max-xs:grid-cols-1">
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className={` p-3 ${
                lightMode ? "bg-white" : " bg-cardbgdark"
              } flex flex-col  overflow-hidden gap-3 drop-shadow-lg`}
            >
              <div className=" overflow-hidden h-[385px]">
                <img
                  src={item.Image}
                  alt={item.name}
                  width="100%"
                  className="w-[385px] h-[385px] object-cover"
                />
              </div>
              <div>
                <h2
                  className={` font-inter text-[17px]  ${
                    lightMode ? "text-black" : "text-white"
                  } font-medium `}
                >
                  {item.name}
                </h2>
              </div>
              <div
                className={` ${
                  lightMode ? "bg-white" : "bg-moredark"
                } flex justify-between text-left p-3`}
              >
                <div className="flex flex-col gap-2">
                  <p
                    className={` text-[12px] text-textdark ${
                      lightMode ? "text-black" : "text-textdark"
                    } font-normal font-inter `}
                  >
                    Total Events
                  </p>
                  <p
                    className={`text-[14px] ${
                      lightMode ? "text-black" : "text-textdark"
                    } font-medium`}
                  >
                    {item.events}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className={` text-[12px] ${
                      lightMode ? "text-black" : "text-textdark"
                    } font-normal font-inter `}
                  >
                    Sport
                  </p>
                  <p
                    className={` text-[14px] ${
                      lightMode ? "text-black" : "text-textdark"
                    } font-medium`}
                  >
                    {item.sport}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
