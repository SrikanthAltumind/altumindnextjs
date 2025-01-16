import { Link } from "react-router-dom"


const LandingBanner = () => {

  const scrollToForm = () => {
    const agilitiForm = document.getElementById("subscribe-form")
    agilitiForm.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='py-12 lg:py-16 flex justify-center items-center bg-[#1D2737] font-raleway'>
        <div className='w-[90%] md:max-w-[600px] lg:max-w-[600px] text-center space-y-5 lg:space-y-7'>
            <h1 className='text-3xl md:text-4xl lg:leading-[40px] font-extrabold text-transparent bg-gradient-to-r from-[#DD5143] via-[#5787F8] to-[#DD5143] bg-clip-text'>
                Unlock the Power of Custom
                Website Development
            </h1>
            <p className='text-white text-xs lg:text-sm font-medium'>We combine cutting-edge technology with human-centric design and end-to-end services to deliver
            custom website development that captivates users, drives results, and keeps you ahead of the curve.</p>
            <button onClick={scrollToForm} className='bg-[#DD5143] mt-5 lg:mt-7 text-white text-xs px-6 py-4 font-semibold rounded-full'>Start Your Project Now!</button>
        </div>
    </div>
  )
}

export default LandingBanner