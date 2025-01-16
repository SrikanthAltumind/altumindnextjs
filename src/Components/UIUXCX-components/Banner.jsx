import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoaderSpinner from "../common-components/LoaderSpinner";

const Banner = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation()

  let apiUrl;
  if(location.pathname === "/services/experience-design/ui-design")
    apiUrl = "api/service-exp-design-ui-banner"
  else if(location.pathname === "/services/experience-design/ux-design")
    apiUrl = "api/service-exp-design-ux-banner"
  else if(location.pathname === "/services/experience-design/cx-design")
    apiUrl = "api/service-exp-design-cx-banner"
  else if(location.pathname === "/services/technology-and-engineering/web-development")
  apiUrl = "api/service-tech-engg-web-banner?populate=*"
  else if(location.pathname === "/services/technology-and-engineering/mobile-app-development")
    apiUrl = "api/service-tech-engg-mobile-banner?populate=*"
  else if(location.pathname === "/services/technology-and-engineering/ecommerce-services")
    apiUrl = "api/service-tech-engg-ecom-banner?populate=*" 
  else if(location.pathname === "/services/technology-and-engineering/erp-integration")
    apiUrl = "api/service-tech-engg-erp-banner?populate=*"
  else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
    apiUrl = "api/service-ai-automation-ai-chat-banner?populate=*"
  else if(location.pathname === "/services/ai-automation/rpa")
    apiUrl = "api/service-ai-automation-rpa-banner?populate=*" 
  else if (location.pathname === "/services/cloud/cloud-migration")
    apiUrl = "/api/service-cloud-migration-banner?populate=*";
  else if (location.pathname === "/services/cloud/cloud-app")
    apiUrl = "/api/service-cloud-app-banner?populate=*";
  else if (location.pathname === "/services/digital-marketing/marketing-optimization")
    apiUrl = "/api/service-dm-marketing-opt-banner?populate=*";
  else if (location.pathname === "/services/digital-marketing/branding-design")
    apiUrl = "/api/service-dm-branding-design-banner?populate=*";
  else if (location.pathname === "/services/digital-marketing/marketing-services")
    apiUrl = "/api/service-dm-ms-banner?populate=*";
  else if (location.pathname === "/services/data-analytics/marketing-intelligence")
    apiUrl = "/api/service-da-marketing-intelligence-banner?populate=*";
  else if (location.pathname === "/services/data-analytics/business-intelligence")
    apiUrl = "/api/service-da-business-intelligence-banner?populate=*";
  else if(location.pathname === "/services/data-analytics/customer-360")
    apiUrl = "/api/service-da-customer-360-banner?populate=*"
  else if(location.pathname === "/services/data-analytics/digital-intelligence")
    apiUrl = "/api/service-da-digital-intelligence-banner?populate=*"
    else if(location.pathname === "/services/data-analytics/sales-intelligence")
    apiUrl = "/api/service-da-sales-intelligence-banner?populate=*"
  else if(location.pathname === "/services/managed-operations/product-innovation-management")
    apiUrl = "api/service-managed-operation-dpi-banner?populate=*"
    else if(location.pathname === "/services/managed-operations/website-operations-management")
    apiUrl = "api/service-managed-operation-wom-banner?populate=*"
  else if(location.pathname === "/services/managed-operations/cloud-management")
    apiUrl = "api/service-managed-operation-cm-banner?populate=*"
    else if(location.pathname === "/services/managed-operations/software-maintenance-support")
    apiUrl = "api/service-managed-operation-ssm-banner?populate=*"
  else if(location.pathname === "/services/quality-assurance/automation-testing")    
    apiUrl = "api/service-qat-automation-banner?populate=*"  
  else if(location.pathname === "/services/quality-assurance/security-testing")    
    apiUrl = "api/service-qat-security-banner?populate=*"  
  else if(location.pathname === "/services/quality-assurance/performance-testing")    
    apiUrl = "api/service-qat-performance-banner?populate=*"  
  else if(location.pathname === "/services/quality-assurance/qa-consulting")    
    apiUrl = "api/service-qat-consulting-banner?populate=*"
    else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")    
    apiUrl = "/api/service-dsc-dee-banner?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")    
    apiUrl = "/api/service-dsc-dm-banner?populate=*"
 

  const fetchData = () => {
    const url = import.meta.env.VITE_APP_API_URL + apiUrl;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data?.attributes);
        setError(null)
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
  }, [location.pathname]);

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
    <div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse sm:justify-between gap-y-5 items-center font-raleway px-4 md:px-10 lg:px-28'>
       <div className="max-md:px-5 flex flex-col gap-3">
      <h1 className='max-w-[600px] custom-gradient-text mx-0'>
        {data?.title} 
      </h1>
      <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'> {data?.description}</p>
      <Link to="/contact"  className="group text-xs sm:text-sm mt-8 w-fit hover:underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1">
          {data?.CTA}
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
              strokeWidth="1"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Link>
      </div>
   
      <div>
        <img className="lg:h-[260px] h-[230px] mx-auto" src={data?.image?.data?.attributes?.url} alt="Banner_image" />
      </div>
    </div>
  );
};

export default Banner;
