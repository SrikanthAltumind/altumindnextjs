import { useContext, useEffect, useState } from 'react';
import { techStack } from '../../Utils'
import Marquee from 'react-fast-marquee';
import { ThemeContext } from '../../Layouts/AppLayout';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const TechStackSlider = ({title, heading="Tech Stack"}) => {
const {theme} = useContext(ThemeContext)
const [screenWidth, setScreenWidth] = useState(window.innerWidth)
const [data, setData] = useState([]);
const location = useLocation()
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

let apiUrl;
  if(location.pathname.startsWith("/services/quality-assurance/")){
    apiUrl = 'api/service-qat-automation-stack-contents?populate=*'
  }

const fetchData = () =>  {
    const url = import.meta.env.VITE_APP_API_URL + apiUrl;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }


useEffect(() => {
if(location.pathname.startsWith("/services/quality-assurance/")){
    fetchData();
}
else{
    setData(techStack)
    setLoading(false)
}
}, [location.pathname]);

useEffect(()=> {
    const handleScreenSizeChange = ()=> {
        setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', (handleScreenSizeChange))

    return ()=> {
        window.removeEventListener('resize', handleScreenSizeChange)
    }
}, [])
  return (
    <div className='font-raleway space-y-10'>
        <div className='text-center space-y-3 mb-8 max-w-[750px] mx-auto'>
          {
            title &&
            <p className='custom-sub-heading'>{title}</p>
          }
          {
            location.pathname !== "/agiliti-hire-dedicated-developers" &&
            <p className='custom-gradient-text'>{heading}</p>
          }
        </div>
       
        <Marquee
         pauseOnHover={screenWidth>=640} speed={55} delay={1} gradient gradientWidth={screenWidth>768 ? '180px' : screenWidth<=640 ? '30px' : '100px'} gradientColor={theme=='dark' ? '#0d1015' : 'white'}>
            {data.map(stack=> 
                <div key={stack?.id} className='mx-5 bg-[#F9FBFF] dark:bg-DarkBackground dark:text-white   flex flex-col justify-between items-center p-3 w-[260px] h-[280px] border-2 border-gray-400 rounded-xl'>
                    <div className='text-center'>
                        <h3 className='text-xl font-semibold dark:font-normal'>{stack?.attributes.title}</h3>
                        <p className='font-medium mt-1 mb-4 text-sm'>{stack?.attributes.heading}</p>
                    </div>
                    <div className='w-full grow flex justify-evenly items-center flex-wrap'>
                        {stack?.attributes?.images?.data?.map(image=> 
                            <img key={image?.id} className='w-[50%] h-16 px-1 py-2 object-contain'
                                src={image?.attributes?.url} alt={image?.attributes?.name}
                            />
                        )}
                    </div>
                </div>
            )}
        </Marquee>
    </div>
  )
}

export default TechStackSlider