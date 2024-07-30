import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import Collaborate from "../Components/industries-common/Collaborate"
import IndustriesBanners from "../Components/industries-common/IndustriesBanners"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import IndustryFocusedInsights from "../Components/industries-common/IndustryFocusedInsights"
import NavigatingKeyChallenges from "../Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../Components/industries-common/SegmentInFocus"
import ServiceOfferrings from "../Components/industries-common/ServiceOfferings"
import ValueThatMatters from "../Components/industries-common/ValueThatMatters"


const BFSIAndFinance = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <IndustriesBanners />
      <div className="space-y-10">
        <IndustriesMenu />

        <SegmentInFocus />

        <div className="w-full flex justify-center items-center">
          <ValueThatMatters />
        </div>
        <ServiceOfferrings />
        <NavigatingKeyChallenges />
        <section id="section5">
          <p className=" font-raleway w-fit mx-auto font-extrabold text-2xl lg:text-3xl py-2 mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
            Cheers from Clients
          </p>
          <Testimonials />
        </section>
        <section id="section6" className="h-[500px] text-xl text-center">
          Benefits
        </section>
        <section id="section7" className="h-[500px] text-xl text-center">
          Tools
        </section>
        <IndustryFocusedInsights />
      </div>
      <Collaborate />
      <SubscribeForm />
    </div>
  );
}

export default BFSIAndFinance