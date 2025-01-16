import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";
import Markdown from "react-markdown";

const CultureAndSynergy = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        const url = `${import.meta.env.VITE_APP_API_URL}/api/agiliti-root-culture?populate=*`;
        axios
          .get(url)
          .then((res) => {
            setData(res?.data?.data?.attributes)
            console.log('culture&synergy', data)
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
    <div className="font-raleway w-[90%] max-w-[1100px] mx-auto space-y-14">
         <div className="md:hidden text-center space-y-3">
                <p className="text-sm font-medium">{data?.heading}</p>
                <h2 className="custom-gradient-text">{data?.title}</h2>
                </div>
        <div className="flex md:flex-row flex-col-reverse gap-10 justify-center items-center">
            <div className="basis-[45%] space-y-3">
                <div className="hidden md:block">
                <p className="text-sm font-medium">{data?.heading}</p>
                <p className="custom-gradient-text ml-0">{data?.title}</p>
                </div>
                <p className="leading-7"><Markdown>{data?.descriptionOne}</Markdown></p>
            </div>
            <div className="basis-[45%]">
                <img className="mx-auto" src={data?.imageOne?.data?.attributes?.url} alt={data?.imageOne?.data?.attributes?.alternativeText} />
            </div>
        </div>
        <div className="md:hidden text-center space-y-3">
                <p className="text-sm font-medium">{data?.headingTwo}</p>
                <p className="custom-gradient-text">{data?.titleTwo}</p>
                </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center">

            <div className="basis-[45%]">
                <img className="mx-auto" src={data?.imageTwo?.data?.attributes?.url} alt={data?.imageTwo?.data?.attributes?.alternativeText} />
            </div>
            <div className="basis-[45%] space-y-3">
                 <div className="hidden md:block">
                <p className="text-sm font-medium">{data?.headingTwo}</p>
                <p className="custom-gradient-text ml-0">{data?.titleTwo}</p>
                </div>
                <p className="leading-7"><Markdown>{data?.descriptionTwo}</Markdown></p>
            </div>
        </div>
    </div>
  )
}

export default CultureAndSynergy