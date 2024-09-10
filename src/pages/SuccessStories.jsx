import SubscribeForm from "../Components/common-components/SubscribeForm"
import GetStarted from "../Components/services-common/GetStarted"
import SuccessStoryBanner from '../Components/success-stories-components/SuccessStoryBanner'
import WhyAltumind from "../Components/services-common/WhyAltumind"
import Approach from "../Components/success-stories-components/Approach"
import Challenge from "../Components/success-stories-components/Challenge"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import ResultSection from "../Components/success-stories-components/ResultSection"

const successStoriesMenu = [
  {id:'section1', tabId:'tab1', name:'Situation'},
  {id:'section2', tabId:'tab2', name:'Challenge'},
  {id:'section3', tabId:'tab3', name:'Implementation'},
  {id:'section4', tabId:'tab4', name:'Innovative Features'},
  {id:'section5', tabId:'tab5', name:'Approach'},
  {id:'section6', tabId:'tab6', name:'Result'},
  {id:'section7', tabId:'tab7', name:'success'},
]

if(location.pathname === '/portfolio/enphase'){
  successStoriesMenu.push({
    id:'section8', tabId:'tab8', name:'Partnership'
  })
}

const SuccessStories = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28 dark:text-white font-montserrat">
      <SuccessStoryBanner/>
      <div  className="flex flex-col -mt-24 lg:-mt-28 gap-24 lg:gap-28">
      <IndustriesMenu sectionsMenu={successStoriesMenu}/>
      <section id="section1">Situation</section>
      <section id="section2"><Challenge/></section>
      <section id="section3">Implementation</section>
      <section id="section4">
      <div className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className='text-center font-raleway space-y-5 mb-10'>
            
            <p className=' font-extrabold text-3xl lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Innovative Features:<br/> Paving the way for Success</p>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>To overcome the unique challenges of the market, we implemented a range of groundbreaking solutions:</p>
        </div>
            <WhyAltumind/>
        </div>
      </section>
      <section id="section5"><Approach/></section>
      <section id="section6"><ResultSection/></section>
      <section id="section7">Success</section>
      </div>
        <GetStarted/>
        <SubscribeForm/>
    </div>
  )
}

export default SuccessStories