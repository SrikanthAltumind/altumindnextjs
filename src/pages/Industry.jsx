import SubscribeForm from "../Components/common-components/SubscribeForm"
import Industries from "../Components/industry-components/Industries"
import IndustryBanner from "../Components/industry-components/IndustryBanner"

const Industry = () => {
  return (
    <div className='dark:bg-darkTheme flex flex-col gap-24 lg:gap-28'>
    <IndustryBanner/>
    <Industries/>    
    <SubscribeForm/>
    </div>
  )
}

export default Industry