
import CareersBanner from "../Components/career-components/CareersBanner"
import DiscoverRoles from "../Components/career-components/DiscoverRoles"
import LeadershipVoices from "../Components/career-components/LeadershipVoices"
import LifeAtAltumind from "../Components/career-components/LifeAtAltumind"
import WhyJoinAltumind from "../Components/career-components/WhyJoinAltumind"
import IndustryFocusedInsights from "../Components/industries-common/IndustryFocusedInsights"

const Career = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
    <CareersBanner/>
    <WhyJoinAltumind/>
    <LifeAtAltumind/>
    <LeadershipVoices/>
    <DiscoverRoles/>
    <IndustryFocusedInsights/>
    </div>
  )
}

export default Career