import React from 'react'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";



const Card = ({ content }) => {
  return (
    <div
      key={content?.id}
      className={`w-[200px] rounded-md h-[320px] p-2 mx-3`}
      style={{
        backgroundColor: content?.attributes?.hexvalue,
      }}
    >
      <p className={`${content?.attributes?.textColor ?? "text-white"}`}>
        {content?.attributes?.title}
      </p>
      {/* <img
              src={item.image}
              alt={item.title}
              className="w-[110px] h-[60px] object-contain"
              height="100%"
              width="100%"
            /> */}
    </div>
  );
};

const ScrollingCards = ({scrollData}) => {
  return (
    <div className="">
      <Marquee>
        {scrollData?.map((src, index) => (
          <Card content={src} key={index + "test"} />
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingCards