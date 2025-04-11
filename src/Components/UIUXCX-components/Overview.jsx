import LoaderSpinner from '../common-components/LoaderSpinner';
import {useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import useFetchData from '../../CustomHooks/useFetchData';


const Overview = () => {
    // const [data, setData] = useState()
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const location = useLocation()


    let apiUrl;
    if(location.pathname === '/experience-design-services/ui-design-services')
        apiUrl = 'api/service-exp-design-ui-overview?populate=*'
    else if(location.pathname === '/experience-design-services/ux-design-services')
        apiUrl = 'api/service-exp-design-ux-overview?populate=*'
    else if(location.pathname === '/experience-design-services/cx-design')
        apiUrl = 'api/service-exp-design-cx-overview?populate=*'
    else if(location.pathname === "/digital-development-services/web-development-consulting")
    apiUrl = 'api/service-tech-engg-web-overview?populate=*'
    else if(location.pathname === "/digital-development-services/mobile-app-design-development")
      apiUrl = 'api/service-tech-engg-mobile-overview?populate=*'
    else if(location.pathname === "/digital-development-services/ecommerce-services")
      apiUrl = 'api/service-tech-engg-ecom-overview?populate=*'
    else if(location.pathname === "/digital-development-services/erp-integration-service")
      apiUrl = 'api/service-tech-engg-erp-overview?populate=*'
    else if(location.pathname === "/ai-services/chatbot-development-services")
      apiUrl = "api/service-ai-automation-ai-chat-overview?populate=*"
    else if(location.pathname === "/ai-services/rpa-services")
      apiUrl = "api/service-ai-automation-rpa-overview?populate=*"
    else if(location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
      apiUrl = "api/service-cloud-migration-overview?populate=*" 
    else if(location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
      apiUrl = "api/service-cloud-app-overview?populate=*" 
    else if(location.pathname === "/digital-marketing-services/optimization-services")
      apiUrl = "api/service-dm-marketing-opt-overview?populate=*" 
    else if(location.pathname === "/digital-marketing-services/branding-design-services")
      apiUrl = "api/service-dm-branding-design-overview?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services")
      apiUrl = "api/service-dm-ms-overview?populate=*"  
    else if(location.pathname === "/data-analytics-services/marketing-intelligence-solutions")
      apiUrl = "api/service-da-marketing-intelligence-overview?populate=*"
        else if(location.pathname === "/data-analytics-services/business-intelligence-consulting")
      apiUrl = "api/service-da-business-intelligence-overview?populate=*"
    else if(location.pathname === "/data-analytics-services/customer-360-analytics")
    apiUrl = "api/service-da-customer-360-overview?populate=*"
    else if(location.pathname === "/data-analytics-services/digital-intelligence-services")
      apiUrl = "api/service-da-digital-intelligence-overview?populate=*"
        else if(location.pathname === "/data-analytics-services/sales-intelligence-solutions")
      apiUrl = "api/service-da-sales-intelligence-overview?populate=*"
    else if(location.pathname === "/operations-managed-services/product-development-and-innovation")
    apiUrl = "api/service-managed-operation-dpi-overview?populate=*"
      else if(location.pathname === "/operations-managed-services/website-management")
    apiUrl = "api/service-managed-operation-wom-overview?populate=*"
  else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
    apiUrl = "api/service-managed-operation-cm-overview?populate=*"
    else if(location.pathname === "/operations-managed-services/maintenance-support-services")
    apiUrl = "api/service-managed-operation-ssm-overview?populate=*"
  else if(location.pathname === "/quality-assurance-services/automation-testing-services")
      apiUrl = "api/service-qat-automation-overview?populate=*"
  else if(location.pathname === "/quality-assurance-services/security-testing-services")
      apiUrl = "api/service-qat-security-overview?populate=*"
  else if(location.pathname === "/quality-assurance-services/performance-testing-services")
      apiUrl = "api/service-qat-performance-overview?populate=*"
      else if(location.pathname === "/quality-assurance-services/functional-testing-services")
      apiUrl = "api/service-qat-functional-overview?populate=*"
  else if(location.pathname === "/quality-assurance-services/quality-assurance-consulting")
      apiUrl = "api/service-qat-consulting-overview?populate=*"
  else if(location.pathname === "/digital-strategy-services/digital-experience")
      apiUrl = "api/service-dsc-dee-overview?populate=*"
  else if(location.pathname === "/digital-strategy-services/digital-modernization")
      apiUrl = "api/service-dsc-dm-overview?populate=*"
  else if(location.pathname === "/digital-strategy-services/digital-audit")
      apiUrl = "api/service-dsc-da-overview?populate=*"
      else if(location.pathname === "/digital-strategy-services/product-incubation")
      apiUrl = "api/service-dsc-inp-overview?populate=*"
  else if(location.pathname === "/digital-strategy-services/digital-build")
      apiUrl = "api/service-dsc-db-overview?populate=*"
      // L3 Pages
   else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
    apiUrl = "/api/service-responsive-web-development-overview?populate=*"
   else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
    apiUrl = "/api/service-cms-overview?populate=*"
   else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
    apiUrl = "/api/service-pwd-overview?populate=*"
   else if(location.pathname === "/digital-development-services/mobile-app-design-development/ios-development-services")
    apiUrl = "/api/service-ios-overview?populate=*"
   else if(location.pathname === "/digital-development-services/mobile-app-design-development/android-application-development-services")
    apiUrl = "/api/service-and-overview?populate=*"
   else if(location.pathname === "/digital-development-services/mobile-app-design-development/hybrid-app-development-services")
    apiUrl = "/api/service-had-overview?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
    apiUrl = "/api/service-overview-contents/2?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
    apiUrl = "/api/service-overview-contents/10?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
    apiUrl = "/api/service-overview-contents/5?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
    apiUrl = "/api/service-overview-contents/4?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services")
    apiUrl = "/api/service-overview-contents/8?populate=*"
    else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
    apiUrl = "/api/service-overview-contents/6?populate=*"
    else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
    apiUrl = "/api/service-overview-contents/9?populate=*"
    else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
    apiUrl = "/api/service-overview-contents/1?populate=*"
    else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
    apiUrl = "/api/service-overview-contents/7?populate=*"
    else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
    apiUrl = "/api/service-overview-contents/3?populate=*"

  const {data, isLoading, isError, error} = useFetchData(['overview', location.pathname], apiUrl)
  const overviewData = data?.data?.data?.attributes || []
  
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

if (isLoading) {
  return <LoaderSpinner />;
}

if (isError) {
  return (
    <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
      {error.message}
    </div>
  );
}

  return (
    <div className='w-[90%] max-w-[950px] mx-auto font-raleway dark:text-white'>
        <div className='text-center mb-8 max-w-[700px] mx-auto'>
            <p className='custom-sub-heading'>{overviewData?.title}</p>
            <p className='custom-gradient-text'>{overviewData?.heading}</p>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center gap-10'>
            <div className='basis-[60%] max-md:text-center'>
                <p className='text-sm lg:text-base'><Markdown>{overviewData.description}</Markdown></p>
            </div>
            <div className='max-w-[280px]'>
                <img className='object-contain max-w-[280px]' src={overviewData.image?.data?.attributes?.url} alt={data?.attributes?.image?.data?.attributes?.name}/>
            </div>
        </div>
    </div>
  )
}

export default Overview