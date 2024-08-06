import Banner from "../Components/common-components/Banner"
import RemoteFirstCulture from "../Components/lifeataltumind-components/RemoteFirstCulture"
import BeyondTheScreen from "../Components/lifeataltumind-components/BeyondTheScreen"
import OurTeamSpeaks from "../Components/lifeataltumind-components/OurTeamSpeaks"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import LearningAndDevelopment from "../Components/lifeataltumind-components/LearningAndDevelopment"
import WeAreSeeking from "../Components/lifeataltumind-components/WeAreSeeking"
import BgImageBanner from "../Components/common-components/BgImageBanner"


const LifeAtAltumind = () => {
  return (
    <div className="dark:bg-gradient-to-b from-[#031848] to-[20%] to-darkTheme flex flex-col gap-24 lg:gap-28">
    <Banner/>
    <RemoteFirstCulture/>
    <BeyondTheScreen/>
    <OurTeamSpeaks/>
    <LearningAndDevelopment/>
    <BgImageBanner/>
    <WeAreSeeking/>
    <SubscribeForm/>
    </div>
  )
}

export default LifeAtAltumind