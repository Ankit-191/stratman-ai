"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/stratman/images/png/stratman-ai-logo.png";
import menu from "/public/stratman/images/svg/menu.svg";
import close from "/public/stratman/images/svg/cross-icon.svg";
import { NavigationList } from "../common/Helper";
import CustomButton from "../common/startman/custom-ui/CustomButton";
import { useEffect, useState } from "react";
export default function Navigation() {
  const [handleNav, setHandleNav] = useState(false);
  // Effect to handle body overflow based on navigation menu visibility
  useEffect(() => {
    // Function to set body overflow style based on navShow state
    const handleBodyOverflow = () => {
      document.body.style.overflow = handleNav ? "hidden" : "unset";
    };
    // Call handleBodyOverflow function to set initial body overflow style
    handleBodyOverflow();
    // Cleanup function to reset body overflow style when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [handleNav]);
  return (
    <>
      <div className="container max-w-[1164px] mx-auto px-3 py-[19px]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={90}
              height={62}
              className="w-[70px] h-[42px] sm:w-[90px] sm:h-[62px]"
            />
          </Link>
          <ul
            className={`flex gap-8 flex-col lg:flex-row text-center lg:text-start absolute z-[9] lg:sticky w-full lg:w-auto bg-black lg:bg-transparent start-[-100%] top-0 h-screen lg:h-auto justify-center transition-all duration-300 ease-in-out ${
              handleNav ? "!start-0" : ""
            }`}
          >
            {NavigationList.map((obj, index) => {
              return (
                <li key={index}>
                  <Link
                    href={obj.href}
                    onClick={() => setHandleNav(false)}
                    className={`text-xl lg:text-base hover:text-blue transition-all duration-300 ease-in-out ${
                      index === 0 ? "text-blue" : "text-light-white"
                    }`}
                  >
                    {obj.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 sm:gap-8">
            <button className="text-base text-light-white hover:text-blue transition-all duration-300 ease-in-out">
              Log In
            </button>
            <CustomButton text="Sign Up" />
            <div
              className="lg:hidden relative z-10"
              onClick={() => setHandleNav(!handleNav)}
            >
              {handleNav ? (
                <Image src={close} alt="menu" width={18} height={16} />
              ) : (
                <Image src={menu} alt="menu" width={18} height={16} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
