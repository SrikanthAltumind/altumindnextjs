import SubscribeForm from "../Components/common-components/SubscribeForm"
import ContactBanner from "../Components/contact-components/ContactBanner"
import GlobalImprint from "../Components/contact-components/GlobalImprint"
import OurLocation from "../Components/contact-components/OurLocation"
import ReachOutToAltumind from "../Components/contact-components/ReachOutToAltumind"

const Contact = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <ContactBanner/>
      <OurLocation/>
      <ReachOutToAltumind/>
      <GlobalImprint/>
      <SubscribeForm/>
    </div>
  )
}

export default Contact