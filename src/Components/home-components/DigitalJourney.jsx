import React, { useEffect, useState } from 'react'
import ScrollingCards from '../common-components/ScrollingCards'
import { gradientStyle } from '../../ReactFunctions'
import axios from 'axios'

const DigitalJourney = () => {
  const [scrollData, setScrollData] = useState([])

  const getScrollData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}api/whatwedo?populate=*`)
      .then((response) => {
        setScrollData(response?.data?.data?.attributes?.whatwedo_mains?.data);
      })
      .catch((error) => {
        console.log("error while fetching scrolldata: ", error);
      });
  }

  useEffect(() => {
    getScrollData()
  },[])

  return (
    <div className="overflow-hidden relative w-full min-h-[400px] bg-gray-100 flex flex-col justify-start items-center gap-5 py-6">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <p className="text-xl font-semibold text-[#02194a]">What we do</p>
        <p className="text-4xl font-extrabold text-[#02194a] text-center gap-2">
          <span className="leading-7">Empowering Digital Journeys Through</span>
          <br />
          <span className="leading-7" style={gradientStyle}>
            Human-Centric Services
          </span>
        </p>
      </div>
      <div className="overflow-hidden w-full relative min-h-fit p-3">
        <ScrollingCards scrollData={scrollData} />
      </div>
        </div>
  )
}

export default DigitalJourney