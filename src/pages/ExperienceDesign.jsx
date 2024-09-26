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
// import IndustriesMenu from '../Components/industries-common/IndustriesMenu'
import EngModel from '../Components/services-common/EngModel'
import Menu from "../Components/industries-common/Menu"


const servicesMenu = [
  {id:'section1', tabId:'tab1', name:'Overview'},
  {id:'section2', tabId:'tab2', name:'Services'},
  {id:'section3', tabId:'tab3', name:'Tech Stack'},
  {id:'section4', tabId:'tab4', name:'Why Us'},
  {id:'section5', tabId:'tab5', name:'Our Model'},
  {id:'section6', tabId:'tab6', name:'Testimonials'},
  {id:'section7', tabId:'tab7', name:'Benefits'},
  {id:'section8', tabId:'tab8', name:'Success'},
  {id:'section9', tabId:'tab9', name:'Insights'},
  
]

const ExperienceDesign = () => {
  return (
    <>
    <div className="dark:bg-darkTheme flex flex-col gap-16 relative">
      <div className="w-full">
        <Banner />
   
      <div className="w-full sticky top-[70px] bg-white dark:bg-darkTheme -mt-16">
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
        <GetStarted/>
        <section id="section8"><SuccessStories/></section>
        <section id="section9">
        <div className="text-center space-y-2 mb-20 font-raleway">
              <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Insights</p>
              <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Dive into Our Latest Perspectives</p>
            </div>
          <InsightsBlogs/></section>
        </div>
      <SubscribeForm />
    </div>
    </>
  );
}

export default ExperienceDesign