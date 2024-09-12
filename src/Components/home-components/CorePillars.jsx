// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const ScrollEffectCards = ({ onAnimationComplete }) => {
//   const containerRef = useRef(null);
//   const controls = useAnimation();
//   const [hasCompletedAnimation, setHasCompletedAnimation] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const cards = [
//     { id: 1, front: 'https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ef10226bbd1609bb9c2996_astrosight.webp', back: 'Identify Targets' },
//     { id: 2, front: 'https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ee6047dbef6a26edc5379a_astrolaptopwork.webp', back: 'Qualify' },
//     { id: 3, front: 'https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ee60caca00890dd4fdb2ce_astrometaverse.webp', back: 'Long & Short list' },
//     { id: 4, front: 'https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ee60f4f5a57abb50ec696a_astrojetpack.webp', back: 'Hyre!' },
//   ];

//   const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const scrollTop = containerRef.current.scrollTop;
//       const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
//       const progress = scrollTop / scrollHeight;
//       setScrollProgress(progress);
//     }
//   };

//   useEffect(() => {
//     if (inView) {
//       containerRef.current.addEventListener('scroll', handleScroll);
//     } else {
//       containerRef.current.removeEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, [inView]);

//   useEffect(() => {
//     controls.start((index) => ({
//       rotateY: 180 * scrollProgress,
//       transition: {
//         duration: 0.5,
//         delay: index * 0.1,
//       },
//     }));

//     if (scrollProgress >= 1 && !hasCompletedAnimation) {
//       setHasCompletedAnimation(true);
//       onAnimationComplete();
//     }
//   }, [scrollProgress, controls, hasCompletedAnimation, onAnimationComplete]);

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
//         <div className="w-full h-full overflow-y-scroll" ref={containerRef}>
//           <div className="h-screen flex justify-center items-center">
//             <p>Scroll down to see the card animations</p>
//           </div>
//           <div ref={inViewRef} className="w-full h-screen flex justify-center items-center">
//             <div className="flex">
//               {cards.map((card, index) => (
//                 <motion.div
//                   key={card.id}
//                   className="w-64 h-64 bg-blue-500 text-white flex items-center justify-center mx-5"
//                   initial={{ rotateY: 0 }}
//                   animate={controls}
//                   custom={index}
//                   style={{ perspective: 1000 }}
//                 >
//                   <motion.div
//                     className="relative w-full h-full"
//                     style={{ transformStyle: 'preserve-3d' }}
//                   >
//                     <motion.div
//                       className="absolute w-full h-full backface-hidden"
//                       style={{ backfaceVisibility: 'hidden' }}
//                     >
//                       <img src={card.front} alt={`Card front ${index}`} className="w-full h-full object-cover" />
//                     </motion.div>
//                     <motion.div
//                       className="absolute w-full h-full bg-gray-800 text-white flex items-center justify-center backface-hidden"
//                       style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
//                     >
//                       {card.back}
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//           <div className="h-screen flex justify-center items-center">
//             <p>Animation completed. You can scroll past now.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollEffectCards;

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  stagger,
} from "framer-motion";
import { gradientStyle } from "../../ReactFunctions";
import axios from "axios";
import { indexOf } from "lodash";

// import { useInView } from "react-intersection-observer";

const FlipCard = ({ isFlipped, frontContent, backContent }) => {
  return (
    <motion.div
      className="relative w-full h-full rounded-md"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute w-full h-full rounded-md"
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 1.6 }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-md"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontContent}
        </motion.div>
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-md"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CorePillars = () => {
  const [flipCard, setFlipCard] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 1.0,
    margin: `0px 0px -75% 0px`,
    once: false,
  });
  const cards = [
    {
      id: 1,
      front:
        "https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ef10226bbd1609bb9c2996_astrosight.webp",
      back: "Identify Targets",
    },
    {
      id: 2,
      front:
        "https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ee6047dbef6a26edc5379a_astrolaptopwork.webp",
      back: "Qualify",
    },
    {
      id: 3,
      front:
        "https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ee60caca00890dd4fdb2ce_astrometaverse.webp",
      back: "Long & Short list",
    },
    {
      id: 4,
      front:
        "https://cdn.prod.website-files.com/65ae047f83bf50321f9583a0/65ee60f4f5a57abb50ec696a_astrojetpack.webp",
      back: "Hyre!",
    },
  ];

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  const [cardData, setCardData] = useState([]);

  const getCorePillarsData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}api/corepillar?populate=*`)
      .then((response) => {
        setCardData(response?.data?.data?.attributes?.core_pillars?.data);
      })
      .catch((error) => {
        console.log("error while fetching core pillars data: ", error);
      });
  };

  // const staggerContainer = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 1,
  //     },
  //   },
  // };

  const staggerItem = {
    hidden: { opacity: 0, x: "-100%", filter: "blur(5px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1 },
    },
  };

  // Update sectionInView state when inView changes
  useEffect(() => {
    console.log("element is in the viewport: ", isInView);
    if (isInView) setFlipCard(true);
  }, [isInView]);

  useEffect(() => {
    getCorePillarsData();
  }, []);

  return (
    <motion.section
      ref={ref}
      className="flex w-full justify-start items-center flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full text-center flex flex-col gap-4">
        <p className="font-semibold">Core Pillars</p>
        <p className="md:text-4xl text-2xl font-extrabold text-[#02194a] dark:text-white">
          <span style={gradientStyle}>Driving Forces</span> Behind <br />
          Our Extraordinary Achievements
        </p>
      </div>
      <motion.div
        initial={{ x: "-100%", opacity: 0, filter: blur("5px") }}
        animate={{
          x: "0",
          opacity: 1,
          filter: blur("0px"),
        }}
        transition={{
          duration: 1,
          ease: "linear",
          // type: "spring",
          stiffness: 35,
        }}
        // variants={staggerContainer}
        className="w-full flex justify-center items-center gap-6 mt-10 flex-wrap"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-[200px] h-[250px] rounded-md"
            // variants={staggerItem}
            animate={{ delay: staggerMenuItems }}
          >
            <FlipCard
              isFlipped={flipCard}
              frontContent={
                <div className="bg-gray-300 w-full h-full flex justify-center items-center text-white rounded-md p-2">
                  <img src={card?.front} alt="" />
                </div>
              }
              backContent={
                <div
                  className="bg-gray-300 w-full h-full flex flex-col gap-4 justify-center items-center text-white rounded-md p-2 py-4 text-center font-raleway"
                  style={{
                    backgroundColor: cardData?.[index]?.attributes?.hexvalue,
                  }}
                >
                  <p
                    className={`font-bold h-[80px] flex items-start ${
                      index === 1 ? "text-black" : ""
                    }`}
                  >
                    {cardData?.[index]?.attributes?.heading}
                  </p>
                  <p
                    className={`text-sm font-medium h-[160px] ${
                      index === 1 ? "text-black" : ""
                    }`}
                  >
                    {cardData?.[index]?.attributes?.description}
                  </p>
                </div>
              }
            />
          </motion.div>
        ))}
      </motion.div>
      <a
        href="#"
        className="group w-fit underline decoration-1 underline-offset-2 font-raleway  text-[#02194A] font-semibold flex justify-center items-center gap-1 mt-10"
      >
        Know More About Us
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
    </motion.section>
  );
};

export default CorePillars;
