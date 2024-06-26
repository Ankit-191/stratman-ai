import Customers from "../app/components/stratman/Customers";
import Hero from "../app/components/stratman/Hero";
import Trends from "../app/components/stratman/Trends";
import ChartAnalysis from "../app/components/stratman/ChartAnalysis";
import Testimonial from "./components/stratman/Testimonial";
import Dashboard from "../app/components/stratman/Dashboard";
import SearchMode from "../app/components/stratman/SearchMode";
import Copilot from "../app/components/stratman/Copilot";
import Pricing from "../app/components/stratman/Pricing";
import NewsInsights from "../app/components/stratman/NewsInsights";
import Faq from "../app/components/stratman/Faq";
import Discover from "../app/components/stratman/Discover";
import Footer from "../app/components/common/Footer";
import BackToTop from "../app/components/common/BackToTop";
import Image from "next/image";
import line from "../../public/stratman/images/svg/page-line.svg";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={line}
          alt="line"
          width={1}
          height={5000}
          className="h-[calc(100%-24px)] w-full absolute top-6"
        />
        <div className="relative top-0 z-[1] pt-[0.1px]">
          <Hero />
          <Customers />
          <Trends />
          <ChartAnalysis />
          <Dashboard />
          <SearchMode />
          <Suspense>
            <Copilot />
          </Suspense>
          <Testimonial />
          <Pricing />
          <NewsInsights />
          <Faq />
          <Discover />
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  );
}
