import { useEffect, useState } from "react";
import Accordion from "../common-components/Accordion"
import axios from "axios";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";
import ClipPathGroup from '../../assets/faq.svg'

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
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    let apiUrl;

    if (location.pathname === "/agiliti-hire-dedicated-developers")
      apiUrl = "/api/agiliti-root-faq-contents";
    else if (location.pathname === "/services/experience-design/ui-design")
      apiUrl = "/api/service-exp-design-ui-faq-contents";
    else if (location.pathname === "/services/experience-design/ux-design")
      apiUrl = "/api/service-exp-design-ux-faq-contents";
    else if (location.pathname === "/services/experience-design/cx-design")
      apiUrl = "/api/service-exp-design-cx-faq-contents";
    else if (location.pathname === "/services/technology-and-engineering/web-development")
      apiUrl = "/api/service-tech-engg-web-faq-contents";
    else if (location.pathname === "/services/technology-and-engineering/mobile-app-development")
      apiUrl = "/api/service-tech-engg-mobile-faq-contents";
    // else if (location.pathname === "/services/technology-and-engineering/erp-integration")
    //   apiUrl = "/api/service-tech-engg-erp-faq-contents";
    else if (location.pathname === "/services/technology-and-engineering/ecommerce-services")
      apiUrl = "/api/service-tech-engg-ecom-faq-contents";
    else if (location.pathname === "/services/cloud/cloud-migration")
      apiUrl = "/api/service-cloud-migration-faq-contents";
    else if (location.pathname === "/services/cloud/cloud-app-services")
      apiUrl = "/api/service-cloud-app-faq-contents";
    else if (location.pathname === "/services/digital-marketing/marketing-optimization")
      apiUrl = "/api/service-dm-marketing-opt-faq-contents";
    else if (location.pathname === "/services/digital-marketing/branding-design")
      apiUrl = "/api/service-dm-branding-design-faq-contents";
    else if (location.pathname === "/services/digital-marketing/marketing-services")
      apiUrl = "/api/service-dm-ms-faq-contents";
    else if (location.pathname === "/services/data-analytics/marketing-intelligence")
      apiUrl = "/api/service-da-marketing-intelligence-faq-contents";
    else if (location.pathname === "/services/data-analytics/business-intelligence")
      apiUrl = "/api/service-da-business-intelligence-faq-contents";
    else if (location.pathname === "/services/data-analytics/digital-intelligence")
      apiUrl = "/api/service-da-digital-intelligence-faq-contents";
    else if (location.pathname === "/services/data-analytics/sales-intelligence")
      apiUrl = "/api/service-da-sales-intelligence-faq-contents";
    else if(location.pathname === "/services/data-analytics/customer-360")
        apiUrl = "/api/service-da-customer-360-faq-contents"
    else if(location.pathname === "/services/managed-operations/product-innovation-management")
      apiUrl = "api/service-managed-operation-dpi-faq-contents"
        else if(location.pathname === "/services/managed-operations/website-operations-management")
      apiUrl = "api/service-managed-operation-wom-faq-contents"
    else if(location.pathname === "/services/managed-operations/cloud-management")
      apiUrl = "api/service-managed-operation-cm-faq-contents"
        else if(location.pathname === "/services/managed-operations/software-maintenance-support")
      apiUrl = "api/service-managed-operation-ssm-faq-contents"
        else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
          apiUrl = "api/service-ai-automation-ai-chat-faq-contents"
        else if(location.pathname === "/services/ai-automation/rpa")
          apiUrl = "api/service-ai-automation-rpa-faq-contents"
        else if(location.pathname === "/services/quality-assurance/automation-testing")
          apiUrl = "api/service-qat-automation-faq-contents"
      else if(location.pathname === "/services/quality-assurance/security-testing")
          apiUrl = "api/service-qat-security-faq-contents"
      else if(location.pathname === "/services/quality-assurance/performance-testing")
          apiUrl = "api/service-qat-performance-faq-contents"
      else if(location.pathname === "/services/quality-assurance/functional-testing")
          apiUrl = "api/service-qat-functional-faq-contents"
      else if(location.pathname === "/services/quality-assurance/qa-consulting")
          apiUrl = "api/service-qat-consulting-faq-contents"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")
          apiUrl = "api/service-dsc-dee-faq-contents"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")
          apiUrl = "api/service-dsc-dm-faq-contents"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-audits")
          apiUrl = "api/service-dsc-da-faq-contents"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-build")
          apiUrl = "api/service-dsc-db-faq-contents"
      else if(location.pathname === "/services/digital-strategy-consulting/incubation-products-services")
          apiUrl = "api/service-dsc-inp-faq-contents"
    
    const fetchData = () =>  {
        const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
        axios
          .get(url)
          .then((res) => {
            setData(res?.data?.data)
            console.log('FAQ', res?.data?.data)
            setLoading(false);
          })
          .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
      }
    

    useEffect(() => {
      if(location.pathname === '/services/technology-and-engineering/erp-integration'){
        setData(erpFAQData)
        setLoading(false)
      }
      else{
        fetchData();
      }
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
    <div className="bg-LightBlue py-16 font-raleway">
    <div className="flex  md:flex-row flex-col gap-5 w-[90%] mx-auto">
        <div className="basis-[40%]">
          {
            location.pathname==="/agiliti-hire-dedicated-developers" ?
            <div className="space-y-10">
            <h2 className="custom-gradient-text md:ml-0 max-md:text-center max-w-[250px]">Frenquently Asked Questions</h2>
            <img src={ClipPathGroup} className="mx-auto md:ml-0 w-[350px]" alt="FAQ" />
            </div> :
            <p className="custom-gradient-text md:ml-0">FAQ's</p>
          }
        </div>
        <div className="basis-[60%]">
            {
                  data?.map((content) => (
                    <Accordion key={content.id} content={content}/>
                  ))
            }
        </div>
    </div>
    </div>
  )
}

export default FAQ