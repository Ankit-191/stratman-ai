import React from "react";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn, Twitter } from "./Icons";
import footerLogo from "/public/stratman/images/webp/footerLogo.webp";
import mailTo from "/public/stratman/images/svg/mailTo.svg";
import callTo from "/public/stratman/images/svg/callTo.svg";
import location from "/public/stratman/images/svg/location.svg";
import Link from "next/link";
function Footer() {
  return (
    <footer>
      <div className="max-w-[1164px] px-3 mx-auto mt-12 md:mt-[60px] lg:mt-20">
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
            <p className="pt-4 text-base text-grey max-w-[334px]">
              Stratman AI is dedicated to empowering investors with advanced
              AI-driven tools and insights. Our platform provide financial data.
            </p>
            <p className="pt-6 font-anek font-semibold text-base text-darkblue">
              Follow Us
            </p>
            <div className="flex pt-6 gap-3">
              <a
                className="hover:scale-110 duration-300"
                href="https://www.linkedin.com/ "
                target="_blank"
              >
                <LinkedIn />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://www.instagram.com/ "
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://www.linkedin.com/ "
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://x.com/ "
                target="_blank"
              >
                <Twitter />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-7 mt-6 lg:mt-0 xl:gap-[55px] items-start">
            <ul className="ps-0">
              <p className="text-black pb-1 font-anek font-semibold text-base">
                Company
              </p>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Features
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Pricing
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Blogs
                </a>
              </li>
            </ul>
            <ul className="ps-0">
              <p className="text-black pb-1 font-anek font-semibold text-base">
                Information
              </p>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="ps-0">
              <p className="text-black pb-1 font-anek font-semibold text-base">
                Examples
              </p>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  News
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="text-grey hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  Testimonials
                </a>
              </li>
            </ul>
            <ul className="ps-0">
              <p className="text-black pb-1 mb-1 font-anek font-semibold text-base">
                Contacts
              </p>
              <li className="pt-3">
                <a
                  className="text-grey flex hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  <Image
                    className="me-2"
                    width={20}
                    height={20}
                    src={callTo}
                    alt="call-to"
                  />
                  +1234567890
                </a>
              </li>
              <li className="pt-3 mt-[2px]">
                <a
                  className="text-grey flex hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  <Image
                    className="me-2"
                    width={20}
                    height={16}
                    src={mailTo}
                    alt="mail-to"
                  />
                  123@Stratman AI.Com
                </a>
              </li>
              <li className="pt-3 mt-[2px]">
                <a
                  className="text-grey flex hover:text-blue duration-300 text-base"
                  href="#home"
                >
                  <Image
                    className="me-2"
                    width={20}
                    height={16}
                    src={location}
                    alt="location"
                  />
                  123, Dubai(UAE)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="mt-10 h-[1px] flex w-full bg-[#b2b2b2]"></span>
      <p className="text-base text-grey text-center pt-6 pb-5">
        © 2024 Stratman AI. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
