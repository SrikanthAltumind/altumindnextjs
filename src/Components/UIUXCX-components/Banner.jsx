import { Link, useLocation } from "react-router-dom";
import LoaderSpinner from "../common-components/LoaderSpinner";
import useFetchData from "../../CustomHooks/useFetchData";

const Banner = () => {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const location = useLocation()

  let apiUrl;
  if(location.pathname === "/experience-design-services/ui-design-services")
    apiUrl = "api/service-exp-design-ui-banner?populate=*"
  else if(location.pathname === "/experience-design-services/ux-design-services")
    apiUrl = "api/service-exp-design-ux-banner?populate=*"
  else if(location.pathname === "/experience-design-services/cx-design")
    apiUrl = "api/service-exp-design-cx-banner?populate=*"
  else if(location.pathname === "/digital-development-services/web-development-consulting")
  apiUrl = "api/service-tech-engg-web-banner?populate=*"
  else if(location.pathname === "/digital-development-services/mobile-app-design-development")
    apiUrl = "api/service-tech-engg-mobile-banner?populate=*"
  else if(location.pathname === "/digital-development-services/ecommerce-services")
    apiUrl = "api/service-tech-engg-ecom-banner?populate=*" 
  else if(location.pathname === "/digital-development-services/erp-integration-service")
    apiUrl = "api/service-tech-engg-erp-banner?populate=*"
  else if(location.pathname === "/ai-services/chatbot-development-services")
    apiUrl = "api/service-ai-automation-ai-chat-banner?populate=*"
  else if(location.pathname === "/ai-services/rpa-services")
    apiUrl = "api/service-ai-automation-rpa-banner?populate=*" 
  else if (location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
    apiUrl = "/api/service-cloud-migration-banner?populate=*";
  else if (location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
    apiUrl = "/api/service-cloud-app-banner?populate=*";
  else if (location.pathname === "/digital-marketing-services/optimization-services")
    apiUrl = "/api/service-dm-marketing-opt-banner?populate=*";
  else if (location.pathname === "/digital-marketing-services/branding-design-services")
    apiUrl = "/api/service-dm-branding-design-banner?populate=*";
  else if (location.pathname === "/digital-marketing-services/integrated-digital-marketing-services")
    apiUrl = "/api/service-dm-ms-banner?populate=*";
  else if (location.pathname === "/data-analytics-services/marketing-intelligence-solutions")
    apiUrl = "/api/service-da-marketing-intelligence-banner?populate=*";
  else if (location.pathname === "/data-analytics-services/business-intelligence-consulting")
    apiUrl = "/api/service-da-business-intelligence-banner?populate=*";
  else if(location.pathname === "/data-analytics-services/customer-360-analytics")
    apiUrl = "/api/service-da-customer-360-banner?populate=*"
  else if(location.pathname === "/data-analytics-services/digital-intelligence-services")
    apiUrl = "/api/service-da-digital-intelligence-banner?populate=*"
    else if(location.pathname === "/data-analytics-services/sales-intelligence-solutions")
    apiUrl = "/api/service-da-sales-intelligence-banner?populate=*"
  else if(location.pathname === "/operations-managed-services/product-development-and-innovation")
    apiUrl = "api/service-managed-operation-dpi-banner?populate=*"
    else if(location.pathname === "/operations-managed-services/website-management")
    apiUrl = "api/service-managed-operation-wom-banner?populate=*"
  else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
    apiUrl = "api/service-managed-operation-cm-banner?populate=*"
    else if(location.pathname === "/operations-managed-services/maintenance-support-services")
    apiUrl = "api/service-managed-operation-ssm-banner?populate=*"
  else if(location.pathname === "/quality-assurance-services/automation-testing-services")    
    apiUrl = "api/service-qat-automation-banner?populate=*"  
  else if(location.pathname === "/quality-assurance-services/security-testing-services")    
    apiUrl = "api/service-qat-security-banner?populate=*"  
  else if(location.pathname === "/quality-assurance-services/performance-testing-services")    
    apiUrl = "api/service-qat-performance-banner?populate=*"  
  else if(location.pathname === "/quality-assurance-services/functional-testing-services")    
    apiUrl = "api/service-qat-functional-banner?populate=*" 
  else if(location.pathname === "/quality-assurance-services/quality-assurance-consulting")    
    apiUrl = "api/service-qat-consulting-banner?populate=*"
    else if(location.pathname === "/digital-strategy-services/digital-experience")    
    apiUrl = "/api/service-dsc-dee-banner?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-modernization")    
    apiUrl = "/api/service-dsc-dm-banner?populate=*"
        else if(location.pathname === "/digital-strategy-services/digital-audit")    
    apiUrl = "/api/service-dsc-da-banner?populate=*"
          else if(location.pathname === "/digital-strategy-services/product-incubation")    
    apiUrl = "/api/service-dsc-inp-banner?populate=*"
          else if(location.pathname === "/digital-strategy-services/digital-build")    
    apiUrl = "/api/service-dsc-db-banner?populate=*"
          // L3 pages
      else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
      apiUrl = "/api/service-responsive-web-development-banner?populate=*"
      else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
      apiUrl = "/api/service-cms-banner?populate=*"
      else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
      apiUrl = "/api/service-pwd-banner?populate=*"
      else if(location.pathname === "/digital-development-services/mobile-app-design-development/ios-development-services")
      apiUrl = "/api/service-ios-banner?populate=*"
      else if(location.pathname === "/digital-development-services/mobile-app-design-development/android-application-development-services")
      apiUrl = "/api/service-and-banner?populate=*"
      else if(location.pathname === "/digital-development-services/mobile-app-design-development/hybrid-app-development-services")
      apiUrl = "/api/service-had-banner?populate=*"
      else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
      apiUrl = "/api/service-banner-contents/1?populate=*"
      else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
      apiUrl = "/api/service-banner-contents/10?populate=*"
      else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
      apiUrl = "/api/service-banner-contents/5?populate=*"
      else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
      apiUrl = "/api/service-banner-contents/4?populate=*"
      else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services")
      apiUrl = "/api/service-banner-contents/8?populate=*"
      else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
      apiUrl = "/api/service-banner-contents/6?populate=*"
      else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
      apiUrl = "/api/service-banner-contents/9?populate=*"
      else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
      apiUrl = "/api/service-banner-contents/2?populate=*"
      else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
      apiUrl = "/api/service-banner-contents/7?populate=*"
      else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
      apiUrl = "/api/service-banner-contents/3?populate=*"
     



  // const fetchData = () => {
  //   const url = import.meta.env.VITE_APP_API_URL + apiUrl;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData(res?.data?.data?.attributes);
  //       setError(null)
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
  // }, [location.pathname]);

  const {data, isLoading, isError, error} = useFetchData(['banner', location.pathname], apiUrl)
  const bannerData = data?.data?.data?.attributes || []

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
    <div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse sm:justify-between gap-y-5 items-center font-raleway px-4 md:px-10 lg:px-28'>
       <div className="max-md:px-5 flex flex-col gap-3">
      <h1 className='max-w-[600px] custom-gradient-text mx-0'>
        {bannerData?.title} 
      </h1>
      <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'> {bannerData?.description}</p>
      <Link to="/contact"  className="group text-xs sm:text-sm mt-8 w-fit hover:underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1">
          {bannerData?.CTA}
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
        <img className="lg:h-[260px] h-[230px] mx-auto" src={bannerData?.image?.data?.attributes?.url} alt={data?.image?.data?.attributes?.alternativeText} />
      </div>
    </div>
  );
};

export default Banner;
