"use client";

import { useContext } from "react";
import Spot from "../Data/spotlight.json";
import { ThemeContext } from "@/app/page";
import Image from "next/image";

const Spotlight = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <section
      className={`${
        lightMode ? " bg-backgroundlight" : " bg_gra"
      } p-10 drop-shadow-lg`}
    >
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h1
            className={` font-poppins font-bold text-[50px] leading-[52.5px] ${
              lightMode ? "text-black" : "text-white"
            } text-center`}
          >
            Collection Spotlight
          </h1>
          <p
            className={` font-inter font-medium text-[14px] leading-[22.65px] max-w-[900px] m-auto ${
              lightMode ? "text-black" : "text-white"
            } text-center`}
          >
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        <div className="flex gap-5 items-center">
          <div className=" flex-shrink-0">
            <button className=" border-[#2C9CF0] border-[2px] p-3 max-md:hidden flex items-center justify-center">
              <Image src="/left.png" width={32} height={32} alt="" />
            </button>
          </div>
          <div className=" grid grid-cols-3 gap-5 max-md:grid-cols-2 max-ss:grid-cols-1">
            {Spot.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    lightMode ? "bg-white" : " bg-cardbgdark"
                  } p-5 flex flex-col gap-5 drop-shadow-lg `}
                >
                  <div>
                    <img src={item.Image} />
                  </div>
                  <hr className=" border-dashed" />
                  <div className=" flex flex-col gap-5 justify-center items-center ">
                    <h1
                      className={`font-poppins text-[17px] ${
                        lightMode ? "text-black" : "text-white"
                      } text-center`}
                    >
                      {item.name}
                    </h1>
                    <p
                      className={` font-poppins text-[14px] ${
                        lightMode ? "text-black" : "text-white"
                      } font-light text-center`}
                    >
                      {item.date}
                    </p>
                    <p
                      className={` font-poppins text-[15px] ${
                        lightMode ? "text-black" : "text-white"
                      } font-light text-center`}
                    >
                      {item.address}
                    </p>

                    <button className=" p-5 text-[12.73px] leading-[15.41px] text-white bg-black">
                      {item.button}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex-shrink-0">
            <button className=" border-[#2C9CF0] border-[2px] p-3 max-md:hidden">
              <Image src="/right.png" width={32} height={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
