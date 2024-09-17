import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import EngagementModel from '../Components/services-common/EngagementModel'
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import OurDesignServices from "../Components/experience-design-components/OurDesignServices"
import OurPhilosophy from "../Components/services-common/OurPhilosophy"
import OurImpactByNumbers from '../Components/services-common/OurImpactByNumbers'
import EngModel from "../Components/services-common/FlowChart"


const Services = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
        <Banner/>
        <Overview/>
        <OurImpactByNumbers/>
        <EngModel/>
        <SuccessStories/>
        <section>
          <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Client Testimonials</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">The Altumind Impact: In Their Words</p>
          </div>
        <Testimonials/>
        </section>
        <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
      <div className='text-center font-raleway space-y-3 mb-10'>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>Why Choose Altumind</p>
            <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Driving Change Through Strategic Digital Innovation Services</p>
        </div>
      <WhyAltumind/>
      </section>
      <OurPhilosophy/>
      <EngagementModel/>
      <section>
          <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Benefits</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Powerful Advantages to Navigate Your Success</p>
          </div>
          <SettingUpForSuccess/>
        </section>
        <section>
        <div className="text-center space-y-2 mb-10 font-raleway">
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Explore Further</p>
          </div>
        <OurDesignServices/>
        </section>
      <GetStarted/>
      <SubscribeForm/>
    </div>
  )
}

export default Services