import { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderSpinner from '../common-components/LoaderSpinner';
 
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
    <section className="mx-auto w-[90%] max-w-[950px] font-raleway">
         <div className="  text-center dark:text-white mb-16">
            <p className="w-fit mx-auto font-extrabold text-2xl lg:text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
              Leadership Voices
            </p>
            <p className='font-semibold'>Planting the Seeds of Innovation and Growth</p>
         </div>
         <div className="flex flex-col md:flex-row gap-x-36 gap-y-10 z-10 justify-center items-center text-center">
        
          {
            data?.map((item) => (
              <div  key={item?.id} className='h-[400px] flex items-end'>
              <div className="bg-[#F3F9FF] relative  rounded-xl w-[300px] pt-14 py-7 px-12 shadow-custom-shadow space-y-7">
                  <img className="rounded-2xl absolute mx-auto left-[75px] -top-24" src={item?.attributes?.image?.data?.attributes?.url} alt={item?.attributes?.name} height={150} width={150} />
                  <p className="font-medium text-[15px] leading-relaxed">{item?.attributes?.message}</p>
                  <div className="font-montserrat font-semibold">
                      <p className="text-secondary ">{item?.attributes?.name}</p>
                      <p className="text-xs">{item?.attributes?.designation}</p>
                  </div>
              </div>
              </div>
            ))
          }         
         </div>
    </section>
  )
}

export default LeadershipVoices