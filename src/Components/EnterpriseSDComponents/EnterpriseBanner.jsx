import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";

const EnterpriseBanner = ({onScrollToClientSuccess, onPopupTrigger}) => {
  const apiUrl = `/api/service-landing?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["enterpriseBanner", location.pathname],
    apiUrl
  );
  const BannerData = data?.data?.data || [];
  const trustedBusinessesLogos = BannerData?.attributes?.images?.data || [];

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
    <div className="bg-[#1C1C1C] text-white py-10 space-y-14">
      <div className="flex-col gap-10 md:flex-row flex items-center">
        <div className="basis-[50%] lg:basis-[40%] space-y-3 lg:space-y-8 pl-8 lg:pl-16">
          <p className="text-2xl lg:text-4xl font-bold max-md:max-w-[80%]">
            {BannerData?.attributes?.title}
          </p>
          <p className="font-montserrat text-sm lg:text-base font-light capitalize max-w-[85%]">
            {BannerData?.attributes?.description}
          </p>
          <div className="flex max-[400px]:flex-col flex-row text-xs lg:text-sm font-raleway gap-5 justify-start items-start">
            <button onClick={onScrollToClientSuccess}  className="border py-2 px-4  rounded-full">
              {BannerData?.attributes?.CTA}
            </button>
            <button onClick={onPopupTrigger} className="border font-medium text-black rounded-full bg-white py-2 px-4">
              {BannerData?.attributes?.CTAtwo}
            </button>
          </div>
        </div>
        <div className="basis-[50%] lg:basis-[60%] max-lg:max-w-[750px] ">
          <div className="flex justify-center md:justify-end w-full">
            <img
              className="max-md:max-w-[550px] lg:max-w-[700px] max-md:rounded-r-3xl max-md:w-[90%]"
              src={BannerData?.attributes?.image?.data?.attributes?.url}
              alt={
                BannerData?.attributes?.image?.data?.attributes?.alternativeText
              }
            />
          </div>
        </div>
      </div>
      <div className="space-y-10 w-[90%] mx-auto">
        <p className="text-center capitalize font-semibold">
          {BannerData?.attributes?.titletwo}
        </p>
        <div className="flex flex-wrap justify-evenly items-center gap-10">
          {trustedBusinessesLogos?.map((item) => (
            <div key={item?.id}>
              <img
                src={item?.attributes?.url}
                alt={item?.attributes?.alternativeText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseBanner;
