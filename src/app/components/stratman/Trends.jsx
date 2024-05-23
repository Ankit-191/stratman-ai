import React from "react";
import Content from "../common/startman/reusable-content/Content";
import CustomTags from "../common/startman/custom-ui/CustomTags";
import trendsData from "/public/stratman/images/png/trends-data.png";
import Image from "next/image";
const Trends = () => {
  return (
    <>
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="py-[50px] sm:py-[80px] lg:pt-[160px] lg:pb-[100px] text-center lg:text-start w-full md:w-full lg:w-auto mx-auto">
          <CustomTags
            title="features"
            parentClassName="inline-flex px-[27.5px]"
            svgColor="#0071BC"
          />
          <h2 className="font-anek text-[32px] sm:text-6xl mt-4 sm:mt-5 mb-3 !leading-[120%] text-black font-extralight">
            <span className="font-semibold">Stratman AI </span> helps Achieve{" "}
            <span className="font-semibold text-blue">Your Goals</span>
          </h2>
          <p className="text-base text-black opacity-70 max-w-[740px]">
            Our AI-powered platform offers comprehensive features, including
            real-time financial data, customized charts, market trend analysis,
            and access to SEC filings.
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between items-center">
          <div className="w-full md:w-9/12 lg:w-6/12 sm:px-3 text-center lg:text-start">
            <div className="bg-light-blue rounded-[14px] pe-5 ps-[5px] sm:pe-[31px] pb-5 sm:pb-[27px] inline-block">
              <Image
                src={trendsData}
                alt="trend data"
                width={450}
                height={286}
              />
            </div>
          </div>
          <div className="w-full md:w-full lg:w-6/12 xl:w-[45%] sm:px-3 text-center lg:text-start mt-8 lg:mt-0">
            <Content
              title="trends data"
              heading="Trends Data: Key Insights and Trends"
              description="Trends mode handles this problem by using Al to take in any query that you might think of, in this example- nvidia; and generate 5 search queries related to that term, and plots the last 12 months in trends. This is where trends mode can eliminate a lot of the noise, and help spark ideas."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trends;
