import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import LoaderSpinner from "../common-components/LoaderSpinner";

const Banner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation()
    let apiUrl;

    if(location.pathname === '/life-at-altumind')
        apiUrl = 'api/life-at-banner'
      else if(location.pathname === '/community-engagement')
        apiUrl = 'api/community-management-banner'
       else if(location.pathname === '/alliance')
        apiUrl = 'api/alliance-banner'
       else if(location.pathname === '/experience-design')
        apiUrl = 'api/alliance-banner'

  const fetchData = () => {
    const url = 
      import.meta.env.VITE_APP_API_URL + apiUrl;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data?.attributes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className='bg-[#EAF1FF] dark:bg-transparent  min-h-[300px] flex flex-col justify-center items-center text-center font-raleway gap-y-5 px-4'>
    <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>{data?.title}
    </p>
    <p className='max-w-[450px] text-sm md:text-base  text-black font-medium dark:text-white'>{data?.description}</p>
  </div>
  )
}

export default Banner