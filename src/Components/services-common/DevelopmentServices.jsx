import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import LoaderSpinner from "../common-components/LoaderSpinner"
import axios from "axios"

const resData = [
    {id:1, title:'Responsive Website Dvelopment', description:`Transform your digital presence with our 
enterprise-grade responsive websites. Built 
with mobile-first architecture, advanced 
frameworks, and optimized performance to 
deliver seamless experiences across all 
devices and platforms. Our solutions 
ensure maximum engagement, faster 
loading times, and superior conversion 
rates.`, cta:'Explore Responsive Development', iconUrl:'lkbkjvkvk', bgClr:'#02194A'},
    {id:2, title:'Content Management Systems (CMS)', description:`Power your digital content with our custom 
CMS solutions that combine flexibility with 
enterprise-scale performance. From 
intuitive interfaces to robust security 
protocols, we deliver personalized CMS 
platforms that streamline content 
management, enhance collaboration, and 
accelerate your digital operations.`, cta:'Discover CMS Solutions', iconUrl:'lkbkjvkvk', bgClr:'#F84F4F'},
    {id:3, title:'Progressive Web App Development', description:`Elevate your web presence with cutting-edge 
PWAs that blur the line between web and 
native applications. Our PWAs deliver 
lightning-fast performance, offline capabilities, 
and app-like experiences without the 
installation overhead. Built with advanced 
JavaScript frameworks, service workers, and 
modern web APIs for optimal user 
engagement.`, cta:'Explore PWA Development', iconUrl:'lkbkjvkvk', bgClr:'#5489FC'},
]

const DevelopmentServices = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation()


    let apiUrl;
      if(location.pathname === "/services/technology-and-engineering/web-development")
        apiUrl = 'api/service-tech-engg-web-service-contents'
      else if(location.pathname === "/services/technology-and-engineering/mobile-app-development")
        apiUrl = 'api/service-tech-engg-mobile-service-contents'
      else if(location.pathname === "/services/technology-and-engineering/erp-integration")
        apiUrl = 'api/service-tech-engg-erp-service-contents?populate=*'
      else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
        apiUrl = "api/service-ai-automation-ai-chat-service-contents?populate=*"
      else if(location.pathname === "/services/ai-automation/rpa")
            apiUrl = "api/service-ai-automation-rpa-service-contents?populate=*"
      else if(location.pathname === "/services/cloud/cloud-migration")
        apiUrl = 'api/service-cloud-migration-service-contents?populate=*'
      else if(location.pathname === "/services/cloud/cloud-app-services")
        apiUrl = '/api/service-cloud-app-service-contents?populate=*'
            else if(location.pathname === "/services/data-analytics/marketing-intelligence")
        apiUrl = '/api/service-da-marketing-intelligence-serv-contents?populate=*'
      else if(location.pathname === "/services/data-analytics/business-intelligence")
        apiUrl = '/api/service-da-business-intelligence-serv-contents?populate=*'
      else if(location.pathname === "/services/data-analytics/customer-360")
      apiUrl = "/api/service-da-customer-360-serv-contents?populate=*"
      else if(location.pathname === "/services/data-analytics/digital-intelligence")
        apiUrl = '/api/service-da-digital-intelligence-serv-contents?populate=*'
      else if(location.pathname === "/services/data-analytics/sales-intelligence")
        apiUrl = '/api/service-da-sales-intelligence-serv-contents?populate=*'
            else if(location.pathname === "/services/managed-operations/website-operations-management")
        apiUrl = '/api/service-managed-operation-wom-service-contents?populate=*'
      else if(location.pathname === "/services/managed-operations/cloud-management")
      apiUrl = "api/service-managed-operation-cm-service-contents?populate=*"
          else if(location.pathname === "/services/managed-operations/software-maintenance-support")
      apiUrl = "api/service-managed-operation-ssm-service-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/automation-testing")
            apiUrl = "api/service-qat-automation-service-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/security-testing")
            apiUrl = "api/service-qat-security-service-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/performance-testing")
            apiUrl = "api/service-qat-performance-service-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/functional-testing")
            apiUrl = "api/service-qat-functional-service-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/qa-consulting")
            apiUrl = "api/service-qat-consulting-service-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")
            apiUrl = "api/service-dsc-dee-service-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")
            apiUrl = "api/service-dsc-dm-service-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-audits")
            apiUrl = "api/service-dsc-da-service-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/incubation-products-services")
            apiUrl = "api/service-dsc-inp-service-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-build")
            apiUrl = "api/service-dsc-db-service-contents?populate=*"

  
    const fetchData = ()=> {
        axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
          .then(response=> {
            setData(response?.data?.data)
            console.log(response?.data?.data)
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
    <div className="flex flex-wrap justify-center gap-10 max-w-[950px] mx-auto">
        {data?.map(service=> 
        <div key={service?.id} style={{backgroundColor:service?.attributes?.hexvalue}}
            className="w-[280px] text-white shadow-custom-shadow flex flex-col gap-2 px-5 py-4 rounded-xl">
            
            {service?.attributes?.image || service?.attributes?.icon && 
                <img className="mb-2 w-14 h-14" src={service?.attributes?.icon?.data?.attributes?.url} alt={service?.attributes?.title}/>
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