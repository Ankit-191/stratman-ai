import React from "react";
import Image from "next/image";
import { ReadMoreArrow } from "../common/Icons";
import CustomTags from "../common/startman/custom-ui/CustomTags";
import Link from "next/link";
import ParticlesFive from "../common/ParticlesP5";
const NewsInsights = () => {
  return (
    <div className="relative bg-box-image bg-repeat bg-cover bg-center bg-dark-black mx-3 sm:mx-5 rounded-[16px] sm:rounded-[25px] lg:rounded-[40px] py-[50px] sm:py-[80px] lg:py-[100px] overflow-hidden" id="news">
      <div className="absolute top-0 w-full h-full z-10">
        {/* <ParticlesFive /> */}
      </div>
      <div
        className="relative z-20"
        
      >
        <div className="max-w-[1164px] px-3 mx-auto">
          <div className="text-center">
            <CustomTags
              title="News & Insights"
              parentClassName="inline-flex px-[27.5px]"
              svgColor="#0071BC"
            />
          </div>
          <h2 className="font-anek font-semibold mt-5 text-light-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl !leading-[120%]">
            Our <span className="font-extralight">News &</span>
            <span className="text-blue"> Insights</span>
          </h2>

          <p className="text-light-white text-base opacity-70 sm:font-base !leading-[150%] pt-3 max-w-[625px] text-center mx-auto ">
            Stay informed and ahead of the curve with the latest trends, tips,
            and insights in video ad creation and social media marketing.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-4 lg:gap-6 sm:mt-4 lg:mt-12 pt-3 mt-5">
            <div className="flex bg-dark-blue max-w-[558px] duration-200 md:min-h-[446px] lg:min-h-[519px] xl:min-h-[491px] flex-col items-start news_card p-3 lg:p-5 rounded-[12px] flex-column">
              <Image
                width={528}
                height={296}
                alt="analyticsMan"
                src="/stratman/images/webp/analyticsMan.webp"
              />
              <h6 className="news_heading font-semibold text-blue pt-5 font-anek text-xl lg:text-2xl">
                Analytics AI: Why You Need Stratman AI in 2024
              </h6>
              <p className="sm:pt-2 news_pera text-sm sm:text-base text-light-black max-w-[518px]">
                Stratman AI uses the newest artificial intelligence (AI) and
                machine learning (ML) technologies to analyze cryptocurrency
                markets.
              </p>
              <Link
                className="border-dark-black group gap-[12px] flex items-center news_read border-b-[1.5px] text-dark-black pt-1 sm:pt-5"
                href="#"
              >
                Read More
                <ReadMoreArrow className="group-hover:translate-x-2 transition-all duration-200" />
              </Link>
            </div>
            <div className="flex bg-dark-blue max-w-[558px] duration-200 md:min-h-[446px] lg:min-h-[519px] xl:min-h-[491px] flex-col items-start news_card p-3 lg:p-5 rounded-[12px] flex-column">
              <Image
                width={528}
                height={296}
                src="/stratman/images/webp/marketGrooup.webp"
                alt="market"
              />
              <h6 className="news_heading font-semibold text-blue pt-5 font-anek text-xl lg:text-2xl">
                AI Financial Market: Stratman AI Leads the Way
              </h6>
              <p className="sm:pt-2 news_pera text-sm sm:text-base text-light-black max-w-[518px]">
                In the current 2024 financial markets, it&apos;s more important
                than ever to have accurate forecasting.
              </p>
              <Link
                className="border-dark-black group flex items-center gap-4 news_read border-b-[1.5px] text-dark-black pt-1 sm:pt-5"
                href="#"
              >
                Read More
                <ReadMoreArrow className="group-hover:translate-x-2 transition-all duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
