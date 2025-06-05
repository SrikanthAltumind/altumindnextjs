import { useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import useFetchData from "../../CustomHooks/useFetchData";
const CoreEnterprise = () => {
  const [activeTab, setActiveTab] = useState(0);

  const apiUrl = `/api/service-landing-services?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["coreEnterprise", location.pathname],
    apiUrl
  );
  const coreEnterpriseData = data?.data?.data || [];

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
    <div className="bg-[#1C1C1C] px-10 space-y-10 text-white py-20">
      <div className="text-center font-raleway  space-y-5">
        <p className="sm:text-3xl text-xl max-w-[500px] mx-auto font-semibold">
          Our Core Enterprise Software Development Services
        </p>
        <p className="font-light max-w-[600px] mx-auto">
          End-to-end enterprise software development services tailored to your
          business needs built for performance, scalability, and long-term
          success.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-stretch font-montserrat justify-center mx-auto  border overflow-hidden rounded-2xl max-w-[1100px]">
        <div className="basis-[40%] flex flex-col justify-center p-5 bg-[#5489FC]">
          {coreEnterpriseData?.map((item, index) => (
            <p
              className={` ${
                coreEnterpriseData?.length - 1 !== index
                  ? "border-b"
                  : "border-0"
              } ${
                activeTab === index ? "font-semibold" : "font-light"
              }  cursor-pointer  py-3`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {item?.attributes?.title}
            </p>
          ))}
        </div>
        <div className="basis-[60%] space-y-5 sm:pl-14 py-8 sm:pr-5 px-5 ">
          <img
            className="bg-[#5489FC] w-fit shadow-sm rounded-md p-2"
            src={
              coreEnterpriseData[activeTab]?.attributes?.image?.data?.attributes
                ?.url
            }
            alt={
              coreEnterpriseData[activeTab]?.attributes?.image?.data?.attributes
                ?.alternativeText
            }
          />
          <p className=" text-lg font-semibold">
            {coreEnterpriseData[activeTab]?.attributes?.title}
          </p>
          <p className="font-light">
            {coreEnterpriseData[activeTab]?.attributes?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreEnterprise;
