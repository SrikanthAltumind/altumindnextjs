import React, { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import axios from 'axios';

const ERPApproach = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = ()=> {
      axios.get(`${import.meta.env.VITE_APP_API_URL}api/service-tech-engg-erp-approach-contents`)
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
    <div className='w-[90%] max-lg:max-w-[500px] lg:max-w-[850px] mx-auto font-raleway'>
      <div className='text-center mb-10 max-w-[700px] mx-auto'>
        <p className='custom-sub-heading'>Our ERP Integration Approach</p>
        <p className='custom-gradient-text'>Seamless Integration for Operational Excellence</p>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
          {data?.map(card=> 
            <div className='p-3 py-5 min-h-[180px] w-[180px] space-y-3 rounded-lg dark:bg-DarkBackground dark:text-white shadow-custom-shadow'>
              <p className='text-[15px] font-semibold'>{card?.attributes?.title}</p>
              <p className='text-xs font-medium font-montserrat'>{card?.attributes?.description}</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default ERPApproach