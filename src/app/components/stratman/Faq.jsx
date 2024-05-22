"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaqArrow } from "../common/Icons";
import CustomTags from "../common/startman/custom-ui/CustomTags";
const Faq = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="max-w-[1164px] px-3 mx-auto py-[50px] sm:py-[80px] lg:py-[140px]">
        <div className="flex justify-center">
          <CustomTags title="FAQ’s" svgColor="#0071BC" parentClassName="inline-flex px-8 sm:px-[46px]" />
        </div>
        <h2 className="font-semibold font-anek text-center text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-9 lg:mb-12 mt-3 sm:mt-5">
          Frequently <span className="font-normal"> Asked </span>
          <span className="text-blue"> Questions</span>
        </h2>

        <Accordion
          open={open === 1}
          icon={<FaqArrow id={1} open={open} />}
          className="max-w-[840px] mx-auto bg-light-blue py-3 sm:py-4 px-4 sm:px-6 rounded-[12px] mb-4 sm:mb-6"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-medium font-anek text-lg sm:font-xl text-light-black border-b-0 py-0 flex justify-between"
          >
            How do I get started with Stratman AI?
          </AccordionHeader>
          <AccordionBody className="text-sm sm:text-base text-light-black pb-0 pt-2 sm:pt-3 max-w-[608px] opacity-70">
            Simply sign up on our website, create an account, and you can start
            exploring our features immediately.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<FaqArrow id={2} open={open} />}
          className="max-w-[840px] mx-auto bg-light-blue py-3 sm:py-4 px-4 sm:px-6 rounded-[12px] mb-4 sm:mb-6"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="font-medium font-anek text-lg sm:font-xl text-light-black border-b-0 py-0 flex justify-between"
          >
            What features does Stratman AI offer?
          </AccordionHeader>
          <AccordionBody className="text-sm sm:text-base text-light-black pb-0 pt-2 sm:pt-3 max-w-[608px] opacity-70">
            Simply sign up on our website, create an account, and you can start
            exploring our features immediately.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={<FaqArrow id={3} open={open} />}
          className="max-w-[840px] mx-auto bg-light-blue py-3 sm:py-4 px-4 sm:px-6 rounded-[12px] mb-4 sm:mb-6"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="font-medium font-anek text-lg sm:font-xl text-light-black border-b-0 py-0 flex justify-between"
          >
            How does the Google Trends Data integration work?
          </AccordionHeader>
          <AccordionBody className="text-sm sm:text-base text-light-black pb-0 pt-2 sm:pt-3 max-w-[608px] opacity-70">
            Simply sign up on our website, create an account, and you can start
            exploring our features immediately.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={<FaqArrow id={4} open={open} />}
          className="max-w-[840px] mx-auto bg-light-blue py-3 sm:py-4 px-4 sm:px-6 rounded-[12px] mb-4 sm:mb-6"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="font-medium font-anek text-lg sm:font-xl text-light-black border-b-0 py-0 flex justify-between"
          >
            Is my data secure with Stratman AI?
          </AccordionHeader>
          <AccordionBody className="text-sm sm:text-base text-light-black pb-0 pt-2 sm:pt-3 max-w-[608px] opacity-70">
            Simply sign up on our website, create an account, and you can start
            exploring our features immediately.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          icon={<FaqArrow id={5} open={open} />}
          className="max-w-[840px] mx-auto bg-light-blue py-3 sm:py-4 px-4 sm:px-6 rounded-[12px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="font-medium font-anek text-lg sm:font-xl text-light-black border-b-0 py-0 flex justify-between"
          >
            Can I customize the charts and data views?
          </AccordionHeader>
          <AccordionBody className="text-sm sm:text-base text-light-black pb-0 pt-2 sm:pt-3 max-w-[608px] opacity-70">
            Simply sign up on our website, create an account, and you can start
            exploring our features immediately.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
