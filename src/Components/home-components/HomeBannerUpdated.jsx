import React, { useEffect, useState } from 'react'
import flyingRocket from "../../assets/rocket_home_img.png";


const HomeBannerUpdated = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3; // Update based on the number of slides you have
    const autoSlideInterval = 4000;// Update based on the number of slides you have

  // Handler for next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handler for previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Handler for going to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
    };
    

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);

      // Cleanup interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);


  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slides */}
        {[1, 2, 3]?.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out absolute inset-0`}
            data-carousel-item
          >
            <img
              src={flyingRocket}
              className="w-[120px] object-contain"
              alt={`Slide ${slide}`}
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HomeBannerUpdated