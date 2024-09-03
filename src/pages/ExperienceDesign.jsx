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
import IndustriesMenu from '../Components/industries-common/IndustriesMenu'

const servicesMenu = [
  {id:'section1', tabId:'tab1', name:'Overview'},
  {id:'section2', tabId:'tab2', name:'Services'},
  {id:'section3', tabId:'tab3', name:'Tech Stack'},
  {id:'section4', tabId:'tab4', name:'Why Us'},
  {id:'section5', tabId:'tab5', name:'Testimonials'},
  {id:'section6', tabId:'tab6', name:'Benefits'},
  {id:'section7', tabId:'tab7', name:'Success'},
  {id:'section8', tabId:'tab8', name:'Insights'},
]

const ExperienceDesign = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
        <Banner/>
        <div className="flex flex-col -mt-24 lg:-mt-28 gap-24 lg:gap-28">
        <IndustriesMenu sectionsMenu={servicesMenu}/>
        <section id="section1"><Overview/></section>
        <section id="section2"><OurDesignServices/></section>
        <section id="section3"><TechStack/></section>
        <section id="section4"> 
          <div className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
            <div className='text-center font-raleway space-y-3 mb-10'>
                <p className='text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold'>Why Altumind Stands Out</p>
                <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Shaping Digital Interactions Since Inception</p>
            </div>
            <WhyAltumind/>
          </div>
        </section>
        <section id="section5">
          <div>
            <div className="text-center space-y-2 mb-20 font-raleway">
              <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Client Testimonials</p>
              <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">The Altumind Impact In Their Words</p>
            </div>
            <Testimonials/>
          </div>
        </section>
        <section id="section6">
        <div>
          <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Client Testimonials</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">The Altumind Impact In Their Words</p>
          </div>
          <SettingUpForSuccess/>
        </div>
        </section>
        <GetStarted/>
        <section id="section7"><SuccessStories/></section>
        <section id="section8"><InsightsBlogs/></section>
        </div>
        <SubscribeForm/>
    </div>
  )
}

export default ExperienceDesign