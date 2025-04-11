import { Helmet } from "react-helmet-async"
import CollaboraionBlueprint from "../Components/alliance-components/CollaboraionBlueprint"
import FutureAlliance from "../Components/alliance-components/FutureAlliance"
import PowerhousePartnerships from "../Components/alliance-components/PowerhousePartnerships"
import SeeOurImpact from "../Components/alliance-components/SeeOurImpact"
import Banner from "../Components/common-components/Banner"


const Alliance = () => {
  return (
    <>
    <Helmet>
    {/* For SEO  */}
    <meta name="title" content="Strategic Alliances | Altumind's Technology Partnerships" />
    <meta
      name="description"
      content="Find out how our strategic alliances empower us to offer enhanced solutions, greater value, and lasting results for our clients."
    />
    {/* For Social Media */}
    <meta property="og:title" content="Strategic Alliances | AltumindGlobal's Technology Partnerships" />
    <meta property="og:description" content="Find out how our strategic alliances empower us to offer enhanced solutions, greater value, and lasting results for our clients." />
    <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href= "https://altumindglobal.com/about/about-altumind/alliance " />
  </Helmet>
    <div className="dark:bg-gradient-to-b from-[#031848] to-[20%] to-darkTheme flex flex-col gap-24 lg:gap-28">
    <Banner/>
    <PowerhousePartnerships/>
    <CollaboraionBlueprint/>
    <FutureAlliance/>
    <SeeOurImpact/>
    </div>
    </>
  )
}

export default Alliance