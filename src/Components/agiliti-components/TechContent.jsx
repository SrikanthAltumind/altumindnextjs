import { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { ThemeContext } from '../../Layouts/AppLayout';
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';
import Markdown from 'react-markdown';

const TechContent = () => {
const {theme} = useContext(ThemeContext)
const [screenWidth, setScreenWidth] = useState(window.innerWidth)
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchData = () => {
    const url = `${import.meta.env.VITE_APP_API_URL}/api/agiliti-root-stack-service-contents`;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data?.data, 'ress')
        console.log('tech conent', data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  },[])

useEffect(()=> {
    const handleScreenSizeChange = ()=> {
        setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', (handleScreenSizeChange))

    return ()=> {
        window.removeEventListener('resize', handleScreenSizeChange)
    }
}, [])

if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
      </div>
    );
  }
  return (
    <div className='font-raleway space-y-10 w-[93%] mx-auto'>
        {
            location.pathname !== "/agiliti-hire-dedicated-developers" &&
            <p className="custom-gradient-text ">
            Tech Stack
        </p> 
        }
        <div className='flex gap-x-2 gap-y-5 justify-center items-center flex-wrap'>
        {data.map(stack=> 
                <div key={stack.id} className='mx-5 bg-[#F9FBFF] dark:bg-DarkBackground dark:text-white flex flex-col p-3 w-[260px] h-[250px] border-2 border-gray-400 rounded-xl'>
                    <div className='space-y-5'>
                        <h3 className='text-xl font-semibold dark:font-normal'>{stack?.attributes?.title}</h3>
                        <Markdown className='markdown -ml-5 font-medium text-sm'>{stack?.attributes?.description}</Markdown>
                    </div>
             
                </div>
        )}
        </div>
     
        {/* <Marquee
         pauseOnHover={screenWidth>=640} speed={55} delay={1} gradient gradientWidth={screenWidth>768 ? '180px' : screenWidth<=640 ? '30px' : '100px'} gradientColor={theme=='dark' ? '#0d1015' : 'white'}>
            {data.map(stack=> 
                <div key={stack.id} className='mx-5 bg-[#F9FBFF] dark:bg-DarkBackground dark:text-white   flex flex-col  p-3 w-[260px] h-[250px] border-2 border-gray-400 rounded-xl'>
                    <div className='space-y-5'>
                        <p className='text-xl font-semibold dark:font-normal'>{stack?.attributes?.title}</p>
                        <Markdown className='markdown -ml-5 font-medium text-sm'>{stack?.attributes?.description}</Markdown>
                    </div>
                </div>
            )}
        </Marquee> */}
    </div>
  )
}

export default TechContent