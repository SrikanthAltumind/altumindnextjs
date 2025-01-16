import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import Counter from "../common-components/Counter";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";

const NumberResults = () => {
  const [statsData, setStatsData] = useState();
  const [headingData, setHeadingData] = useState();
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const location = useLocation()


  let headingAPIUrl;
  let statsAPIUrl;
  if (location.pathname === "/portfolio/enphase") {
    headingAPIUrl = "api/success-story-enphase-result-head";
    statsAPIUrl = "api/success-story-enphase-result-contents";
  } else if (location.pathname === "/portfolio/united-finance") {
    headingAPIUrl = "api/success-story-uf-result-head";
    statsAPIUrl = "api/success-story-uf-result-contents?populate=*";
  }

  const fetchHeaderData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}${headingAPIUrl}`)
      .then((response) => {
        setHeadingData(response?.data?.data?.attributes);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Banner data", error);
        setError(error.message);
        setLoading(false);
      });
  };

  const fetchStatsData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}${statsAPIUrl}`)
      .then((response) => {
        setStatsData(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Banner data", error);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHeaderData();
    fetchStatsData();
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
    <div className="py-10 space-y-10 w-[90%] max-w-[950px] mx-auto dark:text-white font-raleway">
      <div className="text-center">
       
        <p className="custom-gradient-text py-2">{headingData?.title}: <br/>{headingData?.heading}</p>
      </div>

      <p className="text-center font-medium text-[13px] lg:text-sm dark:font-normal leading-6">
        {headingData?.description}
      </p>
      <div className="text-black dark:text-white mt-14 flex flex-wrap justify-center gap-y-16 sm:gap-y-20 gap-x-28">
        {statsData?.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col gap-y-2 md:gap-y-4 text-center "
          >
            {/* {stat?.imagePath && 
                    <img className="w-16 h-16 object-contain mx-auto dark:invert" src={stat.imagePath} alt={stat.id}/>
                   } */}
            <p className="text-3xl text-secondary font-bold">
              <Counter
                value={Number(stat?.attributes?.percent?.replace(/[%x]/g, ""))}
                countSpeed={80}
              />
              <span>
                {stat?.attributes?.percent?.includes("x") ? "x" : "%"}
              </span>
            </p>
            <div className="font-montserrat space-y-1">
              <p className="font-medium dark:font-normal text-sm ">
                {stat?.attributes?.description}
              </p>
              {/* {stat?.description && 
                        <p className='text-[13px] font-medium dark:font-normal max-w-[260px]'>{stat.description}</p>
                    } */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberResults;
