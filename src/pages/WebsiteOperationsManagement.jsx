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
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"

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

const WebsiteOperationsManagement = () => {
  return (
    <>
     <Helmet>
        {/* SEO */}
        <meta name="title" content="Website Management Services | Web Operations & Management" />
        <meta name="description" content="Looking for seamless website performance? Our website management services and web operations optimize security, speed, and functionality to keep your site running smoothly." />
        <meta name="keywords" content="website management, website management services, website management companies, Web Operations, website operations, operational website" />
        {/* Social Media */}
        <meta property="og:title" content="Website Management Services | Web Operations & Management"/>
        <meta property="og:description" content="Looking for seamless website performance? Our website management services and web operations optimize security, speed, and functionality to keep your site running smoothly."/>
        <meta property="og:keywords" content="website management, website management services, website management companies, Web Operations, website operations, operational website" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/managed-operations/website-operations-management"/>
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
               <p className='custom-sub-heading'>Our Website Management Services</p>
               <p className='custom-gradient-text'>Transforming Digital Platforms into High-Performance Assets</p>
           </div>
           <DevelopmentServices/>
         </div>
       </section>

       <section id='section3'>
       <div className='font-raleway dark:text-white'>
         <div className='text-center mb-8 max-w-[700px] mx-auto'>
             <h2 className='custom-sub-heading'>Our Implementation Process</h2>
             <p className='custom-gradient-text'>Structured Steps to Operational Excellence</p>
         </div>
         <TimeLineFlow/> 
       </div>
     </section>

     <section id='section4'>
       <TechStackSlider title="Tech Stack" heading="Powering Website Excellence Through Strategic Technology Choices"/>
     </section>

     <section id='section5'>
       <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
         <div className='w-[90%] mx-auto font-raleway'>
             <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
                 <p className='custom-sub-heading'>Why Choose Altumind</p>
                 <h2 className='custom-gradient-text'>
                  {/* Your Strategic Partner for Website Excellence */}
                  Optimize Efficiency with Seamless Website Operations
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
                 <p className='text-[13px] mb-5 font-medium'>Strategic website operations and management that transforms digital presence into measurable business growth across Industries.</p>
               </div>
             </div>
             <IndustriesSlider/>
       </div>
     </section>

     <section id='section8'>
     <div className="text-center space-y-3 max-w-[750px] mx-auto mb-20 font-raleway">
       <p className="custom-sub-heading">
       Client Testimonials
       </p>
       <p className="custom-gradient-text">
       The Altumind Impact: In Their Words
       </p>
     </div>
        <Testimonials/>
     </section>

     <section id="section9">
      <SuccessStories heading="Digital Excellence in Action"/>
     </section>

     <section id='section10'>
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

     <section id='section11'><FAQ/></section> 
     </div>
     <SubscribeForm/>
 </div>
    </>
  )
}

export default WebsiteOperationsManagement