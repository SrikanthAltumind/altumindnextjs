import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoaderSpinner from '../common-components/LoaderSpinner'

const DiscoverRoles = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchData = ()=> {
        const url = `${import.meta.env.VITE_APP_API_URL}api/career-discover-role?populate=*`
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
    <div className=' font-raleway py-5  dark:text-white '>
        <div className='w-[90%] bg-red-00 max-w-[950px] gap-10 mx-auto flex flex-col items-center sm:flex-row '>
            <div className='basis-[50%] grow sm:pt-10 max-sm:text-center'>
                <div className='space-y-3'>
                <p className='custom-gradient-text sm:mx-0'>
                    {data?.title}
                </p>
                <p className='custom-sub-heading'>{data?.text}</p>
                </div>
               
                <p className='font-medium font-montserrat my-5 md:my-8 text-xs lg:text-sm'>{data?.description}</p>
                <Link to='/career/open-roles' className='group text-xs lg:text-base text-secondary underline underline-offset-2 decoration-1 font-semibold flex gap-2 items-center w-fit max-sm:mx-auto'>
                    <span className=''>Explore Open Roles</span>
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </Link>
            </div>
            <div className='basis-[50%] max-w-[350px]  lg:max-w-[420px]'>
                <img src={data?.image?.data?.attributes?.url} alt="Discover Roles"/>
            </div>
        </div>
    </div>
  )
}

export default DiscoverRoles