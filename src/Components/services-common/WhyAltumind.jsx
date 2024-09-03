import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";

const WhyAltumind = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation()
    let apiUrl;

    if (location.pathname === "/services/experience-design")
      apiUrl = "api/service-exp-design-alt-stands?populate=*";
    else if (location.pathname === "/services/ai-and-chat-bot")
      apiUrl = "api/service-ai-auto-stands?populate=*";
    else if (
      location.pathname === "/services/quality-assurance-quality-control"
    )
      apiUrl = "api/service-qa-testing-stands?populate=*";
    else if (location.pathname === "/services/digital-marketing")
      apiUrl = "api/service-digital-marketing-stands?populate=*";
    else if (location.pathname === "/services/technology-and-engineering")
      apiUrl = "api/service-tech-engg-stands?populate=*";
    else if (location.pathname === "/services/data-analytics")
      apiUrl = "api/service-data-analytics-stands?populate=*";
    else if (location.pathname === "/services/managed-operations")
      apiUrl = "api/service-managed-operation-stands?populate=*";
    else if (location.pathname === "/services")
      apiUrl = "api/service-root-why-choose-altuminds?populate=*";
    else if (location.pathname === "/services/digital-strategy-consulting")
      apiUrl = "api/service-digital-strategy-consulting-stands?populate=*";
    else if (location.pathname === "/services/cloud-automation")
      apiUrl = "api/service-cloud-stands?populate=*";
    else if (location.pathname === "/about/about-altumind/leadership")
      apiUrl = "api/leadership-philosophy-contents?populate=*";
    else if (location.pathname === "/about")
      apiUrl = "api/about-us-why-us-contents?populate=*";


    

    const fetchData = () => {
        const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`
        axios.get(url)
        .then((res) => {
            console.log(res);
            setData(res?.data?.data)
            console.log(data, 'fetch')
            setLoading(false);
        })
        .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
    }

    useEffect(() => {
        fetchData();
    },[])

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
    <section id="section1" className="w-[90%] mx-auto font-raleway dark:text-white">
<div className="flex justify-center items-center gap-10 flex-wrap max-w-[950px] mx-auto">
    {
        data?.map((item) => (
            <div key={item.id} className="h-[270px] w-[285px] shadow-custom-shadow dark:bg-[#0A1220] bg-white p-3 dark:shadow-slate-500 rounded-sm">
                <img src={item?.attributes?.icon?.data?.attributes?.url}  className="dark:invert"/>
                <p className="text-lg font-medium py-3">{item?.attributes?.title}</p>
                <p className="text-sm dark:font-light">{item?.attributes?.description}</p>
            </div>
        ))
    }
</div>
</section>
  )
}

export default WhyAltumind