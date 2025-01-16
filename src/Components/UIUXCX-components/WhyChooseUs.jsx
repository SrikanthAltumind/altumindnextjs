import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';
import { useLocation} from 'react-router-dom';

const WhyChooseUs = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation()

    let apiUrl;
    if(location.pathname === '/services/experience-design/ui-design')
        apiUrl = 'api/service-exp-design-ui-choose-contents?populate=*'
    else if(location.pathname === '/services/experience-design/ux-design')
        apiUrl = 'api/service-exp-design-ux-choose-contents?populate=*'
    else if(location.pathname === '/services/experience-design/cx-design')
        apiUrl = 'api/service-exp-design-cx-choose-contents?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/web-development")
    apiUrl = 'api/service-tech-engg-web-choose-contents?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/mobile-app-development")
      apiUrl = 'api/service-tech-engg-mobile-choose-contents?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/ecommerce-services")
      apiUrl = 'api/service-tech-engg-ecom-choose-contents?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/erp-integration")
      apiUrl = 'api/service-tech-engg-erp-choose-contents?populate=*'
    else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
      apiUrl = "api/service-ai-automation-ai-chat-choose-contents?populate=*"
        else if(location.pathname === "/services/ai-automation/rpa")
          apiUrl = "api/service-ai-automation-rpa-choose-contents?populate=*"
    else if(location.pathname === "/services/cloud/cloud-migration")
      apiUrl = "api/service-cloud-migration-choose-contents?populate=*" 
    else if(location.pathname === "/services/cloud/cloud-app")
      apiUrl = "api/service-cloud-app-choose-contents?populate=*" 
    else if(location.pathname === "/services/digital-marketing/marketing-optimization")
      apiUrl = "api/service-dm-marketing-opt-choose-contents?populate=*" 
    else if(location.pathname === "/services/digital-marketing/branding-design")
      apiUrl = "api/service-dm-branding-design-choose-contents?populate=*"
        else if(location.pathname === "/services/digital-marketing/marketing-services")
      apiUrl = "api/service-dm-ms-choose-contents?populate=*"
    else if(location.pathname === "/services/data-analytics/marketing-intelligence")
      apiUrl = "api/service-da-marketing-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/services/data-analytics/business-intelligence")
      apiUrl = "api/service-da-business-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/services/data-analytics/digital-intelligence")
      apiUrl = "api/service-da-digital-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/services/data-analytics/customer-360")
    apiUrl = "api/service-da-customer-360-chse-contents?populate=*"
    else if(location.pathname === "/services/data-analytics/sales-intelligence")
      apiUrl = "api/service-da-sales-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/services/managed-operations/product-innovation-management")
      apiUrl = "api/service-managed-operation-dpi-choose-contents?populate=*"
        else if(location.pathname === "/services/managed-operations/website-operations-management")
      apiUrl = "api/service-managed-operation-wom-choose-contents?populate=*"
    else if(location.pathname === "/services/managed-operations/cloud-management")
      apiUrl = "api/service-managed-operation-cm-choose-contents?populate=*"
        else if(location.pathname === "/services/managed-operations/software-maintenance-support")
      apiUrl = "api/service-managed-operation-ssm-choose-contents?populate=*"

        else if(location.pathname === "/services/quality-assurance/automation-testing")
          apiUrl = "api/service-qat-automation-choose-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/security-testing")
          apiUrl = "api/service-qat-security-choose-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/performance-testing")
          apiUrl = "api/service-qat-performance-choose-contents?populate=*"
      else if(location.pathname === "/services/quality-assurance/qa-consulting")
          apiUrl = "api/service-qat-consulting-choose-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")
          apiUrl = "api/service-dsc-dee-choose-contents?populate=*"
      else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")
          apiUrl = "api/service-dsc-dm-choose-contents?populate=*"

    const fetchData = ()=> {
        axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
          .then(response=> {
            setData(response?.data?.data)
            setError(null)
            setLoading(false)
          })
          .catch(error=> {
            console.log('Error fetching data', error)
            setError("Failed to fetch data. Please try again later.");
            setLoading(false)
          })
      }
useEffect(()=> {
    fetchData()
},[location.pathname])

if(loading){
    return <LoaderSpinner/>
}

if (error) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
      </div>
    );
}

  return (
        <div className={`w-[90%] mx-auto flex flex-wrap ${data?.length ===4 ? 'max-w-[650px]' :'max-w-[950px]'} mx-auto  justify-center gap-10 sm:gap-x-12`}>
            {data?.map(item=> 
                <div  className='w-[230px] flex flex-col gap-1'
                    key={item?.id}>
                    <img className='w-12 h-12 mb-3 object-contain' src={item?.attributes?.icon?.data?.attributes?.url}/>
                    <p className='font-semibold text-sm'>{item?.attributes?.title}</p>
                    <p className='markdown text-xs leading-6 font-montserrat'>{item?.attributes?.description}</p>
                </div>
            )}
        </div>
  )
}

export default WhyChooseUs