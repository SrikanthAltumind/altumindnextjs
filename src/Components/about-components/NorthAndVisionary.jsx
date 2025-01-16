import axios from 'axios'
import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner'
import { Link } from 'react-router-dom'
const NorthAndVisionary = () => {
    const [northStarData, setNorthStarData] = useState()
    const [visionaryData, setVisionaryData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
  
    const fetchNorthStarData = ()=> {
      axios.get(`${import.meta.env.VITE_APP_API_URL}api/about-us-our-north-star?populate=*`)
      .then(response=> {
        setNorthStarData(response?.data?.data?.attributes)
        setLoading(false)
      })
      .catch(error=> {
        console.error('Error while fetching Data', error)
        setError(error.message)
        setLoading(false)
      })
    }
    const fetchVisionaryLeadershipData = ()=> {
        axios.get(`${import.meta.env.VITE_APP_API_URL}api/about-us-our-visionary?populate=*`)
        .then(response=> {
            setVisionaryData(response?.data?.data?.attributes)
          setLoading(false)
        })
        .catch(error=> {
          console.error('Error while fetching Data', error)
          setError(error.message)
          setLoading(false)
        })
      }
  
    useEffect(()=>{
      fetchNorthStarData()
      fetchVisionaryLeadershipData()
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
      <div className="w-[90%] max-w-[1100px] mx-auto space-y-20 dark:text-white">
        {/* North star */}
        <div className="md:flex items-center justify-between ">
          <div className="basis-[55%] lg:basis-[55%] space-y-5">
            <div className="font-raleway space-y-2 max-md:text-center">
              <p className="custom-sub-heading">
                {northStarData?.title}
              </p>
              <p className="custom-gradient-text">
                {northStarData?.heading}
              </p>
            </div>
            <div className="md:hidden max-w-[320px] mx-auto">
              <img
                src={northStarData?.image?.data?.attributes?.url}
                alt={northStarData?.title}
              />
            </div>
            <p className="font-montserrat font-medium dark:font-normal max-md:text-center text-[13px]  lg:text-sm   xl:text-base leading-5 lg:leading-6">
              {northStarData?.description}
            </p>
            <Link
              to="/about/about-altumind/mission-and-vision"
              className="group w-fit max-md:mx-auto underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1"
            >
              {northStarData?.CTA}
              <svg
                className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
          <div className="basis-[40%] max-w-[380px] hidden md:block">
            <img
              className=""
              src={northStarData?.image?.data?.attributes?.url}
              alt={northStarData?.title}
            />
          </div>
        </div>
        {/* Visionary Leadership */}
        <div className="md:flex items-center justify-between ">
          <div className="basis-[40%] max-w-[380px] hidden md:block">
            <img
              className=""
              src={visionaryData?.image?.data?.attributes?.url}
              alt={visionaryData?.title}
            />
          </div>
          <div className="basis-[55%] lg:basis-[55%] space-y-2">
            <div className="font-raleway space-y-2 max-md:text-center">
              <p className="custom-sub-heading">
                {visionaryData?.title}
              </p>
              <p className="font-semibold text-2xl ">{visionaryData?.heading}</p>
            </div>
            <div className="md:hidden max-w-[320px] mx-auto">
              <img
                src={visionaryData?.image?.data?.attributes?.url}
                alt={visionaryData?.title}
              />
            </div>
            <p className="font-montserrat font-medium dark:font-normal max-md:text-center text-[13px]  lg:text-sm xl:text-base leading-5 lg:leading-6">
              {visionaryData?.description}
            </p>
            <Link
              to="/about/about-altumind/leadership"
              className="group w-fit max-md:mx-auto underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1"
            >
              {visionaryData?.CTA}
              <svg
                className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
export default NorthAndVisionary