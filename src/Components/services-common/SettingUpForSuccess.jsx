import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SettingUpForSuccess = () => {
  const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const location = useLocation();
  let apiUrl;

  if (location.pathname === "/services/experience-design")
    apiUrl = "api/service-exp-design-benifits?populate=*";
  else if (location.pathname === "/services/ai-automation")
    apiUrl = "api/service-ai-auto-we-serves?populate=*";
  else if (location.pathname === "/services/quality-assurance")
    apiUrl = "api/service-qa-testing-we-serves?populate=*";
  else if (location.pathname === "/services/digital-marketing")
    apiUrl = "api/service-digital-marketing-benifits?populate=*";
  else if (location.pathname === "/services/technology-and-engineering")
    
    apiUrl = "api/service-tech-engg-we-serves?populate=*";
  else if (location.pathname === "/services/data-analytics")
    apiUrl = "api/service-data-analytics-benifits?populate=*";
  else if (location.pathname === "/services/managed-operations")
    apiUrl = "api/service-managed-operation-benifits?populate=*";
  else if (location.pathname === "/services")
    apiUrl = "api/service-root-benifits?populate=*";
  else if (location.pathname === "/services/digital-strategy-consulting")
    apiUrl = "api/service-digital-strategy-consulting-benifits?populate=*";
  else if (location.pathname === "/services/cloud")
    apiUrl = "api/service-cloud-benifits?populate=*";
  else if (location.pathname === "/about/about-altumind/mission-and-vision")
    apiUrl = "api/our-mission-and-vision-words?populate=*";
  else if(location.pathname === '/services/experience-design/ui-design')
    apiUrl = 'api/service-exp-design-ui-benifit-contents?populate=*'
 else if(location.pathname === '/services/experience-design/ux-design')
   apiUrl = 'api/service-exp-design-ux-benifit-contents?populate=*'
 else if(location.pathname === '/services/experience-design/cx-design')
   apiUrl = 'api/service-exp-design-cx-benifit-contents?populate=*'
  else if(location.pathname === '/services/technology-and-engineering/web-development')
   apiUrl = 'api/service-tech-engg-web-benifit-contents?populate=*'
  else if(location.pathname === '/services/technology-and-engineering/mobile-app-development')
   apiUrl = 'api/service-tech-engg-mobile-benifit-contents?populate=*'
  else if(location.pathname === '/services/technology-and-engineering/ecommerce-services')
   apiUrl = 'api/service-tech-engg-ecom-benifit-contents?populate=*'
  else if(location.pathname === '/services/technology-and-engineering/erp-integration')
   apiUrl = 'api/service-tech-engg-erp-benifit-contents?populate=*'
  else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
    apiUrl = "api/service-ai-automation-ai-chat-benifit-contents?populate=*"
        else if(location.pathname === "/services/ai-automation/rpa")
          apiUrl = "api/service-ai-automation-rpa-benefit-contents?populate=*"
  else if(location.pathname === "/services/cloud/cloud-migration")
    apiUrl = "api/service-cloud-migration-benefit-contents?populate=*"
    else if(location.pathname === "/services/cloud/cloud-app-services")
    apiUrl = "api/service-cloud-app-benefit-contents?populate=*"
      else if(location.pathname === "/services/digital-marketing/marketing-optimization")
    apiUrl = "api/service-dm-marketing-opt-benefit-contents?populate=*"
        else if(location.pathname === "/services/digital-marketing/marketing-services")
    apiUrl = "api/service-dm-ms-benefit-contents?populate=*"
        else if(location.pathname === "/services/data-analytics/marketing-intelligence")
    apiUrl = "api/service-da-marketing-intelligence-benf-contents?populate=*"
    else if(location.pathname === "/services/data-analytics/business-intelligence")
    apiUrl = "api/service-da-business-intelligence-benf-contents?populate=*"
      else if(location.pathname === "/services/data-analytics/digital-intelligence")
    apiUrl = "api/service-da-digital-intelligence-benf-contents?populate=*"
  else if(location.pathname === "/services/data-analytics/customer-360")
       apiUrl = "api/service-da-customer-360-benf-contents?populate=*"
    else if(location.pathname === "/services/data-analytics/sales-intelligence")
    apiUrl = "api/service-da-sales-intelligence-benf-contents?populate=*"
  else if(location.pathname === "/services/managed-operations/product-innovation-management")
      apiUrl = "api/service-managed-operation-dpi-benefit-contents?populate=*"
      else if(location.pathname === "/services/managed-operations/website-operations-management")
      apiUrl = "api/service-managed-operation-wom-benefit-contents?populate=*"
    else if(location.pathname === "/services/managed-operations/cloud-management")
      apiUrl = "api/service-managed-operation-cm-benefit-contents?populate=*"
        else if(location.pathname === "/services/managed-operations/software-maintenance-support")
      apiUrl = "api/service-managed-operation-ssm-benefit-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/automation-testing")
          apiUrl = "api/service-qat-automation-benefit-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/security-testing")
          apiUrl = "api/service-qat-security-benefit-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/performance-testing")
          apiUrl = "api/service-qat-performance-benefit-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/functional-testing")
          apiUrl = "api/service-qat-functional-benefit-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/qa-consulting")
          apiUrl = "api/service-qat-consulting-benefit-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")
          apiUrl = "api/service-dsc-dee-benefit-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")
          apiUrl = "api/service-dsc-dm-benefit-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-audits")
          apiUrl = "api/service-dsc-da-benefit-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-build")
          apiUrl = "api/service-dsc-db-benefit-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/incubation-products-services")
          apiUrl = "api/service-dsc-inp-benefit-contents?populate=*"

  const fetchData = () => {
    const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data);
        setActiveTab(res?.data?.data[0]);
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
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
      </div>
    );
  }

  return (
    <div className="dark:text-white w-[90%] max-w-[950px] mx-auto font-raleway">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <ul className="basis-[50%] max-w-[400px] space-y-4">
          {data?.map((tab, index) => (
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
        <div className="hidden sm:block  basis-[55%] p-5 space-y-5 ">
          <img
            src={activeTab?.attributes?.image?.data?.attributes?.url}
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
