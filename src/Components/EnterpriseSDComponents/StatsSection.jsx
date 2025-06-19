import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";
const StatsSection = () => {
  const apiUrl = `/api/service-landing-platforms?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["enterpriseStats", location.pathname],
    apiUrl
  );
  const enterpriseStatsData = data?.data?.data || [];

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
    <>
      <div className="font-raleway max-sm:px-10 space-y-8 py-20">
        <h2 className="sm:text-3xl text-xl  font-bold text-center max-w-[650px] mx-auto">
          Enterprise Software Development Company Delivering Scalable Business
          Platforms
        </h2>
        <div className="space-y-5 text-center max-w-[600px] mx-auto text-sm">
          <p>
            We specialize in enterprise software development services that
            deliver high-performance, scalable solutions for Fortune 500
            companies, industry leaders, and large-scale enterprises.
          </p>
          <p>
            From bespoke digital transformation and system integration to legacy
            modernization, our seasoned team provides solutions that have helped
            clients reduce operational costs by an average of 28%, unlocking
            long-term value and efficiency.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row  flex-wrap flex-col mb-10 gap-5 max-w-sm:space-y-5 justify-center sm:justify-evenly max-w-[1000px] mx-auto">
        {enterpriseStatsData?.map((item) => (
          <div
            key={item?.id}
            className="flex max-sm:min-w-[320px] mx-auto items-center gap-3"
          >
            <img
              src={item?.attributes?.logo?.data?.attributes?.url}
              className="bg-[#5489FC] w-[80px] h-[80px] shadow-sm rounded-md p-1"
              alt={item?.attributes?.logo?.data?.attributes?.alternativeText}
            />
            <div>
              <p className="sm:text-2xl text-xl font-bold font-montserrat">
                {item?.attributes?.title}
              </p>
              <p className="font-light max-sm:max-w-[80%] font-raleway">
                {item?.attributes?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsSection;
