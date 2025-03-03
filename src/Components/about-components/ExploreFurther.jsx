import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";
import { Link } from "react-router-dom";

const ExploreFurther = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/about-us-explore-furthers`;
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
    <div className="mx-auto w-[90%] max-w-[950px] dark:text-white space-y-10 font-raleway">
      <p className="custom-gradient-text">Explore Further</p>
      <div className="flex gap-10 flex-wrap  justify-center text-white">
        {data?.map((item) => (
          <div
            key={item.id}
            className="rounded-lg p-5 w-[230px] h-[260px] flex justify-between flex-col"
            style={{ backgroundColor: item?.attributes?.hexvalue }}
          >
            <p className="font-semibold text-lg">{item?.attributes?.title}</p>
            <Link to={item?.attributes?.url} className="w-fit">
              <p className="text-[13px] flex gap-2 items-center w-fit group font-semibold">
                {item?.attributes?.CTA}
                <svg
                  className="w-5 h-5 group-hover:translate-x-3 transition-all duration-300  dark:text-white"
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
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFurther;
