import { Link } from "react-router-dom";

const CareersBanner = () => {
  return (
    // <div className="bg-[#F3F9FF] min-h-[280px] flex justify-center items-center text-center font-raleway px-2">
    //   {/* <p className=" custom-gradient-text py-2  max-w-[460px]">
    //     Where Your Uniqueness <br/> Fuels Our Innovative Spirit
    //   </p> */}
    //   <div className="space-y-3 md:max-w-[400px]">
    //    <p className=" custom-gradient-text">
    //    Join Altumind
    //   </p>
    //   <p>Help us build a future where technology empowers humanity and drives sustainable change!</p>
      // <a href="/career/open-roles" className="group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center mx-auto gap-1">
      //       Check Open Positions
      //       <svg
      //         className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
      //         aria-hidden="true"
      //         xmlns="http://www.w3.org/2000/svg"
      //         width="24"
      //         height="24"
      //         fill="none"
      //         viewBox="0 0 24 24"
      //       >
      //         <path
      //           stroke="currentColor"
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           strokeWidth="2"
      //           d="M19 12H5m14 0-4 4m4-4-4-4"
      //         />
      //       </svg>
      //     </a>
    //   </div>
    // </div>
    <div className='bg-LightBlue md:h-[300px] max-md:py-10 flex md:flex-row flex-col-reverse justify-between items-center font-raleway px-4 gap-y-10 md:px-10 lg:px-28'>
      
       <div className="max-md:px-5 space-y-3">
      <p className=' custom-gradient-text mx-0  py-2'>
      Join Altumind
      </p>
      <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'>Help us build a future where technology empowers humanity and drives sustainable change!</p>
      <a href="/career/open-roles" className="group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center  gap-1">
            Check Open Positions
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
        <img className="lg:h-[260px] h-[230px] mx-auto" src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Careers_848045cb75.svg" alt="Illustration of a desk with a 'We are hiring!' computer screen, a red 'Vacant' office chair, and an orange background with subtle decor." />
      </div>
    </div>
  );
}

export default CareersBanner