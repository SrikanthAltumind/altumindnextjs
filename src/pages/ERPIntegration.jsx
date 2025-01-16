import Overview from '../Components/UIUXCX-components/Overview'
import WhyChooseUs from '../Components/UIUXCX-components/WhyChooseUs'
import SettingUpForSuccess from '../Components/services-common/SettingUpForSuccess'
import { Helmet } from 'react-helmet-async'
import TechStackSlider from '../Components/services-common/TechStackSlider'
import InsightsBlogs from '../Components/common-components/InsightsBlogs'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import IndustriesMenu from '../Components/industries-common/IndustriesMenu'
import IndustriesSlider from '../Components/services-common/IndustriesSlider'
import PlatformExpertise from '../Components/services-common/PlatformExpertise'
import ERPApproach from '../Components/services-common/ERPApproach'
import DevelopmentServices from '../Components/services-common/DevelopmentServices'
import Banner from '../Components/UIUXCX-components/Banner'
import FAQ from '../Components/agiliti-components/FAQ'

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Support'},
    {id:'section4', tabId:'tab4', name:'Approach'},
    {id:'section5', tabId:'tab5', name:'Tech Stack'},
    {id:'section6', tabId:'tab6', name:'Why Choose Us?'},
    {id:'section7', tabId:'tab7', name:'Benefits'},
    {id:'section8', tabId:'tab8', name:'Industries'},
    {id:'section9', tabId:'tab9', name:'Insights'},
    {id:'section10', tabId:'tab10', name:'FAQ'},
]

const ERPIntegration = () => {

  return (
    <>
      <Helmet>
        {/* SEO */}
        <title>ERP Integration Services | Leading ERP Integration Platform</title>
        <meta name="description" content="Enhance business efficiency with our ERP integration service. Seamlessly connect systems using our powerful ERP integration platform" />
        <meta name="keywords" content="erp integration service, erp integration, erp systems integrators, erp software integration, erp integration platform, erp integrated solutions, integrated erp" />
        {/* Social Media */}
        <meta property="og:title" content="ERP Integration Services | Leading ERP Integration Platform"/>
        <meta property="og:description" content="Enhance business efficiency with our ERP integration service. Seamlessly connect systems using our powerful ERP integration platform"/>
        <meta property="og:keywords" content="erp integration service, erp integration, erp systems integrators, erp software integration, erp integration platform, erp integrated solutions, integrated erp" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/technology-and-engineering/erp-integration"/>
      </Helmet>

    <div className='flex flex-col gap-24 lg:gap-28'>
      <Banner/>
      <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={sectionsMenu}/>

        <section id='section1'><Overview/></section>

        <section id='section2'>
        <div className='w-[90%] mx-auto'>
            <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                <h2 className='custom-sub-heading'>Our ERP Integration Services</h2>
                <p className='custom-gradient-text'>Business Transformative ERP Integration Solutions</p>
            </div>
           <DevelopmentServices/>
          </div>
        </section>

        <section id='section3'><PlatformExpertise/></section>

        <section id='section4'><ERPApproach/></section>

        <section id='section5'>
          <TechStackSlider title="Tech Stack" heading="Cutting-Edge Technologies Powering Your ERP Integration"/>
        </section>

        <section id='section6'>
        <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='font-raleway'>
                <div className='text-center mb-10'>
                    <p className='custom-sub-heading'>Why Choose Us?</p>
                    <p className='custom-gradient-text'>The Altumind Advantage: <br/> Your Trusted ERP Integration Partner</p>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>

        <section id='section7'>
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Benefits</p>
          <p className='custom-gradient-text'>Unleashing the Power of Digital Connectivity</p>
          </div>
            <SettingUpForSuccess/>
        </section>


        <section id='section8'>
          <div className='font-raleway text-center dark:text-white'>
          <div className='w-[90%] max-w-[800px] text-center mb-10 mx-auto'>
                  <div className='text-center mb-5 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Powering Digital Innovation Across Sectors</p>
                  </div>
                  <p className='text-xs md:text-sm font-medium'>We are experts in integrating ERP systems with your critical business applications, unlocking efficiency, productivity, and profitability across your specific sector.</p>
                </div>
                <IndustriesSlider/>
          </div>
        </section>

        <section id='section9'>
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Insights</p>
          <p className='custom-gradient-text'>Dive into Our Latest Perspectives</p>
          </div>
          <InsightsBlogs/>
        </section>

        <section id='section10'><FAQ/></section>
        
      </div>
      <SubscribeForm/>
    </div>
    </>
  )
}

export default ERPIntegration