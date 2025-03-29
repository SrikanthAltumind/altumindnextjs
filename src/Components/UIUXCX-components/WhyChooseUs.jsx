// import React, { useEffect, useState } from 'react'
import useFetchData from '../../CustomHooks/useFetchData';
import LoaderSpinner from '../common-components/LoaderSpinner';
// import axios from 'axios';
import { useLocation} from 'react-router-dom';

const WhyChooseUs = () => {
    // const [data, setData] = useState()
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const location = useLocation()

    let apiUrl;
    if(location.pathname === '/experience-design-services/ui-design-services')
        apiUrl = 'api/service-exp-design-ui-choose-contents?populate=*'
    else if(location.pathname === '/experience-design-services/ux-design-services')
        apiUrl = 'api/service-exp-design-ux-choose-contents?populate=*'
    else if(location.pathname === '/experience-design-services/cx-design')
        apiUrl = 'api/service-exp-design-cx-choose-contents?populate=*'
    else if(location.pathname === "/digital-development-services/web-development-consulting")
    apiUrl = 'api/service-tech-engg-web-choose-contents?populate=*'
    else if(location.pathname === "/digital-development-services/mobile-app-design-development")
      apiUrl = 'api/service-tech-engg-mobile-choose-contents?populate=*'
    else if(location.pathname === "/digital-development-services/ecommerce-services")
      apiUrl = 'api/service-tech-engg-ecom-choose-contents?populate=*'
    else if(location.pathname === "/digital-development-services/erp-integration-service")
      apiUrl = 'api/service-tech-engg-erp-choose-contents?populate=*'
    else if(location.pathname === "/ai-services/chatbot-development-services")
      apiUrl = "api/service-ai-automation-ai-chat-choose-contents?populate=*"
        else if(location.pathname === "/ai-services/rpa-services")
          apiUrl = "api/service-ai-automation-rpa-choose-contents?populate=*"
    else if(location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
      apiUrl = "api/service-cloud-migration-choose-contents?populate=*" 
    else if(location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
      apiUrl = "api/service-cloud-app-choose-contents?populate=*" 
    else if(location.pathname === "/digital-marketing-services/optimization-services")
      apiUrl = "api/service-dm-marketing-opt-choose-contents?populate=*" 
    else if(location.pathname === "/digital-marketing-services/branding-design-services")
      apiUrl = "api/service-dm-branding-design-choose-contents?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services")
      apiUrl = "api/service-dm-ms-choose-contents?populate=*"
    else if(location.pathname === "/data-analytics-services/marketing-intelligence-solutions")
      apiUrl = "api/service-da-marketing-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/data-analytics-services/business-intelligence-consulting")
      apiUrl = "api/service-da-business-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/data-analytics-services/digital-intelligence-services")
      apiUrl = "api/service-da-digital-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/data-analytics-services/customer-360-analytics")
    apiUrl = "api/service-da-customer-360-chse-contents?populate=*"
    else if(location.pathname === "/data-analytics-services/sales-intelligence-solutions")
      apiUrl = "api/service-da-sales-intelligence-chse-contents?populate=*" 
    else if(location.pathname === "/operations-managed-services/product-development-and-innovation")
      apiUrl = "api/service-managed-operation-dpi-choose-contents?populate=*"
        else if(location.pathname === "/operations-managed-services/website-management")
      apiUrl = "api/service-managed-operation-wom-choose-contents?populate=*"
    else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
      apiUrl = "api/service-managed-operation-cm-choose-contents?populate=*"
        else if(location.pathname === "/operations-managed-services/maintenance-support-services")
      apiUrl = "api/service-managed-operation-ssm-choose-contents?populate=*"

        else if(location.pathname === "/quality-assurance-services/automation-testing-services")
          apiUrl = "api/service-qat-automation-choose-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/security-testing-services")
          apiUrl = "api/service-qat-security-choose-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/performance-testing-services")
          apiUrl = "api/service-qat-performance-choose-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/functional-testing-services")
          apiUrl = "api/service-qat-functional-choose-contents?populate=*"
      else if(location.pathname === "/quality-assurance-services/quality-assurance-consulting")
          apiUrl = "api/service-qat-consulting-choose-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-experience")
          apiUrl = "api/service-dsc-dee-choose-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-modernization")
          apiUrl = "api/service-dsc-dm-choose-sections?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-audit")
          apiUrl = "api/service-dsc-da-choose-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/digital-build")
          apiUrl = "api/service-dsc-db-choose-contents?populate=*"
      else if(location.pathname === "/digital-strategy-services/product-incubation")
          apiUrl = "api/service-dsc-inp-choose-contents?populate=*"
        // L3 Pages 
       else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
        apiUrl = "/api/service-responsive-web-choose-contents?populate=*"
       else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
        apiUrl = "/api/service-cms-choose-contents?populate=*"
       else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
        apiUrl = "/api/service-pwd-choose-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/ios-development-services")
        apiUrl = "/api/service-ios-choose-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/android-application-development-services")
        apiUrl = "/api/service-and-choose-contents?populate=*"
       else if(location.pathname === "/digital-development-services/mobile-app-design-development/hybrid-app-development-services")
        apiUrl = "/api/service-had-choose-contents?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
        apiUrl = "ADD_API_URL_END_POINT"
        else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
        apiUrl = "ADD_API_URL_END_POINT"

  const {data, isError, isLoading, error} = useFetchData(['whyChooseUs', location.pathname], apiUrl)
  const whyChooseUsData = data?.data?.data || []

//     const fetchData = ()=> {
//         axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
//           .then(response=> {
//             setData(response?.data?.data)
//             setError(null)
//             setLoading(false)
//           })
//           .catch(error=> {
//             console.log('Error fetching data', error)
//             setError("Failed to fetch data. Please try again later.");
//             setLoading(false)
//           })
//       }
// useEffect(()=> {
//     fetchData()
// },[location.pathname])

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
    <div className={`w-[90%] mx-auto flex justify-center gap-10 sm:gap-x-12 flex-wrap  ${whyChooseUsData?.length ===4 ? 'max-w-[650px]' :'max-w-[950px]'}`}>
    {whyChooseUsData?.map(item=> 
        <div  className='w-[230px] flex flex-col gap-1'
            key={item?.id}>
            <img loading="lazy" className='w-12 h-12 mb-3 object-contain' src={item?.attributes?.icon?.data?.attributes?.url} alt={item?.attributes?.title+' icon'}/>
            <p className='font-semibold text-sm'>{item?.attributes?.title}</p>
            <p className='markdown text-xs leading-6 font-montserrat'>{item?.attributes?.description}</p>
        </div>
    )}
    </div>
  )
}

export default WhyChooseUs