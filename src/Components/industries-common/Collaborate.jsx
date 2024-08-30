import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const industries = {
  BFSIAndFinance: {
    heading: "Collaborating for Digital Finance Success",
    caption: "Next-Gen Fintech Solutions ",
  },
  DigitalCommerce: {
    heading: "Dominate the Digital Commerce Landscape ",
    caption:
      "Next Gen Digital Commerce Solutions ",
  },
  Healthcare: {
    heading: "Collaborating for Digital Finance Success",
    caption: "Next-Gen Fintech Solutions ",
  },
  GreenAndSustainability: {
    heading:
      "Tech Revolutionaries for a Greener Future ",
      caption:
      "Advanced Green Tech Solutions",
  },
  EDtech: {
    heading: "Collaborating for Digital Finance Success",
    caption: "Next-Gen Fintech Solutions ",
  },
  Internet: {
    heading: "Collaborating for Digital Finance Success",
    caption: "Next-Gen Fintech Solutions ",
  },
}


const Collaborate = () => {
  const [data, setData] = useState("");
  const location = useLocation();
 
  useEffect(() => {
   
    if (location.pathname === "/industries/bfsi-fintech") {
      setData(industries.BFSIAndFinance);
    }
    else if (location.pathname === "/industries/digital-commerce") {
      setData(industries.DigitalCommerce);
    }
    else if (location.pathname === "/industries/healthcare") {
      setData(industries.Healthcare);
    }
    else if (location.pathname === "/industries/green-and-sustainability" ) {
       setData(industries.GreenAndSustainability);
    }
    else if (location.pathname === "/industries/ed-tech" ) {
      setData(industries.EDtech);
   }
   else if (location.pathname === "/industries/internet" ) {
    setData(industries.Internet);
   }
   
}, [location.pathname]);
    return (
        <div className='bg-[#EAF1FF]  min-h-[280px] flex flex-col justify-center  relative text-black'>
         <div className='ml-[10%] md:ml-[20%] space-y-7 font-raleway'>
            <h1 className=' font-bold text-2xl max-w-[450px]  lg:text-3xl leading-8'>
           {data?.heading}
          </h1>
          <p className='font-semibold'>{data?.caption}</p>
          <a href = "#" className='group w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1 mt-10'>
                  Let&apos;s Connect
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </a>
         </div>
     
        </div>
      )
}

export default Collaborate