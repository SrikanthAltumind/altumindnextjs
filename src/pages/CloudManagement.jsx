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
import PlatformExpertise from "../Components/services-common/PlatformExpertise"

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
 
const CloudManagement = () => {
  return (
    <>
    <Helmet>
        {/* SEO */}
        <title>Cloud Management Solutions | Trusted Cloud Management Company</title>
        <meta name="description" content="Get the most out of your cloud with our cloud management solutions. Partner with our cloud management company to optimize performance and reduce operational costs." />
        <meta name="keywords" content="cloud management solutions, managed cloud service, cloud computing managed services, cloud management companies, cloud management company" />
        {/* Social Media */}
        <meta property="og:title" content="Cloud Management Solutions | Trusted Cloud Management Company"/>
        <meta property="og:description" content="Get the most out of your cloud with our cloud management solutions. Partner with our cloud management company to optimize performance and reduce operational costs."/>
        <meta property="og:keywords" content="cloud management solutions, managed cloud service, cloud computing managed services, cloud management companies, cloud management company" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/managed-operations/cloud-management"/>
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
                  <p className='custom-sub-heading'>Our Cloud Management Services</p>
                  <p className='custom-gradient-text'>Transforming Cloud Infrastructure into Strategic Business Assets</p>
              </div>
              <DevelopmentServices/>
            </div>
          </section>
    
          <section id='section3'>
          <div className='font-raleway dark:text-white'>
            <div className='text-center mb-8 max-w-[700px] mx-auto'>
                <h2 className='custom-sub-heading'>Our Implementation Process</h2>
                <p className='custom-gradient-text'>Structured Steps to Cloud Excellence</p>
            </div>
            <TimeLineFlow/>
          </div>
        </section>
    
        <section id='section4'>
          <PlatformExpertise/>
        </section>
    
        <section id='section5'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='w-[90%] mx-auto font-raleway'>
                <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
                    <p className='custom-sub-heading'>Why Choose Altumind</p>
                    <h2 className='custom-gradient-text'>
                      {/* Your Strategic Partner for Cloud Excellence */}
                      Your Trusted Cloud Management Company for Seamless Solutions
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
          Delivering Enterprise Value Through Expert Management
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
                    <p className='text-[13px] mb-5 font-medium'>Strategic cloud operations and infrastructure management that transforms business capabilities into scalable, efficient solutions across industries.</p>
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
 
export default CloudManagement