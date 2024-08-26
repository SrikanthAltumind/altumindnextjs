import SubscribeForm from "../Components/common-components/SubscribeForm"
import ContactBanner from "../Components/contact-components/ContactBanner"
import GlobalImprint from "../Components/contact-components/GlobalImprint"
import OurLocation from "../Components/contact-components/OurLocation"
// import ReachOutToAltumind from "../Components/contact-components/ReachOutToAltumind"
import ThankyouNote from "../Components/contact-components/ThankyouNote"
import ContactForms from '../Components/contact-components/ContactForms'

const Contact = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <ContactBanner/>
      <ContactForms/>
      <OurLocation/>
      {/* <ReachOutToAltumind/> */}
      <GlobalImprint/>
      <ThankyouNote/>
      <SubscribeForm/>
    </div>
  )
}

export default Contact