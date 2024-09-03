import BgImageBanner from "../Components/common-components/BgImageBanner"
import CollaborativeInitiatives from "../Components/community-engagement/CollaborativeInitiatives"
import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import CommunityCards from "../Components/community-engagement/CommunityCards"
import { gradientStyle } from "../ReactFunctions"

const CommunityEngagement = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-20 lg:gap-28">
      <Banner />
      <section className="w-full">
        <CommunityCards />
      </section>

      <BgImageBanner />
      <CollaborativeInitiatives />
      <div className="w-full flex justify-center items-center flex-col gap-10 md:gap-16 font-raleway">
        <div className="text-center w-full">
          <p>Strong communities build a Stronger Future</p>
          <p className="text-3xl font-extrabold" style={gradientStyle}>
            Community Impact Blogs
          </p>
        </div>
        <InsightsBlogs />
      </div>
    </div>
  );
}

export default CommunityEngagement