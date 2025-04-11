import { useParams } from "react-router-dom"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import DevelopmentServices from "../Components/services-common/DevelopmentServices"
import IndustriesSlider from "../Components/services-common/IndustriesSlider"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import TechStackSlider from "../Components/services-common/TechStackSlider"
import Banner  from "../Components/UIUXCX-components/Banner"
import Overview from "../Components/UIUXCX-components/Overview"
import WhyChooseUs from "../Components/UIUXCX-components/WhyChooseUs"
import { Headings } from "../L3Data"
import { Helmet } from "react-helmet-async"
import FAQ from "../Components/agiliti-components/FAQ"
import { L3ServicesMetaData } from "../MetaData"
import OtherDigitalMarketingServices from "../Components/l3services-components/OtherDigitalMarketingServices"
import PerformanceMetrics from "../Components/l3services-components/PerformanceMetrics"
import SocialMediaLogos from "../Components/l3services-components/SocialMediaLogos"
import PlatformExpertise from "../Components/services-common/PlatformExpertise"
import { useEffect, useState } from "react"


//excluded path for other digital marketing services
const OtherDigitalMarketingService = [
  "hybrid-app-development-services",
  "android-application-development-services",
  "ios-development-services",
  "progressive-web-app-development-services",
  "cms-development-services",
  "responsive-web-development-services"
];

