import React from "react";
import Content from "../common/startman/reusable-content/Content";
import chartOne from "/public/stratman/images/png/chart-one.png";
import chartTwo from "/public/stratman/images/png/chart-two.png";
import chartThree from "/public/stratman/images/png/chart-three.png";
import chartFour from "/public/stratman/images/png/chart-four.png";
import Image from "next/image";
const ChartAnalysis = () => {
  return (
    <div className="container max-w-[1164px] mx-auto px-3">
      <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-center lg:justify-between items-center py-[50px] sm:pt-[120px] sm:pb-[80px] xl:py-[200px]">
        <div className="w-full md:w-full lg:w-6/12 sm:px-3 lg:pe-10 xl:pe-24 text-center lg:text-start mt-10 sm:mt-16 lg:mt-0">
          <Content
            title="chart analysis"
            heading="Analyzing Charts for Key Insights"
            description="Use the Technicals copilot to upload screenshots of your charts. Let Stratman know about which patterns you're looking for, use it as an extra set of eyes to quickly scan your charts, or simply ask questions to gain insight. Upload a single chart or split screen charts to do analysis of multiple charts at once along with a question or query."
          />
        </div>
        <div className="w-full md:w-9/12 lg:w-6/12 xl:w-[45%] sm:px-3 text-center lg:text-start">
          <div className="bg-light-blue rounded-[14px] px-2 sm:px-4 inline-flex">
            <div className="-mt-4 sm:-mt-10">
              <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                <Image
                  src={chartOne}
                  alt="chart"
                  width={224}
                  height={177}
                  className="rounded-[12px]"
                />
              </div>
              <div className="px-1 sm:px-2 pt-1 sm:pt-2">
                <Image
                  src={chartThree}
                  alt="chart"
                  width={224}
                  height={177}
                  className="rounded-[12px]"
                />
              </div>
            </div>
            <div className="translate-y-4 sm:translate-y-10">
              <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                <Image
                  src={chartTwo}
                  alt="chart"
                  width={224}
                  height={177}
                  className="rounded-[12px]"
                />
              </div>
              <div className="px-1 sm:px-2 pt-1 sm:pt-2">
                <Image
                  src={chartFour}
                  alt="chart"
                  width={224}
                  height={177}
                  className="rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartAnalysis;
