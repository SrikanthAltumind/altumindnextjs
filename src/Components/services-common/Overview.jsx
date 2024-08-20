import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";

const Overview = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation()
    let apiUrl;

    if(location.pathname === '/experience-design')
        apiUrl = 'api/service-exp-design-overview?populate=*'
    else if(location.pathname === '/ai-automation')
        apiUrl = 'api/service-ai-auto-overview?populate=*'
    else if(location.pathname === '/qa-testing')
        apiUrl = 'api/service-qa-testing-overview?populate=*'
   else if(location.pathname === '/digital-marketing-services')
    apiUrl = 'api/service-digital-marketing-overview?populate=*'
    else if(location.pathname === '/technology-engineering')
    apiUrl = 'api/service-tech-engg-overview?populate=*'
  else if(location.pathname === '/data-analytics')
    apiUrl = 'api/service-data-analytics-overview?populate=*'
  else if(location.pathname === '/managed-operations')
    apiUrl = 'api/service-managed-operation-overview?populate=*'
  else if(location.pathname === '/services')
    apiUrl = 'api/service-root-track-record?populate=*'
  else if(location.pathname === '/digital-strategy-consulting')
    apiUrl = 'api/service-digital-strategy-consulting-overview?populate=*'
   else if(location.pathname === '/cloud-services')
    apiUrl = 'api/service-cloud-overview?populate=*'

    const fetchData = () => {
        const url = `${
            import.meta.env.VITE_APP_API_URL
          }${apiUrl}`;
        axios
          .get(url)
          .then((res) => {
            setData(res?.data?.data?.attributes);
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
      }, []);
    
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
    <section className="w-[90%]  dark:text-white mx-auto font-raleway">
    <div className='max-w-[1100px] mx-auto'>
    <div className='lg:hidden text-center space-y-3 mb-10'>
        <p className='text-sm md:text-base dark:text-white text-black font-semibold'>{data?.title}</p>
        <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>{data?.heading}</p>
    
    </div>
    <div className='flex lg:flex-row flex-col-reverse gap-5 items-center lg:justify-between'>
        <div className='basis-[60%]'>
        <div className='hidden lg:block space-y-2 mb-5'>
        <p className="font-semibold dark:font-normal">{data?.title}</p>
        <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>{data?.heading}</p>
    </div>
            <p className='leading-7 text-sm sm:text-base lg:text-left text-center dark:font-normal font-medium'>{data?.description}</p>
        </div>
        <div className='basis-[35%]'>
            <img src={data?.image?.data?.attributes?.url} alt={data?.title} className='ml-auto' width={400} />
        </div>
    </div>
    </div>
    </section>
  )
}

export default Overview