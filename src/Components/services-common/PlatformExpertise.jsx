import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner'
import axios from 'axios'

const PlatformExpertise = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let apiUrl;
  if(location.pathname === "/services/technology-and-engineering/erp-integration")
    apiUrl = 'api/service-tech-engg-erp-support?populate=*'
  else if(location.pathname === "/services/technology-and-engineering/ecommerce-services")
    apiUrl = 'api/service-tech-engg-ecom-platform?populate=*'
  else if(location.pathname === "/services/ai-automation/conversational-ai-chatbot")
    apiUrl = "api/service-ai-automation-ai-chat-ecosystem?populate=*"
  else if(location.pathname === "/services/ai-automation/rpa")
    apiUrl = "api/service-ai-automation-rpa-partnership?populate=*"
  else if(location.pathname === "/services/cloud/cloud-migration")
    apiUrl = "api/service-cloud-migration-partnership?populate=*"
    else if(location.pathname === "/services/cloud/cloud-app-services")
    apiUrl = "api/service-cloud-app-partnership?populate=*"
    else if(location.pathname === '/services/digital-marketing/marketing-optimization')
        apiUrl = '/api/service-dm-child-tech-stack?populate=*'
    else if(location.pathname === '/services/digital-marketing/branding-design')
        apiUrl = '/api/service-dm-branding-design-tech-stack?populate=*'
    else if(location.pathname === '/services/digital-marketing/marketing-services')
        apiUrl = '/api/service-dm-ms-tech-stack?populate=*'
    else if(location.pathname === "/services/managed-operations/cloud-management")
      apiUrl = "api/service-managed-operation-cm-stack-content?populate=*"

  const fetchData = ()=> {
      axios.get(`${import.meta.env.VITE_APP_API_URL}${apiUrl}`)
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
},[])

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
    <div className='w-[90%] max-w-[750px] mx-auto font-raleway dark:text-white'>
        <div className='text-center space-y-3 mb-14 max-w-[750px] mx-auto'>
            <h2 className='custom-sub-heading'>{data?.attributes?.title}</h2>
            <p className='custom-gradient-text'>{data?.attributes?.heading}</p>
            {
              data?.attributes?.description && 
              <p className='text-[13px] font-medium'>{data?.attributes?.description}</p>
            }
           
        </div>
        <div className='mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-14'>
            {data?.attributes?.images?.data.map(logo=> 
                <div key={logo}>
                    <img className='w-[80px] lg:w-[120px]' src={logo?.attributes?.url} alt={logo?.attributes?.name}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default PlatformExpertise