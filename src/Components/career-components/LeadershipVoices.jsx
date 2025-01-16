import { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderSpinner from '../common-components/LoaderSpinner';
import { gradientStyle } from '../../ReactFunctions';
 
const LeadershipVoices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/career-leadership-contents?populate=*`;
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
    <section className="w-full font-raleway flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-3">
        <p
          className="custom-gradient-text"
       
        >
          Leadership Voices
        </p>
        <p className="custom-sub-heading">
          Planting the Seeds of Innovation and Growth
        </p>
      </div>
      <div className="flex w-full md:gap-20 gap-24 items-center justify-center mt-20 flex-wrap">
        {data?.map((item) => (
          <div
            className="w-[280px] flex flex-col gap-2 py-4 border bg-[#F3F9FF] border-gray-300 rounded-lg dark:bg-gray-900 h-[600px] justify-between"
            key={"leadershiopVoices - " + item?.attributes?.name}
          >
            <div>
              <div className="relative flex justify-center items-center">
                <img
                  className="w-[130px] h-[130px] rounded-md shadow-lg absolute -top-[5rem]"
                  src={item?.attributes?.image?.data?.attributes?.url}
                  alt={item?.attributes?.name}
                />
              </div>
              <div className="flex flex-col gap-3 items-center justify-center mt-20">
                <p className="font-medium text-[15px] leading-relaxed text-center w-[70%] dark:text-white">
                  {item?.attributes?.message}
                </p>
              </div>
            </div>

            <div className="font-montserrat text-center font-semibold">
              <p className="text-secondary ">{item?.attributes?.name}</p>
              <p className="text-xs dark:text-gray-100">
                {item?.attributes?.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeadershipVoices

{/* <div
            className="flex md:w-[300px] relative flex-col gap-6 items-center justify-start bg-[#F3F9FF] py-4"
            
          >
            <div className="absolute -top-[140px] rounded-md">
              <img
                className="w-[150px] h-[150px] shadow-md"
                src={item?.attributes?.image?.data?.attributes?.url}
                alt={item?.attributes?.name}
                height="100%"
                width="100%"
              />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="font-medium text-[15px] leading-relaxed text-center w-[70%]">
                {item?.attributes?.message}
              </p>
              <div className="font-montserrat text-center font-semibold">
                <p className="text-secondary ">{item?.attributes?.name}</p>
                <p className="text-xs">{item?.attributes?.designation}</p>
              </div>
            </div>
          </div> */}


{/* <div key={item?.id} className="h-[400px] flex items-end relative">
            <div className="bg-[#F3F9FF] relative  rounded-xl w-[300px] pt-14 py-7 px-12 shadow-custom-shadow space-y-7">
              <img
                className="rounded-2xl absolute mx-auto left-[75px] -top-24"
                src={item?.attributes?.image?.data?.attributes?.url}
                alt={item?.attributes?.name}
                height={150}
                width={150}
              />
              <p className="font-medium text-[15px] leading-relaxed">
                {item?.attributes?.message}
              </p>
              <div className="font-montserrat font-semibold">
                <p className="text-secondary ">{item?.attributes?.name}</p>
                <p className="text-xs">{item?.attributes?.designation}</p>
              </div>
            </div>
          </div> */}