import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";


const StrategicPartnerships = () => {
    const apiUrl = `/api/service-landing-partners?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["strategicPartnerships", location.pathname],
    apiUrl
  );
  const strategicPartnershipsData = data?.data?.data || [];
  console.log(strategicPartnershipsData, 'strategicPartnershipsData')

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
    <div className="px-10 sm:px-14 md:px-18 lg:px-24 py-20 bg-gradient-to-br from-[#000731] via-[#002EB9] to-[#09D7FE] flex flex-col gap-10 md:flex-row items-center">
        <div className="basis-[50%] lg:basis-[40%]">
        <p className="text-white text-xl sm:text-2xl md:text3xl lg:text-4xl lg:max-w-[80%] font-semibold">{strategicPartnershipsData[0]?.attributes?.title}</p>
        </div>
        <div className="basis-[50%] lg:basis-[60%]">
          <div className="mx-auto flex overflow-hidden justify-center flex-wrap gap-8 w-[85%]">
          {strategicPartnershipsData[0]?.attributes?.images?.data?.map((img) => (
           
            <img key={img?.id} className="object-contain" src={img?.attributes?.url} alt={img?.attributes?.alternativeText}/>
          
          ))}
        </div>
        </div>
    </div>
  )
}

export default StrategicPartnerships