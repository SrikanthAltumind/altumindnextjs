import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";

const EnterpriseWhyAltumind = () => {
  const apiUrl = `/api/service-landing-whies?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["enterpriseWhyAltumind", location.pathname],
    apiUrl
  );
  const whyAltumindData = data?.data?.data || [];

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
    <div className="py-10 px-10">
      <div className="font-raleway text-center space-y-5">
        <p className="text-3xl font-bold">Why Altumind?</p>
        <p className="text-sm font-medium max-w-[780px] mx-auto">
          We empower enterprises through Human-Centric Innovation ensuring every
          solution we deliver is designed around real users, measurable
          outcomes, and long-term business value.
        </p>
      </div>

      <div className="max-w-[1000px] font-raleway mx-auto space-y-5 py-10">
        <div className="flex sm:flex-row max-lg:flex-wrap flex-col gap-5 justify-center items-center">
          {whyAltumindData.slice(0, 3).map((item, index) => (
            <div
              key={item?.id}
              className={`${
                index === 2
                  ? "md:basis-[90%] lg:basis-[40%]"
                  : "md:basis-[44%] lg:basis-[30%]"
              } min-h-[220px] bg-[#F2F6FF] rounded-xl px-4 py-6 space-y-2 font-raleway text-center flex flex-col justify-center items-center`}
            >
              <img
                src={item?.attributes?.icon?.data?.attributes?.url}
                alt="logo"
                className="w-[50px] h-[50px]"
              />
              <p className="text-lg font-semibold">
                {item?.attributes?.title}
              </p>
              <p className="font-medium text-[11px]">
                {item?.attributes?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex sm:flex-row flex-col gap-5 justify-center items-center">
          {whyAltumindData.slice(3, 5).map((item) => (
            <div
              key={item?.id}
              className={`lg:basis-[50%] basis-[44%] bg-[#F2F6FF] min-h-[220px] rounded-xl px-4 py-6 space-y-2 font-raleway text-center flex flex-col justify-center items-center`}
            >
              <img
                src={item?.attributes?.icon?.data?.attributes?.url}
                alt="logo"
                className="w-[50px] h-[50px]"
              />
              <p className="text-lg font-semibold">
                {item?.attributes?.title}
              </p>
              <p className="font-medium text-[11px]">
                {item?.attributes?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseWhyAltumind;
