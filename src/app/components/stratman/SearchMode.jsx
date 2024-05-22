import React from "react";
import Content from "../common/startman/reusable-content/Content";
import webSearch from "/public/stratman/images/png/web-search.png";
import Image from "next/image";
const SearchMode = () => {
  return (
    <>
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-center lg:justify-between items-center py-[50px] sm:py-[80px] lg:py-[160px]">
          <div className="w-full md:w-9/12 lg:w-6/12 xl:w-[45%] sm:px-3 text-center lg:text-start mt-8 lg:mt-0">
            <Content
              title="search mode"
              heading="Internet Web Search Integration"
              description="Search mode is designed to take any search queries just like a normal search engine such as Google would. It takes the top 3 most relevant links to your search, and provides a summary. Search mode is a great way to get caught up on the latest news, to ask questions that you'd normally ask google, useful to save time from sorting through the noise on your own."
            />
          </div>
          <div className="w-full md:w-9/12 lg:w-6/12 sm:px-3 text-center lg:text-start">
            <div className="bg-light-blue rounded-[14px] ps-0 pt-0 p-4 sm:pe-6 sm:ps-4 sm:pt-6 sm:pb-10 inline-block">
              <Image
                src={webSearch}
                alt="web search"
                width={447}
                height={276}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMode;
