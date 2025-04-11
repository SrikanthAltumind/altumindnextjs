// import  {useEffect, useState } from 'react'
// import { gradientStyle } from '../../ReactFunctions';
// import { Link } from 'react-router-dom';
// import banner from '../../assets/Banner.webp'

// const words = ["Design", "Development", "Marketing"];
 
const HomeBannerUpdated = () => {
 
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [animationStarted, setAnimationStarted] = useState(false);
  // const [displayedWord, setDisplayedWord] = useState("");
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [typingSpeed, setTypingSpeed] = useState(100);

  // const imageSrcSet = `
  // ${mobile} 480w,
  // ${desktop} 786w,
  // `;
 
  // const sizes = "(max-width: 480px) 100vw, (max-width: 768px) 75vw, 50vw";
  // const handleTyping = useCallback(() => {
  //   const currentWord = words[currentWordIndex];
 
  //   if (!isDeleting && displayedWord.length < currentWord.length) {
  //     setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
  //   } else if (isDeleting && displayedWord.length > 0) {
  //     setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
  //   } else if (!isDeleting && displayedWord.length === currentWord.length) {
  //     setTimeout(() => setIsDeleting(true), 1000);
  //   } else if (isDeleting && displayedWord.length === 0) {
  //     setIsDeleting(false);
  //     setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  //   }
  // }, [displayedWord, isDeleting, currentWordIndex, words]);
 
  //  useEffect(() => {
  //    if (!animationStarted) return;
 
  //    const timer = setTimeout(
  //      handleTyping,
  //      isDeleting ? typingSpeed / 2 : typingSpeed
  //    );
 
  //    return () => clearTimeout(timer);
  //  }, [displayedWord, isDeleting, animationStarted, handleTyping, typingSpeed]);
 
//  useEffect(() => {
//    const startAnimation = () => {
//      if ("requestIdleCallback" in window) {
//        requestIdleCallback(() => setAnimationStarted(true), { timeout: 20000 });
//      } else {
//        setTimeout(() => setAnimationStarted(true), 20000);
       
//      }
//    };
 
//    startAnimation();
//  }, []);

// useEffect(() => {
 
//   let timer;
//         // if ("requestIdleCallback" in window) {
//         //    requestIdleCallback(() => setAnimationStarted(true), { timeout: 8000 });
//         //  } else 
         
//        timer = setTimeout(() => setAnimationStarted(true), 5000);

         
//   return () => {
//     clearTimeout(timer)
//   }
// },[])

  return (
    <div  style={{fontFamily:"Raleway, sans-serif"}} className="h-auto flex md:flex-row flex-col-reverse bg-LightBlue px-4 py-7 items-center">
      <div className=" md:w-[55%] flex flex-col gap-6 p-5 lg:pl-10">
      <h1 className="font-bold md:text-4xl text-3xl">
          {/* Driving Growth through <br /> Digital Innovation in{" "} */}
          Driving Growth with <br/>Human-Centric Digital Innovation
          {/* <br className="sm:hidden" />  */}
          {/* {animationStarted ? (
            // <>
            //   <span style={gradientStyle}>{displayedWord}</span>
            //  
            // </>
            <TypeAnimation
              sequence={['Development', 900, 'Marketing', 900, 'Design', 900]}
              // style={gradientStyle}
              className='custom-gradient-text'
              repeat={Infinity}
              cursor={false}
            />
          ) : (
            <span className='custom-gradient-text'>{words[0]}</span>
          )} */}
       {/* <span className="blinking-cursor">|</span> */}

        </h1>
        <p className="md:text-base  lg:w-[70%] text-sm">
          {/* Utilize the strength of digital breakthroughs to reshape your business
          horizon. */}
          Harness the power of digital breakthroughs to reshape your business landscape. 
        </p>
       
          <a
            href="/services"
            className="bg-[#DD5143] rounded-3xl w-[200px] px-4 py-3 max-sm:mx-auto font-medium text-white text-center"
          >
            Explore our Services
          </a>
      </div>
      <div className="md:w-[40%] w-full flex justify-center">
       
      {/* <picture> */}
      {/* <source srcSet={`https://krishna.altumindglobal.com/Homepage_mobile-(Compressify.io)%201.webp`} type="image/webp" media="(max-width: 480px)" /> */}
      {/* <source srcSet={`https://krishna.altumindglobal.com/Homepage_Desktop-(Compressify.io)%201.webp`} type="image/webp" media="(max-width: 768px)" /> */}
        <img
          // src="https://cdn.altumindglobal.com/Banner_Image_0b6b650582.webp"
          // src="https://cdn.altumindglobal.com/Homepage_e48ac42265.svg"
          src={'https://cdn.altumindglobal.com/Homepage_Desktop-(Compressify.io).webp'}
          alt="A digital integration of Earth is showcased with glowing connections, overlaid by stylized curved lines."
          // className="object-contain lg:h-[650px] lg:w-[750px] md:h-[400px] h-[320px] w-[340px] "
          loading='eager'
          height="100%"
          width="100%"
          className="aspect-w-16 aspect-h-9 object-cover"
        />
          {/* </picture> */}
          
      </div>
    </div>
  );
}

export default HomeBannerUpdated