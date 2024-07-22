import React from 'react'
import { motion } from "framer-motion";


const Card = ({ content }) => {
  return (
    <div
      key={content?.id}
      className={`w-[200px] rounded-md h-[320px] p-2 cursor-pointer bg-[red] transform transition-transform hover:scale-105 mx-3 flex-shrink-0`}
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
    <motion.div
      className="flex w-[200%] animate-marquee gap-1 "
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 40,
      }}
    >
      {scrollData.concat(scrollData)?.map((src, index) => (
        <Card content={src} key={index + "test"} />
      ))}
    </motion.div>
  );
};

export default ScrollingCards