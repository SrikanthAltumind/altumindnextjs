import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';
import {useLocation } from 'react-router-dom';

const Overview = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation()


    let apiUrl;
    if(location.pathname === '/services/experience-design/ui-design')
        apiUrl = 'api/service-exp-design-ui-overview?populate=*'
    else if(location.pathname === '/services/experience-design/ux-design')
        apiUrl = 'api/service-exp-design-ux-overview?populate=*'
    else if(location.pathname === '/services/experience-design/cx-design')
        apiUrl = 'api/service-exp-design-cx-overview?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/web-development")
    apiUrl = 'api/service-tech-engg-web-overview?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/mobile-app-development")
      apiUrl = 'api/service-tech-engg-mobile-overview?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/ecommerce-services")
      apiUrl = 'api/service-tech-engg-ecom-overview?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/erp-integration")
      apiUrl = 'api/service-tech-engg-erp-overview?populate=*'
    else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
      apiUrl = "api/service-ai-automation-ai-chat-overview?populate=*"
    else if(location.pathname === "/services/ai-automation/rpa")
      apiUrl = "api/service-ai-automation-rpa-overview?populate=*"
    else if(location.pathname === "/services/cloud/cloud-migration")
      apiUrl = "api/service-cloud-migration-overview?populate=*" 
    else if(location.pathname === "/services/cloud/cloud-app")
      apiUrl = "api/service-cloud-app-overview?populate=*" 
    else if(location.pathname === "/services/digital-marketing/marketing-optimization")
      apiUrl = "api/service-dm-marketing-opt-overview?populate=*" 
    else if(location.pathname === "/services/digital-marketing/branding-design")
      apiUrl = "api/service-dm-branding-design-overview?populate=*"
    else if(location.pathname === "/services/digital-marketing/marketing-services")
      apiUrl = "api/service-dm-ms-overview?populate=*"  
    else if(location.pathname === "/services/data-analytics/marketing-intelligence")
      apiUrl = "api/service-da-marketing-intelligence-overview?populate=*"
        else if(location.pathname === "/services/data-analytics/business-intelligence")
      apiUrl = "api/service-da-business-intelligence-overview?populate=*"
    else if(location.pathname === "/services/data-analytics/customer-360")
    apiUrl = "api/service-da-customer-360-overview?populate=*"
    else if(location.pathname === "/services/data-analytics/digital-intelligence")
      apiUrl = "api/service-da-digital-intelligence-overview?populate=*"
        else if(location.pathname === "/services/data-analytics/sales-intelligence")
      apiUrl = "api/service-da-sales-intelligence-overview?populate=*"
    else if(location.pathname === "/services/managed-operations/product-innovation-management")
    apiUrl = "api/service-managed-operation-dpi-overview?populate=*"
      else if(location.pathname === "/services/managed-operations/website-operations-management")
    apiUrl = "api/service-managed-operation-wom-overview?populate=*"
  else if(location.pathname === "/services/managed-operations/cloud-management")
    apiUrl = "api/service-managed-operation-cm-overview?populate=*"
    else if(location.pathname === "/services/managed-operations/software-maintenance-support")
    apiUrl = "api/service-managed-operation-ssm-overview?populate=*"
  else if(location.pathname === "/services/quality-assurance/automation-testing")
      apiUrl = "api/service-qat-automation-overview?populate=*"
  else if(location.pathname === "/services/quality-assurance/security-testing")
      apiUrl = "api/service-qat-security-overview?populate=*"
  else if(location.pathname === "/services/quality-assurance/performance-testing")
      apiUrl = "api/service-qat-performance-overview?populate=*"
  else if(location.pathname === "/services/quality-assurance/qa-consulting")
      apiUrl = "api/service-qat-consulting-overview?populate=*"
  else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")
      apiUrl = "api/service-dsc-dee-overview?populate=*"
  else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")
      apiUrl = "api/service-dsc-dm-overview?populate=*"
  
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
    <div className='w-[90%] max-w-[950px] mx-auto font-raleway dark:text-white'>
        <div className='text-center mb-8 max-w-[700px] mx-auto'>
            <p className='custom-sub-heading'>{data?.attributes?.title}</p>
            <p className='custom-gradient-text'>{data?.attributes?.heading}</p>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center gap-10'>
            <div className='basis-[60%] max-md:text-center'>
                <p className='text-sm lg:text-base'>{data?.attributes?.description}</p>
            </div>
            <div className='max-w-[280px]'>
                <img className='object-contain max-w-[280px]' src={data?.attributes?.image?.data?.attributes?.url} alt={data?.attributes?.image?.data?.attributes?.name}/>
            </div>
        </div>
    </div>
  )
}

export default Overview