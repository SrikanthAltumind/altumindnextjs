import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import SuccessStories from "../Components/home-components/SuccessStories"
import IndustryFocusedInsights from "../Components/industries-common/IndustryFocusedInsights"

const ExperienceDesign = () => {
  return (
    <div className="dark:bg-gradient-to-b from-[#031848] to-[20%] to-darkTheme flex flex-col gap-24 lg:gap-28">
        <Banner/>
        <SuccessStories/>
        <IndustryFocusedInsights/>
        <SubscribeForm/>
    </div>
  )
}

export default ExperienceDesign