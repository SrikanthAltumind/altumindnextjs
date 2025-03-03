import Banner from "../Components/common-components/Banner"
import RemoteFirstCulture from "../Components/lifeataltumind-components/RemoteFirstCulture"
import BeyondTheScreen from "../Components/lifeataltumind-components/BeyondTheScreen"
import OurTeamSpeaks from "../Components/lifeataltumind-components/OurTeamSpeaks"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import LearningAndDevelopment from "../Components/lifeataltumind-components/LearningAndDevelopment"
import WeAreSeeking from "../Components/lifeataltumind-components/WeAreSeeking"
import BgImageBanner from "../Components/common-components/BgImageBanner"
import BenefitCards from "../Components/lifeataltumind-components/BenefitCards"
import CareerForm from "../Components/contact-components/CareerForm"
import { Helmet } from "react-helmet-async"


const LifeAtAltumind = () => {
  return (
    <>
     <Helmet>
        {/* For SEO  */}
        <title>Life at Altumind | Discover Our Team, Culture, and Values</title>
        <meta
          name="description"
          content="Wondering what it’s like to be part of the Altumind team? Experience a work culture that values creativity, collaboration, and personal growth every day."
        />
        <meta name="keywords" content="" />
        {/* For Social Media */}
        <meta property="og:title" content="Life at Altumind | Discover Our Team, Culture, and Values" />
        <meta property="og:description" content="Wondering what it’s like to be part of the Altumind team? Experience a work culture that values creativity, collaboration, and personal growth every day." />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        <meta property="og:keywords" content="" />
        {/* canonical */}
        <link rel="canonical" href="https://altumindglobal.com/career/life-at-altumind" />
      </Helmet>
  
    <div className="dark:bg-gradient-to-b from-[#031848] to-[20%] to-darkTheme flex flex-col gap-24 lg:gap-28">
    <Banner/>
      <RemoteFirstCulture />
      <BenefitCards />
    <BeyondTheScreen/>
    <OurTeamSpeaks/>
    <LearningAndDevelopment/>
    <BgImageBanner/>
    <WeAreSeeking/>
    {/* <CareerForm/> */}
    </div>
    </>
  )
}

export default LifeAtAltumind