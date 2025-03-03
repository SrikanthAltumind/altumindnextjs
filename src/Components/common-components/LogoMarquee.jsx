import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Marquee from "react-fast-marquee";


const LogoMarquee = () => {

    const [logoData, setLogoData] = useState([])
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemWidth] = useState(260); // Assuming each item is 260px wide
    const totalItems = logoData.length * 2; // Since we're duplicating the array

    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };


    useEffect(() => {
      
      updateContainerWidth();
      window.addEventListener("resize", updateContainerWidth);
      return () => window.removeEventListener("resize", updateContainerWidth);
    }, []);

    const duration = (totalItems * itemWidth) / 100; 

    useEffect(() => {
      fetchLogos()
    }, []);

    // useEffect(() => {
    //     updateRepeatCount();
    //     setMarqueeWidth(logoData.length * 260 * 2);
    // }, [logoData]);


    const fetchLogos = () => {
        axios.get(`${import.meta.env.VITE_APP_API_URL}api/client-images?populate=*`)
        .then((response) => {
            setLogoData(response?.data?.data)
        })
        .catch((error) => {
            console.log("response while fetching logos in logoMarquee component: ", error)
        })
    }
    return (
      <div className="py-5">
        <Marquee className="" gradientColor={'white'} gradient gradientWidth={80} pauseOnHover>
          {logoData?.concat(logoData)?.map((item, index) => (
            <div
              key={`${index + item.attributes.image?.data?.attributes?.name}`}
              className="p-1 max-w-[250px] mx-4"
            >
              <img
                src={item.attributes.image?.data?.attributes?.url}
                alt={item.attributes.image?.data?.attributes?.name}
                loading='lazy'
                height={"100%"}
                width={"100%"}
                className="max-w-[250px] h-[60px] object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
      //   <div ref={containerRef} className="overflow-hidden w-full relative">
      //     <motion.div
      //       className="flex gap-1"
      //       initial={{ x: 0 }}
      //       animate={{ x: `-${totalItems * itemWidth}px` }} // Move the entire length of the duplicated array
      //       transition={{
      //         repeat: Infinity,
      //         ease: "linear",
      //         duration: duration, // Adjust duration to control speed
      //       }}
      //       style={{ width: `${totalItems * itemWidth}px` }}
      //     >
      //       {logoData.concat(logoData).map((item, index) => (
      //         <div
      //           key={`${index + item.attributes.image?.data?.attributes?.name}`}
      //           className="p-1 max-w-[260px]"
      //         >
      //           <img
      //             src={item.attributes.image?.data?.attributes?.url}
      //             alt={item.attributes.image?.data?.attributes?.name}
      //             className="w-[250px] h-[70px] object-contain grayscale-100"
      //           />
      //         </div>
      //       ))}
      //     </motion.div>
      //   </div>
      //   <div className="overflow-hidden w-full">
      //     <motion.div
      //       className="flex gap-1"
      //       initial={{ x: 0 }}
      //       animate={{ x: `-${marqueeWidth}px` }} // Move the entire length of the concatenated logos
      //       transition={{
      //         repeat: Infinity,
      //         ease: "linear",
      //         duration: 40, // Adjust duration to control speed
      //       }}
      //       style={{ width: `${marqueeWidth}px` }}
      //     >
      //       {logoData.concat(logoData).map((item, index) => (
      //         <div
      //           key={`${index + item.attributes.image?.data?.attributes?.name}`}
      //           className="p-1 max-w-[260px]"
      //         >
      //           <img
      //             src={item.attributes.image?.data?.attributes?.url}
      //             alt={item.attributes.image?.data?.attributes?.name}
      //             className="max-w-[250px] h-[70px] object-contain grayscale-100"
      //             width="100%"
      //             height="100%"
      //           />
      //         </div>
      //       ))}
      //     </motion.div>
      //   </div>
      //   <motion.div
      //     className="flex w-full animate-marquee gap-1 overflow-hidden"
      //     initial={{ x: 0 }}
      //     animate={{ x: "-100%" }}
      //     transition={{
      //       repeat: Infinity,
      //       ease: "linear",
      //       duration: 40,
      //     }}
      //     >
      //     {/* {[...Array(repeatCount)].map((_, i) => */}

      //         {logoData.concat(logoData).map((item, index) => (
      //             <div
      //                 key={`${index + item.attributes.image?.data?.attributes?.name}`}
      //                 className="p-1 w-[260px]"
      //             >
      //                 <img
      //                     src={item.attributes.image?.data?.attributes?.url}
      //                     alt={item.attributes.image?.data?.attributes?.name}
      //                     className="w-[250px] h-[70px] object-contain grayscale-100"
      //                 />
      //             </div>
      //         ))}

      //   </motion.div>
      // <div ref={containerRef} className="relative flex overflow-x-hidden">
      //   <div className="py-12 animate-marquee whitespace-nowrap flex gap-4">
      //     {[...Array(repeatCount)].map((_, i) =>
      //       logoData.map((item, index) => (
      //         <div key={`${i}-${index}`} className="p-1 w-[260px]">
      //           <img
      //             src={item.attributes.image?.data?.attributes?.url}
      //             alt={item.attributes.image?.data?.attributes?.name}
      //             className="w-[250px] h-[70px] object-contain grayscale-100"
      //           />
      //         </div>
      //       ))
      //     )}
      //   </div>

      //   <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
      //     {[...Array(repeatCount)].map((_, i) =>
      //       logoData.map((item, index) => (
      //         <div key={`dup-${i}-${index}`} className="p-1 w-[260px]">
      //           <img
      //             src={item.attributes.image?.data?.attributes?.url}
      //             alt={item.attributes.image?.data?.attributes?.name}
      //             className="w-[250px] h-[70px] object-contain"
      //           />
      //         </div>
      //       ))
      //     )}
      //   </div>
      // </div>
    );
}

export default LogoMarquee