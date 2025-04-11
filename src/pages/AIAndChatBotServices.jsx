import Overview from '../Components/UIUXCX-components/Overview'
import WhyChooseUs from '../Components/UIUXCX-components/WhyChooseUs'
import FAQ from "../Components/agiliti-components/FAQ"
import Banner from '../Components/UIUXCX-components/Banner'
import SettingUpForSuccess from '../Components/services-common/SettingUpForSuccess'
import { Helmet } from 'react-helmet-async'
import IndustriesSlider from '../Components/services-common/IndustriesSlider'
import PlatformExpertise from '../Components/services-common/PlatformExpertise'
import DevelopmentServices from '../Components/services-common/DevelopmentServices'
import TechStackSlider from '../Components/services-common/TechStackSlider'
import InsightsBlogs from '../Components/common-components/InsightsBlogs'
import SuccessStories from '../Components/home-components/SuccessStories'
import Testimonials from '../Components/common-components/Testimonials'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import IndustriesMenu from '../Components/industries-common/IndustriesMenu'
import WhyAltumind from '../Components/services-common/WhyAltumind'

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Frameworks'},
    {id:'section4', tabId:'tab4', name:'Use Cases'},
    {id:'section5', tabId:'tab5', name:'Tech Stack'},
    {id:'section6', tabId:'tab6', name:'Why Choose Us?'},
    {id:'section7', tabId:'tab7', name:'Benefits'},
    {id:'section8', tabId:'tab8', name:'Industries'},
    {id:'section9', tabId:'tab9', name:'Testimonials'},
    {id:'section10', tabId:'tab10', name:'Success'},
    {id:'section11', tabId:'tab11', name:'Insights'},
    {id:'section12', tabId:'tab12', name:'FAQ'},
]

const AIAndChatBotServices = () => {

  return (
    <>
   <Helmet>
        {/* SEO */}
        <meta name="title" content='Top Conversational AI Companies | AI Chatbot Services' />
        <meta name="description" content="Maximize efficiency with AI chatbot service. Our conversational ai automation offer automated support, faster resolutions, and improved customer satisfaction." />
        <meta name="keywords" content="chatbot services, chatbot development services, chatbot consulting services, ai chatbot service, chatbot solutions, enterprise ai chatbot solution, chatbot solution providers" />
        {/* Social Media */}
        <meta property="og:title" content="Top Conversational AI Companies | AI Chatbot Services"/>
        <meta property="og:description" content="Maximize efficiency with AI chatbot service. Our conversational ai automation offer automated support, faster resolutions, and improved customer satisfaction."/>
        <meta property="og:keywords" content="chatbot services, chatbot development services, chatbot consulting services, ai chatbot service, chatbot solutions, enterprise ai chatbot solution, chatbot solution providers" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/ai-automation/conversational-ai-chatbot"/>
      </Helmet>
    <div className='flex flex-col gap-24 lg:gap-28'>
      <Banner/>
      <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={sectionsMenu}/>

        <section id='section1'><Overview/></section>

        <section id='section2'>
        <div className='w-[90%] mx-auto'>
            <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                <h2 className='custom-sub-heading'>Our Conversational AI & Chatbot Services</h2>
                <p className='custom-gradient-text'>Powering Intelligent Interactions That Scale</p>
            </div>
           <DevelopmentServices/>
          </div>
        </section>

        <section id='section3'>
          <div className='w-[90%] max-w-[580px] mx-auto'>
            <PlatformExpertise/>
          </div> 
        </section>

        <section id='section4'>
        <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                <h2 className='custom-sub-heading'>Why Choose Altumind</h2>
                <h2 className='custom-gradient-text'>
                Transform Engagement with Intelligent Chatbot Solutions
                  {/* Transform Your Business Operations Across Core Functions */}
                  </h2>
            </div>
            <WhyAltumind/>
        </section>

        <section id='section5'>
            <TechStackSlider title="Tech Stack" heading='Powering Seamless Conversational Experiences'/>
        </section>

        <section id='section6'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='font-raleway'>
                <div className='w-[95%] text-center mb-10 mx-auto'>
                    <p className='custom-sub-heading'>Why Choose Us?</p>
                    <p className='custom-gradient-text'>The Altumind Advantage:<br/> Your Trusted Conversational AI Partner</p>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>
        
        <section id='section7'>
        <div className='w-[90%] mx-auto'>
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className='custom-sub-heading'>Benefits</p>
            <p className='custom-gradient-text'>Conversational AI Solutions That Deliver</p>
          </div>
            <SettingUpForSuccess/>
        </div>
        </section>


        <section id='section8'>
          <div className='font-raleway bg-LightBlue dark:bg-DarkBackground py-12 text-center dark:text-white'>
                <div className='w-[90%] max-w-[800px] text-center mb-10 mx-auto'>
                  <div className='text-center mb-5 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Powering Digital Innovation Across Sectors</p>
                  </div>
                  <p className='text-xs md:text-sm font-medium'>Our chatbot development services focus on delivering intelligent AI solutions that revolutionize customer interactions in diverse industries.</p>
                </div>
                <IndustriesSlider/>
          </div>
        </section>

        <section id='section9'>
          <div className="w-[90%] mx-auto text-center font-raleway space-y-3 mb-10">
            <p className='custom-sub-heading'>Client Testimonials</p>
            <p className='custom-gradient-text'>The Altumind Impact: In Their Words</p>
          </div>
          <Testimonials/>
        </section>

        <section id='section10'>
          <SuccessStories heading="Empowering Businesses Across the Spectrum"/>
        </section>

        <section id='section11'>
          <div className="w-[90%] mx-auto text-center font-raleway space-y-3 mb-10">
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

export default AIAndChatBotServices