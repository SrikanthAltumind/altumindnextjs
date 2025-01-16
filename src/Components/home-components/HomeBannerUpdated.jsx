import  { useEffect, useState } from 'react'
import { gradientStyle } from '../../ReactFunctions';
// import { Link } from 'react-router-dom';

const words = ["Design", "Development", "Marketing"];

const HomeBannerUpdated = () => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0); 
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex]; 
    if (!isDeleting && displayedWord.length < currentWord.length) {
      setTimeout(() => {
        setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedWord.length > 0) {
      setTimeout(() => {
        setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedWord.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedWord.length === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  }, [displayedWord, isDeleting, currentWordIndex]);

  return (
    <div className="h-fit w-full flex md:flex-row flex-col-reverse bg-LightBlue md:px-5 px-4 py-10 font-raleway items-center justify-center ">
      <div className=" md:w-[55%]  flex flex-col gap-6 p-5 lg:pl-10 relative">
        <h1 className="font-extrabold md:text-4xl text-3xl">
         
             Driving Growth through 
            <br /> Digital Innovation in{" "}
          <br className='sm:hidden'/>
          <span style={gradientStyle}>{displayedWord}</span>
          <span className="blinking-cursor">|</span>
        </h1>
        <p className="md:text-base  lg:w-[70%] text-sm">
          {/* Utilize the strength of digital breakthroughs to reshape your business
          horizon. */}
          Harness the power of digital breakthroughs to reshape your business landscape. 
        </p>
        <div className="w-full flex justify-center items-center md:justify-start">
          <a
            href="/services"
            className="bg-[#DD5143] rounded-3xl w-[200px] px-4 py-3 font-medium text-white text-center"
          >
            Explore our Services
          </a>
        </div>
      </div>
      <div className="md:w-[40%] w-full flex justify-center">
        <img
          // src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Banner_Image_0b6b650582.webp"
          src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Homepage_e48ac42265.svg"
          alt="A digital integration of Earth is showcased with glowing connections, overlaid by stylized curved lines."
          // className="object-contain lg:h-[650px] lg:w-[750px] md:h-[400px] h-[320px] w-[340px] "
          className='max-h-[300px] lg:max-h-[400px]  mx-auto'
        />
      </div>
    </div>
  );
}

export default HomeBannerUpdated