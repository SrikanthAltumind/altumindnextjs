import { useEffect, useState } from 'react'

import axios from 'axios'
import LoaderSpinner from './LoaderSpinner';

const TimeLineFlow = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);


    let apiUrl;
    if(location.pathname === '/agiliti-hire-dedicated-developers')
        apiUrl = 'api/agiliti-root-works?populate=*'
    else if(location.pathname === '/services/experience-design/ui-design')
        apiUrl = 'api/service-exp-design-ui-process-contents?populate=*'
    else if(location.pathname === '/services/experience-design/ux-design')
        apiUrl = 'api/service-exp-design-ux-process-contents?populate=*'
    else if(location.pathname === '/services/experience-design/cx-design')
        apiUrl = 'api/service-exp-design-cx-process-contents?populate=*'
    else if(location.pathname === '/services/technology-and-engineering/web-development')
        apiUrl = '/api/service-tech-engg-web-process-contents?populate=*'
     else if(location.pathname === '/services/technology-and-engineering/mobile-app-development')
        apiUrl = '/api/service-tech-engg-mobile-process-contents?populate=*'
         else if(location.pathname === '/services/cloud/cloud-migration')
        apiUrl = '/api/service-cloud-migration-process-sections?populate=*'
    else if(location.pathname === '/services/cloud/cloud-app-services')
        apiUrl = '/api/service-cloud-app-process-contents?populate=*'
     else if(location.pathname === '/services/digital-marketing/marketing-optimization')
        apiUrl = '/api/service-dm-marketing-opt-process-contents?populate=*'
         else if(location.pathname === '/services/digital-marketing/branding-design')
        apiUrl = '/api/service-dm-branding-design-approach-contents?populate=*'
          else if(location.pathname === '/services/digital-marketing/marketing-services')
        apiUrl = '/api/service-dm-ms-process-contents?populate=*'
    else if(location.pathname === '/services/data-analytics/marketing-intelligence')
        apiUrl = '/api/service-da-marketing-intelligence-prcs-contents?populate=*'
    else if(location.pathname === '/services/data-analytics/business-intelligence')
        apiUrl = '/api/service-da-business-intelligence-prcs-contents?populate=*'
    else if(location.pathname === "/services/data-analytics/customer-360")
        apiUrl = "api/service-da-customer-360-prcs-contents?populate=*"
    else if(location.pathname === '/services/data-analytics/digital-intelligence')
        apiUrl = '/api/service-da-digital-intelligence-prcs-contents?populate=*'
    else if(location.pathname === '/services/data-analytics/sales-intelligence')
        apiUrl = '/api/service-da-sales-intelligence-prcs-contents?populate=*'
    else if(location.pathname === "/services/managed-operations/product-innovation-management")
      apiUrl = "api/service-managed-operation-dpi-process-contents?populate=*"
        else if(location.pathname === "/services/managed-operations/website-operations-management")
      apiUrl = "api/service-managed-operation-wom-process-contents?populate=*"
    else if(location.pathname === "/services/managed-operations/cloud-management")
      apiUrl = "api/service-managed-operation-cm-process-contents?populate=*"
        else if(location.pathname === "/services/managed-operations/software-maintenance-support")
      apiUrl = "api/service-managed-operation-ssm-process-contents?populate=*"
        else if(location.pathname === '/services/ai-automation/rpa')
            apiUrl = 'api/service-ai-automation-rpa-process-contents?populate=*'
        else if(location.pathname === "/services/quality-assurance/automation-testing")
            apiUrl = "api/service-qat-automation-process-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/security-testing")
            apiUrl = "api/service-qat-security-process-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/performance-testing")
            apiUrl = "api/service-qat-performance-process-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/functional-testing")
            apiUrl = "api/service-qat-functional-process-contents?populate=*"
        else if(location.pathname === "/services/quality-assurance/qa-consulting")
            apiUrl = "api/service-qat-consulting-process-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-experience-engagement")
            apiUrl = "api/service-dsc-dee-process-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-modernization")
            apiUrl = "api/service-dsc-dm-process-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-audits")
            apiUrl = "api/service-dsc-da-process-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/incubation-products-services")
            apiUrl = "api/service-dsc-inp-process-contents?populate=*"
        else if(location.pathname === "/services/digital-strategy-consulting/digital-build")
            apiUrl = "api/service-dsc-db-process-contents?populate=*"

    const fetchTimeLineData = ()=> {
        axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
          .then(response=> {
            setData(response?.data?.data)
            setLoading(false)
          })
          .catch(error=> {
            console.log('Error fetching TimeLine data', error)
            setLoading(false)
          })
      }
useEffect(()=> {
    fetchTimeLineData()
},[location.pathname])

if(loading){
    return <LoaderSpinner/>
}
  return (
    <div> 
        <div className={`px-5 sm:pb-24 ${data?.length <= 4 ? 'lg:py-[170px]' : 'lg:py-[230px]'} flex justify-center dark:text-white`}>
            <div className={`${data?.length <=4 ? 'xl:ml-14' : 'xl:ml-0'}  flex flex-col lg:flex-row`}>
            {data?.map((item,index)=> 
                <div  key={item.id} className='group max-lg:ml-8 max-lg:border-l-2 lg:border-b-2 last:border-none max-lg:pb-20 last:pb-0  border-dashed border-gray-300'>
                    <div className={`max-lg:-ml-8 lg:-mb-[35px] ${data.length===5 ? 'lg:-mb-[40px]' : data.length<=4 ?'lg:-mb-[45px]' : 'lg:-mb-[35px]'} sm:relative max-w-[300px] ${data?.length>4 ? 'lg:w-40 xl:w-48' : 'lg:w-52 xl:w-72'} flex lg:flex-col justify-center gap-2`}>
                        <div className={`${data.length===5 ? 'lg:w-[80px] lg:h-[80px]' : data.length<=4 ?'lg:w-[90px] lg:h-[90px]' : 'lg:w-[70px] lg:h-[70px] '} w-16 h-16 shrink-0 rounded-full p-1 bg-white shadow-custom-shadow p- flex justify-center items-center`}>
                            <div className='w-full h-full rounded-full flex justify-center items-center'
                                style={{backgroundColor:item?.attributes?.bgClr}} >
                                <img className='w-[55%]'
                                src={item?.attributes?.icon?.data?.attributes?.url} 
                                alt={item?.attributes?.icon?.data?.attributes?.name} />
                            </div>
                        </div>
                        <div className={`sm:w-[200px] ${data?.length>4 ? 'lg:w-48 xl:w-52' : 'lg:w-52'} ${data.length===5 ? 'group-odd:lg:bottom-20 group-even:lg:top-20' : data.length<=4 ?'group-odd:lg:bottom-24 group-even:lg:top-24' : 'group-odd:lg:bottom-20 group-even:lg:top-20'} sm:absolute  group-odd:sm:left-20 group-odd:lg:left-0 group-even:sm:right-20 group-even:lg:left-0 group-even:sm:text-right group-even:lg:text-left group-odd:lg:bottom-20 group-even:lg:top-20 font-raleway`}>
                            <p className='text-secondary font-semibold'>0{index+1}</p>
                            <p className='font-semibold text-sm xl:text-base'>{item?.attributes?.title}</p>
                            <p className='text-xs xl:text-[13px] font-medium leading-4'>{item?.attributes?.description}</p>
                        </div>
                    </div>
                </div>
                )}

            </div>
        </div>
    </div>
  )
}

export default TimeLineFlow