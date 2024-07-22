import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import IndustriesBanners from "../Components/industries-common/IndustriesBanners"
import IndustryFocusedInsights from "../Components/industries-common/IndustryFocusedInsights"
import NavigatingKeyChallenges from "../Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../Components/industries-common/SegmentInFocus"

const EdTech = () => {
  return (
    <div className='dark:bg-darkTheme flex flex-col gap-24 lg:gap-28'>
      <IndustriesBanners/>
    <SegmentInFocus/> 
    <NavigatingKeyChallenges/>
    <div>
            <p className="font-extrabold text-2xl lg:text-3xl py-2 mb-10 text-center"><span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#0350F6] via-[#5EC7A7] to-[#0350F6]">Cheers from Clients</span></p>
        <Testimonials/>
        </div>  
        <IndustryFocusedInsights/>
    <SubscribeForm/>
    </div>
  )
}

export default EdTech