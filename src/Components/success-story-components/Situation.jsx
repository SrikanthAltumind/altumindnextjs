import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextImage from "../common-components/TextImage";
import axios from "axios";
import LoaderSpinner from "../common-components/LoaderSpinner";

const Situation = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let apiUrl;
    const location = useLocation();

    
    if (location.pathname === "/portfolio/sukhiba")
      apiUrl = "api/success-story-sukiba-situation?populate=*";
    else if (location.pathname === "/portfolio/secpod")
      apiUrl = "api/success-story-secpod-situation?populate=*";
    else if (location.pathname === "/portfolio/united-finance")
      apiUrl = "api/success-story-uf-situation?populate=*";

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
    <TextImage data={data} textRight={false}/>
  );
};

export default Situation;
