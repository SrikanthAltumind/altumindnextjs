import  { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import LoaderSpinner from '../common-components/LoaderSpinner'

const LearningAndDevelopment = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchData = ()=> {
        const url = `${import.meta.env.VITE_APP_API_URL}api/life-at-learn-and-development?populate=*`
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
        <div className='w-[90%] bg-red-00 max-w-[1100px] gap-10 mx-auto flex flex-col-reverse items-center lg:flex-row '>
            <div className='basis-[50%] grow lg:pt-10 max-sm:text-center'>
              <div className='hidden lg:block'>
                <p className='font-extrabold text-3xl xl:text-4xl bg-clip-text text-transparent w-fit  bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue'>
               {data?.title}
                </p>
                <p className='font-semibold mt-3 text-sm'>{data?.heading}</p>
                </div>
                <p className='leading-[32px] lg:text-left text-center font-medium lg:my-8'>{data?.description}</p>
            </div>
            <div className='basis-[50%] max-w-[350px]  lg:max-w-[420px]'>
            <div className='lg:hidden mb-8'>
                <p className='font-extrabold text-2xl bg-clip-text text-transparent w-fit mx-auto bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue'>
               {data?.title}
                </p>
                <p className='font-semibold mt-1 md:mt-3 text-center text-sm'>{data?.heading}</p>
                </div>
                <img src={data?.image?.data?.attributes?.url} className='mx-auto' alt={data?.title}/>
            </div>
        </div>
    </div>
  )
}

export default LearningAndDevelopment