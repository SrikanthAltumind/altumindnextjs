import TimeLineFlow from "../Components/common-components/TimeLineFlow"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Banner from "../Components/UIUXCX-components/Banner"
import Overview from "../Components/UIUXCX-components/Overview"
import WhyChooseUs from "../Components/UIUXCX-components/WhyChooseUs"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import FAQ from "../Components/agiliti-components/FAQ"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import { Helmet } from "react-helmet-async"
import PlatformExpertise from "../Components/services-common/PlatformExpertise"
import DesignServices from "../Components/UIUXCX-components/DesignServices"
import IndustryExpertise from "../Components/Branding-and-Design/IndustryExpertise"
import OurCommitment from "../Components/Branding-and-Design/OurCommitment"

const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Approach'},
    {id:'section4', tabId:'tab4', name:'Tech Stack'},
    {id:'section5', tabId:'tab5', name:'Why Us?'},
    {id:'section6', tabId:'tab6', name:'Expertise'},
    {id:'section7', tabId:'tab7', name:'Insights'},
    {id:'section8', tabId:'tab8', name:'Commitments'},
    {id:'section9', tabId:'tab9', name:'FAQ'},
]

const BrandingAndDesign = () => {
  return (
   <>
   <Helmet>
        {/* SEO */}
        <title>Branding Design Services | Leading Brand Design Consultation</title>
        <meta name="description" content="Get expert branding design services and brand design consultation to create a powerful brand identity that stands out and drives growth." />
        <meta name="keywords" content="branding design services, brand identity services, graphic design and branding services, logo design and branding services, brand design consultation, brand consulting and design, brand strategy design consultancy" />
        {/* Social Media */}
        <meta property="og:title" content="Branding Design Services | Leading Brand Design Consultation"/>
        <meta property="og:description" content="Get expert branding design services and brand design consultation to create a powerful brand identity that stands out and drives growth."/>
        <meta property="og:keywords" content="branding design services, brand identity services, graphic design and branding services, logo design and branding services, brand design consultation, brand consulting and design, brand strategy design consultancy" />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/digital-marketing/branding-design"/>
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
               <p className='custom-sub-heading'>Our Key Services</p>
               <p className='custom-gradient-text'>Innovative Visual Solutions for Modern Brands</p>
           </div>
           <DesignServices/>
         </div>
       </section>

       <section id='section3'>
       <div className='font-raleway dark:text-white'>
         <div className='text-center mb-8 max-w-[700px] mx-auto'>
             <h2 className='custom-sub-heading'>Our Approach</h2>
             <p className='custom-gradient-text'>Designing Tomorrow&apos;s Digital Identity</p>
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
                  {/* Your Competitive Edge in Brand Innovation */}
                  Craft Your Legacy with our Brand Design Consultation
                  </h2>
             </div>
             <WhyChooseUs/>
         </div>
       </div>
     </section>

     <section id='section6'>
     <div className="text-center space-y-3 max-w-[750px] mx-auto mb-20 font-raleway">
       <p className="custom-sub-heading">
       Industry Expertise
       </p>
       <p className="custom-gradient-text">
       Tailored Branding Solutions Across Diverse Sectors
       </p>
       <p className="text-[13px] mb-5 font-medium">Crafting distinctive visual identities that resonate with the unique challenges and opportunities of each industry.</p>
     </div>
        <IndustryExpertise/>
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

     <section id='section8'>
     <div className="text-center space-y-3 max-w-[750px] mx-auto mb-20 font-raleway">
       <p className="custom-sub-heading">
       Our Commitment
       </p>
       <p className="custom-gradient-text">
       Creating Strategic Brand Experiences
       </p>
       <p className="text-[13px] mb-5 font-medium">We don&apos;t just design brands; we architect digital experiences that drive business growth. Our multidisciplinary team combines strategic thinking, technological expertise, and creative excellence to deliver brand solutions that are:</p>
     </div>
     <OurCommitment/>
     </section>

     <section id='section9'><FAQ/></section> 
     </div>
     <SubscribeForm/>
 </div>
   </>
  )
}

export default BrandingAndDesign