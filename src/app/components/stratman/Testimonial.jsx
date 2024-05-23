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

const Testimonial = () => {
  return (
    <div
      className="bg-box-image bg-repeat bg-cover bg-center bg-dark-black mx-3 sm:mx-5 rounded-[16px] sm:rounded-[25px] lg:rounded-[40px] pt-12 lg:pt-[100px] pb-[100px] lg:pb-[150px] xl:pb-[100px]"
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
          Trusted <span className="font-extralight">investors & </span>
          <span className="text-blue">organizations</span>
        </h2>
        <p className="text-light-white opacity-70 text-base sm:font-base !leading-[150%] max-w-[812px] text-center mx-auto pb-8 lg:pb-[60px] pt-3">
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
          {organizationData.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="bg-dark-blue md:max-w-[364px] rounded-[14px] pb-0 p-3 sm:p-6 swiper-card min-h-[212px] sm:min-h-[252px] h-full">
                <p className="sm:text-base text-sm text-light-black border-b-[2px] border-[#BBD5E7] pb-2 sm:pb-4 !leading-[150%] min-h-[120px] sm:min-h-[137px] testimonials_slider opacity-70">
                  {obj.Para}
                </p>
                <div className="flex items-center pt-4">
                  <Image
                    src={obj.Avatar}
                    alt="Avator"
                    height={56}
                    width={56}
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="ps-3">
                      <p className="sm:pb-1 text-sm sm:text-lg font-semibold !leading-[150%] text-light-black">
                        {obj.Name}
                      </p>
                      <p className="text-light-black text-base !leading-[150%]">
                        {obj.Profession}
                      </p>
                    </div>
                    <div>{obj.Collin}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="prev absolute bottom-[-13%] sm:bottom-[-15%]  xl:bottom-[25%] left-[50%] -translate-x-16 xl:translate-x-0 xl:left-[-3%] x12:left-[-5%]">
          <LeftSwiperArrow />
        </div>
        <div className="next absolute bottom-[-13%] sm:bottom-[-15%]  xl:bottom-[25%] right-[50%] translate-x-16 xl:translate-x-0 xl:right-[-3%] x12:right-[-5%]">
          <RightSwiperArrow />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
