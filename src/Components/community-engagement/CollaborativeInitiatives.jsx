import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoaderSpinner from '../common-components/LoaderSpinner'

const CollaborativeInitiatives = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchData = ()=> {
        const url = `${import.meta.env.VITE_APP_API_URL}api/community-management-initiative?populate=*`
        axios
        .get(url)
        .then((response) => {
            setData(response?.data?.data?.attributes)
            setLoading(false)
        })
        .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
    }

useEffect(()=> {
    fetchData()
},[])

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
    <div className=' font-raleway dark:text-white'>
        <div className='w-[90%] max-w-[1000px] gap-10 mx-auto flex flex-col items-center sm:flex-row '>
            <div className='basis-[50%]  grow max-sm:text-center'>
            <p className='font-semibold mt-1 md:mt-3 text-xs lg:text-sm '>{data?.title}</p>
                <p className='font-extrabold text-2xl lg:text-3xl xl:text-4xl bg-clip-text text-transparent w-fit max-sm:mx-auto bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue'>
                    {data?.heading}
                </p>
               
                <div className='lg:hidden max-w-[350px] mt-5 mx-auto lg:max-w-[420px]'>
                <img src={data?.image?.data?.attributes?.url} alt={data?.heading}/>
                </div>
                <p className='font-medium font-montserrat my-5 md:my-8 text-xs lg:text-sm'>{data?.description1}</p>
                <p className='font-montserrat font-semibold my-5 md:my-8 text-xs lg:text-sm'>{data?.description2}</p>
                <Link to='/insights/' className='group text-xs lg:text-base text-secondary underline underline-offset-2 decoration-1 font-semibold flex gap-2 items-center w-fit max-sm:mx-auto'>
                    <span className=''>Join Us for Upcoming Event</span>
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </Link>
            </div>
            <div className='basis-[50%] lg:block hidden max-w-[350px]  lg:max-w-[420px]'>
                <img src={data?.image?.data?.attributes?.url} alt="Discover Roles"/>
            </div>
        </div>
    </div>
  )
}

export default CollaborativeInitiatives