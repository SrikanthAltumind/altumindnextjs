import React from 'react'
import { gradientStyle } from '../../ReactFunctions';

const HomeBannerUpdated = () => {
  return (
    <div className="h-fit w-full flex md:flex-row flex-col-reverse bg-[#010408] md:p-8 p-4 font-raleway items-center justify-center ">
      <div className="text-white md:w-[50%] w-full flex flex-col gap-6 p-5 lg:pl-16 relative">
        <p className="font-extrabold md:text-4xl text-3xl">
          <span>Providing Value-centric Solutions in </span>
          <span style={gradientStyle}>Design</span>
        </p>
        <p className="md:text-base text-sm">
          Utilize the strength of digital breakthroughs to reshape your business
          horizon.
        </p>
        <div className="w-full flex justify-center items-center md:justify-start">
          <a
            href="/services"
            className="bg-[#DD5143] rounded-3xl w-[200px] px-4 py-3 lg:h-[50px] font-medium text-white mt-10 text-center"
          >
            Check our Services
          </a>
        </div>
      </div>
      <div className="md:w-[45%] w-full flex justify-center">
        <img
          src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Banner_Image_0b6b650582.webp"
          alt=""
          className="object-contain lg:h-[650px] lg:w-[750px] md:h-[400px] h-[320px] w-[340px] "
        />
      </div>
    </div>
  );
}

export default HomeBannerUpdated