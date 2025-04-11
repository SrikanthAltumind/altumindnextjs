

// const servicesData = [
//         'Content Marketing',
//         'Social Media Marketing',
//         'Email Marketing',
//         'Performance Marketing',
//         'Marketing Automation',
//         'Search Engine Optimization (SEO)',
//         'App Store Optimization (ASO)',
//         'Online Reputation Management',
//         'Conversion Rate Optimization'

import useFetchData from "../../CustomHooks/useFetchData"
import LoaderSpinner from "../common-components/LoaderSpinner"

// ]
const OtherDigitalMarketingServices = () => {

    const apiUrl = '/api/service-others?populate=*'
    const {data, isLoading, isError, error} = useFetchData('OtherDigitalMarketingServices', apiUrl)
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
    <div className='w-[90%] max-w-[900px] mx-auto py-10 font-raleway'>
        <div className='text-center space-y-3'>
            <p className='custom-gradient-text'>Other Digital Marketing Services</p>
            <p className='text-sm font-medium'>We develop strategic methods to support your business goals and generate meaningful results.</p>
        </div>
        <div className='flex justify-center gap-7 flex-wrap mt-10'>
            {servicesData.map((service, index) => 
                <div key={index} className='w-[150px] flex flex-col gap-3 p-4 items-center justify-center rounded-lg shadow-custom-shadow'>
                    <img className='w-10 h-10' src={service?.attributes?.icon?.data?.attributes?.url}
                        alt={service?.attributes?.icon?.data?.attributes?.alternativeText} loading='lazy'/>
                    <p className='text-xs text-center font-semibold'>{service?.attributes?.title}</p>
                </div>
                )}
        </div>
    </div>
  )
}

export default OtherDigitalMarketingServices