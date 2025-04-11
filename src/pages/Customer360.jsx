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
 
const Customer360 = () => {
  return (
    <>
    <Helmet>
        {/* SEO */}
        <meta name="title" content="Customer 360 Analytics | Enhance 360 Customer Experience" />
        <meta name="description" content="Get a complete view of your customers with 360 customer experience and customer 360 analytics. Use insights to create more personalized and meaningful interactions." />
        <meta name="keywords" content="360 customer experience, 360 degree customer inc, 360 sales, customer 360 analytics, 360 customer view" />
        {/* Social Media */}
        <meta property="og:title" content="Customer 360 Analytics | Enhance 360 Customer Experience"/>
        <meta property="og:description" content="Get a complete view of your customers with 360 customer experience and customer 360 analytics. Use insights to create more personalized and meaningful interactions."/>
        <meta property="og:keywords" content="360 customer experience, 360 degree customer inc, 360 sales, customer 360 analytics, 360 customer view" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/data-analytics/customer-360"/>
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
               <p className='custom-sub-heading'>Our customer 360 analytics Services</p>
               <p className='custom-gradient-text'>Comprehensive Solutions for a 360° Customer Experience</p>
           </div>
           <DevelopmentServices/>
         </div>
       </section>
 
       <section id='section3'>
       <div className='font-raleway dark:text-white'>
         <div className='text-center mb-8 max-w-[700px] mx-auto'>
             <h2 className='custom-sub-heading'>Our customer 360 Process</h2>
             <p className='custom-gradient-text'>Building a Unified Customer Profile, Step by Step</p>
         </div>
         <TimeLineFlow/>
       </div>
     </section>
 
     <section id='section4'>
       <TechStackSlider  title="Tech Stack" heading="Powering Customer 360 with Cutting-Edge Technology"/>
     </section>
 
     <section id='section5'>
       <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
         <div className='w-[90%] mx-auto font-raleway'>
             <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
                 <p className='custom-sub-heading'>Why Choose Altumind</p>
                 <h2 className='custom-gradient-text'>
                  {/* Get Unmatched Expertise and Results-Driven Solutions */}
                  Unlock Insights and Drive Growth with Customer 360 Analytics
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
       Driving Growth with a 360° Customer Approach
       </p>
     </div>
         <SettingUpForSuccess/>
     </section>
 
     <section id='section7'>
       <div className='font-raleway text-center dark:text-white'>
             <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
               <div className='text-center space-y-3 mb-10 sm:mb-10'>
                 <p className='custom-sub-heading'>Industry Expertise</p>
                 <p className='custom-gradient-text'>Empowering Industries with 360 Customer Experience Solutions</p>
                 <p className='text-[13px] mb-5 font-medium'>Our customer 360 Services cater to the unique challenges and aspirations of various industries, delivering actionable insights to fuel innovation and growth.</p>
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
 
export default Customer360