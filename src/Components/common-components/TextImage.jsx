import React from 'react'
import { gradientStyle } from '../../ReactFunctions';

const TextImage = ({ data, textRight }) => {
  return (
    <div className="w-full flex flex-col gap-8 p-3 items-center justify-center font-raleway">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <p className="md:text-3xl text-2xl font-extrabold">{data?.title}:</p>
        <p
          className="md:text-3xl text-2xl font-extrabold"
          style={gradientStyle}
        >
          {data?.heading}
        </p>
      </div>
      <div
        className={`w-[80%] gap-6 items-center flex ${
          textRight && "flex-row-reverse"
        }`}
      >
        <div className="w-[50%] flex flex-col justify-start items-start gap-3">
          {data?.description?.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {/* <p className="leading-8 select-none">{data?.description}</p> */}
        </div>
        <div className="w-[50%] flex justify-center">
          <img
            src={data?.image?.data?.attributes?.url}
            alt=""
            className="md:w-[420px] md:h-[350px] object-contain w-full h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextImage