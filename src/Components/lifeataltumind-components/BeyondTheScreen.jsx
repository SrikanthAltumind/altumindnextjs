import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

const BeyondTheScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const imageData = data?.images?.data || []
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/life-at-beyond?populate=*`;
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
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

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
    <section className=" md:w-[90%] bg-[#F3F9FF] dark:bg-[#25282c] dark:text-white mx-auto font-raleway">
      <div className="px-5 py-5 flex lg:flex-row flex-col gap-7 justify-center items-center lg:items-start">
        <div className="lg:hidden space-y-1 text-center">
          <p className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            {data?.title}
          </p>
          <p className="md:text-lg dark:text-white text-black font-semibold">
            {data?.heading}
          </p>
        </div>
        <div className="w-full max-w-[450px] xl:max-w-[550px] mx-auto">
          <Slider
            className="w-[95%] mx-auto"
            arrows={false}
            asNavFor={nav2}
            // adaptiveHeight
            ref={(slider) => (sliderRef1 = slider)}
          >
            {imageData?.map((item) => (
              <div key={item?.id}>
                <img src={item?.attributes?.url} alt={data?.title} />
              </div>
            ))}
          </Slider>
          <div className="mt-1 sm:mt-3 w-[95%] relative mx-auto">
            <Slider
              className="w-[75%] max-w-[280px]  mx-auto"
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={2}
              swipeToSlide={true}
              arrows={false}
            >
              { [...imageData.slice(1,), imageData[0]]?.map(
                    (item, index) => (
                      <div
                        key={item?.id || index}
                        className="px-[3px]"
                        onClick={() => {
                          sliderRef1.slickGoTo(index + 1);
                        }}
                      >
                        <img
                          src={item?.attributes?.url}
                          alt={data?.title}
                          className="h-16 sm:h-20 w-full object-cover cursor-pointer"
                        />
                      </div>
                    )
                  )
                }
            </Slider>
            <svg
              onClick={() => sliderRef1.slickPrev()}
              className="absolute bottom-[calc(50%-15px)] sm:bottom-[calc(50%-20px)] left-0 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer p-1 rounded-full 
            bg-secondary  border border-secondary text-white"
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
            <svg
              onClick={() => sliderRef1.slickNext()}
              className="absolute bottom-[calc(50%-15px)] sm:bottom-[calc(50%-20px)] right-0 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer p-1 rounded-full
             bg-secondary  border border-secondary text-white"
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
        <div className="basis-[50%]">
          <div className="hidden lg:block space-y-3 mb-10">
            <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
              {data?.title}
            </p>
            <p className="text-lg md:text-xl dark:text-white text-black font-semibold">
              {data?.heading}
            </p>
          </div>
          <div>
            <p className="leading-8 xl:leading-10 text-sm md:text-base font-medium text-center lg:text-left">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheScreen;
