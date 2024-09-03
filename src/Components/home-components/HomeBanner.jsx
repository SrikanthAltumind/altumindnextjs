import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flyingRocket from "../../assets/rocket_home_img.png";

const bannerData = [
  {
    id: 1,
    heading1: "Providing Value-centric Solutions in",
    dynamicWords: ["Design", "Development", "Marketing"],
    cta: "Check our Services",
  },
  {
    id: 2,
    heading1: "Integrated",
    heading2: "Digital Transformation",
    description:
      "Utilize the strength of digital breakthroughs to reshape your business horizon.",
    cta: "Check out our work",
  },
];

const HomeBanner = () => {
  const words = bannerData[0].dynamicWords;
  const [word, setWord] = useState(words[0]);
  const [charIndex, setCharIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots move-inside",
    beforeChange: (current, next) => setActiveSlide(next),
  };

  useEffect(() => {
    let wordTimer;
    if (activeSlide === 0) {
      wordTimer = setInterval(() => {
        setWord((word) => {
          const currentWordIndex = words.indexOf(word);
          if (currentWordIndex === words.length - 1) {
            return words[0];
          } else {
            return words[currentWordIndex + 1];
          }
        });
      }, 1500);
    } else {
      clearInterval(wordTimer);
    }

    return () => {
      clearInterval(wordTimer);
    };
  }, [activeSlide]);

  useEffect(() => {
    const charTimer = setInterval(() => {
      setCharIndex((charIndex) => charIndex + 1);
    }, 80);

    return () => {
      setCharIndex(0);
      clearInterval(charTimer);
    };
  }, [word]);

  return (
    <div>
      <Slider
        {...settings}
        className=" dark:text-white bg-LightBlue dark:bg-gradient-to-b from-primary to-darkTheme font-raleway"
      >
        {bannerData.map((item) => (
          <div key={item.id}>
            <div className="min-h-[calc(100vh-40px)] sm:min-h-[calc(100vh-300px)] sm:flex justify-center  md:px-5 max-sm:pt-10">
              <div className="basis-[50%] flex items-center justify-center">
                <img
                  className="max-w-[300px] md:max-w-[500px] lg:max-w-[550px] object-contain"
                  src={flyingRocket}
                  alt="banner_rocket"
                />
              </div>
              <div className="basis-[50%] px-5 md:px-0 lg:pl-10 flex flex-col justify-center items-start gap-2 lg:gap-7 pb-2">
                <div className="text-3xl xl:text-4xl font-extrabold">
                  <p className=" text-primary dark:text-white leading-[1.2] max-w-[500px]">
                    {item.heading1}
                    {item?.dynamicWords && (
                      <span className="border-r-2 border-primary dark:border-white pr-1 custom-gradient-text text-3xl xl:text-4xl">
                        &nbsp;{word.slice(0, charIndex)}
                      </span>
                    )}
                  </p>
                  <p className="py-2 custom-gradient-text text-3xl xl:text-4xl">
                    {item.heading2}
                  </p>
                </div>
                {item?.description ? (
                  <p className="text-sm md:text-base max-w-[400px] font-medium dark:font-light">
                    {item?.description}
                  </p>
                ) : (
                  <p className="text-sm md:text-base max-w-[400px] font-medium dark:font-light">
                    Utilize the strength of digital breakthroughs to reshape
                    your business horizon.
                  </p>
                )}
                <button className=" text-sm bg-secondary py-[10px] px-5 rounded-full text-white font-montserrat max-lg:mt-2">
                  {item.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
