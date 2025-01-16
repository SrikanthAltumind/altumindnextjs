import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { motion } from 'framer-motion';


const DesignServices = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams()


    let apiUrl;
    if(id === 'ui-design')
        apiUrl = 'api/service-exp-design-ui-service-contents?populate=*'
    else if(id === 'ux-design')
        apiUrl = 'api/service-exp-design-ux-service-contents?populate=*'
    else if(id === 'cx-design')
        apiUrl = 'api/service-exp-design-cx-service-contents?populate=*'
    else if(location.pathname === "/services/technology-and-engineering/ecommerce-services")
        apiUrl = 'api/service-tech-engg-ecom-service-contents?populate=*'
    else if(location.pathname === "/services/technology-engineering/erp-integration")
        apiUrl = 'api/service-tech-engg-erp-service-contents?populate=*'
    else if(location.pathname === "/services/digital-marketing/marketing-optimization")
        apiUrl = '/api/service-dm-marketing-opt-service-contents?populate=*'
    else if(location.pathname === "/services/managed-operations/product-innovation-management")
      apiUrl = "api/service-managed-operation-dpi-service-contents?populate=*"
          else if(location.pathname === "/services/digital-marketing/branding-design")
      apiUrl = "api/service-dm-branding-design-service-contents?populate=*"
    else if(location.pathname === "/services/digital-marketing/marketing-services")
            apiUrl = "api/service-dm-ms-service-contents?populate=*"

  
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
},[id])

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
    <div className={`flex flex-wrap justify-center gap-8`}>
              {/* <div className={`flex flex-wrap ${data?.length===4 ? 'max-w-[650px]' :'max-w-[950px]'} mx-auto  justify-center gap-8`}> */}
              
                {/* {data?.map(service=> 
                    <div  className='group w-[270px] p-5 flex flex-col text-white rounded-lg shadow-custom-shadow'
                          style={{backgroundColor:service?.attributes?.hexvalue}} key={service?.id}>
                        <img className='w-12 h-12 mb-2 object-contain' src={service?.attributes?.icon?.data?.attributes?.url}/>
                        <p className='font-medium'>{service?.attributes?.title}</p>
                        <p className='text-xs font-light font-montserrat'>{service?.attributes?.descriptionOne}</p>
                        <div className='markdown text-xs font-light font-montserrat'>
                            <Markdown>{service?.attributes?.descriptionTwo}</Markdown>
                        </div>
                    </div>
                )} */}
                {
                  [...Array(Math.ceil(data.length/2))].map((_,index)=> {
                    const pair = data?.slice(index*2, (index*2)+2)
                    return <ServiceCardsPair key={index} pair={pair} index={index}/>
                  })
                }
            </div>
  )
}

export default DesignServices



const ServiceCardsPair = ({pair})=> {
  const [isHovered, setIsHovered] = useState(null);
  const lgDevice = window.innerWidth>=1024

  return (
    <div className='lg:h-[530px] p-1 flex max-lg:flex-wrap justify-center max-lg:gap-10 lg:flex-col lg:justify-between'>
        <motion.div  
            onHoverStart={() => setIsHovered('first')}
            onHoverEnd={() => setIsHovered(null)}
            animate={{
              minHeight: isHovered===null ? '240px' : 'auto',
              flexGrow: lgDevice && isHovered === 'first' ? 1 : 0
            }}
            transition={{ duration: 0.4}}
            style={{backgroundColor:pair[0]?.attributes?.hexvalue}} key={pair[0]?.id}
            className='w-[270px] p-5 flex flex-col text-white rounded-lg shadow-custom-shadow'
              >
            <motion.img 
              animate={{
                display: lgDevice && isHovered === 'second' ? 'none' : 'block',
              }}
              transition={{ duration: 0 }}

            className='w-12 h-12 mb-2 object-contain' src={pair[0]?.attributes?.icon?.data?.attributes?.url}/>
            <p className='font-medium'>{pair[0]?.attributes?.title}</p>
            <motion.p
            animate={{
              display: lgDevice && isHovered === 'second' ? 'none' : 'block',
            }}
          transition={{ duration: 0 }}
            
            className='text-xs font-montserrat'>{pair[0]?.attributes?.descriptionOne}</motion.p>
            <motion.div 
             animate={{
              display: !lgDevice || isHovered === 'first' ? 'block' : 'none',
            }}
            transition={{ duration: 0 }}

            className='markdown-services-animated-card leading-8 text-[13px] font-montserrat'>
                <Markdown>{pair[0]?.attributes?.descriptionTwo}</Markdown>
            </motion.div>
        </motion.div>



        <motion.div  
          onHoverStart={() => setIsHovered('second')}
          onHoverEnd={() => setIsHovered(null)}
          animate={{
            minHeight: isHovered===null ? '240px' : 'auto',
            flexGrow: lgDevice && isHovered === 'second' ? 1 : 0
          }}
          transition={{ duration: 0.4}}
          style={{backgroundColor:pair[1]?.attributes?.hexvalue}} key={pair[1]?.id}
          className='lg:mt-[20px] w-[270px] p-5 flex flex-col text-white rounded-lg shadow-custom-shadow'
                >
            <motion.img
            animate={{
              display: lgDevice && isHovered === 'first' ? 'none' : 'block',
            }}
          transition={{ duration: 0 }}

            className='w-12 h-12 mb-2 object-contain' src={pair[1]?.attributes?.icon?.data?.attributes?.url}/>
            <p className='font-medium'>{pair[1]?.attributes?.title}</p>
            <motion.p
              animate={{
                display: lgDevice && isHovered === 'first' ? 'none' : 'block',
              }}
          transition={{ duration: 0 }}
          className='text-xs font-montserrat'>{pair[1]?.attributes?.descriptionOne}</motion.p>
          <motion.div 
            animate={{
              display: !lgDevice || isHovered === 'second' ? 'block' : 'none',
            }}
          transition={{ duration: 0 }}
          className='markdown-services-animated-card text-[13px] leading-8 font-montserrat'>
                <Markdown>{pair[1]?.attributes?.descriptionTwo}</Markdown>
            </motion.div>
        </motion.div>
      {/* )
      } */}
  </div>
  )
}