import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Challenge = () => {
  const [headerData, setHeaderData] = useState();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let headerUrl;
  let contentUrl;
  const location = useLocation();

  if (location.pathname === "/portfolio/sukhiba") {
    headerUrl = "api/success-story-sukiba-challenge-head";
    contentUrl = "api/success-story-sukiba-challenge-contents?populate=*";
  } else if (location.pathname === "/portfolio/secpod") {
    headerUrl = "api/success-story-secpod-challenge-head";
    contentUrl = "api/success-story-secpod-challenge-contents?populate=*";
  } else if (location.pathname === "/portfolio/united-finance") {
    headerUrl = "api/success-story-uf-challenge-head";
    contentUrl = "api/success-story-uf-challenge-contents?populate=*";
  } else if (location.pathname === "/portfolio/enphase") {
    headerUrl = "api/success-story-enphase-challenge-head";
    contentUrl = "api/success-story-enphase-challenge-contents?populate=*";
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
    const url = import.meta.env.VITE_APP_API_URL + contentUrl
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
    <div className="w-[80%] mx-auto dark:text-white">
      <div className="text-center font-raleway mb-10">
        <p className="font-extrabold text-xl md:text-3xl lg:text-4xl mb-1 text-primary dark:text-white">
          {headerData?.title}:
        </p>
        <p className="custom-gradient-text text-xl md:text-3xl lg:text-4xl">
          {headerData?.heading}
        </p>
      </div>
      <div className="space-y-10 mt-14">
        <div className="flex gap-10 sm:flex-row flex-col">
          {content.slice(0, content.length / 2).map((item) => (
            <div key={item.id} className="space-y-5 basis-[47%]">
              <div>
                <img
                  src={item?.attributes?.icon?.data?.attributes?.url}
                  alt="Challenge"
                  className="w-[50px] h-[55px] object-contain"
                />
              </div>
              <div className=" leading-[26px] ">
                <p className="text-[14px] font-bold font-raleway">
                  {item?.attributes?.title}
                </p>
                <p className=" text-[13px] font-medium font-montserrat dark:font-normal">
                  {item?.attributes?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-10 sm:flex-row flex-col">
          {content.slice(content.length / 2, content.length).map((item) => (
            <div key={item.id} className="space-y-5 basis-[47%]">
              <div>
                <img
                  src={item?.attributes?.icon?.data?.attributes?.url}
                  alt="Challenge"
                  className="w-[50px] h-[55px] object-contain"
                />
              </div>
              <div className=" leading-[26px] ">
                <p className="text-[14px] font-bold font-raleway">
                  {item?.attributes?.title}
                </p>
                <p className=" text-[13px] font-medium font-montserrat dark:font-normal">
                  {item?.attributes?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenge;
