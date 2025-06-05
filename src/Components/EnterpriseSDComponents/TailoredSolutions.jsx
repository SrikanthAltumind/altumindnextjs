import bgImage from "../../assets/bg-image.png";
import Marquee from "react-fast-marquee";
import LoaderSpinner from "../common-components/LoaderSpinner";
import useFetchData from "../../CustomHooks/useFetchData";

const TailoredSolutions = () => {
  const apiUrl = `/api/service-landing-whies?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["tailoredSolutions", location.pathname],
    apiUrl
  );
  const tailoredSolutionsData = data?.data?.data || [];

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
    <div
      className="bg-contain min-h-screen bg-no-repeat space-y-32 py-20 bg-left-bottom"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex px-5justify-end  items-end flex-col">
        <div className="max-w-[60%] sm:max-w-[40%] -mt-12 sm:mt-16">
          <p className="md:text-2xl text-xl lg:text-4xl w-full px-2 sm:px-0 lg:max-w-[60%] sm:max-w-[80%] font-semibold">
            Tailored Solutions by Industry
          </p>
          <p className="lg:text-base text-sm lg:max-w-[60%] w-full px-2 sm:px-0 sm:max-w-[80%]">
            We bring deep domain expertise that deliver high-impact enterprise
            software development solutions across sectors.
          </p>
        </div>
      </div>
      <Marquee pauseOnHover={true}>
        <div className="flex text-center gap-5 px-5">
          {tailoredSolutionsData?.map((card) => (
            <div
              className="bg-[#2A3037] text-white font-raleway max-w-[250px] space-y-2 px-4 py-8 rounded-xl text-wite"
              key={card?.id}
            >
              <img
                className="mx-auto invert w-[50px] h-[50px] object-contain"
                src={card?.attributes?.icon?.data?.attributes?.url}
                alt={card?.attributes?.icon?.data?.attributes?.alternativeText}
              />
              <p className="font-semibold text-lg lg:text-xl">
                {card?.attributes?.title}
              </p>
              <p className="font-light text-xs sm:text-sm lg:text-[15px]">
                {card?.attributes?.description}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TailoredSolutions;
