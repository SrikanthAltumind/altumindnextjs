import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

const CollaboraionBlueprint = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = () => {
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }api/alliance-collaborations`;
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
    <section className="mx-auto lg:w-[97%] w-[90%] max-w-[1100px] dark:text-white font-raleway space-y-10">
        <div className="text-center space-y-3">
            <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Collaboration Blueprint</p>
            <p className="text-sm md:text-base dark:text-white text-black font-semibold">Our Approach to Successful Alliances</p>
        </div>
        <div className="flex sm:flex-row justify-center flex-wrap lg:flex-nowrap max-lg:max-w-[750px] mx-auto flex-col gap-x-[10px] gap-y-5">
            {
                data?.map((item) => (
                    <div key={item?.id}  className={`p-5 w-[250px]  h-[300px] space-y-3 mx-auto rounded-xl`} style={{ backgroundColor: item?.attributes?.hexvalue, color: item?.attributes?.textClr }}>
                        <p className="text-xl font-bold">{item?.attributes?.title}</p>
                        <p className="text-sm leading-[22px] font-montserrat">{item?.attributes?.description}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default CollaboraionBlueprint