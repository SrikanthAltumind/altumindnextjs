import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { Link } from "react-router-dom";

const LifeAtAltumind = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/career-life-section`;
    axios
      .get(url)
      .then((res) => {
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
    <section className="mx-auto w-[90%] max-w-[950px] dark:text-white font-raleway">
        <div className="text-center">
            <p className="w-fit mx-auto font-extrabold text-2xl lg:text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
            {data?.title}
            </p>
            <p className="font-semibold mb-7">{data?.heading}</p>
            <p className="text-sm font-medium max-w-[650px] mx-auto">{data?.description}</p>
            <Link to='/career/life-at-altumind' className='group mx-auto py-5 text-xs lg:text-base text-secondary underline underline-offset-2 decoration-1 font-semibold flex gap-2 items-center w-fit max-sm:mx-auto'>
                    <span className=''>Explore Open Roles</span>
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </Link>
        </div>
    </section>
  )
}

export default LifeAtAltumind