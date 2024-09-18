import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SolutionPartners from "../Components/common-components/SolutionPartners"
import Spectrum from "../Components/common-components/Spectrum"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import EngModel from "../Components/services-common/EngModel"
// import Menu from "../Components/industries-common/Menu"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import { gradientStyle } from "../ReactFunctions"

const servicesMenu = [
  { id: "section1", tabId: "tab1", name: "Overview" },
  { id: "section2", tabId: "tab2", name: "Services" },
  { id: "section3", tabId: "tab3", name: "Why Us" },
  { id: "section4", tabId: "tab4", name: "Our Models" },
  { id: "section5", tabId: "tab5", name: "Testimonials" },
  { id: "section6", tabId: "tab6", name: "Benefits" },
  { id: "section7", tabId: "tab7", name: "Tech Stack" },
  { id: "section8", tabId: "tab8", name: "Success" },
  { id: "section9", tabId: "tab9", name: "Insights" },
];

const ManagedOperations = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-16">
        <Banner />
        <div className="flex flex-col -mt-24 lg:-mt-28 gap-24 lg:gap-28">
        <IndustriesMenu sectionsMenu={servicesMenu} />
          <section id="section1"><Overview /></section>
          <section id="section2">
         <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
          <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
            <p className="font-semibold">Our Managed Operation Services</p>
            <p className="text-3xl font-extrabold md:max-w-[500px]">
              <span style={gradientStyle}>
                Tailored Management for
                <br />{" "}
              </span>
              <span>Every Aspect of Your Business</span>
            </p>
            {/* <p className="md:max-w-[800px]">{data?.attributes?.description}</p> */}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Spectrum />
        </div>
      </section>
      <section
        id="section3"
        className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-8"
      >
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Why Altumind Stands Out
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Architect of Your Digital Success Story
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
            Harmonizing Your IT with Business Goals
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <section id="section7">
        <div className="text-center space-y-3 mb-10 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Tech Stack
          </p>
          <p className=" font-extrabold w-fit mx-auto text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Harnessing the Power of Leading Technologies
          </p>
        </div>
        <SolutionPartners />
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
      </div>
      <SubscribeForm />
    </div>
  );
}

export default ManagedOperations