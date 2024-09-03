import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import Collaborate from "../Components/industries-common/Collaborate"
import IndustriesBanners from "../Components/industries-common/IndustriesBanners"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import NavigatingKeyChallenges from "../Components/industries-common/NavigatingKeyChallenges"
import SegmentInFocus from "../Components/industries-common/SegmentInFocus"
import ServiceOfferrings from "../Components/industries-common/ServiceOfferings"
import ValueThatMatters from "../Components/industries-common/ValueThatMatters"
import GainsAtGlance from '../Components/industries-common/GainsAtGlance'
import SolutionPartners from "../Components/common-components/SolutionPartners"
import { gradientStyle } from "../ReactFunctions"
import TechStack from "../Components/services-common/TechStack"
import LogoMarquee from "../Components/common-components/LogoMarquee"
import Menu from "../Components/industries-common/Menu"
import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import TechStackSlider from "../Components/services-common/TechStackSlider"

const BFSIAndFinance = () => {


  const location = useLocation()
  useEffect(() => {
    console.log("Location changed:", location.pathname);
  }, [location.pathname]);

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
      <TechStackSlider />
      <Collaborate />
      <SubscribeForm />
    </div>
    // <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
    //   <IndustriesBanners />
    //   <div className="flex flex-col w=full gap-10">
    //     <IndustriesMenu />

    //     <SegmentInFocus />
    //     <section id="section2" className="">
    //       <ValueThatMatters />
    //     </section>
    //     <section id="section3" className="">
    //       <ServiceOfferrings />
    //     </section>
    //     <NavigatingKeyChallenges />
    //     <section id="section5">
    //       <p className=" font-raleway w-fit mx-auto font-extrabold text-2xl lg:text-3xl py-2 mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
    //         Cheers from Clients
    //       </p>
    //       <Testimonials />
    //     </section>
    //     <GainsAtGlance />
    //     <section
    //       id="section6"
    //       className="w-full flex flex-col gap-4 items-center justify-center p-4"
    //     >
    //       <p className="text-4xl font-bold font-raleway" style={gradientStyle}>
    //         Our Solution Partners
    //       </p>
    //       <SolutionPartners />
    //     </section>

    //     {/* <section id="section6" className="h-[500px] text-xl text-center">
    //       Benefits
    //     </section>
    //     <section id="section7" className="h-[500px] text-xl text-center">
    //       Tools
    //     </section> */}
    //     <section id="section7" className="flex flex-col gap-6 w-full mt-10">
    //       <div className="text-center mb-10 font-raleway">
    //         <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
    //           Industry-Focused Insights
    //         </p>
    //       </div>
    //       <div className="w-full py-4 mt-4">
    //         <InsightsBlogs />
    //       </div>
    //     </section>
    //     {/* <section id="section8">
    //       <TechStack />
    //     </section> */}
    //   </div>

    //   <Collaborate />
    //   <SubscribeForm />
    // </div>
  );
}

export default BFSIAndFinance