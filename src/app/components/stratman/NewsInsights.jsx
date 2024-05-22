import React from "react";
import Image from "next/image";
import { ReadMoreArrow } from "../common/Icons";
import CustomTags from "../common/startman/custom-ui/CustomTags";
const NewsInsights = () => {
  return (
    <>
      <div className="bg-blue-image bg-cover bg-center mx-3 sm:mx-5 rounded-[16px] sm:rounded-[25px] lg:rounded-[40px] py-[50px] sm:py-[80px] lg:py-[100px]">
        <div className="max-w-[1164px] px-3 mx-auto">
          <div className="text-center">
            <CustomTags
              title="News & Insights"
              parentClassName="inline-flex px-[27.5px]"
              svgColor="#0071BC"
            />  
          </div>
          <h2 className=" 'font-anekTelegu font-semibold mt-5 text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[120%]">
            Our <span className="font-light">NEWS &</span>
            <span className="text-blue"> Insights</span>
          </h2>

          <p className="text-light-white text-sm sm:font-base font-normal font-openSans leading-[150%] pt-3 max-w-[625px] text-center mx-auto pb-4 sm:pb-6 md:pb-9 lg:pb-[60px]">
            Stay informed and ahead of the curve with the latest trends, tips,
            and insights in video ad creation and social media marketing.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-6 sm:mt-4 lg:mt-12 pt-3">
            <div className="flex bg-dark-blue max-w-[558px] duration-200 flex-col items-start news_card p-3 lg:p-5 rounded-[12px] flex-column">
              <Image
                width={528}
                height={296}
                src="/stratman/images/webp/analyticsMan.webp"
              />
              <h6 className="news_heading font-semibold text-blue pt-5 font-anekTelegu text-xl lg:text-2xl">
                Analytics AI: Why You Need Stratman AI in 2024
              </h6>
              <p className="sm:pt-2 news_pera font-openSans font-normal text-sm sm:text-base text-lightBlack max-w-[518px]">
                Stratman AI uses the newest artificial intelligence (AI) and
                machine learning (ML) technologies to analyze cryptocurrency
                markets.
              </p>
              <a
                className="border-darkblue gap-[12px] flex items-center news_read border-b-[1.5px] text-darkBlue font-openSans pt-1 sm:pt-4 font-normal"
                href=""
              >
                Read More
                <ReadMoreArrow />
              </a>
            </div>
            <div className="flex bg-dark-blue max-w-[558px] duration-200 flex-col items-start news_card p-3 lg:p-5 rounded-[12px] flex-column">
              <Image
                width={528}
                height={296}
                src="/stratman/images/webp/marketGrooup.webp"
              />
              <h6 className="news_heading font-semibold text-blue pt-5 font-anekTelegu text-xl lg:text-2xl">
                AI Financial Market: Stratman AI Leads the Way
              </h6>
              <p className="sm:pt-2 news_pera font-openSans font-normal text-sm sm:text-base text-lightBlack max-w-[518px]">
                In the current 2024 financial markets, it's more important than
                ever to have accurate forecasting.
              </p>
              <a
                className="border-darkblue flex items-center gap-4 news_read border-b-[1.5px] text-darkBlue font-openSans pt-1 sm:pt-4 font-normal"
                href=""
              >
                Read More
                <ReadMoreArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsInsights;
