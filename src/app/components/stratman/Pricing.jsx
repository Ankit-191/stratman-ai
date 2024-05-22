import React from "react";
import CustomTags from "../common/startman/custom-ui/CustomTags";
import { CrossIcon, RightIcon } from "../common/Icons";
const Pricing = () => {
  return (
    <div className="max-w-[1164px] xl:py-[140px] lg:py-[100px] md:py-20 sm:py-16 py-12 px-3 mx-auto">
      <div className="text-center">
        <CustomTags
          title="PRICING"
          parentClassName="inline-flex px-[27.5px]"
          svgColor="#0071BC"
        />
      </div>
      <h2 className="text-black text-center pt-5 font-semibold max-w-[726px] mx-auto text-[28px] xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-[120%] font-anek">
        Stratman AI Vs <span className="font-light">other stock </span>
        <span className="text-blue">research assistant</span>
      </h2>

      <div className="flex flex-row flex-wrap justify-center -mx-3 mt-6 md:mt-12 pt-3">
        <div className="sm:w-6/12 lg:w-4/12 px-3">
          <div className="bg-light-blue pricing-gradiant transition-all duration-200 rounded-[16px] py-6 xl:py-8 px-5 xl:px-6">
            <h4 className="text-black duration-200 transition-all price_heading leading-full  font-semibold font-anek text-[32px]">
              FinChat
            </h4>
            <ul className="mt-6 xl:mt-10">
              <li className="flex items-center">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Affordable Pricing
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Copilot
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Custom charts
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  SEC filing summaries
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Web search integration
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Technical analysis copilot
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Google trends simulations
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Hotkeys for common tasks
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  10 second response time
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Insider trading reports
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Analyst ratings and projections
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-6/12 lg:w-4/12 sm:pt-0 pt-6 px-3">
          <div className="bg-light-blue pricing-gradiant transition-all duration-200 rounded-[16px] py-6 xl:py-8 px-5 xl:px-6">
            <h4 className="text-black duration-200 transition-all  leading-full price_heading  font-semibold font-anek text-[32px]">
              Stratman AI
            </h4>
            <ul className="mt-6 xl:mt-10">
              <li className="flex items-center">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Affordable Pricing
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Copilot
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Custom charts
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  SEC filing summaries
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Web search integration
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Technical analysis copilot
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Google trends simulations
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Hotkeys for common tasks
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  10 second response time
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Insider trading reports
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Analyst ratings and projections
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-6/12 lg:pt-0 pt-6 lg:w-4/12 px-3">
          <div className="bg-light-blue pricing-gradiant transition-all duration-200 rounded-[16px] py-6 xl:py-8 px-5 xl:px-6">
            <h4 className="text-black duration-200 transition-all  leading-full price_heading font-semibold font-anek text-[32px]">
              Borea
            </h4>
            <ul className="mt-6 xl:mt-10">
              <li className="flex items-center">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Affordable Pricing
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Copilot
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Custom charts
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  SEC filing summaries
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Web search integration
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Technical analysis copilot
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Google trends simulations
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Hotkeys for common tasks
                </p>
              </li>
              <li className="flex items-center pt-5">
                <RightIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  10 second response time
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Insider trading reports
                </p>
              </li>
              <li className="flex items-center pt-5">
                <CrossIcon />
                <p className="text-offGrey text-base leading-6 pricing_option ps-2">
                  Analyst ratings and projections
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
