"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaqArrow } from "../common/Icons";
import CustomTags from "../common/startman/custom-ui/CustomTags";
import { FaqsList } from "../common/Helper";
const Faq = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="max-w-[1164px] px-3 sm:px-5 mx-auto py-[50px] sm:py-[80px] xl:py-[140px] relative z-10">
        <div className="flex justify-center">
          <CustomTags
            title="FAQ’s"
            svgColor="#0071BC"
            childClassName="!capitalize"
            parentClassName="inline-flex px-8 md:px-[46px]"
          />
        </div>
        <h2 className="font-semibold font-anek text-center text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-9 lg:mb-12 mt-3 sm:mt-5">
          Frequently <span className="font-extralight"> Asked </span>
          <span className="text-blue"> Questions</span>
        </h2>
        {FaqsList.map((obj, index) => {
          return (
            <Accordion
              key={index}
              open={open === index}
              icon={<FaqArrow id={index} open={open} />}
              className={`max-w-[840px] mx-auto bg-light-blue border border-transparent py-3 sm:py-4 px-4 sm:px-6 rounded-[12px] ${
                open === index ? "" : "border border-[#0A0A0A1A]"
              } ${index === 4 ? "mb-0" : "mb-4 sm:mb-6"}`}
            >
              <AccordionHeader
                onClick={() => handleOpen(index)}
                className="font-medium font-anek text-lg sm:text-xl !leading-[130%] md:!leading-[150%] text-light-black border-b-0 py-0 flex items-center text-start"
              >
                <span className="pt-1">{obj.title}</span>
              </AccordionHeader>
              <AccordionBody className="text-sm sm:text-base text-light-black pb-0 pt-2 sm:pt-3 max-w-[608px] opacity-70">
                Simply sign up on our website, create an account, and you can
                start exploring our features immediately.
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Faq;
