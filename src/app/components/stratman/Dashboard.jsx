import Image from "next/image";
import Content from "../common/startman/reusable-content/Content";
import dashboardImage from "/public/stratman/images/png/dashboard-image.png";
const Dashboard = () => {
  return (
    <>
      <div className="bg-blue-image bg-cover bg-center mx-3 sm:mx-5 rounded-[16px] sm:rounded-[25px] lg:rounded-[40px]">
        <div className="container max-w-[1164px] mx-auto px-3">
          <div className="flex flex-wrap justify-center lg:justify-between items-center py-[50px] sm:py-[80px] lg:py-[100px]">
            <div className="w-full md:w-9/12 lg:w-6/12 xl:w-[55%] sm:px-3 text-center lg:text-start">
              <div className="inline-flex">
                <Image
                  src={dashboardImage}
                  alt="dashboard image"
                  width={567}
                  height={372}
                  className=""
                />
              </div>
            </div>
            <div className="w-full md:w-9/12 lg:w-5/12 sm:px-3 text-center lg:text-start mt-6 lg:mt-0">
              <Content
                titleClass="text-light-white"
                headingClass="text-light-white"
                descriptionClass="text-light-white"
                title="Dashboard"
                heading="Analysis Dashboard"
                description="This section is designed to view custom charts with access to nearly 100 metrics for a given stock ticker. Just type in the ticker you&apos;d like to see, and select up to 3 metrics to view the charts, with historical data up to 30 years. Great way to gain fast insights about a stock."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
