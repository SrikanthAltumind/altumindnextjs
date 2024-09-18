import InsightsBlogs from "../src/Components/common-components/InsightsBlogs";
import LogoMarquee from "../src/Components/common-components/LogoMarquee";
import SubscribeForm from "../src/Components/common-components/SubscribeForm";
import Testimonials from "../src/Components/common-components/Testimonials";
import GainsAtGlance from "../src/Components/industries-common/GainsAtGlance";
import IndustriesBanners from "../src/Components/industries-common/IndustriesBanners";
import NavigatingKeyChallenges from "../src/Components/industries-common/NavigatingKeyChallenges";
import SegmentInFocus from "../src/Components/industries-common/SegmentInFocus";
import ServiceOfferrings from "../src/Components/industries-common/ServiceOfferings";
import ValueThatMatters from "../src/Components/industries-common/ValueThatMatters";

const Internet = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <IndustriesBanners />
      <div className="w-full flex flex-col p-4 px-10 gap-3">
        <p className="font-raleway text-2xl font-semibold">Trusted By</p>
        <LogoMarquee />
      </div>
      <SegmentInFocus />
      <section id="section2" className="">
        <ValueThatMatters />
      </section>
      <section id="section3" className="">
        <ServiceOfferrings />
      </section>
      <NavigatingKeyChallenges />
      <div>
        <p className="font-extrabold text-2xl lg:text-3xl py-2 mb-10 text-center">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#0350F6] via-[#5EC7A7] to-[#0350F6]">
            Cheers from Clients
          </span>
        </p>
        <Testimonials />
      </div>
      <GainsAtGlance />
      <InsightsBlogs />
      <SubscribeForm />
    </div>
  );
};

export default Internet;
