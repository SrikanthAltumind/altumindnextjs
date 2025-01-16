import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";

const TechStack = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation()
    let apiUrl;

    if (location.pathname === "/services/experience-design")
      apiUrl = "api/service-exp-design-tech-stack?populate=*";
    // else if(location.pathname === '/ai-automation')
    //     apiUrl = 'api/industry-bfsi-sol-partners?populate=*'
    else if (location.pathname === "/services/quality-assurance")
      apiUrl = "api/service-qa-testing-stack?populate=*";
    else if (location.pathname === "/services/digital-marketing")
      apiUrl = "api/service-digital-marketing-stack?populate=*";
    else if (location.pathname === "/services/technology-and-engineering")
      apiUrl = "api/service-tech-engg-stack?populate=*";
    else if (location.pathname === "/services/data-analytics")
      apiUrl = "api/service-data-analytics-stack?populate=*";
    else if (location.pathname === "/services/managed-operations")
      apiUrl = "api/service-data-analytics-stack?populate=*";

    const fetchData = () => {
        const url = `${
            import.meta.env.VITE_APP_API_URL
          }${apiUrl}`;
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
    <div className="dark:text-white w-[90%] p-5 mx-auto font-raleway ">  
       <div className="max-w-[950px] mx-auto">
      <div className='text-center space-y-3 mb-10'>
      <p className='custom-sub-heading'>{data?.title}</p>
            <p className=' custom-gradient-text'>{data?.heading}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 gap-x-14 mx-auto max-w-[850px]">
                {
                    data?.images?.data?.map((item) => (
                        <div key={item?.id}>
                            <img src={item?.attributes?.url} alt={item?.attributes?.name} className="max-w-[200px]" />
                        </div>
                    ))
                }
            </div>
       

        </div>
    </div>
  )
}

export default TechStack