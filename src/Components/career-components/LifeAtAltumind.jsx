import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

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
        </div>
    </section>
  )
}

export default LifeAtAltumind