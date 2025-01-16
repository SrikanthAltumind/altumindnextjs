import { Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";


const FutureAlliance = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = () => {
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }api/alliance-future?populate=*`;
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
    <section className=' font-raleway py-10  dark:text-white bg-[#F3F9FF] dark:bg-[#24272c]'>
         
        <div className='w-[90%] max-w-[1000px]  mx-auto  '>
        <div className='text-center lg:text-left mb-5 space-y-3 lg:mb-0'>
                <p className='custom-sub-heading'>
                {data?.sub}
                </p>
                <p className='custom-gradient-text lg:mx-0'>{data?.title}</p>
                </div>
           <div className='flex flex-col-reverse items-center  lg:flex-row gap-x-10 gap-y-5'>
            <div className='basis-[50%] max-w-[600px] grow max-lg:text-center sm:text-base text-sm'>
                <p className='leading-[32px]  font-medium my-3 md:my-5'>{data?.description}</p>
                <Link to='/contact' className='group text-xs lg:text-base text-secondary underline underline-offset-2 decoration-1 font-semibold flex gap-2 items-center w-fit max-lg:mx-auto'>
                    <span className=''>Partner with Us</span>
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </Link>
            </div>
            <div className='basis-[50%] max-w-[350px] lg:max-w-[420px]'>
                <img src={data?.image?.data?.attributes?.url} className='mx-auto lg:-mt-20' alt={data?.title}/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default FutureAlliance