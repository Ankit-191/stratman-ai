import React from "react";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn, Twitter } from "./Icons";
import footerLogo from "/public/stratman/images/webp/footerLogo.webp";
import mailTo from "/public/stratman/images/svg/mailTo.svg";
import callTo from "/public/stratman/images/svg/callTo.svg";
import location from "/public/stratman/images/svg/location.svg";
import Link from "next/link";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="xl:max-w-[1164px] px-3 sm:px-5 xl:px-3 mx-auto mt-12 md:mt-[60px] lg:mt-20 relative z-10">
        <div className="flex justify-between flex-wrap gap-4 xl:gap-0 lg:flex-nowrap">
          <div className="flex flex-col">
            <Link href="/">
              <Image
                width={113}
                height={77}
                src={footerLogo}
                alt="footerlogo"
              />
            </Link>
            <p className="pt-4 text-sm md text-sm:md:text-base !leading-[150%] text-light-black sm:max-w-[470px] lg:max-w-[334px] opacity-70">
              Stratman AI is dedicated to empowering investors with advanced
              AI-driven tools and insights. Our platform provide financial data.
            </p>
            <p className="pt-6 font-anek font-semibold text-sm md:text-base text-dark-black">
              Follow Us
            </p>
            <div className="flex pt-4 gap-3">
              <Link
                className="hover:scale-110 duration-300"
                href="https://www.linkedin.com/ "
                target="_blank"
              >
                <LinkedIn />
              </Link>
              <Link
                className="hover:scale-110 duration-300"
                href="https://www.instagram.com/ "
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                className="hover:scale-110 duration-300"
                href="https://www.linkedin.com/ "
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                className="hover:scale-110 duration-300"
                href="https://x.com/ "
                target="_blank"
              >
                <Twitter />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-[unset] gap-4 md:gap-7 mt-3 lg:mt-0 xl:gap-[55px] items-start">
            <ul className="ps-0 w-24 sm:w-[unset]">
              <p className="text-light-black pb-1 font-anek font-semibold text-sm md:text-base">
                Company
              </p>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black hover:text-blue duration-300 text-sm md:text-base opacity-70"
                  href="#home"
                >
                  Home
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black hover:text-blue duration-300 text-sm md:text-base opacity-70"
                  href="#features"
                >
                  Features
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black hover:text-blue duration-300 text-sm md:text-base opacity-70"
                  href="#pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black hover:text-blue duration-300 text-sm md:text-base opacity-70"
                  href="#blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <ul className="ps-0 w-[180px] sm:w-[unset]">
              <p className="text-light-black pb-1 font-anek font-semibold text-sm md:text-base">
                Information
              </p>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black opacity-70 hover:text-blue duration-300 text-sm md:text-base"
                  href="#terms-conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black opacity-70 hover:text-blue duration-300 text-sm md:text-base"
                  href="#privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul className="ps-0 w-24 sm:w-[unset]">
              <p className="text-light-black pb-1 font-anek font-semibold text-sm md:text-base">
                Examples
              </p>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black opacity-70 hover:text-blue duration-300 text-sm md:text-base"
                  href="#news"
                >
                  News
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black opacity-70 hover:text-blue duration-300 text-sm md:text-base"
                  href="#testimonials"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
            <ul className="ps-0 w-[180px] sm:w-[unset]">
              <p className="text-light-black pb-1 mb-1 font-anek font-semibold text-sm md:text-base">
                Contacts
              </p>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black opacity-70 flex hover:text-blue duration-300 text-sm md:text-base"
                  href="tel:+1234567890"
                >
                  <Image
                    className="me-2 sm:w-[20px] sm:h-[20px] w-[18px] h-[18px]"
                    width={20}
                    height={20}
                    src={callTo}
                    alt="call-to"
                  />
                  +1234567890
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <Link
                  className="text-light-black opacity-70 flex hover:text-blue duration-300 text-sm md:text-base"
                  href="mailto:123@Stratman AI.Com"
                >
                  <Image
                    className="me-2 sm:w-[20px] sm:h-[16px] w-[18px] h-[14px]"
                    width={20}
                    height={16}
                    src={mailTo}
                    alt="mail-to"
                  />
                  123@Stratman AI.Com
                </Link>
              </li>
              <li className="pt-2 ms:pt-3">
                <span className="text-light-black opacity-70 flex hover:text-blue duration-300 text-sm md:text-base">
                  <Image
                    className="me-2 sm:w-[16px] sm:h-[20px] w-[14px] h-[18px]"
                    width={16}
                    height={20}
                    src={location}
                    alt="location"
                  />
                  123, Dubai(UAE)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="mt-10 h-[1px] flex w-full bg-[#b2b2b2]"></span>
      <p className="text-sm md text-sm:md:text-base text-light-black opacity-70 text-center py-3 md:pt-6 md:pb-5">
        © {currentYear} Stratman AI. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
