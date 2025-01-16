import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';


const OurCommitment = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const fetchData = ()=> {
    axios.get(import.meta.env.VITE_APP_API_URL + 'api/service-dm-branding-design-our-commitment')
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
},[location.pathname])

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
    <div className='sm:py-20 max-w-[950px] mx-auto font-raleway dark:text-white'>
        <div className='w-[140px] md:w-[180px] mx-auto flex justify-center relative md:text-lg'>
            <div className='flex relative'>
                <div style={{backgroundColor:data?.attributes?.clrOne, opacity:0.6}} className='bg-opacity-60 text-white h-[140px] md:h-[180px] w-[140px] md:w-[180px] rounded-full pt-10 md:pt-14 text-center font-semibold'>
                    {data?.attributes?.titleOne}
                </div>
                <div className='max-sm:hidden absolute bottom-full left-5 mb-3 text-sm md:text-base w-[150px] md:w-[170px] leading-4'>
                    <p className='font-bold'>{data?.attributes?.titleOne}:</p>
                    <p className='font-medium'>{data?.attributes?.descriptionOne}</p>
                </div>
            </div>
            <div className='absolute top-[80px] md:top-[110px] right-[50px] md:right-[70px] flex'>
                <div style={{backgroundColor:data?.attributes?.clrThree, opacity:0.6}} className='bg-opacity-60 text-white h-[140px] md:h-[180px] w-[140px] md:w-[180px] rounded-full flex justify-start pl-3 md:pl-7 items-center font-semibold'>
                    {data?.attributes?.titleThree}
                </div>
                <div className='max-sm:hidden absolute right-full top-[40%] text-sm md:text-base w-[150px] md:w-[170px] leading-4'>
                    <p className='font-bold'>{data?.attributes?.titleThree}:</p>
                    <p className='font-medium'>{data?.attributes?.descriptionThree}</p>
                </div>
            </div>
            <div className='absolute top-[80px] md:top-[110px] left-[50px] md:left-[70px] flex'>
                <div style={{backgroundColor:data?.attributes?.clrTwo, opacity:0.6}} className='bg-opacity-60 text-white h-[140px] md:h-[180px] w-[140px] md:w-[180px] rounded-full flex justify-end pr-5 md:pr-7 items-center font-semibold'>
                    {data?.attributes?.titleTwo}
                </div>
                <div className='max-sm:hidden absolute left-full ml-5 top-[40%] text-sm md:text-base w-[150px] md:w-[170px] leading-4'>
                    <p className='font-bold'>{data?.attributes?.titleTwo}:</p>
                    <p className='font-medium'>{data?.attributes?.descriptionTwo}</p>
                </div>
            </div>
        </div>
        <div className='sm:hidden mt-28 text-sm flex flex-col gap-5 w-[220px] mx-auto'>
            <div>
                <p className='font-bold'>{data?.attributes?.titleOne}:</p>
                <p className='font-medium'>{data?.attributes?.descriptionOne}</p>
            </div>
            <div>
                <p className='font-bold'>{data?.attributes?.titleTwo}:</p>
                <p className='font-medium'>{data?.attributes?.descriptionTwo}</p>
            </div>
            <div>
                <p className='font-bold'>{data?.attributes?.titleThree}:</p>
                <p className='font-medium'>{data?.attributes?.descriptionThree}</p>
            </div>
        </div>
        </div>
  )


}

export default OurCommitment