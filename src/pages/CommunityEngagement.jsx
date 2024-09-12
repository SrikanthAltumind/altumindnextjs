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
    <section>
    <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Insights</p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Dive into Our Latest Perspectives</p>
          </div>
    <InsightsBlogs/>
    </section>
    </div>
  )
}

export default CommunityEngagement