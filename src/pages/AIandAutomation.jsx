import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import SuccessStories from "../Components/home-components/SuccessStories"
import Overview from "../Components/services-common/Overview"
import SolutionPartners from '../Components/common-components/SolutionPartners'
import WhyAltumind from "../Components/services-common/WhyAltumind"
import Testimonials from "../Components/common-components/Testimonials"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import GetStarted from "../Components/services-common/GetStarted"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import ValueSection from "../Components/services-common/ValueSection"

const AIandAutomation = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-16">
      <Banner/>
      <Overview/>
      <ValueSection/>
      <section>
      <div className='text-center space-y-3 mb-10 font-raleway'>
      <p className='text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold'>Our Partnership Ecosystem</p>
            <p className=' font-extrabold w-fit mx-auto text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Powering Innovation Together</p>
            </div>
       <SolutionPartners/>
      </section>
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
      <div className='text-center font-raleway space-y-3 mb-10'>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>Why Altumind Stands Out</p>
            <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Powering Intelligent Transformation</p>
        </div>
      <WhyAltumind/>
      </section>
      <section>
          <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Client Testimonials</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">The Altumind Impact In Their Words</p>
          </div>
        <Testimonials/>
        </section>
        <section>
          <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Client Testimonials</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">The Altumind Impact In Their Words</p>
          </div>
          <SettingUpForSuccess/>
        </section>
        <GetStarted/>
      <SuccessStories/>
      <section>
      <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Insights</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Dive into Our Latest Perspectives</p>
          </div>
      <InsightsBlogs/>
      </section>
      <SubscribeForm/>
    </div>
  )
}

export default AIandAutomation