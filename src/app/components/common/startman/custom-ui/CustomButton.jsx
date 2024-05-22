export default function CustomButton({ text, className }) {
  return (
    <>
      <button
        className={`text-base text-light-white hover:shadow-inset-white hover:border hover:border-blue hover:text-light-black border border-transparent bg-blue-linear-gradient px-4 sm:px-10 py-1.5 sm:py-[11px] rounded-full transition-all duration-300 ease-in-out ${className}`}
      >
        {text}
      </button>
    </>
  );
}
