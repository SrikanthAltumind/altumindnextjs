import React, { useEffect, useState } from 'react'
import { gradientStyle } from '../../ReactFunctions';
import Marquee from 'react-fast-marquee';
import axios from 'axios';
import LoaderSpinner from '../common-components/LoaderSpinner';

const CareerScrollingCards = () => {

    const [scrollData, setScrollData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
      const url = import.meta.env.VITE_APP_API_URL + "api/career-core-value-contents?populate=*";
      axios.get(url)
        .then((res) => {
          console.log("data from career core values: ", res?.data?.data);
          setScrollData(res?.data?.data);
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
    <div className="flex flex-col gap-6 items-center justify-center p-4 w-full font-raleway">
      <div className="flex flex-col text-center gap-4 items-center justify-center">
        <p className="md:text-3xl text-2xl font-bold md:font-extrabold">
          Altumind <span style={gradientStyle}>Core Values</span>
        </p>
        <p className="font-medium">
          Pillars Elevating Work Beyond the Ordinary
        </p>
      </div>
      <div className="w-full overflow-x-hidden py-3">
        <Marquee className="py-4">
          {scrollData?.concat(scrollData)?.map((src) => (
            <div
              key={"career core values - " + src?.id}
              className={`w-[260px] rounded-md h-[330px] p-3 mx-3 font-raleway hover:scale-105 duration-150 transition-all flex flex-col justify-start items-start gap-6 cursor-pointer`}
              style={{
                backgroundColor: src?.attributes?.hexvalue,
              }}
            >
              <img
                src={src?.attributes?.icon?.data?.attributes?.url}
                alt={src.title}
                className="w-[50px] h-[40px] object-contain"
                height="100%"
                width="100%"
              />
              <p
                className={`font-medium`}
                style={{ color: src?.attributes?.textClr }}
              >
                {src?.attributes?.title}
              </p>
              <p
                className={`text-sm`}
                style={{ color: src?.attributes?.textClr }}
              >
                {src?.attributes?.description}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default CareerScrollingCards