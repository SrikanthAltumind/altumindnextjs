import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const IndustriesBanners = () => {
  const [data, setData] = useState(null)
  const location = useLocation()
    let apiUrl;

    if (location.pathname === "/industries/bfsi-fintech")
      apiUrl = "api/industry-bfsi?populate=*";
    else if (location.pathname === "/industries/healthcare")
      apiUrl = "api/industry-healthcare?populate=*";
    else if (location.pathname === "/industries/edtech")
      apiUrl = "api/industry-edtech?populate=*";
    else if (location.pathname === "/industries/internet-saas")
      apiUrl = "api/industry-internet?populate=*";
    else if (location.pathname === "/industries/green-sustainability")
      apiUrl = "api/industry-gs-banner?populate=*";
    else if (location.pathname === "/industries/digital-commerce")
      apiUrl = "api/industry-digital-commerce-banner?populate=*";
  
  
 
  const fetchBannerData = ()=> {
    axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
      .then(response=> {
        setData(response?.data?.data?.attributes)
      })
      .catch(error=> {
        console.log('Error fetching Banner data', error)
      })
  }

useEffect(() => {
  fetchBannerData();
}, [location.pathname]);

  return (
    // <div className=" flex  font-raleway justify-center items-center bg-[#F3F9FF] min-h-[280px] text-tertiary w-full">
    //   <div className="text-center space-y-5 md:max-w-[500px] flex flex-col items-center justify-center">
    //     <p className="custom-gradient-text ">
    //       {data?.title}
    //     </p>
    //     <p className="font-montserrat font-medium text-xs md:text-sm ">
    //       {data?.heading}
    //     </p>

        // <a
        //   href="/contact"
        //   className="group w-fit mx-auto font-raleway  text-secondary font-semibold flex justify-center items-center gap-1 mt-10"
        // >
        //   <span className="border-b leading-4 border-secondary">
        //     Consult Our Experts
        //   </span>
        //   <svg
        //     className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
        //     aria-hidden="true"
        //     xmlns="http://www.w3.org/2000/svg"
        //     width="24"
        //     height="24"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //   >
        //     <path
        //       stroke="currentColor"
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       strokeWidth="2"
        //       d="M19 12H5m14 0-4 4m4-4-4-4"
        //     />
        //   </svg>
        // </a>
    //   </div>
    // </div>
    <div className='bg-LightBlue w-full md:h-[300px] max-md:py-10   gap-y-5 flex md:flex-row flex-col-reverse justify-between items-center font-raleway px-4 md:px-10 lg:px-28'>
      
    <div className="max-md:px-5 space-y-5">
   <p className=' custom-gradient-text mx-0 '>
   {data?.title}
   </p>
   <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'> {data?.heading}</p>
   <a
          href="/contact"
          className="group w-fit font-raleway  text-secondary font-semibold flex justify-center items-center gap-1"
        >
          <span className="border-b leading-4 border-secondary">
            Consult Our Experts
          </span>
          <svg
            className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
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
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
   </div>

   <div>
     <img className="lg:h-[260px] h-[230px] mx-auto" src={data?.image?.data?.attributes?.url} alt={data?.image?.data?.attributes?.alternativeText} />
   </div>
 </div>
  );
}

export default IndustriesBanners