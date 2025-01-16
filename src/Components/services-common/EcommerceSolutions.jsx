import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

const EcommerceSolutions = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
  
    const fetchData = ()=> {
        axios.get(`${import.meta.env.VITE_APP_API_URL}api/service-tech-engg-ecom-solution-contents`)
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
      <div className='flex flex-col gap-10 font-raleway dark:text-white'>
          {data?.map((card, index)=> 
          <div key={card?.id} className='flex flex-col gap-4'>
            <div className='flex gap-2 text-xs md:text-sm font-medium'>
                <span className='text-[#EA5D66] text-xl'>{index+1}.</span>{" "}
                <p>{card?.attributes?.title}</p>
            </div>
            
            <div className='flex flex-wrap justify-center lg:justify-between gap-10'>
                <div className='markdown leading-5 text-xs font-medium p-3 w-[280px] space-y-3 rounded-sm dark:bg-DarkBackground shadow-custom-shadow'>
                    <Markdown>{card?.attributes?.descriptionOne}</Markdown>
                </div>
                <div className='markdown leading-5 text-xs font-medium p-3 w-[280px] space-y-3 rounded-sm dark:bg-DarkBackground shadow-custom-shadow'>
                    <Markdown>{card?.attributes?.descriptionTwo}</Markdown>
                </div>
                <div className='markdown leading-5 text-xs font-medium p-3 w-[280px] space-y-3 rounded-sm dark:bg-DarkBackground shadow-custom-shadow'>
                    <Markdown>{card?.attributes?.descriptionThree}</Markdown>
                </div>
            </div>
            <div className='text-sm flex flex-col md:flex-row gap-2 md:gap-10 justify-between'>
                <Markdown>{card?.attributes?.descriptionFour}</Markdown>
                <Link to={card?.attributes?.path}>
                    <button className='group md:text-nowrap text-xs sm:text-sm text-secondary font-medium flex items-center gap-1'>
                        <span className='group-hover:underline underline-offset-2'>{card?.attributes?.CTA}</span>
                        <svg className="w-6 h-6 group-hover:translate-x-2 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </button>
                </Link>   
            </div>
          </div>
          )}
      </div>
  )
}

export default EcommerceSolutions