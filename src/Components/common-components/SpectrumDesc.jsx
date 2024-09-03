import React, { useEffect, useState } from 'react'
import { gradientStyle } from '../../ReactFunctions';
import LoaderSpinner from './LoaderSpinner';
import axios from 'axios';

const SpectrumDesc = () => {
   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(true);

   let apiUrl;

   if (location.pathname === "/services/quality-assurance-quality-control")
     apiUrl = "api/service-qa-testing-service";
   else if (location.pathname === "/services/technology-and-engineering")
     apiUrl = "api/service-tech-engg-service-contents?populate=*";
   else if (location.pathname === "/services/managed-operations")
     apiUrl = "api/service-managed-operation-services?populate=*";

   const fetchData = () => {
     const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
     axios
       .get(url)
       .then((res) => {
         setData(res?.data?.data);
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
    <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
      <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
        <p className="font-semibold">{data?.attributes?.title}</p>
        <p
          className="text-3xl font-extrabold md:max-w-[500px]"
          style={gradientStyle}
        >
          {data?.attributes?.heading}
        </p>
        <p className="md:max-w-[800px]">{data?.attributes?.description}</p>
      </div>
    </div>
  );
}

export default SpectrumDesc