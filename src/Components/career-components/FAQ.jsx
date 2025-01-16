import { useEffect, useState } from "react";
import { gradientStyle } from "../../ReactFunctions";
import Accordion from "../common-components/Accordion";
import axios from "axios";
import LoaderSpinner from "../common-components/LoaderSpinner";

const FAQ = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        const url = import.meta.env.VITE_APP_API_URL + "api/career-faqs";
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
    <div className="md:w-[80%] mx-auto w-full flex md:flex-row flex-col md:p-8 p-3 gap-4 md:gap-0 font-raleway">
      <div className="md:w-[40%] w-full flex flex-col gap-3 md:items-start justify-start items-center py-4">
        <p className="custom-gradient-text mx-0">
          {"FAQ's"}
        </p>
        <p className="custom-sub-heading ">
          Everything You Want to
          <br />
          Know Before Joining Us
        </p>
      </div>
      <div className="md:w-[60%] w-full flex flex-col gap-4">
        {data?.map((service, index) => {
          return <Accordion content={service} key={index} />;
        })}
      </div>
    </div>
  );
}

export default FAQ;