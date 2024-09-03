import Banner from "../Components/common-components/Banner"
import Testimonials from "../Components/common-components/Testimonials"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import SuccessStories from "../Components/home-components/SuccessStories"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import Overview from "../Components/services-common/Overview"
import OurDesignServices from "../Components/experience-design-components/OurDesignServices"
import TechStack from "../Components/services-common/TechStack"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import GetStarted from '../Components/services-common/GetStarted'
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import { gradientStyle } from "../ReactFunctions"

const ExperienceDesign = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16">
      <Banner />
      <Overview />
      <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
        <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
          <p className="font-semibold">Our Design Services</p>
          <p className="text-3xl font-extrabold">
            <span>Your Partner in </span>
            <span style={gradientStyle}>Experience-Driven Growth</span>
          </p>
          {/* <p className="md:max-w-[800px]">
            Functional Testing: Ensure rock-solid functionality and reliability.
            Our domain-specific solutions
            <br /> rigorously evaluate features, stability, and user
            interactions, delivering peak performance before
            <br />
            production
          </p> */}
        </div>
        <OurDesignServices />
      </div>

      <TechStack />
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Why Altumind Stands Out
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Shaping Digital Interactions Since Inception
          </p>
        </div>
        <WhyAltumind />
      </section>

      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Client Testimonials
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            The Altumind Impact In Their Words
          </p>
        </div>
        <Testimonials />
      </section>
      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Client Testimonials
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            The Altumind Impact In Their Words
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <GetStarted />
      <SuccessStories />
      <InsightsBlogs />
      <SubscribeForm />
    </div>
  );
}

export default ExperienceDesign