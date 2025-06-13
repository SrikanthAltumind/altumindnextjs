import CoreEnterprise from "../Components/EnterpriseSDComponents/CoreEnterprise"
import EnterpriseBanner from "../Components/EnterpriseSDComponents/EnterpriseBanner"
import EnterpriseWhyAltumind from "../Components/EnterpriseSDComponents/EnterpriseWhyAltumind"
import ScheduleSection from "../Components/EnterpriseSDComponents/ScheduleSection"
import StatsSection from "../Components/EnterpriseSDComponents/StatsSection"
import BuildWithUs from "../Components/EnterpriseSDComponents/BuildWithUs"
import EmpowerTools from "../Components/EnterpriseSDComponents/EmpowerTools"
import BlogHighlights from "../Components/EnterpriseSDComponents/BlogHighlights"
import CertifiedLogos from "../Components/EnterpriseSDComponents/CertifiedLogos"
import FAQ from "../Components/agiliti-components/FAQ"
import StrategicPartnerships from "../Components/EnterpriseSDComponents/StrategicPartnerships"
import TailoredSolutions from "../Components/EnterpriseSDComponents/TailoredSolutions"
import FutureTechnologies from "../Components/EnterpriseSDComponents/FutureTechnologies"
import ClientSuccessStories from "../Components/EnterpriseSDComponents/ClientSuccessStories"
import { useRef, useState } from "react"
import CommonPopupForm from "../Components/EnterpriseSDComponents/CommonPopupForm"

const EnterpriseSDLandingPage = () => {
  const [showPopup, setShowPopup] = useState(false)
   const clientSuccessRef = useRef(null)

  const handleScrollToClientSuccess = () => {
    clientSuccessRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOpenPopup = () => setShowPopup(true)
  const handleClosePopup = () => setShowPopup(false)
  return (
    <div>
        <EnterpriseBanner onPopupTrigger={handleOpenPopup} onScrollToClientSuccess={handleScrollToClientSuccess}/>
        <StatsSection/>
        <CoreEnterprise/>
        <ScheduleSection onPopupTrigger={handleOpenPopup}/>
        <EnterpriseWhyAltumind/>
          <div ref={clientSuccessRef}>
               <ClientSuccessStories/>
          </div>
        <FutureTechnologies/>
        <EmpowerTools/>
        <BuildWithUs onPopupTrigger={handleOpenPopup}/>
        <TailoredSolutions/>
        <BlogHighlights/>
        <StrategicPartnerships/>
        <FAQ/>
        <CertifiedLogos/>

        {
          showPopup &&
          <CommonPopupForm closePopup={handleClosePopup}/>
        }
    </div>
  )
}

export default EnterpriseSDLandingPage

