import React, { useEffect, useState } from 'react'
import { gradientStyle } from '../ReactFunctions';
import axios from 'axios';
import Spectrum from '../Components/common-components/Spectrum';

const Testing = () => {

    const [overviewData, setOverviewData] = useState({})
    const [qaService, setQaService] = useState({})
    const [serviceData, setServiceData] = useState([])
    const [standData, setStandData] = useState({})
    const [weServe, setWeServe] = useState({})
    const [stack, setStack] = useState({})
    const [loading, setLoading] = useState(true)

    // const fetchOverview = () => {
        
    //     .then((response) => {
    //         console.log("response from overview: ", response?.data?.data)  
    //         setOverviewData(response?.data?.data)
    //     })
    //         .catch((error) => {
    //         console.log("error while fetching overview: ", error)
    //     })
    // }

    const fetchAllData = async () => {
      try {
        const [overviewData, standData, weServe, stack] = await Promise.all([
            axios.get(`${import.meta.env.VITE_APP_API_URL}api/service-qa-testing-overview?populate=*`),
            axios.get(`${import.meta.env.VITE_APP_API_URL}api/service-qa-testing-stands?populate=*`),
            axios.get(`${import.meta.env.VITE_APP_API_URL}api/service-qa-testing-we-serves?populate=*`),
            axios.get(`${import.meta.env.VITE_APP_API_URL}api/service-qa-testing-stack?populate=*`),
        ]);
        setOverviewData(overviewData.data?.data);
        setQaService(qaService.data?.data);
        setServiceData(serviceData.data?.data);
        setStandData(standData.data?.data);
        setWeServe(weServe?.data?.data)
        setStack(stack?.data?.data)
          
      } catch (error) {
        console.error("Error fetching filters:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
       fetchAllData(); 
    },[])
    return (
      <div className="min-h-screen flex flex-col items-center justify-start w-full font-raleway">
        <div className="w-full flex justify-center flex-col items-center p-4 gap-4 md:min-h-[320px] bg-[#F3F9FF]">
          <p className="text-3xl font-extrabold">
            <span className="" style={gradientStyle}>
              QA & Testing{" "}
            </span>{" "}
            <span>Services</span>
          </p>
          <p className="">Ensuring Reliability in Every Digital Interaction</p>
        </div>
        <div className="w-full flex gap-5 items-center justify-center py-6">
          <div className="flex flex-col gap-3 justify-start p-3 w-[45%]">
            <p>{overviewData?.attributes?.title}</p>
            <p className="font-extrabold text-3xl">
              <span style={gradientStyle}>
                Quality Precisions for <br />
                Flawless{" "}
              </span>
              <span>Digital Solutions</span>
            </p>
            <p className="text-wrap w-full text-sm leading-6">
              {overviewData?.attributes?.description}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 justify-start p-3 w-[45%]">
            <img
              src={overviewData?.attributes?.image?.data?.attributes?.url}
              alt={overviewData?.attributes?.image?.data?.attributes?.name}
              height="100%"
              // width="100%"
              className="ml-auto"
              width={400}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7">
          <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
            <p className="font-semibold">{qaService?.attributes?.title}</p>
            <p
              className="text-3xl font-extrabold md:max-w-[500px]"
              style={gradientStyle}
            >
              {qaService?.attributes?.heading}
            </p>
            <p className="md:max-w-[800px]">
              {qaService?.attributes?.description}
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Spectrum spectrumData={serviceData} />
          </div>

          {/* <div className="flex flex-col gap-8 justify-center items-center p-4">
            {serviceData?.map((service, index) => (
              <div
                className={`${
                  index % 2 !== 0 ? "" : "border-l-8  flex-row-reverse"
                } flex w-full justify-evenly gap-5 items-center py-4 border-[#EF8188]`}
                key={"servicebox" + index}
              >
                <div className="w-[30%]">
                  <img
                    src={service?.attributes?.image?.data?.attributes?.url}
                    alt={service?.attributes?.image?.data?.attributes?.name}
                    height="100%"
                    width="100%"
                    className="w-full max-h-[260px] object-fit"
                  />
                </div>
                <div className="w-[50%] p-3 gap-3 flex flex-col">
                  <p className="text-[#A9C4FD] text-4xl">
                    {index + 1 > 10 ? `${index + 1}.` : `0${index + 1}.`}
                  </p>
                  <p className="text-lg font-medium">
                    {service?.attributes?.title}
                  </p>
                  <p className="text-sm">{service?.attributes?.description}</p>
                  <p className="underline cursor-pointer mt-4 font-semibold flex gap-1 items-center group text-[#DD5143]">
                    <span className="font-montserrat">
                      {service?.attributes?.CTA}
                    </span>{" "}
                    <span>
                      <svg
                        className="w-6 h-6 group-hover:translate-x-3 transition-all duration-200 "
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
                          strokeWidth="1"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
}

export default Testing