export default function CustomButton({ text, className }) {
  return (
    <>
      <button
        className={`text-base text-light-white bg-blue-linear-gradient px-4 sm:px-10 py-1.5 sm:py-3 rounded-full transition-all duration-300 ease-in-out ${className}`}
      >
        {text}
      </button>
    </>
  );
}
