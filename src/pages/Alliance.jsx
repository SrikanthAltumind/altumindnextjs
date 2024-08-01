import CollaboraionBlueprint from "../Components/alliance-components/CollaboraionBlueprint"
import FutureAlliance from "../Components/alliance-components/FutureAlliance"
import PowerhousePartnerships from "../Components/alliance-components/PowerhousePartnerships"
import SeeOurImpact from "../Components/alliance-components/SeeOurImpact"
import Banner from "../Components/common-components/Banner"


const Alliance = () => {
  return (
    <div className="dark:bg-gradient-to-b from-[#031848] to-[20%] to-darkTheme flex flex-col gap-24 lg:gap-28">
    <Banner/>
    <PowerhousePartnerships/>
    <CollaboraionBlueprint/>
    <FutureAlliance/>
    <SeeOurImpact/>
    </div>
  )
}

export default Alliance