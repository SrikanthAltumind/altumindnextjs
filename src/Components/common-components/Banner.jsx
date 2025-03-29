
// import axios from "axios";
// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoaderSpinner from "../common-components/LoaderSpinner";
import useFetchData from "../../CustomHooks/useFetchData";

const Banner = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const location = useLocation();
  let apiUrl;

  if (location.pathname === "/career/life-at-altumind")
    apiUrl = "api/life-at-banner?populate=*";
  else if (location.pathname === "/about/about-altumind/community-engagement")
    apiUrl = "api/community-management-banner?populate=*";
  else if (location.pathname === "/alliance") apiUrl = "api/alliance-banner?populate=*";
  else if (location.pathname === "/services/experience-design-services")
    apiUrl = "api/service-exp-design-banner?populate=*";
  else if (location.pathname === "/services/ai-services")
    apiUrl = "api/service-ai-automation-banner?populate=*";
  else if (location.pathname === "/services/quality-assurance-services")
    apiUrl = "api/service-qa-testing-banner?populate=*";
  else if (location.pathname === "/services/digital-marketing-services")
    apiUrl = "api/service-digital-marketing-banner?populate=*";
  else if (location.pathname === "/services/digital-development-services")
    apiUrl = "api/service-tech-engg-banner?populate=*";
  else if (location.pathname === "/services/data-analytics-services")
    apiUrl = "api/service-data-analytics-banner?populate=*";
  else if (location.pathname === "/services/operations-managed-services")
    apiUrl = "api/service-managed-operation-banner?populate=*";
  else if (location.pathname === "/services")
    apiUrl = "api/service-root-overview?populate=*";
  else if (location.pathname === "/services/digital-strategy-services")
    apiUrl = "api/service-digital-strategy-consulting-banner?populate=*";
  else if (location.pathname === "/services/cloud-strategy-engineering-services")
    apiUrl = "api/service-cloud-banner?populate=*";
  else if (location.pathname === "/about/about-altumind/alliance")
    apiUrl = "api/alliance-banner?populate=*";
  else if (location.pathname === "/about/about-altumind/leadership")
    apiUrl = "api/leadership-banner?populate=*";
  else if (location.pathname === "/about/about-altumind/mission-and-vision")
    apiUrl = "api/our-mission-and-vision-banner?populate=*";
  else if (location.pathname === "/about") apiUrl = "api/about-us-banner?populate=*";
  else if (location.pathname === "/career/open-roles")
    apiUrl = "api/open-role-banner?populate=*";
  else if (location.pathname === "/insights/blogs")
    apiUrl = "api/open-role-banner?populate=*";
  else if(location.pathname === "/services/experience-design/ui-design")
  apiUrl = "/api/service-exp-design-ui-banner"
 else if(location.pathname === "/agiliti-hire-dedicated-developers")
  apiUrl = "/api/agiliti-root-banner?populate=*"


 const {data, isLoading, isError, error} = useFetchData(['banner', location.pathname], apiUrl)
 const bannerData = data?.data?.data?.attributes || []

 const scrollToForm = () => {
  const agilitiForm = document.getElementById("agiliti-form")
  agilitiForm.scrollIntoView({ behavior: "smooth" });
};

  // const fetchData = () => {
  //   const url = import.meta.env.VITE_APP_API_URL + apiUrl;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData(res?.data?.data?.attributes);
        
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch data:", err);
  //       setError("Failed to fetch data. Please try again later.");
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  if (isLoading) {
    return <LoaderSpinner/>;
  }

  if (isError) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error.message}
      </div>
    );
  }

  return (
    // <div className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme  min-h-[300px] flex flex-col justify-center items-center text-center font-raleway gap-y-5 px-4">
    //   <p className="custom-gradient-text py-2">
    //     {data?.title} 
    //   </p>
    //   <p className="max-w-[450px] text-sm md:text-base  text-black dark:font-normal font-semibold dark:text-white">
    //     {data?.description}
    //   </p>
      // {location.pathname === "/services" && (
        
      //     <a href="/contact" className="group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1">
      //       Get Started With Us
      //       <svg
      //         className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
      //         aria-hidden="true"
      //         xmlns="http://www.w3.org/2000/svg"
      //         width="24"
      //         height="24"
      //         fill="none"
      //         viewBox="0 0 24 24"
      //       >
      //         <path
      //           stroke="currentColor"
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           strokeWidth="2"
      //           d="M19 12H5m14 0-4 4m4-4-4-4"
      //         />
      //       </svg>
      //     </a>
        
      // )}
    // </div>
    <div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse sm:justify-between gap-y-5 items-center font-raleway px-4 md:px-10 lg:px-28'>
      
       <div className="max-md:px-5 flex flex-col gap-3">
      <h1 className='max-w-[600px] custom-gradient-text mx-0'>
      {bannerData?.title} 
      </h1>
      <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'> {bannerData?.description}</p>
      {location.pathname === "/services" && (
        
        <a href="/contact" aria-label="Go to contact page" className="group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1">
          Get Started
          <svg
            className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
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
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      
    )}
    {
      location.pathname === "/agiliti-hire-dedicated-developers" && (
        <button onClick={scrollToForm} className="w-fit text-lg font-raleway text-white bg-[#DD5143] font-semibold py-2 px-8 hover:scale-105 rounded-full">
          Expand Your Crew
        </button>
      )
    }
      </div>
   
      <div>
        <img loading="lazy" className="lg:h-[260px] h-[230px] mx-auto" src={bannerData?.image?.data?.attributes?.url} alt={bannerData?.image?.data?.attributes?.alternativeText} />
      </div>
    </div>
  );
};

export default Banner;

