import Image from "next/image";
import React from "react";
import { CustomersList } from "../common/Helper";
const Customers = () => {
  return (
    <>
      <div className="container max-w-[1164px] mx-auto pt-[50px] sm:pt-[80px] lg:pt-[60px] px-3">
        <div className="flex flex-wrap justify-between px-3 xl:px-9 items-center">
          {CustomersList.map((obj, index) => {
            return (
              <div
                key={index}
                className={`w-6/12 md:w-auto flex justify-center md:justify-start ${
                  index === 2 ? "mt-8 md:mt-0" : index === 3 ? "mt-8 md:mt-0" : ""
                }`}
              >
                <Image
                  src={obj.image}
                  alt="decent-capital"
                  width={180}
                  height={52}
                  className={` ${
                    index === 0
                      ? "w-[150px] sm:w-[170px] lg:w-[180px] h-[36px] sm:h-[42px] lg:h-[52px]"
                      : index === 1
                      ? "w-[88px] sm:w-[108px] lg:w-[128px] h-[36px] sm:h-[42px] lg:h-[52px]"
                      : index === 2
                      ? "w-[124px] sm:w-[144px] lg:w-[164px] h-[36px] sm:h-[42px] lg:h-[52px]"
                      : index === 3
                      ? "w-[118px] sm:w-[138px] lg:w-[158px] h-[36px] sm:h-[42px] lg:h-[52px]"
                      : ""
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Customers;
