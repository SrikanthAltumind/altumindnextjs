import { Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";


const SeeOurImpact = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = () => {
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }api/alliance-impact?populate=*`;
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
    <section className='font-raleway dark:text-white'>
        <div className="w-[90%] max-w-[1000px]  mx-auto gap-x-10 gap-y-5  flex flex-col items-center  lg:flex-row  ">
     <div className='basis-[50%] hidden lg:block mx-auto lg:max-w-[420px]'>
            <img src={data?.image?.data?.attributes?.url} className='mx-auto' alt="future-alliance"/>
        </div>
    <div className=''>
    <div className="text-center lg:text-right mb-5 lg:mb-0">
            <p className='font-extrabold text-2xl lg:text-3xl xl:text-4xl bg-clip-text text-transparent w-fit lg:ml-auto max-lg:mx-auto bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue'>
            {data?.title}
            </p>
            <p className='font-semibold mt-1 md:mt-3 text-xs lg:text-sm'>{data?.sub}</p>
        </div>
        <div className='basis-[50%] lg:hidden max-w-[350px] mx-auto'>
            <img src={data?.image?.data?.attributes?.url} className='mx-auto' alt="future-alliance"/>
        </div>
        <div className='basis-[50%] max-w-[600px] grow max-lg:text-center text-right'>
            
            <p className='leading-[32px] font-medium my-5 md:my-8'>{data?.description}</p>
            <Link to='/portfolio' className='group text-xs lg:text-base text-secondary underline underline-offset-2 decoration-1 font-semibold flex gap-2 items-center w-fit  lg:ml-auto max-lg:mx-auto'>
                <span className=''>View Success Stories</span>
                <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>
            </Link>
        </div>
       
    </div>
   
    </div>
</section>
  )
}

export default SeeOurImpact