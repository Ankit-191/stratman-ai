"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
// import SubHeading from "./common/SubHeading";
import { organizationData } from "../common/Helper";
import { LeftSwiperArrow, RightSwiperArrow } from "../common/Icons";
import CustomTags from "../common/startman/custom-ui/CustomTags";

const Testinomial = () => {
  return (
    <div
      className="bg-blue-image bg-cover bg-center mx-3 sm:mx-5 rounded-[16px] sm:rounded-[25px] lg:rounded-[40px] py-[50px] sm:py-[80px] pb-[90px] lg:py-[100px]"
      id="testimonials"
    >
      <div className="container max-w-[1164px] mx-auto px-3 relative">
        <div className="text-center">
          <CustomTags
            title="testimonials"
            parentClassName="inline-flex px-[27.5px]"
            svgColor="#0071BC"
          />
        </div>
        <h2 className="font-anek font-semibold text-light-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl !leading-[120%] pt-5">
          Trusted <span className="font-extralight">investors &</span>
          <span className="text-blue">organizations</span>
        </h2>
        <p className="text-light-white text-sm sm:font-base !leading-[150%] max-w-[812px] text-center mx-auto pb-4 sm:pb-6 md:pb-9 lg:pb-[60px]">
          Our AI-powered platform offers comprehensive features, including
          real-time financial data, customized charts, market trend analysis,
          and access to SEC filings.{" "}
        </p>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            780: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {organizationData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="bg-dark-blue md:max-w-[364px] rounded-[14px] pb-0 p-3 sm:p-6 swiper-card min-h-[212px] sm:min-h-[252px] h-full">
                <p className="sm:text-base text-sm text-light-black border-b-[2px] border-[#BBD5E7] pb-2 sm:pb-4 !leading-[150%] min-h-[120px] sm:min-h-[137px] testimonials_slider">
                  {data.Para}
                </p>
                <div className="flex items-center pt-4">
                  <Image
                    src={data.Avator}
                    alt="Avator"
                    height={56}
                    width={56}
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="ps-3">
                      <p className="sm:pb-1 text-sm sm:text-lg font-semibold !leading-[150%]">
                        {data.Name}
                      </p>
                      <p className="text-black text-base !leading-[150%]">
                        {data.Profession}
                      </p>
                    </div>
                    <div>{data.Collen}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="prev absolute bottom-[-13%] sm:bottom-[-15%]  xl:bottom-[25%] left-[30%] xl:left-[-50px]">
          <LeftSwiperArrow />
        </div>
        <div className="next absolute bottom-[-13%] sm:bottom-[-15%]  xl:bottom-[25%] right-[30%] xl:right-[-50px]">
          <RightSwiperArrow />
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
