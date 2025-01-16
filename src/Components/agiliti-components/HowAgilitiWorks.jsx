import { useEffect, useRef, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";
import Markdown from "react-markdown";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HowAgilitiWorks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [hoveredItemId, setHoveredItemId] = useState(0);

  let sliderRef = useRef()

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/agiliti-root-works?populate=*`;
    axios
      .get(url)
      .then((res) => {
        setData(res?.data?.data);
        console.log('how works', res?.data)
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
  },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    beforeChange: (current, next) => {
      setHoveredItemId(next)
    }
  };
 
  if (loading) {
    return <LoaderSpinner/>;
  }
 
  if (error) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
      </div>
    );
  }
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto">
        <div className="flex sm:flex-row flex-col gap-10 items-center">
            <div className="sm:basis-[45%] flex flex-col justify-center items-center space-y-10">
              {
                data?.map((item ,index) => {
                  const isHovered = hoveredItemId === index
                  const backgroundColor = isHovered
                    ? `#${item?.attributes?.secondClr}` 
                    : `#${item?.attributes?.firstClr}`; 
                    return(
                  <div onClick={() => sliderRef.slickGoTo(index)} key={item?.id} className="relative cursor-pointer flex gap-3 py-2 w-[90%] items-center shadow-custom-shadow px-5"
                  // onMouseEnter={() => setHoveredItemId(item?.id)} 
                  // onMouseLeave={() => setHoveredItemId(null)}
                  >
                    <div className="h-full px-[6px] absolute left-0" style={{backgroundColor}}></div>
                    {/* <svg className={`absolute -right-20 w-32 h-[160px] ${`text-[${'#'+backgroundColor}]`}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill={backgroundColor} viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
                    </svg> */}

                    {/* <svg className={`absolute -left-10  w-28 h-[140px] text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
                    </svg> */}

                    <img className={`h-[65px] w-[65px] ml-5 py-2 filter  ${hoveredItemId !== index ? 'opacity-50' :'opacity-100'}`} src={item?.attributes?.icon?.data?.attributes?.url} alt={item?.title} />
                    <h3 className={`text-2xl py-2 ${hoveredItemId !== index ? 'text-gray-400' :''}`}>{item?.attributes?.title}</h3>
                  </div>
                )})
              }
            </div>
            <div className="sm:basis-[45%] w-full sm:max-w-[45%]">
              <Slider  ref={(slider) => (sliderRef = slider)} className="w-full" {...settings}>
                {
                  data.map((item) => (
                    <div key={item?.id} className="p-5">
                      <Markdown className="markdown">{item?.attributes?.descriptionOne}</Markdown>
                      <Markdown className="markdown">{item?.attributes?.descriptionTwo}</Markdown>
                    </div>
                  ))
                }
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default HowAgilitiWorks