import { useEffect, useState } from "react";
import Accordion from "../common-components/Accordion"
import axios from "axios";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";
import ClipPathGroup from '../../assets/faq.svg'
import useFetchData from "../../CustomHooks/useFetchData";

const erpFAQData = [
  {
  "id": 1,
  "attributes": {
  "title": "What ERP systems do you integrate with?",
  "description": "We have extensive experience integrating with all major ERP systems, including SAP, Oracle, NetSuite, Microsoft Dynamics 365, and more. Our solutions are also compatible with industry-specific ERPs and custom-built systems. Don't see your ERP listed? Talk to our experts to discuss your specific needs!",
  "cta":'Schedule a Call',
  "path":'/contact'
}
  },
  {
  "id": 2,
  "attributes": {
  "title": "Will ERP integration disrupt my existing business operations?",
  "description": "We understand that business continuity is crucial. Our experienced team will work closely with you to ensure a smooth and minimally disruptive integration process. We offer flexible implementation options to minimize downtime and ensure your business operations continue uninterrupted.",
}
  },
  {
  "id": 3,
  "attributes": {
  "title": "How long does the integration process take?",
  "description": "The integration timeline depends on factors like the complexity of your ERP system, the number of integrations required, and your specific customization needs. Our agile approach ensures efficient project management and timely delivery. Get a personalized timeline and project plan!",
  "cta":'Get a Free Quote',
  "path":'/contact'
  }
  },
  {
  "id": 4,
  "attributes": {
  "title": "Is my data secure during the integration process?",
  "description": "Absolutely, we adhere to the highest security standards to protect your sensitive data. We use secure protocols, encryption, and access controls to ensure data integrity and confidentiality throughout the integration process. Have security concerns? We're happy to answer your questions.",
  "cta":'Talk to an Expert',
  "path":'/contact'
 }
  },
  {
  "id": 5,
  "attributes": {
  "title": "What if my business processes change in the future? Will the integration still be effective?",
  "description": "Our ERP integrations are designed to be scalable and adaptable. As your business evolves and your processes change, the integration can be easily adjusted and expanded to accommodate your new requirements.",
}
  }
]

