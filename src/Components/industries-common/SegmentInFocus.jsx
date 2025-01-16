import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const SegmentInFocus = () => {
    const [data, setData] = useState()

    const location = useLocation()
    let apiUrl;

    if (location.pathname === "/industries/bfsi-fintech")
      apiUrl = "api/industry-bfsi-segment-contents?populate=*";
    else if (location.pathname === "/industries/healthcare")
      apiUrl = "api/industry-hc-segment-contents?populate=*";
    else if (location.pathname === "/industries/edtech")
      apiUrl = "api/industry-ed-segement-contents?populate=*";
    else if (location.pathname === "/industries/internet-saas")
      apiUrl = "api/industry-internet-segment-contents?populate=*";
    else if (location.pathname === "/industries/green-sustainability")
      apiUrl = "api/industry-gs-segments?populate=*";
    else if (location.pathname === "/industries/digital-commerce")
      apiUrl = "api/industry-digital-commerce-segments?populate=*";
       
    

    const fetchData = () => {
        const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`
        axios.get(url)
        .then((res) => {
            setData(res?.data?.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
      fetchData();
    }, [location.pathname]);

  return (
    <div className="w-[90%] mx-auto space-y-10 font-raleway">
        <div>
            <p className="custom-gradient-text py-2">Segment in Focus</p>
        </div>
    <div className="flex justify-center items-center gap-10 flex-wrap max-w-[950px] mx-auto">
        {
            data?.map((item) => (
                <div key={item.id} className="h-[275px] w-[275px] shadow-custom-shadow p-3 dark:bg-white rounded-sm">
                    <img src={item?.attributes?.icon?.data?.attributes?.url} />
                    <p className="text-lg font-semibold py-3">{item?.attributes?.title}</p>
                    <p className="text-sm">{item?.attributes?.description}</p>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default SegmentInFocus