import SubscribeForm from "../Components/common-components/SubscribeForm"
import GetStarted from "../Components/services-common/GetStarted"
import SuccessStoryBanner from '../Components/success-stories-components/SuccessStoryBanner'
import WhyAltumind from "../Components/services-common/WhyAltumind"
import Approach from "../Components/success-stories-components/Approach"
import Challenge from "../Components/success-stories-components/Challenge"

const SuccessStories = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28 dark:text-white font-montserrat">
      <SuccessStoryBanner/>
      <Challenge/>
         <section>
        <div className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className='text-center font-raleway space-y-5 mb-10'>
            
            <p className=' font-extrabold text-3xl lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Innovative Features:<br/> Paving the way for Success</p>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>To overcome the unique challenges of the market, we implemented a range of groundbreaking solutions:</p>
        </div>
            <WhyAltumind/>
        </div>
        </section>
        <Approach/>
        <GetStarted/>
      <SubscribeForm/>
    </div>
  )
}

export default SuccessStories