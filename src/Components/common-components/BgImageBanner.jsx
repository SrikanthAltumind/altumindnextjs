import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const BgImageBanner = () => {
  const [data, setData] = useState()
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  
  let apiUrl;
    if (location.pathname === "/about/about-altumind/community-engagement")
      apiUrl = "api/community-management-vision?populate=*";
    else if (location.pathname === "/career/life-at-altumind")
      apiUrl = "api/life-at-diversity?populate=*";

  const fetchData = ()=> {
    axios.get(`${import.meta.env.VITE_APP_API_URL}${apiUrl}`)
    .then(response=> {
      setData(response?.data?.data?.attributes)
      setLoading(false)
    })
    .catch(error=> {
      setLoading(false)
      console.error("Failed to fetch data:", error);
      setError("Failed to fetch data. Please try again later.");
    })
  }

useEffect(()=> {
  fetchData()
},[])

if(loading){
  return <p>Loading</p>
}
if (error) {
  return (
    <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
      {error}
    </div>
  );
}
  return (  //bg-[url('${data?.image?.data?.attributes?.url}')]
      <div style={{backgroundImage: `url(${data?.image?.data?.attributes?.url})`}} 
        className={`w-full min-h-[500px] text-center  bg-cover bg-center md:bg-bottom relative`}>
          <div className="  absolute inset-0  bg-transparent dark:bg-black dark:bg-opacity-50 flex flex-col justify-center items-center px-4 font-raleway ">
          <p className="text-sm lg:text-base text-tertiary font-semibold dark:text-white pt-2 ">
              {data?.title}
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue font-extrabold text-3xl lg:text-4xl py-1">
              {data?.heading}
            </p>
            
            <p className="max-w-[950px] leading-6 sm:leading-7 pt-10 text-sm font-semibold text-tertiary dark:text-white ">
              {data?.description}
            </p>
          </div>
        </div>
      );
}

export default BgImageBanner