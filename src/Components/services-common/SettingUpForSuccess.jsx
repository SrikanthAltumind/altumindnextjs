import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoaderSpinner from "../common-components/LoaderSpinner";
import useFetchData from "../../CustomHooks/useFetchData";

const SettingUpForSuccess = () => {
  // const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();

  const location = useLocation();
  let apiUrl;

  if (location.pathname === "/services/experience-design-services")
    apiUrl = "api/service-exp-design-benifits?populate=*";
  else if (location.pathname === "/services/ai-services")
    apiUrl = "api/service-ai-auto-we-serves?populate=*";
  else if (location.pathname === "/services/quality-assurance-services")
    apiUrl = "api/service-qa-testing-we-serves?populate=*";
  else if (location.pathname === "/services/digital-marketing-services")
    apiUrl = "api/service-digital-marketing-benifits?populate=*";
  else if (location.pathname === "/services/digital-development-services")
    apiUrl = "api/service-tech-engg-we-serves?populate=*";
  else if (location.pathname === "/services/data-analytics-services")
    apiUrl = "api/service-data-analytics-benifits?populate=*";
  else if (location.pathname === "/services/operations-managed-services")
    apiUrl = "api/service-managed-operation-benifits?populate=*";
  else if (location.pathname === "/services")
    apiUrl = "api/service-root-benifits?populate=*";
  else if (location.pathname === "/services/digital-strategy-services")
    apiUrl = "api/service-digital-strategy-consulting-benifits?populate=*";
  else if (location.pathname === "/services/cloud-strategy-engineering-services")
    apiUrl = "api/service-cloud-benifits?populate=*";
  else if (location.pathname === "/about/about-altumind/mission-and-vision")
    apiUrl = "api/our-mission-and-vision-words?populate=*";
  else if(location.pathname === '/experience-design-services/ui-design-services')
    apiUrl = 'api/service-exp-design-ui-benifit-contents?populate=*'
 else if(location.pathname === '/experience-design-services/ux-design-services')
   apiUrl = 'api/service-exp-design-ux-benifit-contents?populate=*'
 else if(location.pathname === '/experience-design-services/cx-design')
   apiUrl = 'api/service-exp-design-cx-benifit-contents?populate=*'
  else if(location.pathname === '/digital-development-services/web-development-consulting')
   apiUrl = 'api/service-tech-engg-web-benifit-contents?populate=*'
  else if(location.pathname === '/digital-development-services/mobile-app-design-development')
   apiUrl = 'api/service-tech-engg-mobile-benifit-contents?populate=*'
  else if(location.pathname === '/digital-development-services/ecommerce-services')
   apiUrl = 'api/service-tech-engg-ecom-benifit-contents?populate=*'
  else if(location.pathname === '/digital-development-services/erp-integration-service')
   apiUrl = 'api/service-tech-engg-erp-benifit-contents?populate=*'
  else if(location.pathname === "/ai-services/chatbot-development-services")
    apiUrl = "api/service-ai-automation-ai-chat-benifit-contents?populate=*"
        else if(location.pathname === "/ai-services/rpa-services")
          apiUrl = "api/service-ai-automation-rpa-benefit-contents?populate=*"
  else if(location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
    apiUrl = "api/service-cloud-migration-benefit-contents?populate=*"
    else if(location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
    apiUrl = "api/service-cloud-app-benefit-contents?populate=*"
      else if(location.pathname === "/digital-marketing-services/optimization-services")
    apiUrl = "api/service-dm-marketing-opt-benefit-contents?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services")
    apiUrl = "api/service-dm-ms-benefit-contents?populate=*"
        else if(location.pathname === "/data-analytics-services/marketing-intelligence-solutions")
    apiUrl = "api/service-da-marketing-intelligence-benf-contents?populate=*"
    else if(location.pathname === "/data-analytics-services/business-intelligence-consulting")
    apiUrl = "api/service-da-business-intelligence-benf-contents?populate=*"
      else if(location.pathname === "/data-analytics-services/digital-intelligence-services")
    apiUrl = "api/service-da-digital-intelligence-benf-contents?populate=*"
  else if(location.pathname === "/data-analytics-services/customer-360-analytics")
       apiUrl = "api/service-da-customer-360-benf-contents?populate=*"
    else if(location.pathname === "/data-analytics-services/sales-intelligence-solutions")
    apiUrl = "api/service-da-sales-intelligence-benf-contents?populate=*"
  else if(location.pathname === "/operations-managed-services/product-development-and-innovation")
      apiUrl = "api/service-managed-operation-dpi-benefit-contents?populate=*"
      else if(location.pathname === "/operations-managed-services/website-management")
      apiUrl = "api/service-managed-operation-wom-benefit-contents?populate=*"
    else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
      apiUrl = "api/service-managed-operation-cm-benefit-contents?populate=*"
        else if(location.pathname === "/operations-managed-services/maintenance-support-services")
      apiUrl = "api/service-managed-operation-ssm-benefit-contents?populate=*"
        else if(location.pathname === "/quality-assurance-services/automation-testing-services")
          apiUrl = "api/service-qat-automation-benefit-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/security-testing-services")
          apiUrl = "api/service-qat-security-benefit-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/performance-testing-services")
          apiUrl = "api/service-qat-performance-benefit-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/functional-testing-services")
          apiUrl = "api/service-qat-functional-benefit-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/quality-assurance-consulting")
          apiUrl = "api/service-qat-consulting-benefit-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-experience")
          apiUrl = "api/service-dsc-dee-benefit-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-modernization")
          apiUrl = "api/service-dsc-dm-benefit-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-audit")
          apiUrl = "api/service-dsc-da-benefit-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-build")
          apiUrl = "api/service-dsc-db-benefit-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/product-incubation")
          apiUrl = "api/service-dsc-inp-benefit-contents?populate=*"
        // L3 Pages 
      else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
        apiUrl = "/api/service-responsive-web-benifit-contents?populate=*"
       else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
        apiUrl = "/api/service-cms-benifit-contents?populate=*"
       else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
        apiUrl = "/api/service-pwd-benifit-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/ios-development-services")
        apiUrl = "/api/service-ios-benifit-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/android-application-development-services")
        apiUrl = "/api/service-and-benifit-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/hybrid-app-development-services")
        apiUrl = "/api/service-had-benifit-contents?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
        apiUrl = "/api/service-keys/1?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
        apiUrl = "/api/service-keys/10?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
        apiUrl = "/api/service-keys/5?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
        apiUrl = "/api/service-keys/4?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services")
        apiUrl = "/api/service-keys/8?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
        apiUrl = "/api/service-keys/6?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
        apiUrl = "/api/service-keys/9?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
        apiUrl = "/api/service-keys/2?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
        apiUrl = "/api/service-keys/7?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
        apiUrl = "/api/service-keys/3?populate=*"

      const {data, isLoading, isError, error} = useFetchData(['benefits', location.pathname], apiUrl)
      const benefitsData = data?.data?.data || []

  // const fetchData = () => {
  //   const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData(res?.data?.data);
  //       setActiveTab(res?.data?.data[0]);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch data:", err);
  //       setError("Failed to fetch data. Please try again later.");
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    if (data?.data?.data?.length > 0) {
        setActiveTab(data.data.data[0]);
    }
}, [data]);


  if(isLoading){
    return <LoaderSpinner/>
}

