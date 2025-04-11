// import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import LoaderSpinner from "../common-components/LoaderSpinner"
// import axios from "axios"
import useFetchData from "../../CustomHooks/useFetchData"

const DevelopmentServices = () => {
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const location = useLocation()


    let apiUrl;
      if(location.pathname === "/digital-development-services/web-development-consulting")
        apiUrl = 'api/service-tech-engg-web-service-contents'
      else if(location.pathname === "/digital-development-services/mobile-app-design-development")
        apiUrl = 'api/service-tech-engg-mobile-service-contents'
      else if(location.pathname === "/digital-development-services/erp-integration-service")
        apiUrl = 'api/service-tech-engg-erp-service-contents?populate=*'
      else if(location.pathname === "/ai-services/chatbot-development-services")
        apiUrl = "api/service-ai-automation-ai-chat-service-contents?populate=*"
      else if(location.pathname === "/ai-services/rpa-services")
            apiUrl = "api/service-ai-automation-rpa-service-contents?populate=*"
      else if(location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
        apiUrl = 'api/service-cloud-migration-service-contents?populate=*'
      else if(location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
        apiUrl = '/api/service-cloud-app-service-contents?populate=*'
            else if(location.pathname === "/data-analytics-services/marketing-intelligence-solutions")
        apiUrl = '/api/service-da-marketing-intelligence-serv-contents?populate=*'
      else if(location.pathname === "/data-analytics-services/business-intelligence-consulting")
        apiUrl = '/api/service-da-business-intelligence-serv-contents?populate=*'
      else if(location.pathname === "/data-analytics-services/customer-360-analytics")
      apiUrl = "/api/service-da-customer-360-serv-contents?populate=*"
      else if(location.pathname === "/data-analytics-services/digital-intelligence-services")
        apiUrl = '/api/service-da-digital-intelligence-serv-contents?populate=*'
      else if(location.pathname === "/data-analytics-services/sales-intelligence-solutions")
        apiUrl = '/api/service-da-sales-intelligence-serv-contents?populate=*'
            else if(location.pathname === "/operations-managed-services/website-management")
        apiUrl = '/api/service-managed-operation-wom-service-contents?populate=*'
      else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
      apiUrl = "api/service-managed-operation-cm-service-contents?populate=*"
          else if(location.pathname === "/operations-managed-services/maintenance-support-services")
      apiUrl = "api/service-managed-operation-ssm-service-contents?populate=*"
        else if(location.pathname === "/quality-assurance-services/automation-testing-services")
            apiUrl = "api/service-qat-automation-service-contents?populate=*"
        else if(location.pathname === "/quality-assurance-services/security-testing-services")
            apiUrl = "api/service-qat-security-service-contents?populate=*"
        else if(location.pathname === "/quality-assurance-services/performance-testing-services")
            apiUrl = "api/service-qat-performance-service-contents?populate=*"
        else if(location.pathname === "/quality-assurance-services/functional-testing-services")
            apiUrl = "api/service-qat-functional-service-contents?populate=*"
        else if(location.pathname === "/quality-assurance-services/quality-assurance-consulting")
            apiUrl = "api/service-qat-consulting-service-contents?populate=*"
        else if(location.pathname === "/digital-strategy-services/digital-experience")
            apiUrl = "api/service-dsc-dee-service-contents?populate=*"
        else if(location.pathname === "/digital-strategy-services/digital-modernization")
            apiUrl = "api/service-dsc-dm-service-contents?populate=*"
        else if(location.pathname === "/digital-strategy-services/digital-audit")
            apiUrl = "api/service-dsc-da-service-contents?populate=*"
        else if(location.pathname === "/digital-strategy-services/product-incubation")
            apiUrl = "api/service-dsc-inp-service-contents?populate=*"
        else if(location.pathname === "/digital-strategy-services/digital-build")
            apiUrl = "api/service-dsc-db-service-contents?populate=*"
            // L3 Pages
         else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
          apiUrl = "/api/service-responsive-web-service-contents?populate=*"
         else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
          apiUrl = "/api/service-cms-service-contents?populate=*"
         else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
          apiUrl = "/api/service-pwd-service-contents?populate=*"
         else if(location.pathname === "/digital-development-services/mobile-app-design-development/ios-development-services")
          apiUrl = "/api/service-ios-service-contents?populate=*"
         else if(location.pathname === "/digital-development-services/mobile-app-design-development/android-application-development-services")
          apiUrl = "/api/service-and-service-contents?populate=*"
         else if(location.pathname === "/digital-development-services/mobile-app-design-development/hybrid-app-development-services")
          apiUrl = "/api/service-had-service-contents?populate=*"
          else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
          apiUrl = "/api/service-cards/2?populate=*"
          else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
          apiUrl = "/api/service-cards/10?populate=*"
          else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
          apiUrl = "/api/service-cards/5?populate=*"
          else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
          apiUrl = "/api/service-cards/4?populate=*"
          else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services")
          apiUrl = "/api/service-cards/8?populate=*"
          else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
          apiUrl = "/api/service-cards/6?populate=*"
          else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
          apiUrl = "/api/service-cards/9?populate=*"
          else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
          apiUrl = "/api/service-cards/1?populate=*"
          else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
          apiUrl = "/api/service-cards/7?populate=*"
          else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
          apiUrl = "/api/service-cards/3?populate=*"

  
//     const fetchData = ()=> {
//         axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
//           .then(response=> {
//             setData(response?.data?.data)
//             console.log(response?.data?.data)
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

const {data, isLoading, isError, error} = useFetchData(['developmentServices', location.pathname], apiUrl)
const servicesData = data?.data?.data || []

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
    <div className="flex flex-wrap justify-center gap-10 max-w-[950px] mx-auto">
        {servicesData?.map(service=> 
        <div key={service?.id} style={{backgroundColor:service?.attributes?.hexvalue}}
            className="w-[280px] text-white shadow-custom-shadow flex flex-col gap-2 px-5 py-4 rounded-xl">
            
            {service?.attributes?.image || service?.attributes?.icon && 
                <img loading="lazy" className="mb-2 w-14 h-14" src={service?.attributes?.icon?.data?.attributes?.url} alt={service?.attributes?.title}/>
            }
            <p className="font-raleway font-medium">{service?.attributes?.title}</p>
            <p className="text-[12px] grow font-montserrat">{service?.attributes?.description}</p>
            
            {service?.attributes?.CTA && 
            <Link to={service?.attributes?.path}
                 className="mt-5 flex items-center gap-1 w-fit group text-xs font-montserrat font-medium">
                <span className="group-hover:underline underline-offset-2">{service?.attributes?.CTA}</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 duration-300 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>
            </Link>
          }

        </div>
        )}
    </div>
  )
}

export default DevelopmentServices