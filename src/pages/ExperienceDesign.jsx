import Banner from "../Components/common-components/Banner";
import Testimonials from "../Components/common-components/Testimonials";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import SuccessStories from "../Components/home-components/SuccessStories";
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess";
import Overview from "../Components/services-common/Overview";
import OurDesignServices from "../Components/experience-design-components/OurDesignServices";
import TechStack from "../Components/services-common/TechStack";
import WhyAltumind from "../Components/services-common/WhyAltumind";
import GetStarted from "../Components/services-common/GetStarted";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
import { gradientStyle } from "../ReactFunctions";
import Menu from "../Components/industries-common/Menu";
import EngModel from "../Components/services-common/EngModel";

const ExperienceDesign = () => {
  const servicesMenu = [
    { id: "section-1", tabId: "tab1", name: "OverView" },
    { id: "section-2", tabId: "tab2", name: "Services" },
    { id: "section-3", tabId: "tab3", name: "Tech Stack" },
    { id: "section-4", tabId: "tab4", name: "Why Us" },
    { id: "section-5", tabId: "tab4", name: "Our Model" },
    { id: "section-6", tabId: "tab5", name: "Testimonials" },
    { id: "section-7", tabId: "tab6", name: "Benefits" },
    { id: "section-8", tabId: "tab8", name: "Success" },
    { id: "section-9", tabId: "tab9", name: "Insights" },
  ];
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16 relative">
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full sticky top-[70px] bg-white dark:bg-darkTheme -mt-16 z-[2]">
        <Menu sections={servicesMenu} />
      </div>
      <section id="section-1">
        <Overview />
      </section>
      <section id="section-2">
        <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
          {/* <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
            <p className="font-semibold">Our Design Services</p>
            <p className="text-3xl font-extrabold">
              <span>Your Partner in </span>
              <span style={gradientStyle}>Experience-Driven Growth</span>
            </p>
          </div> */}
          <OurDesignServices />
        </div>
      </section>
      <section id="section-3">
        <TechStack />
      </section>
      <section
        id="section-4"
        className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10"
      >
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
      <section id="section-5">
        <EngModel />
      </section>
      <section id="section-6">
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
      <section id="section-7">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Benefits
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Setting You Up For Success
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <GetStarted />
      <section id="section-8">
        <SuccessStories />
      </section>
      <section id="section-9">
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
  );
};

export default ExperienceDesign;
