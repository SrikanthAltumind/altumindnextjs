import TimeLineFlow from "../Components/common-components/TimeLineFlow"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Banner from "../Components/UIUXCX-components/Banner"
import Overview from "../Components/UIUXCX-components/Overview"
import WhyChooseUs from "../Components/UIUXCX-components/WhyChooseUs"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import IndustriesSlider from "../Components/services-common/IndustriesSlider"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import FAQ from "../Components/agiliti-components/FAQ"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import { Helmet } from "react-helmet-async"
import DevelopmentServices from "../Components/services-common/DevelopmentServices"
import TechStackSlider from "../Components/services-common/TechStackSlider"

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Process'},
    {id:'section4', tabId:'tab4', name:'Tech Stack'},
    {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
    {id:'section6', tabId:'tab6', name:'Benefits'},
    {id:'section7', tabId:'tab7', name:'Industries'},
    {id:'section8', tabId:'tab8', name:'Insights'},
    {id:'section9', tabId:'tab9', name:'FAQ'},
]

const AutomationTesting = () => {

  return (
      <>
      <Helmet>
        {/* SEO */}
        <title>Boost Efficiency with Our Expert Automation Testing Services</title>
        <meta name="description" content="Let our automation testing services take the hassle out of testing, ensuring consistent, bug-free software while saving you time and effort." />
        <meta name="keywords" content="automation testing services, automated testing as a service, automation testing service, software test automation companies, automated testing tools for web applications" />
        {/* Social Media */}
        <meta property="og:title" content="Boost Efficiency with Our Expert Automation Testing Services"/>
        <meta property="og:description" content="Let our automation testing services take the hassle out of testing, ensuring consistent, bug-free software while saving you time and effort."/>
        <meta property="og:keywords" content="automation testing services, automated testing as a service, automation testing service, software test automation companies, automated testing tools for web applications" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/quality-assurance/automation-testing"/>
      </Helmet>

      <div className='flex flex-col gap-24 lg:gap-28'>
        <Banner/>
        <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
          <IndustriesMenu sectionsMenu={sectionsMenu}/>

          <section id='section1'><Overview/></section>

          <section id='section2'>
          <div className='w-[90%] mx-auto'>
              <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                  <h2 className='custom-sub-heading'>Our Automation Testing Services</h2>
                  <p className='custom-gradient-text'>Automated QA services beyond traditional boundaries</p>
              </div>
            <DevelopmentServices/>
            </div>
          </section>

          <section id='section3'>
          <div className="w-[90%] text-center font-raleway space-y-3 mb-10 max-w-[800px] mx-auto">
              <p className='custom-sub-heading'>Our Automation Testing Process</p>
              <p className='custom-gradient-text'>Strategic Quality Engineering for Maximum Business Impact</p>
            </div>
            <TimeLineFlow/>
          </section>

          <section id='section4'>
            <TechStackSlider title="Tech Stack" heading="Powering Intelligent Test Automation"/>
          </section>

          <section id='section5'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
              <div className='font-raleway'>
                  <div className='w-[90%] text-center mb-10 mx-auto'>
                      <p className='custom-sub-heading'>Why Choose Altumind</p>
                      <h2 className='custom-gradient-text max-w-[700px]'>
                        {/* The Automation Excellence Advantage */}
                        Boost Quality and Speed with Automated Software Testing Services
                        </h2>
                  </div>
                  <WhyChooseUs/>
              </div>
            </div>
          </section>
          
          <section id='section6'>
            <div className='w-[90%] mx-auto'>
              <div className="text-center font-raleway space-y-3 mb-10">
                <p className='custom-sub-heading'>Benefits</p>
                <p className='custom-gradient-text'>Automation Solutions That Deliver Results</p>
              </div>
              <SettingUpForSuccess/>
            </div>
          </section>


          <section id='section7'>
            <div className='font-raleway dark:text-white'>
                  <div className='w-[90%] max-w-[820px] text-center mb-10 mx-auto'>
                    <div className='text-center mb-5 sm:mb-10'>
                      <p className='custom-sub-heading'>Industry Expertise</p>
                      <p className='custom-gradient-text'>Precision Testing for Diverse Industry Landscapes</p>
                    </div>
                    <p className='text-xs md:text-sm font-medium'>Leveraging domain-specific testing frameworks and deep compliance expertise to deliver industry-tailored automation testing solutions.</p>
                  </div>
                  <IndustriesSlider/>
            </div>
          </section>

          <section id='section8'>
            <div className="w-[90%] mx-auto text-center font-raleway space-y-3 mb-10">
            <p className='custom-sub-heading'>Insights</p>
            <p className='custom-gradient-text'>Dive into Our Latest Perspectives</p>
            </div>
            <InsightsBlogs/>
          </section>

          <section id='section9'><FAQ/></section>
          
        </div>
      <SubscribeForm/>
      </div>
    </>
  )
}

export default AutomationTesting