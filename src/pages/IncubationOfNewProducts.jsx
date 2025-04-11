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
import DevelopmentServices from "../Components/services-common/DevelopmentServices"
import TechStackSlider from "../Components/services-common/TechStackSlider"
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

const IncubationOfNewProducts = () => {
  return (
   <>
   <Helmet>
        {/* SEO */}
        <meta name="title" content="Product Incubation & Services | Business Incubator Services" />
        <meta name="description" content="Let us help you grow. Our product incubation and business incubator services give you the support and expertise needed to turn your vision into reality." />
        <meta name="keywords" content="Product incubation, product incubation process, business incubator services, technology business incubator" />
        {/* Social Media */}
        <meta property="og:title" content="Product Incubation & Services | Business Incubator Services"/>
        <meta property="og:description" content="Let us help you grow. Our product incubation and business incubator services give you the support and expertise needed to turn your vision into reality."/>
        <meta property="og:keywords" content="Product incubation, product incubation process, business incubator services, technology business incubator" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/digital-strategy-consulting/incubation-products-services"/>
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
            <p className='custom-sub-heading'>Our Product Incubation Services</p>
            <p className='custom-gradient-text'>Tailored Solutions for Every Stage of Product Development</p>
        </div>
        <DevelopmentServices/>
      </div>
    </section>

    <section id='section3'>
    <div className='font-raleway dark:text-white'>
      <div className='text-center mb-8 max-w-[700px] mx-auto'>
          <h2 className='custom-sub-heading'>Our Product Incubation Process</h2>
          <p className='custom-gradient-text'>Step-by-Step Process for Innovation</p>
      </div>
      <TimeLineFlow/> 
    </div>
  </section>

  <section id='section4'>
    <TechStackSlider title="Tech Stack" heading="Innovative Tech Stack for Unmatched Product Development"/>
  </section>

  <section id='section5'>
    <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
      <div className='w-[90%] mx-auto font-raleway'>
          <div className='text-center mb-20 space-y-3 max-w-[750px] mx-auto'>
              <p className='custom-sub-heading'>Why Choose Altumind</p>
              <h2 className='custom-gradient-text'>
                {/* Empowering Your Ideas with Expertise and Efficiency */}
                Transform Ideas into Scalable Solutions with a Technology Business Incubator
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
    Maximize Efficiency, Minimize Costs with Incubation of Product and Services
    </p>
  </div>
      <SettingUpForSuccess/> 
  </section>

  <section id='section7'>
    <div className='font-raleway text-center dark:text-white'>
          <div className='w-[90%] max-w-[750px] mx-auto text-center mb-10'>
            <div className='text-center space-y-3 mb-10 sm:mb-10'>
              <p className='custom-sub-heading'>Industry Expertise</p>
              <p className='custom-gradient-text'>Driving Innovation Across Industries with Tailored Product Incubation Services</p>
              <p className='text-[13px] mb-5 font-medium'>Our product incubation services are designed to meet the unique demands of various industries, helping businesses transform their ideas into successful products that resonate with their target markets. Altumind , as an agnostic technology business incubator supports businesses in all domains by providing resources, mentorship, and infrastructure to develop and scale innovative tech solutions.</p>
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

export default IncubationOfNewProducts