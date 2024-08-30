import React, { useContext, useEffect, useRef, useState } from 'react'
import altumindLight from '../../assets/Altumind logo-01.webp'
import altumindDark from '../../assets/AltumindDark.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import { ThemeContext } from '../../Layouts/AppLayout';
import LoaderSpinner from '../common-components/LoaderSpinner';

const OurTeamSpeaks = () => {
    const {theme} = useContext(ThemeContext)
    let desktopSliderRef = useRef(null);
    let mobileSliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const slidesCount = window.innerWidth>=1024 ? Math.ceil(data?.length/4) : data?.length
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }api/life-at-team-speaks?populate=*`;
    axios
      .get(url)
      .then((response) => {
        setData(response?.data?.data);
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


  //123456
  // id 615432
  //123456
  return (
    <div className='bg-gray-3 w-full dark:text-white font-raleway'>
        <div className='text-center mb-5'>
            <p className='bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue  font-extrabold text-3xl xl:text-4xl w-fit mx-auto'>
                 <span className='text-transparent '>Our Team Speaks</span>
            </p>
            <p className='font-semibold py-3'>Minds Behind Magic</p>
        </div>
            <Slider ref={(slider) => {desktopSliderRef = slider;}} {...settings} 
                className='hidden lg:block max-w-[1200px] w-[99%] mx-auto'>
            {[...Array(slidesCount)].map((_,index)=>
            <React.Fragment key={index}>
            <div  className='w-full flex flex-col mx-auto'>
              {[data[data.length-1], ...data.slice(1, data?.length-1), data[0]].slice(index*4, (index+1)*4).map((card)=>
                <div key={card.id} className='w-[48%] even:self-end even:-mt-[270px] p-7 m-1 shadow-custom-shadow bg-white dark:bg-[#25282c] flex flex-col gap-8'>
                <img className='w-[120px]' src={theme==='light' ? altumindLight : altumindDark} alt="altumind_logo"/>
                <p className='text-sm tracking-wider text-tertiary dark:text-white dark:font-light'>{card?.attributes?.testimony}</p>
                <div className='flex items-center  text-sm md:text-base gap-8 md:gap-10'>
                    <img className='w-20 h-20 object-cover shrink-0 md:w-24 md:h-24 bg-gray-200' src={card?.attributes?.empImage?.data?.attributes?.url} alt="employee_img"/>
                    <p className='font-montserrat text-secondary font-semibold'>
                        {card?.attributes?.employeeName} {" "}
                        <span className='text-[#5E5E5E] dark:text-[#9C9C9C] font-medium'>/ {card?.attributes?.designation}</span></p>
                </div>
                </div>
                 )}
            </div>
            </React.Fragment> 
            )}
            </Slider>
            <Slider ref={(slider) => {mobileSliderRef = slider;}} {...settings} 
              className='block lg:hidden' >
              {[data[data.length-1], ...data.slice(1, data?.length-1), data[0]]?.map(card=> (
                <React.Fragment key={card?.id}>
                <div  className='max-w-[600px] mx-auto p-7 m-1 shadow-custom-shadow bg-white dark:bg-[#25282c] flex flex-col gap-8'>
                <img className='w-[120px]' src={theme==='light' ? altumindLight : altumindDark} alt="altumind_logo"/>
                <p className='text-sm tracking-wider text-tertiary dark:text-white dark:font-light'>{card?.attributes?.testimony}</p>
                <div className='flex items-center  text-sm md:text-base gap-8 md:gap-10'>
                    <img className='w-20 h-20 object-cover shrink-0 md:w-24 md:h-24 bg-gray-200' src={card?.attributes?.empImage?.data?.attributes?.url} alt="employee_img"/>
                    <p className='font-montserrat text-secondary font-semibold'>
                       {card?.attributes?.employeeName} {" "}
                        <span className='text-[#5E5E5E] dark:text-[#9C9C9C] font-medium'>/ {card?.attributes?.designation}</span></p>
                </div>
                </div>
                </React.Fragment>
              ))}
            </Slider>
    <div className="flex items-center justify-center  gap-4 lg:mr-5 pt-5">
        <svg
          onClick={() => slidesCount<data?.length ? desktopSliderRef.slickPrev() : mobileSliderRef.slickPrev()}
          className={`${
            currentIndex === 0
              ? "bg-white dark:bg-transparent dark:border-white dark:text-white border border-black text-black w-10 h-10 cursor-pointer p-1 rounded-full"
              : "bg-secondary  border border-secondary text-white w-10 h-10 cursor-pointer p-1 rounded-full"
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

        <p className="font-semibold dark:text-white font-montserrat">
          {currentIndex + 1} / {slidesCount}
        </p>

        <svg
          onClick={() => slidesCount<data?.length ? desktopSliderRef.slickNext() : mobileSliderRef.slickNext()}
          className={`${
            currentIndex === data?.length - 1 || (window.innerWidth>=1024 && currentIndex+1 === slidesCount)
              ? "bg-white border dark:bg-transparent dark:border-white dark:text-white border-black text-black w-10 h-10 cursor-pointer p-1 rounded-full"
              : "bg-secondary  border border-secondary text-white w-10 h-10 cursor-pointer p-1 rounded-full"
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
  )
}

export default OurTeamSpeaks
