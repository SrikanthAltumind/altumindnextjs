import InsightsBlogs from "../src/Components/common-components/InsightsBlogs"
import LogoMarquee from "../src/Components/common-components/LogoMarquee"
import SolutionPartners from "../src/Components/common-components/SolutionPartners"
import SubscribeForm from "../src/Components/common-components/SubscribeForm"
import Testimonials from "../src/Components/common-components/Testimonials"
import GainsAtGlance from "../src/Components/industries-common/GainsAtGlance"
import IndustriesBanners from "../src/Components/industries-common/IndustriesBanners"
import Menu from "../src/Components/industries-common/Menu"
import NavigatingKeyChallenges from "../src/Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../src/Components/industries-common/SegmentInFocus"
import ServiceOfferrings from "../src/Components/industries-common/ServiceOfferings"
import ValueThatMatters from "../src/Components/industries-common/ValueThatMatters"
import { gradientStyle } from "../src/ReactFunctions"

const EdTech = () => {
  
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-24">
      <section className="w-full flex flex-col gap-8 items-center justify-start"> 
        <IndustriesBanners />
        <div className="w-full flex flex-col p-4 px-10 gap-3">
          <p className="font-raleway text-2xl font-semibold">Trusted By</p>
          <LogoMarquee />
        </div>
        <Menu />
      </section>

      <section id="section-1">
        <SegmentInFocus />
      </section>
      <section id="section-2">
        <ValueThatMatters />
      </section>
      <section id="section-3">
        <ServiceOfferrings />
      </section>
      <section id="section-4">
        <NavigatingKeyChallenges />
      </section>
      <section id="section-5">
        <div>
          <p className="font-extrabold text-2xl lg:text-3xl py-2 mb-10 text-center">
            <span className=" bg-clip-text font-raleway text-4xl text-transparent bg-gradient-to-r from-[#0350F6] via-[#5EC7A7] to-[#0350F6]">
              Cheers from Clients
            </span>
          </p>
          <Testimonials />
        </div>
      </section>
      <section id="section-6">
        <GainsAtGlance />
      </section>
      <section id="section-7">
        <div className="flex flex-col gap-6 w-full items-center justify-center">
          <p className="text-4xl font-bold font-raleway" style={gradientStyle}>
            Our Solution Partners
          </p>
          <SolutionPartners />
        </div>
      </section>
      <section id="section-8">
        <div className="flex flex-col gap-10 w-full items-center justify-center">
          <p
            className="text-4xl font-bold font-raleway py-3"
            style={gradientStyle}
          >
            Industry-Focused Insights
          </p>
          <InsightsBlogs />
        </div>
      </section>
      <SubscribeForm />
    </div>
  );
}

export default EdTech