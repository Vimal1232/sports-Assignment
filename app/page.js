"use client";

import Ads from "@/Components/Ads";
import Card from "@/Components/Card";
import Spotlight from "@/Components/Spotlight";

const Home = () => {
  return (
    <div className=" px-10 py-10 bg-backgrounddark max-sm:px-5 max-sm:py-5">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className=" font-poppins text-white text-[24px] leading-[36px] font-semibold">
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
  );
};

export default Home;
