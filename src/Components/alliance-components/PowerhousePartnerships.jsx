import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

const PowerhousePartnerships = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = () => {
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }api/alliance-partnerships?populate=*`;
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
   <section className="w-[90%] mx-auto dark:text-white space-y-10">
    <div className="text-center space-y-3 font-raleway">
        
        <p className='custom-sub-heading'>Explore Our Partner Ecosystem</p>
        <p className='custom-gradient-text'>Powerhouse Partnerships</p>
    </div>
    <div className="flex flex-col gap-10 justify-center">
        {
            data?.map((item, index) => (
                <div key={index} className="p-10 shadow-custom-shadow dark:bg-[#24272c] max-w-[600px] mx-auto">
                    <div className="text-center space-y-5">
                    <p className="font-raleway font-semibold text-2xl">{item?.attributes?.title}</p>
                    <p className="font-montserrat text-sm leading-6">{item?.attributes?.description}</p>
                    </div>
                    <div className={`${item?.attributes?.images?.data?.length <=2 ? 'flex-col flex gap-10' :''}flex flex-wrap gap-10 mt-10 justify-center items-center`}>
                        {
                            item?.attributes?.images?.data.map((image) => (
                                <img src={image?.attributes?.url} key={image?.id} alt={item.attributes?.title} className="object-cover mx-auto w-[200px]" />
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
   </section>
  )
}

export default PowerhousePartnerships