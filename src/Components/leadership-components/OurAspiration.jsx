import axios from 'axios'
import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner'
const OurAspiration = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const fetchData = ()=> {
    axios.get(`${import.meta.env.VITE_APP_API_URL}api/leadership-aspiration?populate=*`)
    .then(response=> {
      setData(response?.data?.data?.attributes)
      setLoading(false)
    })
    .catch(error=> {
      console.error('Error while fetching Data', error)
      setError(error.message)
      setLoading(false)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])


  
  if (loading) {
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
    <div className='w-[90%] max-w-[1100px] mx-auto lg:flex items-center justify-between dark:text-white'>
      <div className='basis-[65%] space-y-5'>
        <div className='font-raleway space-y-2 max-lg:text-center'>
          <p className='font-semibold dark:font-medium'>{data?.title}</p>
          <p className='custom-gradient-text lg:mx-0 max-w-[550px]'>{data?.heading}</p>
        </div>
        <div className='lg:hidden max-w-[320px] mx-auto'>
          <img src={data?.image?.data?.attributes?.url} alt={data?.title}/>
        </div>
        <p className='font-montserrat font-medium dark:font-normal max-lg:text-center text-sm xl:text-base leading-6'>
          {data?.description} 
        </p>
      </div>
      <div className='basis-[32%] bg-red-10 max-w-[320px] hidden lg:block'>
        <img className='' src={data?.image?.data?.attributes?.url} alt={data?.title}/>
      </div>
    </div>
  )
}

export default OurAspiration