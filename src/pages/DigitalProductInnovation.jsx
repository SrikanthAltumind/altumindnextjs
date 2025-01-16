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
import TechStackSlider from "../Components/services-common/TechStackSlider"
import DesignServices from "../Components/UIUXCX-components/DesignServices"

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
 
const DigitalProductInnovation = () => {
  return (
    <>
    <Helmet>
        {/* SEO */}
        <title>Best Product Development and Innovation in the Industry</title>
        <meta name="description" content="Let’s turn your vision into reality. Our product development and innovation services help you build products that stand out and drive real business growth." />
        <meta name="keywords" content="product development and innovation, innovation and new product development, product innovation and design, innovations products, innovation in product design, innovative product design" />
        {/* Social Media */}
        <meta property="og:title" content="Best Product Development and Innovation in the Industry"/>
        <meta property="og:description" content="Let’s turn your vision into reality. Our product development and innovation services help you build products that stand out and drive real business growth."/>
        <meta property="og:keywords" content="product development and innovation, innovation and new product development, product innovation and design, innovations products, innovation in product design, innovative product design" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/managed-operations/product-innovation-management"/>
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
                  <p className='custom-sub-heading'>Our Digital Product Innovation Services</p>
                  <p className='custom-gradient-text'>Transforming Ideas into Market-Leading Digital Experiences</p>
              </div>
              <DesignServices/>
            </div>
          </section>
    
          <section id='section3'>
          <div className='font-raleway dark:text-white'>
            <div className='text-center mb-8 max-w-[700px] mx-auto'>
                <h2 className='custom-sub-heading'>Our Implementation Process</h2>
                <p className='custom-gradient-text'>Structured Steps to Digital Product Success</p>
            </div>
            <TimeLineFlow/>
          </div>
        </section>
    
        <section id='section4'>
          <TechStackSlider title="Tech Stack" heading="Powering Innovation Through Strategic Technology Choices"/>
        </section>
    
        <section id='section5'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='w-[90%] mx-auto font-raleway'>
                <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
                    <p className='custom-sub-heading'>Why Choose Us?</p>
                    <p className='custom-gradient-text'>Your Strategic Partner for Digital Innovation</p>
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
          Creating Digital Products That Drive Real Results
          </p>
        </div>
            <SettingUpForSuccess/>
        </section>
    
        <section id='section7'>
          <div className='font-raleway text-center dark:text-white'>
                <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
                  <div className='text-center space-y-3 mb-10 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Driving Digital Innovation Across Sectors</p>
                    <p className='text-[13px] mb-5 font-medium'>Designing innovative digital experiences into seamless solutions while shaping unique product identities for each market segment.</p>
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
 
export default DigitalProductInnovation
