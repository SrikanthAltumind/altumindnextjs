import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { useQuery } from "@tanstack/react-query";


const Testimonials = () => {
  let sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const url = `${import.meta.env.VITE_APP_API_URL}api/client-testimonials?populate=*`;
  
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["Testimonials"],
    queryFn: () => {
      return  axios.get(url)
    },
    staleTime: 24 * 60 * 60* 1000
  })

  // const fetchData = () => {
  //   const url = `${
  //     import.meta.env.VITE_APP_API_URL
  //   }api/client-testimonials?populate=*`;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setData(res?.data?.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch data:", err);
  //       setError("Failed to fetch data. Please try again later.");
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error.message}
      </div>
    );
  }

  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
  };
  return (
    <div className="w-[90%] max-w-[950px] font-montserrat mx-auto">
      <Slider
        className=""
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {data?.data?.data?.map((item, index) => {
          return (
            <div key={item?.attributes?.name + index}>
              <div
                className=" dark:text-white mx-auto flex justify-center md:flex-row flex-col gap-x-16 gap-y-10"
                key={item?.attributes?.name + index}
              >
                <div className="relative rounded-full mx-auto h-[250px] md:min-w-[250px] w-[250px]">
                  <img
                    className=" h-full w-full object-cover rounded-full"
                    src={item?.attributes?.image?.data?.attributes?.url}
                    alt={item?.attributes?.name}
                    loading="lazy"
                  />
                  <svg
                    className="absolute bottom-1 right-2 bg-white drop-shadow-md rounded-full w-12 h-12 text-[#E42D38] p-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="flex justify-evenly  md:text-left text-center  gap-y-5 text-monserrat flex-col">
                  <p className="md:w-[85%] dark:font-normal font-medium">
                    {item?.attributes?.description}
                  </p>
                  <div className="md:text-left text-center">
                    <p className="dark:font-medium font-semibold">
                      -{item?.attributes?.name}
                    </p>
                    <p className="text-sm dark:font-light">
                      {item?.attributes?.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex items-center justify-center md:justify-end gap-4 lg:mr-5 pt-5">
        <svg
          onClick={() => sliderRef.slickPrev()}
          className={`${
            currentIndex === 0
              ? "bg-white dark:bg-transparent dark:border-white dark:text-white border border-black text-black w-10 h-10 cursor-pointer p-1 rounded-full"
              : "bg-[#E42D38]  border border-[#E42D38] text-white w-10 h-10 cursor-pointer p-1 rounded-full"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>

        {/* <p className="font-semibold dark:text-white font-montserrat">
          {currentIndex + 1} / {data?.length}
        </p> */}

        <svg
          onClick={() => sliderRef.slickNext()}
          className={`${
            currentIndex === data?.length - 1
              ? "bg-white border dark:bg-transparent dark:border-white dark:text-white border-black text-black w-10 h-10 cursor-pointer p-1 rounded-full"
              : "bg-[#E42D38]  border border-[#E42D38] text-white w-10 h-10 cursor-pointer p-1 rounded-full"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
