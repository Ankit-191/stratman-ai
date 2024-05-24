import { WhiteStar } from "../../Icons";
export default function CustomTags({
  parentClassName,
  childClassName,
  title,
  svgColor,
}) {
  return (
    <>
      <div
        className={`flex gap-1.5 md:gap-2 bg-dark-blue items-center py-[7px] md:py-[9px] px-[22px] rounded-full ${parentClassName}`}
      >
        <WhiteStar svgColor={svgColor} />
        <p className={` text-blue uppercase !leading-[150%] text-sm md:text-base ${childClassName}`}>
          {title}
        </p>
      </div>
    </>
  );
}
