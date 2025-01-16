import banner from '../../assets/Agiliti-banner.svg'

const IndustryBanner = () => {
  return (
    // <div>
    // <div className='bg-LightBlue min-h-[300px]  font-raleway flex justify-center items-center'>
    //     {/* <img className='h-[250px] md:h-auto' src={banner} alt='Industries' /> */}
    //     <div className='text-center  w-[90%] md:max-w-[450px] space-y-3'>
    //         <p className='custom-gradient-text'>Industries We Empower</p>
    //         {/* <p className='font-montserrat text-sm md:text-base'>We Empower Industries with Scalable, Secure, and User-Focused Solutions</p> */}
    //         <p className='font-montserrat text-sm md:text-base'>Driving Industry Growth with Secure, Scalable, and User-Centric Innovations.</p>
          //   <a href="/contact" className="group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center mx-auto gap-1">
          //   Get Started
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
    //     </div>
    // </div>
    // </div>
    <div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse justify-between  gap-y-5 items-center font-raleway px-4 md:px-10 lg:px-28'>
      
    <div className="max-md:px-5 space-y-3">
   <p className=' custom-gradient-text mx-0  py-2'>
   Industries We Empower
   </p>
   <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'>Driving Industry Growth with Secure, Scalable, and User-Centric Innovations.</p>
   <a href="/contact" className="group mt-8 w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1">
            Get Started
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
     <img className="lg:h-[260px] h-[230px] mx-auto" src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Industries_9987cd92ec.svg" alt="Modern glass building with tall pillars, large windows reflecting sunlight, creating a warm glow on the right, and stone tile paving." />
   </div>
 </div>
  )
}

export default IndustryBanner