const FAQ = () => {
    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const location = useLocation();
    let apiUrl;
    let isERPIntegrationPage = false

    if (location.pathname === "/agiliti-hire-dedicated-developers")
      apiUrl = "/api/agiliti-root-faq-contents";
    else if (location.pathname === "/experience-design-services/ui-design-services")
      apiUrl = "/api/service-exp-design-ui-faq-contents";
    else if (location.pathname === "/experience-design-services/ux-design-services")
      apiUrl = "/api/service-exp-design-ux-faq-contents";
    else if (location.pathname === "/experience-design-services/cx-design")
      apiUrl = "/api/service-exp-design-cx-faq-contents";
    else if (location.pathname === "/digital-development-services/web-development-consulting")
      apiUrl = "/api/service-tech-engg-web-faq-contents";
    else if (location.pathname === "/digital-development-services/mobile-app-design-development")
      apiUrl = "/api/service-tech-engg-mobile-faq-contents";
    else if (location.pathname === "/digital-development-services/erp-integration-service")
      apiUrl = "/api/service-tech-engg-erp-faq-contents";
    else if (location.pathname === "/digital-development-services/ecommerce-services")
      apiUrl = "/api/service-tech-engg-ecom-faq-contents";
    else if (location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
      apiUrl = "/api/service-cloud-migration-faq-contents";
    else if (location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
      apiUrl = "/api/service-cloud-app-faq-contents";
    else if (location.pathname === "/digital-marketing-services/optimization-services")
      apiUrl = "/api/service-dm-marketing-opt-faq-contents";
    else if (location.pathname === "/digital-marketing-services/branding-design-services")
      apiUrl = "/api/service-dm-branding-design-faq-contents";
    else if (location.pathname === "/digital-marketing-services/integrated-digital-marketing-services")
      apiUrl = "/api/service-dm-ms-faq-contents";
    else if (location.pathname === "/data-analytics-services/marketing-intelligence-solutions")
      apiUrl = "/api/service-da-marketing-intelligence-faq-contents";
    else if (location.pathname === "/data-analytics-services/business-intelligence-consulting")
      apiUrl = "/api/service-da-business-intelligence-faq-contents";
    else if (location.pathname === "/data-analytics-services/digital-intelligence-services")
      apiUrl = "/api/service-da-digital-intelligence-faq-contents";
    else if (location.pathname === "/data-analytics-services/sales-intelligence-solutions")
      apiUrl = "/api/service-da-sales-intelligence-faq-contents";
    else if(location.pathname === "/data-analytics-services/customer-360-analytics")
        apiUrl = "/api/service-da-customer-360-faq-contents"
    else if(location.pathname === "/operations-managed-services/product-development-and-innovation")
      apiUrl = "api/service-managed-operation-dpi-faq-contents"
        else if(location.pathname === "/operations-managed-services/website-management")
      apiUrl = "api/service-managed-operation-wom-faq-contents"
    else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
      apiUrl = "api/service-managed-operation-cm-faq-contents"
        else if(location.pathname === "/operations-managed-services/maintenance-support-services")
      apiUrl = "api/service-managed-operation-ssm-faq-contents"
        else if(location.pathname === "/ai-services/chatbot-development-services")
          apiUrl = "api/service-ai-automation-ai-chat-faq-contents"
        else if(location.pathname === "/ai-services/rpa-services")
          apiUrl = "api/service-ai-automation-rpa-faq-contents"
        else if(location.pathname === "/quality-assurance-services/automation-testing-services")
          apiUrl = "api/service-qat-automation-faq-contents"
      else if(location.pathname === "/quality-assurance-services/security-testing-services")
          apiUrl = "api/service-qat-security-faq-contents"
      else if(location.pathname === "/quality-assurance-services/performance-testing-services")
          apiUrl = "api/service-qat-performance-faq-contents"
      else if(location.pathname === "/quality-assurance-services/functional-testing-services")
          apiUrl = "api/service-qat-functional-faq-contents"
      else if(location.pathname === "/quality-assurance-services/quality-assurance-consulting")
          apiUrl = "api/service-qat-consulting-faq-contents"
      else if(location.pathname === "/digital-strategy-services/digital-experience")
          apiUrl = "api/service-dsc-dee-faq-contents"
      else if(location.pathname === "/digital-strategy-services/digital-modernization")
          apiUrl = "api/service-dsc-dm-faq-contents"
      else if(location.pathname === "/digital-strategy-services/digital-audit")
          apiUrl = "api/service-dsc-da-faq-contents"
      else if(location.pathname === "/digital-strategy-services/digital-build")
          apiUrl = "api/service-dsc-db-faq-contents"
      else if(location.pathname === "/digital-strategy-services/product-incubation")
          apiUrl = "api/service-dsc-inp-faq-contents"
        // L3 Pages 
       else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
        apiUrl = "/api/service-responsive-web-faq-contents?populate=*"
       else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
        apiUrl = "/api/service-cms-faq-contents?populate=*"
       else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
        apiUrl = "/api/service-pwd-faq-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/ios-development-services")
        apiUrl = "/api/service-ios-faq-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/android-application-development-services")
        apiUrl = "/api/service-and-faq-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/hybrid-app-development-services")
        apiUrl = "/api/service-had-faq-contents?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
        apiUrl = "/api/service-faqs/1?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
        apiUrl = "/api/service-faqs/10?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
        apiUrl = "/api/service-faqs/5?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
        apiUrl = "/api/service-faqs/4?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services")
        apiUrl = "/api/service-faqs/8?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
        apiUrl = "/api/service-faqs/6?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
        apiUrl = "/api/service-faqs/9?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
        apiUrl = "/api/service-faqs/2?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
        apiUrl = "/api/service-faqs/7?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
        apiUrl = "/api/service-faqs/3?populate=*"

      const {data, isLoading, isError, error} = useFetchData(['faq', location.pathname], apiUrl, !isERPIntegrationPage)
      const faqData = isERPIntegrationPage ? erpFAQData : (data?.data?.data || [])
    
    // const fetchData = () =>  {
    //     const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
    //     axios
    //       .get(url)
    //       .then((res) => {
    //         setData(res?.data?.data)
    //         console.log('FAQ', res?.data?.data)
    //         setLoading(false);
    //       })
    //       .catch((err) => {
    //         console.error("Failed to fetch data:", err);
    //         setError("Failed to fetch data. Please try again later.");
    //         setLoading(false);
    //       });
    //   }
    

    // useEffect(() => {
    //   if(location.pathname === '/services/technology-and-engineering/erp-integration'){
    //     setData(erpFAQData)
    //     setLoading(false)
    //   }
    //   else{
    //     fetchData();
    //   }
    //   }, [location.pathname]);
    
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
    <div className="bg-LightBlue py-16 font-raleway">
    <div className="flex  md:flex-row flex-col gap-5 w-[90%] mx-auto">
        <div className="basis-[40%]">
          {
            location.pathname==="/agiliti-hire-dedicated-developers" ?
            <div className="space-y-10">
            <h2 className="custom-gradient-text md:ml-0 max-md:text-center max-w-[250px]">Frenquently Asked Questions</h2>
            <img src={ClipPathGroup} className="mx-auto md:ml-0 w-[350px]" alt="FAQ" />
            </div> :
            <p className="custom-gradient-text md:ml-0">FAQ&apos;s</p>
          }
        </div>
        <div className="basis-[60%]">
            {
                  faqData?.map((content) => (
                    <Accordion key={content.id} content={content}/>
                  ))
            }
        </div>
    </div>
    </div>
  )
}

export default FAQ