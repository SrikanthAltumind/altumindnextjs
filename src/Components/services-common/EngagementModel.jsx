import axios from "axios";
import  { useEffect, useState } from "react";

const modelData = [
  {
    id: 1,
    title: "Fixed Bid:",
    description:
      "Predictable costs for well-defined projects Clear scope, fixed budget, and peace of mind.",
  },
  {
    id: 2,
    title: "Time & Material:",
    description:
      "Flexible pricing for evolving needs Adapt as your project grows and changes.",
  },
  {
    id: 3,
    title: "Dedicated Team:",
    description:
      "On-demand trained team at your fingertips Efficient, scalable support for ongoing development.",
  },
  {
    id: 4,
    title: "Build, Operate & Transfer:",
    description:
      "End-to-end solution management We build it, run it, then hand it over seamlessly.",
  },
  {
    id: 5,
    title: "Hybrid:",
    description:
      "Customized engagement tailored just for you Mix and match models to fit your unique requirements.",
  },
];

const EngagementModel = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/service-root-our-engagement?populate=*`
      )
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
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
      </div>
    );
  }

  return (
    <div className="w-[90%] max-w-[1000px] mx-auto  dark:text-white">
      <div className="text-center font-raleway space-y-2 mb-12">
        <p className="font-semibold">{data?.title}</p>
        <p className="font-extrabold w-fit mx-auto text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
          {data?.heading}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-y-5">
        <div className="basis-[45%] flex flex-col items-center space-y-5">
          <div className="">
            <img src={data?.image?.data?.attributes?.url} alt="img" />
          </div>
          <p className="text-[13px] sm:text-sm text-center font-medium dark:font-light font-montserrat">
            {data?.description}
          </p>
        </div>
        <div className="basis-[45%] font-montserrat">
          {modelData?.map((model) => (
            <div key={model.id} className="text-[13px] sm:text-sm mb-6">
              <p className="font-bold mb-1">{model.title}</p>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementModel;
