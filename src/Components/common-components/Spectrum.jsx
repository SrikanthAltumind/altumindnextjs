import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoaderSpinner from './LoaderSpinner';

const Spectrum = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    let apiUrl;

    if (location.pathname === "/services/quality-assurance")
      apiUrl = "api/service-qa-testing-service-contents?populate=*";
    else if (location.pathname === "/services/technology-and-engineering")
      apiUrl = "api/service-tech-engg-service-contents?populate=*";
    else if (location.pathname === "/services/data-analytics")
      apiUrl = "api/service-data-analytics-services?populate=*";
    else if (location.pathname === "/services/managed-operations")
      apiUrl = "api/service-managed-operation-services?populate=*";
    else if (location.pathname === "/services/digital-strategy-consulting")
      apiUrl = "api/service-digital-strategy-consulting-services?populate=*";
    else if (location.pathname === "/services")
      apiUrl = "api/service-root-service-contents?populate=*";
  
  
    

    const fetchData = () => {
      const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
      axios
        .get(url)
        .then((res) => {
          setData(res?.data?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch data:", err);
          setError("Failed to fetch data. Please try again later.");
          setLoading(false);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (loading) {
      return <LoaderSpinner />;
    }

    if (error) {
      return (
        <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
          {error}
        </div>
      );
    }

    return (
      <div className=" w-[80%] flex flex-col gap-8 justify-center items-center p-4 font-raleway">
        {data?.map((service, index) => (
          <div
            className={`${
              index % 2 !== 0 ? "" : "flex-row-reverse"
            } flex w-full justify-evenly gap-5 items-center py-4 border-[#EF8188]`}
            key={"servicebox" + index}
          >
            <div className="md:w-[30%]">
              <img
                src={service?.attributes?.image?.data?.attributes?.url}
                alt={service?.attributes?.image?.data?.attributes?.name}
                height="100%"
                width="100%"
                className="md:w-[300px] md:h-[300px] object-contain"
              />
            </div>
            <div className="md:w-[50%] p-3 gap-3 flex flex-col">
              {/* <p className="text-[#A9C4FD] text-4xl">
                {index + 1 > 10 ? `${index + 1}.` : `0${index + 1}.`}
              </p> */}
              <p className="text-xl font-semibold">
                {service?.attributes?.title}
              </p>
              <p className="text-sm max-w-[480px]">
                {service?.attributes?.description}
              </p>
              {/* {service?.attributes?.CTA && (
                <a
                  href={service?.attributes?.url}
                  className="underline cursor-pointer mt-4 font-semibold flex gap-1 items-center group text-[#DD5143]"
                >
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
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    );
};

export default Spectrum