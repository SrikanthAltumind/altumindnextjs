import DesignServices from '../Components/UIUXCX-components/DesignServices'
import { useParams } from 'react-router-dom'
import Overview from '../Components/UIUXCX-components/Overview'
import WhyChooseUs from '../Components/UIUXCX-components/WhyChooseUs'

import Banner from '../Components/UIUXCX-components/Banner'
import SettingUpForSuccess from '../Components/services-common/SettingUpForSuccess'
import { Helmet } from 'react-helmet-async'
import {UIUXCXMetadata} from '../MetaData'
import Error404 from './Error404'
import TimeLineFlow from '../Components/common-components/TimeLineFlow'
// import TechStack from '../Components/services-common/TechStack'
import SuccessStories from '../Components/home-components/SuccessStories'
import Testimonials from '../Components/common-components/Testimonials'
import InsightsBlogs from '../Components/common-components/InsightsBlogs'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import IndustriesMenu from '../Components/industries-common/IndustriesMenu'
import FAQ from '../Components/agiliti-components/FAQ'
import TechStackSlider from '../Components/services-common/TechStackSlider'


const sectionsMenu = [
    {id:'section1', tabId:'tab1', name:'Overview'},
    {id:'section2', tabId:'tab2', name:'Services'},
    {id:'section3', tabId:'tab3', name:'Process'},
    {id:'section4', tabId:'tab4', name:'Tech Stack'},
    {id:'section5', tabId:'tab5', name:'Why Choose Us?'},
    {id:'section6', tabId:'tab6', name:'Benefits'},
    {id:'section7', tabId:'tab7', name:'Testimonials'},
    {id:'section8', tabId:'tab8', name:'Success'},
    {id:'section9', tabId:'tab9', name:'Insights'},
    {id:'section10', tabId:'tab10', name:'FAQ'},
]

const processHeaderData = {
  'ui-design-services':{title:'Our UI Design Process', heading:'Designing the Future of Your Business'},
  'ux-design-services':{title:'Our UX Design Process', heading:'Integrating Art, Technology & Strategy for Exceptional Results'},
  'cx-design':{title:'Our CX Design Process', heading:'Life Centric Approach to Customer Experience'}
}
const designServicesHeaderData = {
  'ui-design-services':{title:'Our UI Design Services', heading:'Smart UI Design that Builds Powerful Brand Experiences'},
  'ux-design-services':{title:'Our UX Design Services', heading:'Empowering Enterprise Efficiency Through Intelligent UX Solutions'},
  'cx-design':{title:'CX Design Services', heading:'Making Customer Experience Your Competitive Edge'}
}
const WhychooseUsHeaderData = {
  'ui-design-services':{title:'Why Choose Altumind', heading:'The Best UI Design Company as Your Partner in Strategic Design Evolution'},
  'ux-design-services':{title:'Why Choose Altumind', heading:'Elevate Experiences with an Expert UX Design Consultant'},
  'cx-design':{title:'Why Choose Altumind', heading:'Transform Engagement ThroughDigital Customer Experience Strategy'}
}
const benefitsHeaderData = {
  'ui-design-services':{title:'Benefits', heading:'Setting you Up for Success'},
  'ux-design-services':{title:'Benefits', heading:'Setting you Up for Success'},
  'cx-design':{title:'Benefits', heading:'Transforming Customer Experience into Business Value'}
}
const insightsHeaderData = {
  'ui-design-services':{title:'Insights', heading:'Dive into Our Latest Perspectives'},
  'ux-design-services':{title:'Insights', heading:'Dive into Our Latest Perspectives'},
  'cx-design':{title:'Insights', heading:'Dive into Our Latest Perspectives'}
}

//change these ids if url needs to be changed.
const pageIds = ['ui-design-services', 'ux-design-services', 'cx-design']

const UIUXCXDesign = () => {
  const {id} = useParams()

  if(!pageIds.includes(id)) {
    return <Error404/>
  }

  const processHeader = processHeaderData[id]
  const benefitsHeader = benefitsHeaderData[id]
  const insightsHeader = insightsHeaderData[id]
  const WhychooseUsHeader = WhychooseUsHeaderData[id]
  const designServicesHeader = designServicesHeaderData[id]

  const metadata = UIUXCXMetadata[id] || {};

  return (
    <>
    <Helmet>
        {/* SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.keywords && <meta name="keywords" content={metadata.keywords} /> }
        {/* Social Media */}
        <meta property="og:title" content={metadata.ogTitle} />
        {metadata.keywords && <meta property="og:keywords" content={metadata.keywords} /> }
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        {/* Canonical */}
        <link rel="canonical" href={metadata.canonicalUrl} />
      </Helmet>

    <div className='flex flex-col gap-24 lg:gap-28'>
      <Banner/>
      <div className='-mt-24 lg:-mt-28 flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={sectionsMenu}/>
        <section id='section1'><Overview/></section>
        <section id='section2'>
           <div className='w-[90%] mx-auto font-raleway dark:text-white'>
              <div className='text-center mb-10 max-w-[750px] mx-auto'>
                  <p className='custom-sub-heading'>{designServicesHeader?.title}</p>
                  <p className='custom-gradient-text'>{designServicesHeader?.heading}</p>
              </div>
              <DesignServices/>
            </div>
          </section>

        <section id='section3'>
          <div className='font-raleway dark:text-white'>
            <div className='text-center mb-8 max-w-[700px] mx-auto'>
                <h2 className='custom-sub-heading'>{processHeader?.title}</h2>
                <p className='custom-gradient-text'>{processHeader?.heading}</p>
            </div>
            <TimeLineFlow/> 
          </div>
        </section>

        <section id='section4'>
       <TechStackSlider/>
        </section>

        <section id='section5'>
          <div className='bg-LightBlue dark:bg-DarkBackground dark:text-white py-10'>
            <div className='w-[90%] mx-auto font-raleway'>
                <div className='text-center mb-12 max-w-[750px] mx-auto'>
                    <p className='custom-sub-heading'>{WhychooseUsHeader?.title}</p>
                    <h2 className='custom-gradient-text'>{WhychooseUsHeader?.heading}</h2>
                </div>
                <WhyChooseUs/>
            </div>
          </div>
        </section>

        <section id='section6'>
        <div className="text-center space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
            {benefitsHeader.title}
          </p>
          <p className="custom-gradient-text">
           {benefitsHeader.heading}
          </p>
        </div>
            <SettingUpForSuccess/> 
        </section>

        <section id='section7'>
        <div className="text-center space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
            Client Testimonials
          </p>
          <p className="custom-gradient-text">
            The Altumind Impact: In Their Words
          </p>
        </div>
        <Testimonials/>
        </section>

        <section id='section8'>
          <SuccessStories heading="Stories of Designs That Drive Results"/>
        </section>

       

        <section id='section9'>
        <div className="text-center space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
            {insightsHeader.title}
          </p>
          <p className="custom-gradient-text">
          {insightsHeader.heading}
          </p>
        </div>
          <InsightsBlogs/>
        </section>

        <section id='section10'><FAQ/></section> 
        
      </div>
      <SubscribeForm/>
    </div>
    </>
  )
}

export default UIUXCXDesign