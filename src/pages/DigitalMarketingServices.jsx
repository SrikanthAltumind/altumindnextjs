import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Menu from "../Components/industries-common/Menu"
import EngModel from "../Components/services-common/EngModel"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import TechStack from "../Components/services-common/TechStack"
import ValueSection from "../Components/services-common/ValueSection"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import { gradientStyle } from "../ReactFunctions"

const DigitalMarketingServices = () => {
   const servicesMenu = [
     { id: "section1", tabId: "tab1", name: "OverView" },
     { id: "section2", tabId: "tab2", name: "Services" },
     { id: "section3", tabId: "tab3", name: "Why Us" },
     { id: "section4", tabId: "tab4", name: "Our Model" },
     { id: "section5", tabId: "tab5", name: "Testimonials" },
     { id: "section6", tabId: "tab6", name: "Benefits" },
     { id: "section7", tabId: "tab7", name: "Tech Stack" },
     { id: "section8", tabId: "tab8", name: "Success Stories" },
     { id: "section9", tabId: "tab9", name: "Insights" },
   ];
  return (
    <>
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
    
        <Banner />
  
      <div className="w-full sticky top-[70px] bg-white -mt-28 dark:bg-darkTheme">
        <Menu sections={servicesMenu} />
      </div>
      <section id="section-1">
        <Overview />
      </section>
      <section id="section-2">
        <ValueSection />
      </section>
      <section id="section-3" className="bg-[#F3F9FF] py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Why Altumind Stands Out
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Leading the Way in Fulfilling Your Brand&apos;s Vision
          </p>
        </div>
        <WhyAltumind />
      </section>
      <section id="section4"><EngModel/></section>
      <section id="section5">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Client Testimonials
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            The Altumind Impact: In Their Words
          </p>
        </div>
        <Testimonials />
      </section>
      <section id="section6">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Benefits
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            <span style={gradientStyle}>Blending creativity and Results </span>
            <br />
            <span className="text-[#02143b] darK:text-white">
              to Elevate Your Brand
            </span>
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <section id="section7">
        <TechStack />
      </section>
      <GetStarted />
      <section id="section8">
        <SuccessStories />
      </section>
      <section id="section9">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Insights
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Dive into Our Latest Perspectives
          </p>
        </div>
        <InsightsBlogs />
      </section>

      <SubscribeForm />
    </div>
    </>
  );
}

export default DigitalMarketingServices