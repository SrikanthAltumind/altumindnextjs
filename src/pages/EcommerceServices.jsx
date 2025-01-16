import Overview from '../Components/UIUXCX-components/Overview'
import WhyChooseUs from '../Components/UIUXCX-components/WhyChooseUs'
import Banner from '../Components/UIUXCX-components/Banner'
import SettingUpForSuccess from '../Components/services-common/SettingUpForSuccess'
import { Helmet } from 'react-helmet-async'
import DesignServices from '../Components/UIUXCX-components/DesignServices'
import TechStackSlider from '../Components/services-common/TechStackSlider'
import Testimonials from '../Components/common-components/Testimonials'
import SuccessStories from '../Components/home-components/SuccessStories'
import InsightsBlogs from '../Components/common-components/InsightsBlogs'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import IndustriesMenu from '../Components/industries-common/IndustriesMenu'
import PlatformExpertise from '../Components/services-common/PlatformExpertise'
import EcommerceSolutions from '../Components/services-common/EcommerceSolutions'
import IndustriesSlider from '../Components/services-common/IndustriesSlider'
import FAQ from '../Components/agiliti-components/FAQ'

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Expertise'},
    {id:'section4', tabId:'tab4', name:'Solutions'},
    {id:'section5', tabId:'tab5', name:'Tech Stack'},
    {id:'section6', tabId:'tab6', name:'Why Choose Us?'},
    {id:'section7', tabId:'tab7', name:'Benefits'},
    {id:'section8', tabId:'tab8', name:'Industries'},
    {id:'section9', tabId:'tab9', name:'Testimonials'},
    {id:'section10', tabId:'tab10', name:'Success'},
    {id:'section11', tabId:'tab11', name:'Insights'},
    {id:'section12', tabId:'tab12', name:'FAQ'},
]

const EcommerceServices = () => {

  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>Expert Ecommerce Services | Ecommerce Retail Specialists</title>
        <meta name="description" content="Partner with ecommerce retail specialists for premium ecommerce services. We craft tailored solutions to enhance your online store's performance." />
        <meta name="keywords" content="ecommerce services, ecommerce development services, Omni commerce, Headless Ecommerce Solutions, ecommerce retail specialist, ecommerce consulting services, retail marketing solutions" />
        {/* Social Media */}
        <meta property="og:title" content="Expert Ecommerce Services | Ecommerce Retail Specialists"/>
        <meta property="og:description" content="Partner with ecommerce retail specialists for premium ecommerce services. We craft tailored solutions to enhance your online store's performance."/>
        <meta property="og:keywords" content="ecommerce services, ecommerce development services, Omni commerce, Headless Ecommerce Solutions, ecommerce retail specialist, ecommerce consulting services, retail marketing solutions" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/technology-and-engineering/ecommerce-services"/>
      </Helmet>

    <div className='flex flex-col gap-24 lg:gap-28'>
      <Banner/>
      <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={sectionsMenu}/>

        <section id='section1'><Overview/></section>

        <section id='section2'>
        <div className='w-[90%] mx-auto'>
            <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                <h2 className='custom-sub-heading'>Our E- commerce Services</h2>
                <p className='custom-gradient-text'>Elevate Your Digital Commerce with End-to-End Solutions</p>
            </div>
           <DesignServices/> 
          </div>
        </section>

        <section id='section3'><PlatformExpertise/></section>

        <section id='section4'>
          <div className='w-[90%] max-w-[950px] mx-auto'>
            <div className='font-raleway text-center mb-10'>
              <p className='custom-sub-heading'>Our E-commerce Solutions</p>
              <p className='custom-gradient-text'>Maximize Online Revenue & Customer Loyalty with Our tailored Solutions</p>
            </div>
            <EcommerceSolutions/>
          </div>
        </section>

        <section id='section5'>
          <TechStackSlider title="Tech Stack" heading='Core Technologies Behind Our Mobile App Development Services'/>
        </section>

        <section id='section6'>
        <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='font-raleway'>
                <div className='text-center mb-10'>
                    <p className='custom-sub-heading'>Why Choose Us?</p>
                    <p className='custom-gradient-text'>Your Trusted E-commerce <br/> Development Partner</p>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>

        <section id='section7'>
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Benefits</p>
          <p className='custom-gradient-text'>Accelerate Your Growth with E-commerce Excellence</p>
          </div>
            <SettingUpForSuccess/>
        </section>


        <section id='section8'>
          <div className='font-raleway text-center dark:text-white'>
              <div className='w-[90%] max-w-[800px] text-center mb-10 mx-auto'>
                  <div className='text-center mb-5 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Powering E-commerce Success Across Industries</p>
                  </div>
                  <p className='text-xs md:text-sm font-medium'>We deliver custom e-commerce solutions that address unique challenges and opportunities across various sectors, driving digital transformation and sustainable growth.</p>
                </div>
                <IndustriesSlider/>
          </div>
        </section>

        <section id='section9'>
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Client Testimonials</p>
          <p className='custom-gradient-text'>The Altumind Impact: In Their Words</p>
          </div>
          <Testimonials/>
        </section>

        <section id='section10'>
          <SuccessStories heading="Empowering Businesses Across the Spectrum"/>
        </section>

        <section id='section11'>
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Insights</p>
          <p className='custom-gradient-text'>Dive into Our Latest Perspectives</p>
          </div>
          <InsightsBlogs/>
        </section>

        <section id='section12'><FAQ/></section>
        
      </div>
      <SubscribeForm/>
    </div>
    </>
  )
}

export default EcommerceServices