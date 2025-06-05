import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";

const FutureTechnologies = () => {
  const apiUrl = `/api/service-landing-impacts?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["FutureTechnologies", location.pathname],
    apiUrl
  );
  const futureTechnologiesData = data?.data?.data || [];

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
    <div className="py-20 sm:px-10 px-5">
      <div className="font-raleway text-center space-y-8 max-w-[600px] mx-auto py-10">
        <p className="text-xl md:text-2xl lg:text-4xl font-bold">
          Future-Ready Technologies That Drive Real Impact
        </p>
        <p className="font-light md:text-base text-sm">
          At Altumind, we stay ahead of the curve by adopting the latest
          technologies that help enterprises scale smarter, move faster, and
          innovate continuously.
        </p>
      </div>
      <div className="max-w-[950px] mx-auto">
        <div className="flex flex-col max-sm:items-center sm:flex-row flex-wrap justify-center mx-auto">
          <div className="max-sm:border-0 border-r border-b p-3 border-[#CCCCCC] w-[300px]">
            <div className="hover:bg-[#F2F6FF] hover:scale-105 space-y-3 h-full p-3 rounded-md">
              <img
                className="w-10"
                src={
                  futureTechnologiesData[0]?.attributes?.icon?.data?.attributes
                    ?.url
                }
                alt={
                  futureTechnologiesData[0]?.attributes?.icon?.data?.attributes
                    ?.alternativeText
                }
              />
              <h3 className="text-sm font-medium">
                {futureTechnologiesData[0]?.attributes?.title}
              </h3>
              <p className="text-[13px] font-light">
                {futureTechnologiesData[0]?.attributes?.description}
              </p>
            </div>
          </div>
          <div className="max-sm:border-0 min-[948px]:border-r border-b border-[#CCCCCC] p-3 w-[300px]">
            <div className="hover:bg-[#F2F6FF] hover:scale-105 space-y-3 h-full p-3 rounded-md">
              <img
                className="w-10"
                src={
                  futureTechnologiesData[1]?.attributes?.icon?.data?.attributes
                    ?.url
                }
                alt={
                  futureTechnologiesData[1]?.attributes?.icon?.data?.attributes
                    ?.alternativeText
                }
              />
              <h3 className="text-sm font-medium">
                {futureTechnologiesData[1]?.attributes?.title}
              </h3>
              <p className="text-[13px] font-light">
                {futureTechnologiesData[1]?.attributes?.description}
              </p>
            </div>
          </div>

          <div className="max-sm:border-0 border-r min-[948px]:border-r-0 border-b  border-[#CCCCCC] p-3 w-[300px]">
            <div className="hover:bg-[#F2F6FF] hover:scale-105 space-y-3 h-full p-3 rounded-md">
              <img
                className="w-10"
                src={
                  futureTechnologiesData[2]?.attributes?.icon?.data?.attributes
                    ?.url
                }
                alt={
                  futureTechnologiesData[2]?.attributes?.icon?.data?.attributes
                    ?.alternativeText
                }
              />
              <h3 className="text-sm font-medium">
                {futureTechnologiesData[2]?.attributes?.title}
              </h3>
              <p className="text-[13px] font-light">
                {futureTechnologiesData[2]?.attributes?.description}
              </p>
            </div>
          </div>

          <div className="max-sm:border-0 min-[948px]:border-r sm:max-[948px]:border-b  border-[#CCCCCC] p-3 w-[300px]">
            <div className="hover:bg-[#F2F6FF] hover:scale-105 space-y-3 h-full p-3 rounded-md">
              <img
                className="w-10"
                src={
                  futureTechnologiesData[3]?.attributes?.icon?.data?.attributes
                    ?.url
                }
                alt={
                  futureTechnologiesData[3]?.attributes?.icon?.data?.attributes
                    ?.alternativeText
                }
              />
              <h3 className="text-sm font-medium">
                {futureTechnologiesData[3]?.attributes?.title}
              </h3>
              <p className="text-[13px] font-light">
                {futureTechnologiesData[3]?.attributes?.description}
              </p>
            </div>
          </div>

          <div className="max-sm:border-0 border-r  border-[#CCCCCC] p-3 w-[300px]">
            <div className="hover:bg-[#F2F6FF] hover:scale-105 space-y-3 h-full p-3 rounded-md">
              <img
                className="w-10"
                src={
                  futureTechnologiesData[4]?.attributes?.icon?.data?.attributes
                    ?.url
                }
                alt={
                  futureTechnologiesData[4]?.attributes?.icon?.data?.attributes
                    ?.alternativeText
                }
              />
              <h3 className="text-sm font-medium">
                {futureTechnologiesData[4]?.attributes?.title}
              </h3>
              <p className="text-[13px] font-light">
                {futureTechnologiesData[4]?.attributes?.description}
              </p>
            </div>
          </div>

          <div className="max-sm:border-0  border-[#CCCCCC] p-3 w-[300px]">
            <div className="hover:bg-[#F2F6FF] hover:scale-105 space-y-3 h-full p-3 rounded-md">
              <img
                className="w-10"
                src={
                  futureTechnologiesData[5]?.attributes?.icon?.data?.attributes
                    ?.url
                }
                alt={
                  futureTechnologiesData[5]?.attributes?.icon?.data?.attributes
                    ?.alternativeText
                }
              />
              <h3 className="text-sm font-medium">
                {futureTechnologiesData[5]?.attributes?.title}
              </h3>
              <p className="text-[13px] font-light">
                {futureTechnologiesData[5]?.attributes?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechnologies;
