import { Helmet } from "react-helmet-async"
import Banner from "../Components/UIUXCX-components/Banner"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Overview from "../Components/UIUXCX-components/Overview"
import TimeLineFlow from "../Components/common-components/TimeLineFlow"
import TechStackSlider from "../Components/services-common/TechStackSlider"
import WhyChooseUs from "../Components/UIUXCX-components/WhyChooseUs"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import FAQ from "../Components/agiliti-components/FAQ"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import DevelopmentServices from "../Components/services-common/DevelopmentServices"
import IndustriesSlider from "../Components/services-common/IndustriesSlider"


const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Process'},
    {id:'section4', tabId:'tab4', name:'Tech Stack'},
    {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
    {id:'section6', tabId:'tab6', name:'Benefits'},
    {id:'section7', tabId:'tab7', name:'Industries'},
    {id:'section8', tabId:'tab8', name:'Testimonials'},
    {id:'section9', tabId:'tab9', name:'Success'},
    {id:'section10', tabId:'tab10', name:'Insights'},
    {id:'section11', tabId:'tab11', name:'FAQ'},
]

const WebDevelopment = () => {

  return (
    <>
    <Helmet>
        {/* SEO */}
        <meta name="title" content="Web Development Services | Top Website Development Company" />
        <meta name="description" content="Get custom web development services from an experienced website development company, designing responsive, scalable websites that drive results." />
        <meta name="keywords" content="web development services, custom web development services, web application development services, web app development, website development company, custom website development company, web development consulting services" />
        {/* Social Media */}
        <meta property="og:title" content="Web Development Services | Top Website Development Company"/>
        <meta property="og:description" content="Get custom web development services from an experienced website development company, designing responsive, scalable websites that drive results."/>
        <meta property="og:keywords" content="web development services, custom web development services, web application development services, web app development, website development company, custom website development company, web development consulting services" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/technology-and-engineering/web-development"/>
      </Helmet>

    <div className='flex flex-col gap-24 lg:gap-28'>
      <Banner/>
      <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={sectionsMenu}/>

        <section id='section1'><Overview/></section>

        <section id='section2'>
        <div className='w-[90%] mx-auto'>
            <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                <h2 className='custom-sub-heading'>Our Web Development Services</h2>
                <p className='custom-gradient-text'>Transforming Ideas into High-Performance Digital Assets</p>
            </div>
           <DevelopmentServices/>
          </div>
        </section>

        <section id='section3'>
          <div className='font-raleway dark:text-white'>
            <div className='text-center mb-8 max-w-[700px] mx-auto'>
                <h2 className='custom-sub-heading'>Our Web Development process</h2>
                <p className='custom-gradient-text'>Strategic Development for Maximum Business Impact</p>
            </div>
            <TimeLineFlow/>
          </div>
        </section>

        <section id='section4'>
          <TechStackSlider title="Tech Stack" heading="Core technologies behind our advanced web solutions"/>
        </section>

        <section id='section5'>
        <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='font-raleway'>
                <div className="text-center font-raleway space-y-3 mb-10">
                    <p className='custom-sub-heading'>Why Choose Altumind</p>
                    <h2 className='custom-gradient-text max-w-[700px]'>
                    {/* The Altumind Advantage: <br/>Your Web Solutions Partner */}
                    Drive Innovation Through Web Development Consulting Services
                    </h2>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>

        <section id='section6'>
            <div className="text-center font-raleway space-y-3 mb-10">
              <p className='custom-sub-heading'>Benefits</p>
              <p className='custom-gradient-text'>Empowering Your Digital Journey</p>
            </div>
            <SettingUpForSuccess/>
        </section>


        <section id='section7'>
          <div className='font-raleway text-center dark:text-white'>
               <div className='w-[90%] max-w-[800px] text-center mb-10 mx-auto'>
                  <div className='text-center mb-5 sm:mb-10'>
                    <p className='custom-sub-heading'>Industry Expertise</p>
                    <p className='custom-gradient-text'>Digital Disruption Across Industries</p>
                  </div>
                  <p className='text-xs md:text-sm font-medium'>Our web development consulting services can deliver specialized web solutions that align with your industry&apos;s unique demands and regulations.</p>
                </div>
                <IndustriesSlider/>
          </div>
        </section>

        <section id='section8'>
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className='custom-sub-heading'>Client Testimonials</p>
          <p className='custom-gradient-text'>The Altumind Impact: In Their Words</p>
          </div>
          <Testimonials/>
        </section>

        <section id='section9'>
          <SuccessStories heading="Empowering Businesses Across the Spectrum"/>
        </section>

        <section id='section10'>
        <div className="text-center font-raleway space-y-3 mb-10">
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

export default WebDevelopment