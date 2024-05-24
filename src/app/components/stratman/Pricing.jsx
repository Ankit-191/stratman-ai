import React from "react";
import CustomTags from "../common/startman/custom-ui/CustomTags";
import { CrossIcon, RightIcon } from "../common/Icons";
import { PricingData } from "../common/Helper";

const Pricing = () => {
  return (
    <div
      className="max-w-[1164px] xl:py-[140px] lg:py-[80px] md:py-20 sm:py-16 py-12 px-3 sm:px-5 mx-auto relative z-10"
      id="pricing"
    >
      <div className="text-center">
        <CustomTags
          title="PRICING"
          parentClassName="inline-flex md:px-[38.5px]"
          svgColor="#0071BC"
        />
      </div>
      <h2 className="text-black text-center pt-5 font-semibold max-w-[726px] mx-auto text-[28px] xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl !leading-[120%] font-anek">
        Stratman AI Vs <span className="font-extralight">other stock </span>
        <span className="text-blue">research assistant</span>
      </h2>

      <div className="flex flex-row flex-wrap justify-center -mx-3 mt-6 md:mt-12 pt-3">
        {PricingData.map((obj, index) => (
          <div key={index} className={`w-full max-w-[400px] sm:w-6/12 lg:w-4/12 px-3  ${index === 1 ? 'mt-6 sm:mt-0' : ''} ${index === 2 ? 'mt-6 lg:mt-0' : ''}`}>
            <div className="bg-light-blue pricing-gradient rounded-[16px] py-6 xl:py-8 px-5 xl:px-6 group">
              <h4 className="text-black price_heading !leading-full font-semibold font-anek text-[30px] lg:text-[32px] border-b border-[#0A0A0A]/10 group-hover:border-white/10">
                {obj.name}
              </h4>
              <ul className="mt-6 xl:mt-10">
                {obj.features.map((feature, subindex) => (
                  <li key={subindex} className={`flex items-center pt-${subindex === 0 ? "0" : "5"}`}>
                    {feature.available ? <RightIcon /> : <CrossIcon />}
                    <p className="text-offGrey text-sm sm:text-base !leading-6 pricing_option ps-2 ">
                      {feature.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
