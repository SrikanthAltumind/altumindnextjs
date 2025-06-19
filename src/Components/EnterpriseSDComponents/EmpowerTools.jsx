import { useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import useFetchData from "../../CustomHooks/useFetchData";
const CoreEnterprise = () => {
  const [activeTab, setActiveTab] = useState(0);

  const apiUrl = `/api/service-landing-businesses?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["empowerTools", location.pathname],
    apiUrl
  );
  const empowerToolsData = data?.data?.data || [];

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error?.message}
      </div>
    );
  }
  return (
    <div className="bg-[#1C1C1C] sm:px-10 px-5 space-y-10 text-white py-20">
      <div className="text-center font-raleway  space-y-5">
        <p className="text-xl md:text-2xl lg:text-3xl max-w-[500px] mx-auto font-semibold">
          Tools that Empower Businesses
        </p>
        <p className="font-light max-w-[1000px] lg:text-base text-[13px] mx-auto">
          Blending cutting-edge tech with real human needs to drive business
          impact. We leverage a future-ready tech stack to deliver scalable,
          secure, and high-performance digital solutions. Whether you&apos;re
          building a cloud-native app or scaling AI workflows, we&apos;ve got
          the tech edge to make it happen.
        </p>
      </div>
      <div className="flex items-stretch gap-5 flex-col md:flex-row font-montserrat justify-center mx-auto overflow-hidden max-w-[1000px]">
        <div className="basis-[50%] lg:basis-[40%] flex flex-col rounded-xl justify-center p-5 bg-[#5489FC]">
          {empowerToolsData?.map((item, index) => (
            <div
              className={`flex justify-between rounded-md items-center px-3 ${
                activeTab === index
                  ? "font-medium bg-[#FFFFFF33]"
                  : "font-light"
              }`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              <p className={` text-[15px]- cursor-pointer py-3`}>
                {item?.attributes?.title}
              </p>
              {activeTab === index && (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="basis-[50%] lg:basis-[60%] pl-14 py-3 pr-5 ">
          <div className="flex gap-10 flex-wrap items-center ">
            {empowerToolsData[activeTab]?.attributes?.images?.data?.map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white w-[125px] h-[125px] shadow-sm rounded-md p-2 flex flex-col justify-around items-center"
                >
                  <img
                    src={item?.attributes?.url}
                    alt={item?.attributes?.alternativeText}
                  />
                  <p className="text-xs text-center text-black font-semibold font-raleway">
                    {item?.attributes?.alternativeText}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreEnterprise;
