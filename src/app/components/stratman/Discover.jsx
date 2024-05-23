import React from "react";
import CustomButton from "../common/startman/custom-ui/CustomButton";
import ParticlesFive from "../common/ParticlesP5"
const Discover = () => {
  return (
    <div className="relative bg-dark-black rounded-[16px] mx-3 sm:mx-5 xl:px-0   py-[50px] sm:py-[80px] lg:py-[100px]  sm:rounded-[25px] lg:rounded-[40px] bg-box-image  bg-repeat bg-cover bg-center px-3 overflow-hidden">
      <div className="absolute top-0 w-full h-full z-10">
        <ParticlesFive />
      </div>
      <div className=" relative z-20  " >
        <h2 className="font-anek max-w-[832px] mx-auto font-semibold text-light-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl !leading-[120%]">
          Discover how Stratman
          <span className="font-light"> AI can supercharge </span>
          <span className="text-blue">your research </span>
        </h2>

        <p className="text-light-white opacity-70 font-base !leading-[150%] pt-3 max-w-[625px] text-center mx-auto pb-4 sm:pb-6 md:pb-9 lg:pb-8">
          Stay informed and ahead of the curve with the latest trends, tips, and
          insights in video ad creation and social media marketing.
        </p>
        <div className="flex justify-center items-center ">
          <CustomButton text="Get Started For Free" className="!px-7" />
        </div>
      </div>
    </div>
  );
};

export default Discover;
