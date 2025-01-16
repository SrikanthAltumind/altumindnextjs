import BgImageBanner from "../Components/common-components/BgImageBanner"
import CollaborativeInitiatives from "../Components/community-engagement/CollaborativeInitiatives"
import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import CommunityCards from "../Components/community-engagement/CommunityCards"
import { gradientStyle } from "../ReactFunctions"
import { Helmet } from "react-helmet-async"

const CommunityEngagement = () => {
  return (
     <>
    <Helmet>
    {/* For SEO  */}
    <title>Explore Community Engagement | Altumind</title>
    <meta
      name="description"
      content="See how we engage with our community to drive impact, foster collaboration, and support initiatives that make a difference"
    />
    {/* For Social Media */}
    <meta property="og:title" content="Explore Community Engagement | AltumindGlobal" />
    <meta property="og:description" content="See how we engage with our community to drive impact, foster collaboration, and support initiatives that make a difference" />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href= "https://altumindglobal.com/about/about-altumind/community-engagement  " />
  </Helmet>
   
    <div className="dark:bg-darkTheme flex flex-col gap-20 lg:gap-28">
      <Banner />
      <section className="w-full">
        <CommunityCards />
      </section>

      <BgImageBanner />
      <CollaborativeInitiatives />
      <div className="font-raleway space-y-10 px-5 sm:px-0">
        <div className="text-center space-y-3">
          <p className="custom-sub-heading">Strong communities build a Stronger Future</p>
          <p className="custom-gradient-text">
            Community Impact Blogs
          </p>
        </div>
        <InsightsBlogs />
      </div>
    </div>
    </>
  );
}

export default CommunityEngagement