if (isError) {
    return (
        <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error?.message}
        </div>
    );
    }

  return (
    <div className="dark:text-white w-[90%] max-w-[950px] mx-auto font-raleway">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <ul className="basis-[50%] max-w-[400px] space-y-4">
          {benefitsData?.map((tab, index) => (
            <li key={tab?.id}>
              <button
                className={`min-w-max ${
                  activeTab?.id === tab.id
                    ? "bg-[#EAF1FF] dark:bg-[#294376]"
                    : "hover:bg-[#eaf1ff82]"
                } w-full text-left  font-bold py-4 px-8 rounded-md`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="font-semibold md:text-lg text-[#EFB6BA]">
                  {index + 1}.&nbsp;&nbsp;
                </span>
                {tab?.attributes?.title}
              </button>
              {tab?.id === activeTab?.id && (
                <div className="sm:hidden p-5 space-y-5">
                  <img
                    loading="lazy"
                    src={tab?.attributes?.image?.data?.attributes?.url}
                    className="w-[250px] mx-auto"
                    alt={tab?.attributes?.title}
                  />
                  <p className="font-montserrat font-medium text-sm">
                    {tab?.attributes?.description}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden sm:block basis-[55%] p-5 space-y-5 ">
          <img
            loading="lazy"
            src={activeTab?.attributes?.image?.data?.attributes?.url}
            alt={activeTab?.attributes?.image?.data?.attributes?.title}
            className="w-[250px] md:w-[300px] mx-auto"
          />
          <p className="font-montserrat dark:font-normal font-medium text-sm ">
            {activeTab?.attributes?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingUpForSuccess;
