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
import DevelopmentServices from "../Components/services-common/DevelopmentServices"
import TechStackSlider from "../Components/services-common/TechStackSlider"
import { Helmet } from "react-helmet-async"

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

const DigitalModernization = () => {
  return (
    <>
    <Helmet>
        {/* SEO */}
        <title>Digital Modernization | Modernizing Technology & Digital Solutions</title>
        <meta name="description" content="Ready to transform? Our digital modernization services help you modernizing technology, streamline operations, and stay ahead in a fast-changing world." />
        <meta name="keywords" content="modernizing technology, modernize tech, application modernization services, digital modernization, digitalization services" />
        {/* Social Media */}
        <meta property="og:title" content="Digital Modernization | Modernizing Technology & Digital Solutions"/>
        <meta property="og:description" content="Ready to transform? Our digital modernization services help you modernizing technology, streamline operations, and stay ahead in a fast-changing world."/>
        <meta property="og:keywords" content="modernizing technology, modernize tech, application modernization services, digital modernization, digitalization services" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/digital-strategy-consulting/digital-modernization"/>
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
            <p className='custom-sub-heading'>Our Digital Modernization Services</p>
            <p className='custom-gradient-text'>Transformative Services Tailored to Your Needs</p>
        </div>
        <DevelopmentServices/>
      </div>
    </section>

    <section id='section3'>
    <div className='font-raleway dark:text-white'>
      <div className='text-center mb-8 max-w-[700px] mx-auto'>
          <h2 className='custom-sub-heading'>Our Digital Modernization Process</h2>
          <p className='custom-gradient-text'>Building Future-Ready Solutions with Digital Modernization</p>
      </div>
      <TimeLineFlow/> 
    </div>
  </section>

  <section id='section4'>
    <TechStackSlider title="Tech Stack" heading="Optimized Technology Stack for Superior Performance"/>
  </section>

  <section id='section5'>
    <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
      <div className='w-[90%] mx-auto font-raleway'>
          <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
              <p className='custom-sub-heading'>Why Choose Altumind</p>
              <h2 className='custom-gradient-text'>
                {/* Your Partner in Transforming Challenges into Opportunities */}
                Drive Growth by Modernizing Technology for Future-Ready Solutions
                </h2>
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
    Achieve More with Digital Modernization
    </p>
  </div>
      <SettingUpForSuccess/> 
  </section>

  <section id='section7'>
    <div className='font-raleway text-center dark:text-white'>
          <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
            <div className='text-center space-y-3 mb-10 sm:mb-10'>
              <p className='custom-sub-heading'>Industry Expertise</p>
              <p className='custom-gradient-text'>Redefining Industries with Tailored Digital Modernization Services</p>
              <p className='text-[13px] mb-5 font-medium'>Our Digital Modernization Services are designed to cater to the specific demands of diverse industries, enabling them to achieve operational excellence and future-ready technology landscapes. We&apos;ll help you stay ahead of the curve by modernizing technology-transform outdated systems, enhance efficiency, and future-proof your business with cutting-edge digital solutions.</p>
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

export default DigitalModernization