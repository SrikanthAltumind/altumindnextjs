// import React, { useEffect, useState } from 'react'
import ScrollingCards from '../common-components/ScrollingCards'
// import { gradientStyle } from '../../ReactFunctions'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import LoaderSpinner from '../common-components/LoaderSpinner'

const DigitalJourney = () => {
  // const [scrollData, setScrollData] = useState([])
  const url = `${import.meta.env.VITE_APP_API_URL}api/whatwedo?populate[whatwedo_mains][populate]=image`
  const {data, isLoading, isError, error} = useQuery({
    queryKey:["scrollingCards"],
    queryFn: () => {
      return axios.get(url)
    },
    staleTime: 24 * 60 * 60 * 1000
  })

  console.log(data, 'scrollingcardsquery')

  const scrollData = data?.data?.data?.attributes?.whatwedo_mains?.data || []

  if(isLoading){
    return <LoaderSpinner/>
  }

  if(isError){
    return(
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
      {error.message}
    </div>
    )
  }

  // const getScrollData = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_APP_API_URL}api/whatwedo?populate[whatwedo_mains][populate]=image`)
  //     .then((response) => {
  //       setScrollData(response?.data?.data?.attributes?.whatwedo_mains?.data);
  //     })
  //     .catch((error) => {
  //       console.log("error while fetching scrolldata: ", error);
  //     });
  // }

  // useEffect(() => {
  //   getScrollData()
  // },[])

  return (
    <div className="overflow-hidden dark:text-white relative w-full min-h-[400px] flex flex-col justify-start items-center gap-5 py-6 font-raleway">
      <div className="text-center space-y-3">
        <p className="custom-sub-heading">What we do</p>
        {/* <p className="md:text-4xl text-xl md:font-extrabold font-bold text-[#02194a] text-center gap-2 font-raleway">
          <span className="leading-7 dark:text-white">Empowering Digital Journeys Through</span>
          <br />
          <span className="leading-7" style={gradientStyle}>
            Human-Centric Services
          </span>
        </p> */}
        <h2 className='custom-gradient-text px-5 sm:px-0 md:max-w-[70%]'>Empowering Digital Integration Through Human-Centric Services</h2>
      </div>
      <div className="overflow-hidden w-full relative min-h-fit py-3">
        <ScrollingCards scrollData={scrollData} />
      </div>
        </div>
  )
}

export default DigitalJourney