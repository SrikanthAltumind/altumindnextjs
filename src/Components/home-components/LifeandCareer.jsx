import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

const LifeandCareer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/life-career-mains?populate=*`;
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
    <div className="text-primary dark:text-white font-semibold text-center font-raleway mx-auto w-[90%]">
      <p>Life & Careers at Altumind</p>
      <p className="font-extrabold text-3xl lg:text-4xl py-2 mb-10">
        Inspiring Minds,{" "}
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-gradientGreen to-gradientBlue">
          Transforming Tomorrow
        </span>
      </p>
      <div className="flex justify-center md:flex-row flex-col gap-12 mb-10 mx-auto max-w-[1000px]">
        {data?.map((item) => (
          <div
            className="relative rounded-3xl overflow-hidden basis-[50%]"
            key={item.id}
          >
            <img
              className="h-full w-full hover:scale-105 transition-all duration-300"
              src={item?.attributes?.image?.data?.attributes?.url}
              alt={item?.attributes?.title}
            />
            <div className="text-white absolute w-full py-3 bg-gradient-to-t from-[#02194A] to-transparent duration-500 bottom-0 left-0 pl-5 text-left">
              <p className="text-2xl font-bold">{item?.attributes?.title}</p>
              <p className="text-lg font-light">
                {item?.attributes?.description}
              </p>
              <p className="group flex text-lg items-center w-fit gap-1 cursor-pointer">
                {item?.attributes?.navigator}
                <svg
                  className="group-hover:translate-x-3 transition-all duration-300 w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeandCareer;
