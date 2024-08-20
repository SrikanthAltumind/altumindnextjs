import BgImageBanner from "../Components/common-components/BgImageBanner"
import CollaborativeInitiatives from "../Components/community-engagement/CollaborativeInitiatives"
import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"

const CommunityEngagement = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
    <Banner/>
    <BgImageBanner/>
    <CollaborativeInitiatives/>
    <InsightsBlogs/>
    </div>
  )
}

export default CommunityEngagement