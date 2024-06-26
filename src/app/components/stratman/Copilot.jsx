"use client";
import Image from "next/image";
import Content from "../common/startman/reusable-content/Content";
import copilot from "/public/stratman/images/png/copilot.png";
import searchIcon from "/public/stratman/images/svg/search-icon.svg";
import { CopilotList } from "../common/Helper";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Copilot = () => {
  const searchParams = useSearchParams();
  const queryValue = searchParams.get("mode");
  
  return (
    <div className="max-w-[1164px] mx-auto px-3 relative z-10">
      <div className="flex flex-wrap justify-center lg:justify-between items-center pb-[50px] sm:pb-[80px] xl:pb-[140px]">
        <div className="w-full md:w-9/12 lg:w-6/12 text-center lg:text-start">
          <div className="bg-light-blue rounded-[14px] sm:px-[30px] p-4 sm:py-[27px] inline-block">
            <Image src={copilot} alt="trend-data" width={452} height={185} className="min-h-[108px]"/>
            <div className="flex justify-between flex-wrap md:px-10 mt-2 md:mt-6">
              {CopilotList.map((obj, index) => {
                return (
                  <Link
                  href={`?mode=${obj.title.toLowerCase()}`}
                  scroll={false}
                  className={`text-xs max-[410px]:w-5/12 mt-2 rounded-full py-[7px] px-4 transition-all duration-300 ease-in-out ${
                      queryValue ===
                          obj.title.toLowerCase() 
                          || (!queryValue && obj.title.toLowerCase() === "fundamentals")
                          ? "text-light-white bg-dark-black"
                          : "text-black hover:text-light-white hover:bg-dark-black"
                  } 
`}
                  key={index}
              >
                  {obj.title}
              </Link>
                );
              })}
            </div>
            <div className="bg-blue flex items-center mt-4 w-full sm:px-[19px] px-4 py-2.5 sm:py-[11px] rounded-full max-w-[747px]">
              <input
                type="text"
                id="search-say"
                placeholder="Say “hello” to get started"
                className="text-light-white text-sm pe-4 outline-none placeholder:text-light-white placeholder:text-sm bg-transparent w-full"
              />
              <label htmlFor="search-say">
                <Image
                  src={searchIcon}
                  alt="search icon"
                  width={30}
                  height={30}
                  className="cursor-pointer rotate-90 "
                />
              </label>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-[45%] sm:px-3 text-center lg:text-start mt-8 lg:mt-0">
          <Content
            title="Copilot"
            heading="Copilot for fundamental data"
            description="The Fundamentals copilot is designed for users to ask questions about fundamentals for a company. This copilot utilizes LLM 's with our fundamentals data to provide comprehensive answers to natural language questions ( i.e: 'Does Nvidia have a positive earnings projection?'), and also comes with a special hotkeys feature. Hotkeys can access specialized data such as SEC 10-K filings, insider trading reports, analyst projections, and more, all with a ticker and a hotkey like such: 'tsla r' provides a summary of Tesla's risk factors section of their most recent 10-K."
          />
        </div>
      </div>
    </div>
  );
};

export default Copilot;
