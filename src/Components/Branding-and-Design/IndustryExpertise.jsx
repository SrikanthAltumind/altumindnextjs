import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';

const IndustryExpertise = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const fetchData = ()=> {
    axios.get(import.meta.env.VITE_APP_API_URL + 'api/service-dm-branding-design-ind-exp-contents?populate=*')
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
        <div className={`w-[90%] mx-auto flex flex-wrap ${data?.length ===4 ? 'max-w-[650px]' :'max-w-[950px]'} mx-auto  justify-center gap-12 sm:gap-x-14`}>
            {data?.map(item=> 
                <div  className='w-[220px] flex flex-col gap-1'
                    key={item?.id}>
                    <img className='w-12 h-12 mb-3 object-contain' src={item?.attributes?.icon?.data?.attributes?.url}/>
                    <p className='text-sm text-left leading-6'><span className='font-semibold'>{item?.attributes?.title} - </span>{item?.attributes?.description}</p>
                </div>
            )}
        </div>
  )
}

export default IndustryExpertise