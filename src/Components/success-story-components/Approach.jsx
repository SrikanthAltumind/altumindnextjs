import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Approach = () => {
  const [headerData, setHeaderData] = useState();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let headerUrl;
  let contentUrl;
  const location = useLocation();

  if (location.pathname === "/portfolio/sukhiba") {
    headerUrl = "api/success-story-sukiba-approach-head";
    contentUrl = "api/success-story-sukiba-approach-contents";
  } else if (location.pathname === "/portfolio/secpod") {
    headerUrl = "api/success-story-secpod-approach-head";
    contentUrl = "api/success-story-secpod-approach-contents";
  } else if (location.pathname === "/portfolio/united-finance") {
    headerUrl = "api/success-story-uf-approach-head";
    contentUrl = "api/success-story-uf-approach-contents";
  } else if (location.pathname === "/portfolio/enphase") {
    headerUrl = "api/success-story-enphase-approach-head";
    contentUrl = "api/success-story-enphase-approach-contents?populate=*";
  }

  const fetchHeaderData = () => {
    const url = import.meta.env.VITE_APP_API_URL + headerUrl;
    axios
      .get(url)
      .then((res) => {
        // console.log("data from banner: ", res?.data?.data);
        setHeaderData(res?.data?.data?.attributes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  };

  const fetchContent = () => {
    const url = import.meta.env.VITE_APP_API_URL + contentUrl;
    axios
      .get(url)
      .then((res) => {
        setContent(res?.data?.data);
        console.log(res?.data?.data, "test");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHeaderData();
    fetchContent();
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
    <div className="w-[80%] mx-auto py-10 dark:text-white">
      <div className="text-center font-raleway flex flex-col items-center">
        <p className="custom-gradient-text py-2"> {headerData?.title}:<br/>{headerData?.heading}</p>
        <p className="text-sm font-medium mt-2 max-w-[800px] leading-6">
          {headerData?.description}
        </p>
      </div>
      <div className="flex flex-col flex-wrap gap-y-8 sm:flex-row justify-between mt-5 sm:mt-12 font-raleway">
        {content?.map((item) => (
          <div
            key={item.id}
            className={`${
              content?.length === 3 ? "basis-[30%]" : "basis-[48%]"
            } space-y-1`}
          >
            <p className=" text-2xl font-semibold text-[#D1D7ED]">
              {item?.id}.
            </p>
            <p className="text-sm font-bold dark:font-semibold">
              {item?.attributes?.title}
            </p>
            <p className="text-[13px] font-medium dark:font-normal leading-5">
              {item?.attributes?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
