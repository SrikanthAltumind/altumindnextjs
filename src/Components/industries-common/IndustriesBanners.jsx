import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const IndustriesBanners = () => {
  const [data, setData] = useState(null)
  const location = useLocation()
    let apiUrl;

    if(location.pathname === '/industries/bfsi-fintech')
        apiUrl = 'api/industry-bfsi'
    else if(location.pathname === '/industries/healthcare')
        apiUrl = 'api/industry-healthcare'
    else if(location.pathname === '/industries/ed-tech')
        apiUrl = 'api/industry-edtech'
      else if (location.pathname === '/industries/internet')
        apiUrl = 'api/industry-internet'
       else if(location.pathname === '/industries/digital-commerce')
        apiUrl = 'api/industry-internet'
 
  const fetchBannerData = ()=> {
    axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
      .then(response=> {
        setData(response?.data?.data?.attributes)
      })
      .catch(error=> {
        console.log('Error fetching Banner data', error)
      })
  }

useEffect(()=> {
  fetchBannerData()
},[])

  return (
    <div className=' flex justify-center items-center bg-[#e1f0f9] min-h-[280px] text-tertiary'>
        <div className='text-center px-2'>
            <p className='font-raleway w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue mx-auto text-3xl md:text-4xl'>
                {data?.title}
            </p>
            <p className='font-montserrat font-medium text-xs md:text-sm mt-3'>
                {data?.heading}
            </p>
 
                 <a href = "#" className='group w-fit mx-auto font-raleway  text-secondary font-semibold flex justify-center items-center gap-1 mt-10'>
                  <span className='border-b leading-4 border-secondary'>Consult Our Experts</span>
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </a>
        </div>
 
    </div>
  )
}

export default IndustriesBanners