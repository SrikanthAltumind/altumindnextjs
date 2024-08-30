import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import Collaborate from "../Components/industries-common/Collaborate"
import GainsAtGlance from "../Components/industries-common/GainsAtGlance"
import IndustriesBanners from "../Components/industries-common/IndustriesBanners"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import NavigatingKeyChallenges from "../Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../Components/industries-common/SegmentInFocus"
import TechStackSlider from "../Components/services-common/TechStackSlider"


const industriesMenu = [
  {id:'section1', tabId:'tab1', name:'Segments'},
  {id:'section2', tabId:'tab2', name:'Value propostion'},
  {id:'section3', tabId:'tab3', name:'Offerings'},
  {id:'section4', tabId:'tab4', name:'Challenges'},
  {id:'section5', tabId:'tab5', name:'Success'},
  {id:'section6', tabId:'tab6', name:'Benifits'},
  {id:'section7', tabId:'tab7', name:'Tools'},
  {id:'section8', tabId:'tab8', name:'Insights'},
]


const Internet = () => {
  return (
    <div className='dark:bg-darkTheme flex flex-col gap-24 lg:gap-28'>
    <IndustriesBanners/>
    <div className='flex flex-col gap-24 lg:gap-28'>
        <IndustriesMenu sectionsMenu={industriesMenu}/>
        <section id="section1"><SegmentInFocus/></section>
        <section id="section2" className="h-[500px] text-xl text-center">value proposition</section>
        <section id="section3" className="h-[500px] text-xl text-center">Offerings</section>
        <section id="section4"><NavigatingKeyChallenges/></section>
        <section id="section5">
          <p className=" font-raleway w-fit mx-auto font-extrabold text-2xl lg:text-3xl py-2 mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">Cheers from Clients</p>
          <Testimonials/>
        </section>
        <GainsAtGlance/>
        <section id="section6" className="h-[500px] text-xl text-center">Benefits</section>
        <section id="section7" className="h-[500px] text-xl text-center">Tools</section>
       <section id='section8'>
       <div className="text-center mb-20 font-raleway">
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Industry-Focused Insights</p>
        </div>
       <InsightsBlogs/>
       </section>
      </div>
      <TechStackSlider/>
      <Collaborate/>   
      <SubscribeForm/>
  </div>
  )
}

export default Internet