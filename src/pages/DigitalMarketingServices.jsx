import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import TechStack from "../Components/services-common/TechStack"
import ValueSection from "../Components/services-common/ValueSection"
import WhyAltumind from "../Components/services-common/WhyAltumind"

const DigitalMarketingServices = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
        <Banner/>
        <Overview/>
        <ValueSection/>
        <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
      <div className='text-center font-raleway space-y-3 mb-10'>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>Why Altumind Stands Out</p>
            <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Leading the Way in Fulfilling Your Brand&apos;s Vision</p>
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
        <TechStack/>
        <GetStarted/>
        <SubscribeForm/>
    </div>
  )
}

export default DigitalMarketingServices