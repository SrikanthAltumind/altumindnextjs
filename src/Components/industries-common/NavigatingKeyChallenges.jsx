import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const NavigatingKeyChallenges = () => {
    const [data, setData] = useState()

    const location = useLocation()
    let apiUrl;

    if (location.pathname === "/industries/bfsi-fintech")
      apiUrl = "api/industry-bfsi-challenge-contents?populate=*";
    else if (location.pathname === "/industries/healthcare")
      apiUrl = "api/industry-hc-challenge-contents?populate=*";
    else if (location.pathname === "/industries/edtech")
      apiUrl = "api/industry-ed-challenge-contents?populate=*";
    else if (location.pathname === "/industries/internet-saas")
      apiUrl = "api/industry-internet-challenge-contents?populate=*";
    else if (location.pathname === "/industries/green-sustainability")
      apiUrl = "api/industry-gs-challenges?populate=*";
    else if (location.pathname === "/industries/digital-commerce")
      apiUrl = "api/industry-digital-commerce-challenges?populate=*";
  

    const fetchData = () => {
        const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`
        axios.get(url)
        .then((res) => {
            setData(res?.data?.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
      fetchData();
    }, [location.pathname]);
  return (
    <section id="section4" className="w-[90%] space-y-10 mx-auto font-raleway">
      <div>
        <p className="custom-gradient-text py-2">
          Navigating Key Challenges
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap max-w-[950px] mx-auto">
        {data?.map((item) => (
          <div
            key={item.id}
            className="h-[270px] w-[250px] shadow-custom-shadow p-3 dark:bg-white rounded-sm"
          >
            <img
              src={item?.attributes?.icon?.data?.attributes?.url}
              height="100%"
              width="100%"
              className="w-[50px] h-[50px] object-contain"
            />
            <p className="text-lg font-medium py-3">
              {item?.attributes?.title}
            </p>
            <p className="text-sm">{item?.attributes?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NavigatingKeyChallenges