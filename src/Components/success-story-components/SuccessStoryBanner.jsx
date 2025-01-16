import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";

const SuccessStoryBanner = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let apiUrl;
  const location = useLocation();

  if (location.pathname === "/portfolio/sukhiba")
    apiUrl = "api/success-story-sukiba-content?populate=*";
  else if (location.pathname === "/portfolio/secpod")
    apiUrl = "api/success-story-secpod-banner?populate=*";
  else if (location.pathname === "/portfolio/united-finance")
    apiUrl = "api/success-story-uf-banner?populate=*";
  else if (location.pathname === "/portfolio/enphase")
    apiUrl = "api/success-story-enphase-banner?populate=*";

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
    <div className="bg-LightBlue w-full lg:min-h-[380px] py-6 sm:py-10 flex justify-center items-center">
      <div className="w-[90%]  sm:w-[80%]  justify-between flex flex-col sm:flex-row items-center gap-y-5 font-raleway">
        <div className="basis-[60%] flex flex-col gap-6 max-sm:text-center">
          <p className="custom-gradient-text py-2 sm:mx-0">
            {data?.title}
          </p>

          <p className="font-semibold text-sm ">{data?.description}</p>

          <div className="font-semibold text-sm  space-y-2">
            <p>Client: {data?.client}</p>
            <p>Industry: {data?.industry}</p>
          </div>
        </div>
        <div className="basis-[35%] max-w-[200px] md:max-w-[220px] lg:max-w-[550px] ">
          <img src={data?.image?.data?.attributes?.url} className="w-full lg:h-[280px] object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryBanner;
