import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import LoaderSpinner from "../common-components/LoaderSpinner";

const Banner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation()
    let apiUrl;

    if(location.pathname === '/careers/life-at-altumind')
        apiUrl = 'api/life-at-banner'
      else if(location.pathname === '/community-engagement')
        apiUrl = 'api/community-management-banner'
       else if(location.pathname === '/alliance')
        apiUrl = 'api/alliance-banner'
       else if(location.pathname === '/services/experience-design')
        apiUrl = 'api/service-exp-design-banner'
      else if(location.pathname === '/services/ai-automation')
        apiUrl = 'api/service-ai-automation-banner'
      else if(location.pathname === '/services/qa-testing')
        apiUrl = 'api/service-qa-testing-banner'
      else if(location.pathname === '/services/digital-marketing')
        apiUrl = 'api/service-ai-automation-banner'
        else if(location.pathname === '/services/technology-engineering')
        apiUrl = 'api/service-tech-engg-banner'
      else if(location.pathname === '/services/data-analytics')
        apiUrl = 'api/service-data-analytics-banner'
      else if(location.pathname === '/services/managed-operations')
        apiUrl = 'api/service-managed-operation-banner'
      else if(location.pathname === '/services')
        apiUrl = 'api/service-root-overview'
       else if(location.pathname === '/services/digital-strategy-consulting')
        apiUrl = 'api/service-digital-strategy-consulting-banner'
       else if(location.pathname === '/services/cloud-services')
        apiUrl = 'api/service-cloud-banner'
       else if(location.pathname === '/mission-and-vision')
        apiUrl = 'api/our-mission-and-vision-banner'
             else if(location.pathname === '/leadership')
        apiUrl = 'api/leadership-banner'
        else if(location.pathname === '/about')
        apiUrl = 'api/about-us-banner'

  const fetchData = () => {
    const url = 
      import.meta.env.VITE_APP_API_URL + apiUrl;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data?.attributes);
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
    <div className='bg-LightBlue dark:bg-gradient-to-b from-[#031848] to-darkTheme  min-h-[300px] flex flex-col justify-center items-center text-center font-raleway gap-y-5 px-4'>
    <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>{data?.title}
    </p>
    <p className='max-w-[450px] text-sm md:text-base  text-black dark:font-normal font-medium dark:text-white'>{data?.description}</p>
    {
      location.pathname === '/services' &&
      <p  className='group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1'>
      Get Started With Us
        <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
      </p>
    }
  </div>
  )
}

export default Banner