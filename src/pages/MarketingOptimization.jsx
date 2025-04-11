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
import DesignServices from "../Components/UIUXCX-components/DesignServices"
import { Helmet } from "react-helmet-async"

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

const MarketingOptimization = () => {
  return (
    <>
    <Helmet>
        {/* SEO */}
        <meta name="title" content="Marketing Optimization Services | Expert Optimization Consultant" />
        <meta name="description" content="Want to optimize your marketing? Our optimization services, led by an expert optimization consultant, help you streamline strategies and achieve better results." />
        <meta name="keywords" content="optimization services, optimization in digital marketing, optimization and marketing, internet marketing optimization company, optimization consultant" />
        {/* Social Media */}
        <meta property="og:title" content="Marketing Optimization Services | Expert Optimization Consultant"/>
        <meta property="og:description" content="Want to optimize your marketing? Our optimization services, led by an expert optimization consultant, help you streamline strategies and achieve better results."/>
        <meta property="og:keywords" content="optimization services, optimization in digital marketing, optimization and marketing, internet marketing optimization company, optimization consultant" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/digital-marketing/marketing-optimization"/>
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
               <p className='custom-sub-heading'>Our Marketing Optimization Services</p>
               <p className='custom-gradient-text'>Scale Smarter with Integrated Optimization Solutions</p>
           </div>
           <DesignServices/>
         </div>
       </section>

       <section id='section3'>
       <div className='font-raleway dark:text-white'>
         <div className='text-center mb-8 max-w-[700px] mx-auto'>
             <h2 className='custom-sub-heading'>Our Implementation Process</h2>
             <p className='custom-gradient-text'>Strategic Roadmap to Optimization Success</p>
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
                  {/* Your Strategic Optimization Partner */}
                  Drive Results with Expert Marketing Optimization Consulting
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
       Measurable Results That Matter
       </p>
     </div>
         <SettingUpForSuccess/> 
     </section>

     <section id='section7'>
       <div className='font-raleway text-center dark:text-white'>
             <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
               <div className='text-center space-y-3 mb-10 sm:mb-10'>
                 <p className='custom-sub-heading'>Industry Expertise</p>
                 <p className='custom-gradient-text'>Powering Optimization Innovation Across Sectors</p>
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

export default MarketingOptimization