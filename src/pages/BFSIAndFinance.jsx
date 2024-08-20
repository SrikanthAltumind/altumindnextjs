import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import Collaborate from "../Components/industries-common/Collaborate"
import IndustriesBanners from "../Components/industries-common/IndustriesBanners"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import NavigatingKeyChallenges from "../Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../Components/industries-common/SegmentInFocus"
import GainsAtGlance from '../Components/industries-common/GainsAtGlance'


const BFSIAndFinance = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
        <IndustriesBanners/>
        <div className='space-y-10'>
          <IndustriesMenu/>
         
          <SegmentInFocus />
          <section id="section2" className="h-[500px] text-xl text-center">value proposition</section>
          <section id="section3" className="h-[500px] text-xl text-center">Offerings</section>
          <NavigatingKeyChallenges/>
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
        <Collaborate/>
        <SubscribeForm/>
    </div>
  )
}

export default BFSIAndFinance