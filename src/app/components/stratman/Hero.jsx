import Image from "next/image";
import BubblesAnimation from "../common/BubblesAnimation";
import Navigation from "../common/Navigation";
import CustomTags from "../common/startman/custom-ui/CustomTags";
import searchIcon from "/public/stratman/images/svg/search-icon.svg";
export default function Hero() {
  return (
    <div className="relative bg-box-image bg-repeat bg-cover bg-center bg-dark-black md:mx-5 md:mt-5 mx-3 mt-3 rounded-[16px] sm:rounded-[25px] lg:rounded-[32px] xl:rounded-[40px] overflow-hidden">
      < div className="absolute start-1/2 -translate-x-1/2 w-[210px] h-[210px] bg-blue blur-[150px]">
      </div>
      <div className="absolute top-0 w-full h-full z-10">
        <BubblesAnimation />
      </div>
      <div className="flex flex-col lg:h-[calc(100vh-40px)] max-2xl:h-[unset] relative z-30">
        <Navigation />
        <div className="container max-w-[1164px] mx-auto px-3 grow max-2xl:py-[230px]">
          <div className="flex text-center flex-col justify-center items-center h-full pt-16 pb-20 lg:py-0">
            <CustomTags
              svgColor="white"
              parentClassName="!bg-light-gray border border-[#FFFFFF26] !py-2 sm:!py-[9px]"
              title="Our AI integration"
              childClassName="text-light-white"
            />
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] xl:text-7xl text-light-white font-anek !leading-[120%] font-extralight mt-3">
              <span className="font-semibold">Make faster</span> and
              <span className="font-semibold"> smarter </span> decisions with
              <span className="font-semibold text-blue"> Stratman Al</span>
            </h1>
            <p className="text-base text-light-white opacity-70 mt-3 sm:mt-4">
              Our platform harnesses the power of artificial intelligence to
              revolutionize your investment journey.
            </p>
            <div className="bg-light-gray flex items-center mt-6 sm:mt-8 lg:mt-10 w-full sm:px-[27px] px-5 py-2.5 sm:py-4 rounded-full max-w-[747px]">
              <input
                id="search"
                type="text"
                placeholder="Search ideas for your investment..."
                className="text-light-white text-base opacity-80 pe-4 outline-none placeholder:opacity-80 placeholder:text-light-white placeholder:text-base bg-transparent w-full"
              />
              <label htmlFor="search">
                <Image
                  src={searchIcon}
                  alt="search icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
