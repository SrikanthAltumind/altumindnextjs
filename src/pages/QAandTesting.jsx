import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import Spectrum from "../Components/common-components/Spectrum"
import SpectrumDesc from "../Components/common-components/SpectrumDesc"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import TechStack from "../Components/services-common/TechStack"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import { gradientStyle } from "../ReactFunctions"
import Testing from "./Testing"

const servicesMenu = [
  {id:'section1', tabId:'tab1', name:'OverView'},
  {id:'section2', tabId:'tab2', name:'Services'},
  {id:'section3', tabId:'tab3', name:'Tech Stack'},
  {id:'section4', tabId:'tab4', name:'Why Us'},
  {id:'section5', tabId:'tab5', name:'Testimonials'},
  {id:'section6', tabId:'tab6', name:'Benefits'},
  {id:'section7', tabId:'tab7', name:'Success'},
  {id:'section8', tabId:'tab8', name:'Insights'},
]


const QAandTesting = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-16">
      <Banner />
      <Overview />
      <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
        <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
          <p className="font-semibold">Our QA & Testing Services</p>
          <p className="text-3xl font-extrabold md:max-w-[500px]">
            <span style={gradientStyle}>
              Comprehensive Testing
              <br />{" "}
            </span>
            <span>Services for Peak Performance</span>
          </p>
          <p className="md:max-w-[800px]">
            Functional Testing: Ensure rock-solid functionality and reliability.
            Our domain-specific solutions
            <br /> rigorously evaluate features, stability, and user
            interactions, delivering peak performance before
            <br />
            production
          </p>
        </div>
      </div>
      <Spectrum />

      {/* <Testing /> */}
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Why Altumind Stands Out
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Your Gateway to Impeccable Quality Assurance
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
      <TechStack />
      <GetStarted />
      <SuccessStories />
      <InsightsBlogs />
      <SubscribeForm />
    </div>
  );
}

export default QAandTesting