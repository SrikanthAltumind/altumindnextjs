import React from 'react'
import { gradientStyle } from '../../ReactFunctions';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";


const TextImage = ({ data, textRight }) => {

    const customRenderers = {
      ul: ({ children }) => (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {children}
        </ul>
      ),
    };

  return (
    <div className="w-[90%] flex flex-col gap-14 p-3 items-center justify-center font-raleway">
      <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
        <p className="text-xl md:text-3xl lg:text-4xl font-extrabold">
          {data?.title}:
        </p>
        <p
          className="text-xl md:text-3xl lg:text-4xl font-extrabold"
          style={gradientStyle}
        >
          {data?.heading}
        </p>
        {data?.subheading && (
          <p className="font-medium text-sm mt-3 max-w-[600px]">
            {data?.subheading}
          </p>
        )}
      </div>
      <div
        className={`w-full gap-10 items-center justify-evenly flex flex-col md:flex-row lg:text-base md:text-sm text-xs ${
          textRight && "md:flex-row-reverse flex-col"
        }`}
      >
        <div className="md:w-[50%] max-w-[400px] flex flex-col justify-start items-start gap-3 leading-5 md:leading-6 lg:leading-7">
          <Markdown
            components={customRenderers}
          >
            {data?.description}
          </Markdown>
        </div>
        <div className="md:w-[50%] flex justify-center">
          <img
            src={data?.image?.data?.attributes?.url}
            alt=""
            className="md:w-[420px] md:h-[350px] max-h-[550px] object-contain w-full h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextImage



// {data?.description?.split("\n").map((line, index) => (
        //     <p key={index}>{line}</p>
        //   ))}


//  <p className="leading-8 select-none">{data?.description}</p> 