const sectionsMenu =   [
  {id:'section1', tabId:'tab1', name:'Overview'},
  {id:'section2', tabId:'tab2', name:'Services'},
  {id:'section3', tabId:'tab3', name:'Tech Stack'},
  {id:'section4', tabId:'tab4', name:'Benefits'},
  {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
  {id:'section6', tabId:'tab6', name:'Industries'},
  {id:'section7', tabId:'tab7', name:'FAQ'},
]

const OrmSectionsMenu =[
  {id:'section1', tabId:'tab1', name:'Overview'},
  {id:'section2', tabId:'tab2', name:'Services'},
  {id:'section4', tabId:'tab4', name:'Benefits'},
  {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
  {id:'section6', tabId:'tab6', name:'Industries'},
  {id:'section7', tabId:'tab7', name:'FAQ'},
]

const EcommerceSectionsMenu = [
  {id:'section1', tabId:'tab1', name:'Overview'},
  {id:'section2', tabId:'tab2', name:'Services'},
  {id:'section3', tabId:'tab3', name:'Tech Stack'},
  {id:'section4', tabId:'tab4', name:'Benefits'},
  {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
  {id:'section7', tabId:'tab7', name:'FAQ'},
]

const L3Services = () => {
     const {pagename} = useParams()
     const [menu, setMenu] = useState(sectionsMenu)

    //  const menufunction = () => {
    //   if(pagename === "ecommerce-marketing-solution" || pagename ==="performance-marketing-services"){
    //     sectionsMenu.splice(5,1)
    //    }else if(pagename === "orm-service"){
    //     sectionsMenu.splice(2,1)
    //    }
    //  }

    //  menufunction()

     useEffect(()  => {
      if( pagename === "orm-service"){ 
      setMenu(OrmSectionsMenu)
    }
     else if(pagename === "ecommerce-marketing-solution" || pagename === "performance-marketing-services" ) {
  setMenu(EcommerceSectionsMenu)
  }else{
    setMenu(sectionsMenu)
  }
     },[pagename])
    

//    if( pagename === "orm-service"){ 
//       sectionsMenu =[
//       {id:'section1', tabId:'tab1', name:'Overview'},
//       {id:'section2', tabId:'tab2', name:'Services'},
//       {id:'section4', tabId:'tab4', name:'Benefits'},
//       {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
//       {id:'section6', tabId:'tab6', name:'Industries'},
//       {id:'section7', tabId:'tab7', name:'FAQ'},
//   ] }
// else if(pagename === "ecommerce-marketing-solution" || pagename === "performance-marketing-services" ) {
//  sectionsMenu = [
//     {id:'section1', tabId:'tab1', name:'Overview'},
//     {id:'section2', tabId:'tab2', name:'Services'},
//     {id:'section3', tabId:'tab3', name:'Tech Stack'},
//     {id:'section4', tabId:'tab4', name:'Benefits'},
//     {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
//     {id:'section7', tabId:'tab7', name:'FAQ'},
// ]
// }

//included path for Platform Expertise section
const PlatformExpertisePages = [
  "social-media-strategy-services",
  "ecommerce-marketing-solution",
  "targeted-email-marketing-services",
];
 

       const shouldRender = !OtherDigitalMarketingService.includes(pagename);
       
       const DevelopmentServicesHeading  = Headings?.DevelopmentServicesHeading[pagename]
       const TechStackSliderHeading = Headings?.TechStackSliderHeading[pagename]
       const SettingUpForSuccessHeading = Headings?.SettingUpForSuccessHeading[pagename]
       const WhyChooseUsHeading = Headings?.WhyChooseUsHeading[pagename]
       const IndustriesSliderHeading = Headings?.IndustriesSliderHeading[pagename]
     
        const metadata = L3ServicesMetaData[pagename] || {};
  return (
       <>
       <Helmet>
           {/* SEO */}
           <meta name="title" content={metadata.title} />
           <meta name="description" content={metadata.description} />
           {metadata.keywords && <meta name="keywords" content={metadata.keywords} /> }
           {/* Social Media */}
           <meta property="og:title" content={metadata.ogTitle} />
           {metadata.keywords && <meta property="og:keywords" content={metadata.keywords} /> }
           <meta property="og:description" content={metadata.ogDescription} />
           <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
           {/* Canonical */}
           <link rel="canonical" href={metadata.canonicalUrl} />
         </Helmet>
   
       <div className='flex flex-col gap-24 lg:gap-28'>
         <Banner/>
         <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
           <IndustriesMenu sectionsMenu={menu}/>
           <section id='section1'><Overview/></section>
           <section id='section2'>
              <div className='w-[90%] mx-auto font-raleway dark:text-white'>
                 <div className='text-center mb-10 max-w-[750px] mx-auto'>
                     <p className='custom-sub-heading'>{DevelopmentServicesHeading?.title}</p>
                     <p className='custom-gradient-text'>{DevelopmentServicesHeading?.heading}</p>
                 </div>
                 <DevelopmentServices/>
               </div>
             </section>
              <div className={`${pagename === "performance-marketing-services" ? "block" : "hidden"}`}>
             {
              pagename === "performance-marketing-services"  &&
              <PerformanceMetrics/>
             }
             </div>
              <div className={`${shouldRender ? "block" : "hidden"}`}>
              {
                shouldRender  &&
                  <OtherDigitalMarketingServices/>
            
              }
              </div>
            
              <section id='section3' className={`${pagename === "orm-service" && 'hidden'}`}>
                 {pagename !== "orm-service" &&
              <div className='bg-LightBlue py-10 font-raleway dark:text-white'>
                <TechStackSlider title={TechStackSliderHeading?.title} heading={TechStackSliderHeading?.heading}/> 
              </div>}
            </section>
            
           <section id='section4'>
           <div className="text-center space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
            {SettingUpForSuccessHeading?.title}
          </p>
          <p className="custom-gradient-text">
           {SettingUpForSuccessHeading?.heading}
          </p>
        </div>
          <SettingUpForSuccess/>
           </section>
   
           <section id='section5'>
             <div className='dark:text-white py-10'>
               <div className='w-[90%] mx-auto font-raleway'>
                   <div className='text-center mb-12 max-w-[750px] mx-auto'>
                       <p className='custom-sub-heading'>{WhyChooseUsHeading?.title}</p>
                       <h2 className='custom-gradient-text'>{WhyChooseUsHeading?.heading}</h2>
                   </div>
                   <WhyChooseUs/>
               </div>
             </div>
           </section>

           <div className={`${ PlatformExpertisePages.includes(pagename) ? "block" : "hidden"}`}>
           {
            pagename === "social-media-strategy-services" ?
            <SocialMediaLogos/> : pagename === "ecommerce-marketing-solution" || pagename === "targeted-email-marketing-services"  ? <PlatformExpertise/> : <div className="hidden"></div>
           }
           </div>
            
            
           <section id='section6' className={`${ pagename !== "ecommerce-marketing-solution" || pagename !== "performance-marketing-services" ? "block" : "hidden"}`}>
            {
              pagename !== "ecommerce-marketing-solution" && pagename !== "performance-marketing-services" &&
            
           <div className='font-raleway dark:text-white'>
                  <div className='w-[90%] max-w-[820px] text-center mb-10 mx-auto'>
                    <div className='text-center mb-5 sm:mb-10'>
                      <p className='custom-sub-heading'>{IndustriesSliderHeading?.title}</p>
                      <p className='custom-gradient-text'>{IndustriesSliderHeading?.heading}</p>
                    </div>
                    {
                        IndustriesSliderHeading &&
                        <p className='text-xs md:text-sm font-medium'>{IndustriesSliderHeading?.description}</p>
                    }
                  </div>
                  <IndustriesSlider/>
            </div>
}
           </section>
   
           <section id='section7'>
           <FAQ/>
           </section>
         </div>
         <SubscribeForm/>
       </div>
       </>
  )
}

export default L3Services