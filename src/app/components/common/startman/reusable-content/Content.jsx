import React from "react";
import CustomButton from "../custom-ui/CustomButton";
const Content = ({
  title,
  description,
  heading,
  descriptionClass,
  headingClass,
  titleClass,
}) => {
  return (
    <>
      <p className={`text-sm md:text-base text-blue uppercase !leading-[150%] ${titleClass}`}>{title}</p>
      <h2
        className={`text-3xl !leading-[120%] sm:text-5xl font-semibold text-light-black font-anek sm:my-4 my-3 ${headingClass}`}
      >
        {heading}
      </h2>
      <p
        className={`text-sm md:text-base !leading-[150%] text-light-black lg:mb-8 mb-6 opacity-70 ${descriptionClass}`}
      >
        {description}
      </p>
      <CustomButton text="Start Chatting Now" className="sm:!px-6" />
    </>
  );
};

export default Content;
