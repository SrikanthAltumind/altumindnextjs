import Testimonials from "../Components/common-components/Testimonials"
import GainsAtGlance from "../Components/industries-common/GainsAtGlance"
import IndustriesBanners from "../Components/industries-common/IndustriesBanners"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import NavigatingKeyChallenges from "../Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../Components/industries-common/SegmentInFocus"
import SolutionPartners from "../Components/common-components/SolutionPartners"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import Collaborate from "../Components/industries-common/Collaborate"
import SubscribeForm from "../Components/common-components/SubscribeForm"


const DigitalCommerce = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
     <IndustriesBanners/>
     {/* <IndustriesMenu/> */}
     <SegmentInFocus/>
     <NavigatingKeyChallenges/>
     <section>
        <div className="font-raleway mb-10">
            <p className="custom-gradient-text">Cheers from Clients</p>
        </div>
        <Testimonials/>
     </section>
     <GainsAtGlance/>
     <section>
        <div className="font-raleway mb-10">
            <p className="custom-gradient-text">Our Solution Partners</p>
        </div>
        <SolutionPartners/>
     </section>
    
     <section>
        <div className="font-raleway mb-10">
            <p className="custom-gradient-text">Industry-Focused Insights</p>
        </div>
        <InsightsBlogs/>
     </section>
     <Collaborate/>
     <SubscribeForm/>
    </div>
  )
}

export default DigitalCommerce