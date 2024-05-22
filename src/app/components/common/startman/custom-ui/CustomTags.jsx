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
        className={`flex gap-2 bg-dark-blue py-[9px] px-[22px] rounded-full ${parentClassName}`}
      >
        <WhiteStar svgColor={svgColor} />
        <p className={`text-base text-blue uppercase ${childClassName}`}>
          {title}
        </p>
      </div>
    </>
  );
}
