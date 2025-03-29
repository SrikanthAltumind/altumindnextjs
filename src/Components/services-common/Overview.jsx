import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useLocation } from "react-router-dom";
import TextImage from "../common-components/TextImage";
import Markdown from "react-markdown";

const Overview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  let apiUrl;

  if (location.pathname === "/services/experience-design-services")
    apiUrl = "api/service-exp-design-overview?populate=*";
  else if (location.pathname === "/services/ai-services")
    apiUrl = "api/service-ai-auto-overview?populate=*";
  else if (location.pathname === "/services/quality-assurance-services")
    apiUrl = "api/service-qa-testing-overview?populate=*";
  else if (location.pathname === "/services/digital-marketing-services")
    apiUrl = "api/service-digital-marketing-overview?populate=*";
  else if (location.pathname === "/services/digital-development-services")
    apiUrl = "api/service-tech-engg-overview?populate=*";
  else if (location.pathname === "/services/data-analytics-services")
    apiUrl = "api/service-data-analytics-overview?populate=*";
  else if (location.pathname === "/services/operations-managed-services")
    apiUrl = "api/service-managed-operation-overview?populate=*";
  else if (location.pathname === "/services")
    apiUrl = "api/service-root-track-record?populate=*";
  else if (location.pathname === "/services/digital-strategy-services")
    apiUrl = "api/service-digital-strategy-consulting-overview?populate=*";
  else if (location.pathname === "/services/cloud-strategy-engineering-services")
    apiUrl = "api/service-cloud-overview?populate=*";
  else if (location.pathname === "/about/about-altumind/mission-and-vision")
    apiUrl = "api/our-mission-and-vision-future?populate=*";
  else if (location.pathname === "/about/about-altumind/leadership")
    apiUrl = "api/leadership-force?populate=*";
  else if (location.pathname === "/about")
    apiUrl = "api/about-us-core?populate=*";
  else if (location.pathname === "/services/experience-design/ui-design")
    apiUrl = "api/service-exp-design-ui-overview?populate=*";

  const fetchData = () => {
    const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data?.attributes);
        console.log('overview', data)
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
    <div className="w-[90%]  dark:text-white mx-auto font-raleway">
      <div className="max-w-[1100px] mx-auto">
        <div className="lg:hidden text-center space-y-3 mb-10">
          <p className="custom-sub-heading">
            {data?.title}
          </p>
          <p className="custom-gradient-text">
            {data?.heading}
          </p>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-5 items-center lg:justify-between">
          <div className="basis-[60%]">
            <div className="hidden lg:block space-y-3 mb-5">
              <p className="custom-sub-heading">{data?.title}</p>
              <p className="custom-gradient-text lg:mx-0">
                {data?.heading}
              </p>
            </div>
            <p className="leading-7 text-sm sm:text-base lg:text-left text-center dark:font-normal font-medium">
            <Markdown
            // components={customRenderers}
            className="markdown"
          >
            {data?.description}
          </Markdown>
              {/* {data?.description} */}
            </p>
          </div>
          <div className="basis-[35%]">
            <img
              src={data?.image?.data?.attributes?.url}
              alt={data?.title}
              className="ml-auto"
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
