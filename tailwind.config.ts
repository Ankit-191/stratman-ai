import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        x12: "1350px",
        "max-2xl": "2560px",
      },
      fontFamily: {
        anek: ["'Anek Telugu', sans-serif"],
      },
      colors: {
        "light-white": "#FEFEFE",
        blue: "#0071BC",
        "light-black": "#0A0A0A",
        "light-blue": "#F1F1F1",
        "dark-blue": "#CFECFF",
        "light-gray": "rgba(254, 254, 254, 0.15)",
        "dark-black": "#00192A",
      },
      fontSize: {
        "6xl": "52px",
        "7xl": "80px",
      },
      backgroundImage: {
        "box-image": "url('../../public/stratman/images/svg/bg-box.svg')",
        "blue-linear-gradient":
          "linear-gradient(90deg, #58B9F9 1.82%, #0071BC 104.09%)",
      },
      boxShadow: {
        "inset-white": "inset 0 70px 0 #FEFEFE",
      },
    },
  },
  plugins: [],
};
export default config;
