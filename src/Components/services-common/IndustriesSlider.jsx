import { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import { ThemeContext } from '../../Layouts/AppLayout';
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const IndustriesSlider = () => {
    const [data, setData] = useState()
    const {theme} = useContext(ThemeContext)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
 
    const location = useLocation()
    
    let apiUrl;
      if(location.pathname.startsWith("/services/quality-assurance-services"))
        apiUrl = 'api/service-qat-child-industry-expertises?populate=*'
      else if(location.pathname.startsWith("/operations-managed-services/maintenance-support-services"))
        apiUrl = 'api/service-managed-operation-ssm-ind-expertises?populate=*'
      else if(location.pathname.startsWith("/services/operations-managed-services"))
          apiUrl = 'api/service-managed-operation-child-ind-expertises?populate=*'
      
      else if(location.pathname.startsWith("/digital-development-services/mobile-app-design-development/"))
          apiUrl = '/api/service-ind-hybs?populate=*'
         else if(location.pathname === "/digital-development-services/web-development-consulting/responsive-web-development-services")
          apiUrl = '/api/service-ind-pros?populate=*'
         else if(location.pathname === "/digital-development-services/web-development-consulting/cms-development-services")
          apiUrl = '/api/service-ind-cms?populate=*'
         else if(location.pathname === "/digital-development-services/web-development-consulting/progressive-web-app-development-services")
          apiUrl = '/api/service-ind-pros?populate=*'
         else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services")
          apiUrl = "/api/service-ind-emails?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services")
        apiUrl = "/api/service-ind-emails?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services")
        apiUrl = "/api/service-ind-emails?populate=*"
        else if(location.pathname === "/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy")
        apiUrl = "/api/service-ind-markets?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/b2b-seo-services")
        apiUrl = "/api/service-ind-cros?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/app-store-optimization-services")
        apiUrl = "/api/service-ind-asos?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/orm-service")
        apiUrl = "/api/service-ind-orms?populate=*"
        else if(location.pathname === "/digital-marketing-services/optimization-services/cro-services")
        apiUrl = "/api/service-ind-cros?populate=*"
      else
        apiUrl = 'api/service-tech-engg-child-industry-expertises?populate=*'


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


useEffect(()=> {
    const handleScreenSizeChange = ()=> {
        setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenSizeChange)

    return ()=> {
        window.removeEventListener('resize', handleScreenSizeChange)
    }
}, [])

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
        <div className='font-raleway dark:text-white'>
            <Marquee
                pauseOnHover={screenWidth>=640} 
                speed={55} delay={1} 
                gradient 
                gradientWidth={screenWidth>768 ? '180px' : screenWidth<=640 ? '30px' : '100px'} 
                gradientColor={theme=='dark' ? '#0d1015' : 'white'}>
                {data?.map(industry=> 
                    <div key={industry?.id} className='p-3 px-5 mx-5 flex items-center gap-4 border-[1px] border-[#999999] rounded-md'>
                        <div>
                            <img src={industry?.attributes?.icon?.data?.attributes?.url} 
                                className='w-8 h-8 object-contain'/>
                        </div>
                        <p className='text-lg font-medium'>{industry?.attributes?.title}</p>
                    </div>
                )}
            </Marquee>
        </div>
      )
    }
    

export default IndustriesSlider