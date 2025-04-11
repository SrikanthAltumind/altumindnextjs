// import React, { useEffect, useState } from 'react'
import useFetchData from '../../CustomHooks/useFetchData';
import LoaderSpinner from '../common-components/LoaderSpinner'
import ActiveCampaign from '../../assets/Email-Marketing-L3-icons/Active Campaign.webp'
import ConstantContact from '../../assets/Email-Marketing-L3-icons/Constant Contact.webp'
import Convertkit from '../../assets/Email-Marketing-L3-icons/Convertkit.webp'
import drip from '../../assets/Email-Marketing-L3-icons/drip.webp'
import Hubspot from '../../assets/Email-Marketing-L3-icons/Hubspot.webp'
import Klaviyo from '../../assets/Email-Marketing-L3-icons/Klaviyo.webp'
import Mailchimp from '../../assets/Email-Marketing-L3-icons/Mailchimp.webp'
import Sendgrid from '../../assets/Email-Marketing-L3-icons/Sendgrid.webp'


const EmailMarketingTempData = {
  "attributes": {
    "title": "Platform-Specific Expertise",
    "heading": "Specialized Email Marketing Solutions for Every Channel",
  "images": {
    "data": [
          {
          "id": 1721,
          "attributes": {
            "name": "ActiveCampaign.webp",
            "alternativeText": null,
            "url": ActiveCampaign,
            }
          },
          {
          "id": 1722,
          "attributes": {
            "name": "ConstantContact.webp",
            "alternativeText": null,
            "url": ConstantContact,
            }
          },
          {
          "id": 1723,
          "attributes": {
            "name": "Convertkit.webp",
            "alternativeText": null,
            "url": Convertkit,
            }
          },
          {
          "id": 1723,
          "attributes": {
            "name": "drip.webp",
            "alternativeText": null,
            "url": drip,
            }
          },
          {
          "id": 1724,
          "attributes": {
            "name": "Hubspot.webp",
            "alternativeText": null,
            "url": Hubspot,
            }
          },
          {
          "id": 1725,
          "attributes": {
            "name": "Klaviyo.webp",
            "alternativeText": null,
            "url": Klaviyo,
            }
          },
          {
          "id": 1726,
          "attributes": {
            "name": "Mailchimp.webp",
            "alternativeText": null,
            "url": Mailchimp,
            }
          },
          {
          "id": 1727,
          "attributes": {
            "name": "Sendgrid.webp",
            "alternativeText": null,
            "url": Sendgrid,
            }
          }
        ]
      }
    }
}
 

const PlatformExpertise = () => {
  // const [data, setData] = useState()
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  let apiUrl;
  if(location.pathname === "/digital-development-services/erp-integration-service")
    apiUrl = 'api/service-tech-engg-erp-support?populate=*'
  else if(location.pathname === "/digital-development-services/ecommerce-services")
    apiUrl = 'api/service-tech-engg-ecom-platform?populate=*'
  else if(location.pathname === "/ai-services/chatbot-development-services")
    apiUrl = "api/service-ai-automation-ai-chat-ecosystem?populate=*"
  else if(location.pathname === "/ai-services/rpa-services")
    apiUrl = "api/service-ai-automation-rpa-partnership?populate=*"
  else if(location.pathname === "/cloud-strategy-engineering-services/cloud-migration-services")
    apiUrl = "api/service-cloud-migration-partnership?populate=*"
    else if(location.pathname === "/cloud-strategy-engineering-services/cloud-application-development-services")
    apiUrl = "api/service-cloud-app-partnership?populate=*"
    else if(location.pathname === '/digital-marketing-services/optimization-services')
        apiUrl = '/api/service-dm-child-tech-stack?populate=*'
    else if(location.pathname === '/digital-marketing-services/branding-design-services')
        apiUrl = '/api/service-dm-branding-design-tech-stack?populate=*'
    else if(location.pathname === '/digital-marketing-services/integrated-digital-marketing-services')
        apiUrl = '/api/service-dm-ms-tech-stack?populate=*'
    else if(location.pathname === "/operations-managed-services/cloud-management-solutions")
      apiUrl = "api/service-managed-operation-cm-stack-content?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution")
      apiUrl = "/api/service-expertise-contents/2?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
          // Please replace with correct API once provided by backend
          apiUrl = "/api/service-expertise-contents/2?populate=*"

  // const fetchData = ()=> {
  //     axios.get(`${import.meta.env.VITE_APP_API_URL}${apiUrl}`)
  //       .then(response=> {
  //         setData(response?.data?.data)
  //         console.log(response?.data?.data)
  //         setError(null)
  //         setLoading(false)
  //       })
  //       .catch(error=> {
  //         console.log('Error fetching data', error)
  //         setError("Failed to fetch data. Please try again later.");
  //         setLoading(false)
  //       })
  //   }

// useEffect(()=> {
//   fetchData()
// },[])

const {data, isLoading, isError, error} = useFetchData(location.pathname, apiUrl)
// const expertiseData = data?.data?.data || {}
const expertiseData = location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services"
                       ? EmailMarketingTempData : data?.data?.data || {}

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
    <div className='w-[90%] max-w-[750px] mx-auto font-raleway dark:text-white'>
        <div className='text-center space-y-3 mb-14 max-w-[750px] mx-auto'>
            <h2 className='custom-sub-heading'>{expertiseData?.attributes?.title}</h2>
            <p className='custom-gradient-text'>{expertiseData?.attributes?.heading}</p>
            {
              expertiseData?.attributes?.description && 
              <p className='text-[13px] font-medium'>{expertiseData?.attributes?.description}</p>
            }
           
        </div>
        <div className='mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-14'>
            {expertiseData?.attributes?.images?.data.map(logo=> 
                <div key={logo}>
                    <img className='w-[80px] lg:w-[120px]' loading='lazy' src={logo?.attributes?.url} alt={logo?.attributes?.name}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default PlatformExpertise