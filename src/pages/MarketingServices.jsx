import TimeLineFlow from "../Components/common-components/TimeLineFlow"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Banner from "../Components/UIUXCX-components/Banner"
import Overview from "../Components/UIUXCX-components/Overview"
import PlatformExpertise from "../Components/services-common/PlatformExpertise" 
import WhyChooseUs from "../Components/UIUXCX-components/WhyChooseUs"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import IndustriesSlider from "../Components/services-common/IndustriesSlider"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import FAQ from "../Components/agiliti-components/FAQ"
import SubscribeForm from "../Components/common-components/SubscribeForm"
// import DevelopmentServices from "../Components/services-common/DevelopmentServices"
// import DesignServices from "../Components/UIUXCX-components/DesignServices"
import { Helmet } from "react-helmet-async"
import DesignServices from "../Components/UIUXCX-components/DesignServices"

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Process'},
    {id:'section4', tabId:'tab4', name:'Benefits'},
    {id:'section5', tabId:'tab5', name:'Why Us?'},
    {id:'section6', tabId:'tab6', name:'Expertise'},
    {id:'section7', tabId:'tab7', name:'Insights'},
    {id:'section8', tabId:'tab8', name:'FAQ'},
]

const MarketingServices = () => {
  return (
   <>
   <Helmet>
        {/* SEO */}
        <meta name="title" content="Marketing Services | Leading Marketing Operations Consultant" />
        <meta name="description" content="Drive success with marketing as a service. Our marketing operations consultant offers strategic support to enhance your marketing processes and outcomes." />
        <meta name="keywords" content="marketing as a service, market service, international marketing services, brand marketing services, marketing operations consultant, marketing services consultant, marketing it consulting services" />
        {/* Social Media */}
        <meta property="og:title" content="Marketing Services | Leading Marketing Operations Consultant"/>
        <meta property="og:description" content="Drive success with marketing as a service. Our marketing operations consultant offers strategic support to enhance your marketing processes and outcomes."/>
        <meta property="og:keywords" content="marketing as a service, market service, international marketing services, brand marketing services, marketing operations consultant, marketing services consultant, marketing it consulting services" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/digital-marketing/marketing-services"/>
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
               <p className='custom-sub-heading'>Our Integrated Digital Marketing Services</p>
               <p className='custom-gradient-text'>Scale Smarter with Integrated Marketing Solutions</p>
           </div>
           {/* <DevelopmentServices/> */}
           <DesignServices/>
           </div>
       </section>

       <section id='section3'>
       <div className='font-raleway dark:text-white'>
         <div className='text-center mb-8 space-y-3 max-w-[700px] mx-auto'>
             <h2 className='custom-sub-heading'>Our Implementation process</h2>
             <p className='custom-gradient-text'>Strategic Roadmap to Marketing Success</p>
             <p className="text-[13px] font-medium mb-3">Our proven six-step implementation methodology ensures seamless RPA adoption and sustainable automation success.</p>
         </div>
         <TimeLineFlow/> 
       </div>
     </section>

     <div>
       {/* <TechStackSlider/> */}
       <PlatformExpertise/>
       </div>

       <section id='section4'>
     <div className="text-center space-y-3 max-w-[750px] mx-auto mb-20 font-raleway">
       <p className="custom-sub-heading">
       Benefits
       </p>
       <p className="custom-gradient-text">
       Driving Marketing Excellence
       </p>
     </div>
         <SettingUpForSuccess/> 
     </section>

     <section id='section5'>
       <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
         <div className='w-[90%] mx-auto font-raleway'>
             <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
                 <p className='custom-sub-heading'>Why Choose Altumind</p>
                 <h2 className='custom-gradient-text'>
                  {/* The Altumind Advantage: Your Strategic Marketing Partner */}
                  Power Your Brand Strategy via Brand Marketing Services
                  </h2>
             </div>
             <WhyChooseUs/>
         </div>
       </div>
     </section>

   

     <section id='section6'>
       <div className='font-raleway text-center dark:text-white'>
             <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
               <div className='text-center space-y-3 mb-10 sm:mb-10'>
                 <p className='custom-sub-heading'>Industry Expertise</p>
                 <p className='custom-gradient-text'>Powering Marketing Innovation Across Sectors</p>
                 <p className='text-[13px] mb-5 font-medium'>Our marketing expertise spans diverse industries:</p>
               </div>
             </div>
             <IndustriesSlider/>
       </div>
     </section>

     <section id='section7'>
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

     <section id='section8'><FAQ/></section> 
     </div>
     <SubscribeForm/>
 </div>
   </>
  )
}

export default MarketingServices