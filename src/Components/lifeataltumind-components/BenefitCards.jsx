import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import Marquee from "react-fast-marquee";
import { gradientStyle } from "../../ReactFunctions";

const BenefitCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL}api/life-at-benifits?populate=*`;
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
    <div className="w-full flex flex-col gap-2 items-center justify-center font-raleway">
      <div className="space-y-3">
      <p className="custom-gradient-text">
        Benefits
      </p>
      <p className="custom-sub-heading">The Altumind Difference</p>
      </div>

      <div className="overflow-hidden w-full relative min-h-fit py-3 mt-2">
        <Marquee className="py-4">
          {data?.concat(data)?.map((content) => (
            <div
              key={content?.id}
              className={`w-[210px] md:w-[230px] rounded-md h-[320px] p-3 mx-3 font-raleway hover:scale-105 duration-150 transition-all flex flex-col justify-start items-center gap-6 cursor-pointer`}
              style={{
                backgroundColor: content?.attributes?.hexvalue,
              }}
            >
              <div className="w-full">
                <img
                  src={content?.attributes?.icon?.data?.attributes?.url}
                          alt={content?.attributes?.title}
                          className="w-[52px] h-[52px] object-contain"
                />
              </div>
              <div className="w-full mt-4">
                <p
                  className={`font-medium text-left`}
                  style={{ color: content?.attributes?.textClr }}
                >
                  {content?.attributes?.title}
                </p>
              </div>

              {content?.attributes?.description && (
                <p
                  className={`text-sm`}
                  style={{ color: content?.attributes?.textClr }}
                >
                  {content?.attributes?.description}
                </p>
              )}

              {content?.attributes?.image?.data?.attributes?.url && (
                <img
                  src={content?.attributes?.image?.data?.attributes?.url}
                  alt={content?.attributes?.title}
                  className="w-[170px] h-[160px] object-contain"
                  height="100%"
                  width="100%"
                />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BenefitCards;
