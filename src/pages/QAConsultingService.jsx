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

const QAConsultingService = () => {

  return (
      <>
      <Helmet>
        {/* SEO */}
        <meta name="title" content="Quality Assurance Consultant: Ensuring Your Software’s Success" />
        <meta name="description" content="Let our quality assurance consultant guide you in delivering top-quality software, identifying issues early and ensuring seamless performance." />
        <meta name="keywords" content="quality assurance consultant, software test consultant, quality assurance consulting, quality assurance consulting companies, quality assurance consulting firms" />
        {/* Social Media */}
        <meta property="og:title" content="Quality Assurance Consultant: Ensuring Your Software’s Success"/>
        <meta property="og:description" content="Let our quality assurance consultant guide you in delivering top-quality software, identifying issues early and ensuring seamless performance."/>
        <meta property="og:keywords" content="quality assurance consultant, software test consultant, quality assurance consulting, quality assurance consulting companies, quality assurance consulting firms" />
        <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/quality-assurance/qa-consulting"/>
      </Helmet>

      <div className='flex flex-col gap-24 lg:gap-28'>
        <Banner/>
        <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
          <IndustriesMenu sectionsMenu={sectionsMenu}/>

          <section id='section1'><Overview/></section>

          <section id='section2'>
          <div className='w-[90%] mx-auto'>
              <div className='text-center mb-8 max-w-[800px] mx-auto font-raleway'>
                  <h2 className='custom-sub-heading'>Our Quality Assurance Consulting Services</h2>
                  <p className='custom-gradient-text'>Empowering Software Reliability and Performance</p>
              </div>
            <DevelopmentServices/>
            </div>
          </section>

          <section id='section3'>
          <div className="w-[90%] text-center font-raleway space-y-3 mb-10 max-w-[800px] mx-auto">
              <p className='custom-sub-heading'>Our Quality Assurance Consulting Process</p>
              <p className='custom-gradient-text'>Strategic Approach to Quality Excellence</p>
            </div>
            <TimeLineFlow/>
          </section>

          <section id='section4'>
            <TechStackSlider title="Tech Stack" heading="Industry-Leading QA Tools and Frameworks"/>
          </section>

          <section id='section5'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
              <div className='font-raleway'>
                  <div className='w-[90%] text-center mb-10 mx-auto'>
                      <p className='custom-sub-heading'>Why Choose Altumind</p>
                      <h2 className='custom-gradient-text max-w-[700px]'>
                        {/* Trusted QA Consulting Excellence */}
                        Drive Excellence with best quality assurance consulting companies
                        </h2>
                  </div>
                  <WhyChooseUs/>
              </div>
            </div>
          </section>
          
          <section id='section6'>
            <div className='w-[90%] mx-auto'>
              <div className="text-center font-raleway space-y-3 mb-10">
                <p className='custom-sub-heading'>Benefits</p>
                <p className='custom-gradient-text'>Strategic Advantages of QA Consulting</p>
              </div>
              <SettingUpForSuccess/>
            </div>
          </section>


          <section id='section7'>
            <div className='font-raleway dark:text-white'>
                  <div className='w-[90%] max-w-[820px] text-center mb-10 mx-auto'>
                    <div className='text-center mb-5 sm:mb-10'>
                      <p className='custom-sub-heading'>Industry Expertise</p>
                      <p className='custom-gradient-text'>From HIPAA to SOX: Testing That Knows Your Industry Standards</p>
                    </div>
                    <p className='text-xs md:text-sm font-medium'>We provide specialized QA consulting across various industries:</p>
                  </div>
                  <IndustriesSlider/>
            </div>
          </section>

          <section id='section8'>
            <div className="w-[90%] max-w-[850px] mx-auto text-center font-raleway space-y-3 mb-10">
              <p className='custom-sub-heading'>Insights</p>
              <p className='custom-gradient-text'>Dive into Our Latest Performance Engineering Perspectives</p>
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

export default QAConsultingService