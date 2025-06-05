import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";

const ClientSuccessStories = () => {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-14 h-14 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.7"
          d="M19 12H5m14 0-4 4m4-4-4-4"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-14 h-14 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.7"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
    </div>
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const apiUrl = `api/service-landing-studies?populate=*`;

  const { data, isError, isLoading, error } = useFetchData(
    ["clientSuccessStories", location.pathname],
    apiUrl
  );
  const caseStudyData = data?.data?.data || [];

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error?.message}
      </div>
    );
  }
  return (
    <div className="bg-[#1C1C1C] text-white px-5 sm:px-10 py-20">
      <div>
        <p className="text-4xl font-bold text-center font-raleway">
          Client Success Stories
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {caseStudyData?.map((slide) => (
            <div key={slide?.id} className="py-20">
              <div className="flex md:flex-row flex-col max-md:px-10 max-w-[1000px] mx-auto justify-center items-center gap-10">
                <div className="basis-[50%] lg:basis-[40%] font-raleway">
                  <div className="py-5 space-y-2">
                    <p className="text-xs lg:text-[13px] font-light uppercase">
                      {slide?.attributes?.tag}
                    </p>
                    <p className="text-lg lg:text-xl font-bold">
                      {slide?.attributes?.heading}
                    </p>
                    <p className="text-xs lg:text-[13px] font-light">
                      {slide?.attributes?.subheading}
                    </p>
                  </div>
                  <div className="flex gap-5 py-5 border-t-[1px] font-raleway">
                    <div className="px-3 border-r-[1px]">
                      <p className="text-lg lg:text-xl font-bold">
                        {slide?.attributes?.subheadingone}
                      </p>
                      <p className="text-xs lg:text-[13px]  font-light max-w-[80%]">
                        {slide?.attributes?.subheadingtwo}
                      </p>
                    </div>
                    <div className="px-3">
                      <p className="text-lg lg:text-xl font-bold">
                        {slide?.attributes?.subheadingthree}
                      </p>
                      <p className="text-xs lg:text-[13px]  font-light max-w-[80%]">
                        {slide?.attributes?.subheadingfour}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-start">
                    <button className="border rounded-full px-[16px] lg:px-8 py-[6px] lg:py-3 mt-4 lg:mt-8 font-raleway text-[13px]">
                      {slide?.attributes?.button}
                    </button>
                  </div>
                </div>

                <div className="basis-[50%] lg:basis-[60%]">
                  <img
                    src={slide?.attributes?.image?.data?.attributes?.url}
                    alt={
                      slide?.attributes?.image?.data?.attributes
                        ?.alternativeText
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSuccessStories;
