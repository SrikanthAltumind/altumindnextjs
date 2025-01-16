import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

const RemoteFirstCulture = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        const url = `${
            import.meta.env.VITE_APP_API_URL
          }api/life-at-culture?populate=*`;
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
    <section className="w-[90%]  dark:text-white mx-auto font-raleway">
        <div className='max-w-[1100px] mx-auto'>
        <div className='text-center space-y-3 mb-10'>
            <p className='custom-gradient-text'>{data?.title}</p>
            <p className='custom-sub-heading'>{data?.heading}</p>
        </div>
        <div className='flex lg:flex-row flex-col-reverse gap-5 items-center '>
            <div className='basis-[50%]'>
                <p className='sm:leading-9 leading-6 text-sm sm:text-base lg:text-left text-center font-medium'>{data?.description}</p>
            </div>
            <div className='basis-[50%]'>
                <img src={data?.image?.data?.attributes?.url} alt={data?.title} className='mx-auto' width={400} />
            </div>
        </div>
        </div>
    </section>
  )
}

export default RemoteFirstCulture