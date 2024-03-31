import { useContext } from "react";
import { ThemeContext } from "@/app/page";

const Ads = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={` p-3 ${
          lightMode ? "bg-white" : " bg-cardbgdark"
        } flex flex-col  overflow-hidden gap-3 w-[237px] drop-shadow-lg`}
      >
        <div className="">
          <img src="/fourth.jpeg" alt="" />
        </div>
        <div className="">
          <h1
            className={` text-[20px] font-inter font-medium ${
              lightMode ? "text-black" : "text-white"
            } `}
          >
            Advertisement Title
          </h1>
          <p
            className={`text-[12px] font-inter font-light ${
              lightMode ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            faucibus, libero nec aliquam lacinia, odio odio ultricies nunc, nec
            posuere purus est nec enim.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc faucibus, libero nec aliquam lacinia, odio
            odio ultricies nunc, nec posuere purus est nec enim.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc faucibus, libero
            nec aliquam lacinia, odio odio ultricies nunc, nec posuere purus est
            nec enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
