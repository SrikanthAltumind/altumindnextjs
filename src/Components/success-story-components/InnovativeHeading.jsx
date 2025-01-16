import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import LoaderSpinner from '../common-components/LoaderSpinner';
import { gradientStyle } from '../../ReactFunctions';

const InnovativeHeading = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let apiUrl;
    const location = useLocation();

    if (location.pathname === "/portfolio/sukhiba")
      apiUrl = "api/success-story-sukiba-features-head";
    else if (location.pathname === "/portfolio/secpod")
      apiUrl = "api/success-story-secpod-feature-head";
    else if (location.pathname === "/portfolio/united-finance")
      apiUrl = "api/success-story-uf-feature-head";
    else if (location.pathname === "/portfolio/enphase")
      apiUrl = "api/success-story-enphase-feature-head";

    const fetchData = () => {
      const url = import.meta.env.VITE_APP_API_URL + apiUrl;
      axios
        .get(url)
        .then((res) => {
          // console.log("data from banner: ", res?.data?.data);
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
    <div className="w-full flex flex-col gap-6 justify-center items-center text-center font-raleway">
      <div className="flex flex-col gap-3">
        <p className="custom-gradient-text py-2">
          {data?.title}<br/>{data?.heading}
        </p>
       
      </div>

      {data?.description && (
        <p className="text-sm lg:text-base lg:max-w-[650px] font-medium ">{data?.description}</p>
      )}
    </div>
  );
}

export default InnovativeHeading