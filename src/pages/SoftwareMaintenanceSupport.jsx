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

const SoftwareMaintenanceSupport = () => {
  return (
   <>
     <Helmet>
        {/* SEO */}
        <title>Software Maintenance Company | Expert Maintenance Support Services</title>
        <meta name="description" content="Worry less about software issues. Our software maintenance and support services keep your software secure, up-to-date, and performing at its best." />
        <meta name="keywords" content="maintenance support services, software application maintenance, software maintenance and support services, software maintenance company, maintenance support, software support services" />
        {/* Social Media */}
        <meta property="og:title" content="Software Maintenance Company | Expert Maintenance Support Services"/>
        <meta property="og:description" content="Worry less about software issues. Our software maintenance and support services keep your software secure, up-to-date, and performing at its best."/>
        <meta property="og:keywords" content="maintenance support services, software application maintenance, software maintenance and support services, software maintenance company, maintenance support, software support services" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/managed-operations/software-maintenance-support"/>
      </Helmet>
       <div className="flex flex-col gap-24 lg:gap-28">
        <Banner/>
        <div className="-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28">
        <IndustriesMenu sectionsMenu={sectionsMenu}/>
        <section id='section1'>
        <Overview/>
        </section>
        <section id='section2'>
            <div className='w-[90%] mx-auto font-raleway dark:text-white'>
              <div className='text-center mb-10 max-w-[750px] mx-auto'>
                  <p className='custom-sub-heading'>Our Software Maintenance Services</p>
                  <p className='custom-gradient-text'>Maximizing Software ROI Through Strategic Maintenance</p>
              </div>
              <DevelopmentServices/>
            </div>
          </section>
    
          <section id='section3'>
          <div className='font-raleway dark:text-white'>
            <div className='text-center mb-8 max-w-[700px] mx-auto'>
                <h2 className='custom-sub-heading'>Our Implementation Process</h2>
                <p className='custom-gradient-text'>Systematic Approach to Software Excellence</p>
            </div>
            <TimeLineFlow/>
          </div>
        </section>
    
        <section id='section4'>
       <TechStackSlider title="Tech Stack" heading="Powering Software Excellence Through Advanced Technologies"/>
     </section>
    
        <section id='section5'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='w-[90%] mx-auto font-raleway'>
                <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
                    <p className='custom-sub-heading'>Why Choose Us?</p>
                    <p className='custom-gradient-text'>Your Trusted Partner for Software Excellence</p>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>
    
        <section id='section6'>
        <div className="text-center space-y-3 max-w-[750px] mx-auto mb-20 font-raleway">
          <p className="custom-sub-heading">
          Benefits
          </p>
          <p className="custom-gradient-text">
          Delivering Measurable Value Through Expert Maintenance
          </p>
        </div>
            <SettingUpForSuccess/>
        </section>
    
        <section id='section7'>
          <div className='font-raleway text-center dark:text-white'>
                <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
                  <div className='text-center space-y-3 mb-10 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Delivering Excellence Across Sectors</p>
                    <p className='text-[13px] mb-5 font-medium'>We provide strategic software maintenance services that ensure operational excellence across:</p>
                  </div>
                </div>
                <IndustriesSlider/>
          </div>
        </section>
    
        <section id='section8'>
        <div className="text-center max-w-[750px] mx-auto space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
          Insights
          </p>
          <p className="custom-gradient-text">
          Dive into Our Latest Perspectives
          </p>
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

export default SoftwareMaintenanceSupport