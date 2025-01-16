import Overview from '../Components/UIUXCX-components/Overview'
import WhyChooseUs from '../Components/UIUXCX-components/WhyChooseUs'
import FAQ from "../Components/agiliti-components/FAQ"
import Banner from '../Components/UIUXCX-components/Banner'
import SettingUpForSuccess from '../Components/services-common/SettingUpForSuccess'
import { Helmet } from 'react-helmet-async'
import IndustriesSlider from '../Components/services-common/IndustriesSlider'
import PlatformExpertise from '../Components/services-common/PlatformExpertise'
import DevelopmentServices from '../Components/services-common/DevelopmentServices'
import InsightsBlogs from '../Components/common-components/InsightsBlogs'
import SuccessStories from '../Components/home-components/SuccessStories'
import Testimonials from '../Components/common-components/Testimonials'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import IndustriesMenu from '../Components/industries-common/IndustriesMenu'
import TimeLineFlow from '../Components/common-components/TimeLineFlow'

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Process'},
    {id:'section4', tabId:'tab4', name:'Partnership'},
    {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
    {id:'section6', tabId:'tab6', name:'Benefits'},
    {id:'section7', tabId:'tab7', name:'Industries'},
    {id:'section8', tabId:'tab8', name:'Testimonials'},
    {id:'section9', tabId:'tab9', name:'Success'},
    {id:'section10', tabId:'tab10', name:'Insights'},
    {id:'section11', tabId:'tab11', name:'FAQ'},
]

const RPAServices = () => {

  return (
      <>
      <Helmet>
        {/* SEO */}
        <title>Efficient RPA Services | Robotic Process Automation Consulting</title>
        <meta name="description" content="Boost efficiency with RPA services. Our robotic process automation consulting helps streamline operations and automate repetitive tasks." />
        <meta name="keywords" content="Automation Services, rpa services, rpa service providers, rpa implementation, robotic process automation consulting, rpa services company" />
        {/* Social Media */}
        <meta property="og:title" content="Efficient RPA Services | Robotic Process Automation Consulting"/>
        <meta property="og:description" content="Boost efficiency with RPA services. Our robotic process automation consulting helps streamline operations and automate repetitive tasks."/>
        <meta property="og:keywords" content="Automation Services, rpa services, rpa service providers, rpa implementation, robotic process automation consulting, rpa services company" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/ai-automation/rpa"/>
      </Helmet>

    <div className='flex flex-col gap-24 lg:gap-28'>
      <Banner/>
      <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={sectionsMenu}/>

        <section id='section1'><Overview/></section>

        <section id='section2'>
        <div className='w-[90%] mx-auto'>
            <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                <h2 className='custom-sub-heading'>Our RPA Services</h2>
                <p className='custom-gradient-text'>Scale Smarter with Intelligent RPA Solutions</p>
            </div>
           <DevelopmentServices/>
          </div>
        </section>

        <section id='section3'>
        <div className="w-[90%] mx-auto text-center font-raleway space-y-3 mb-10">
            <p className='custom-sub-heading'>Our Implementation process</p>
            <p className='custom-gradient-text'>Strategic Roadmap to Automation Success</p>
            <p className='custom-sub-heading'>Our proven six-step implementation methodology ensures seamless RPA adoption and sustainable automation success.</p>
          </div>
          <TimeLineFlow/>
        </section>

        <section id='section4'><PlatformExpertise/></section>

        <section id='section5'>
        <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='font-raleway'>
                <div className='w-[95%] text-center mb-10 mx-auto'>
                    <p className='custom-sub-heading'>Why Choose Us?</p>
                    <p className='custom-gradient-text'>The Altumind Advantage:<br/> Your Trusted RPA Partner</p>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>
        
        <section id='section6'>
          <div className='w-[90%] mx-auto'>
            <div className="text-center font-raleway space-y-3 mb-10">
              <p className='custom-sub-heading'>Benefits</p>
              <p className='custom-gradient-text'>Driving Digital Excellence Through RPA</p>
            </div>
            <SettingUpForSuccess/>
          </div>
        </section>


        <section id='section7'>
          <div className='font-raleway bg-LightBlue dark:bg-DarkBackground py-12 text-center dark:text-white'>
                <div className='w-[90%] max-w-[820px] text-center mb-10 mx-auto'>
                  <div className='text-center mb-5 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Powering Digital Innovation Across Sectors</p>
                  </div>
                  <p className='text-xs md:text-sm font-medium'>Our enterprise RPA expertise modernizes complex business processes, scaling automation success across diverse industries.</p>
                </div>
                <IndustriesSlider/>
          </div>
        </section>

        <section id='section8'>
        <div className="w-[90%] mx-auto text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Client Testimonials</p>
          <p className='custom-gradient-text'>The Altumind Impact: In Their Words</p>
          </div>
          <Testimonials/>
        </section>

        <section id='section9'>
          <SuccessStories heading="Stories of Designs That Drive Results"/>
        </section>

        <section id='section10'>
        <div className="w-[90%] mx-auto text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Insights</p>
          <p className='custom-gradient-text'>Dive into Our Latest Perspectives</p>
          </div>
          <InsightsBlogs/>
        </section>

        <section id='section11'><FAQ/></section>
        
      </div>
     <SubscribeForm/>
    </div>
    </>
  )
}

export default RPAServices