import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import LeaderBoard from "../Components/leadership-components/Leaderboard"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import OurAspiration from "../Components/leadership-components/OurAspiration"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import { Helmet } from "react-helmet-async"

const Leadership = () => {
  return (
    <>
    <Helmet>
    {/* For SEO  */}
    <meta name="title" content="Meet the Leadership | Altumind Technology Experts" />
    <meta
      name="description"
      content="Discover the visionary leaders behind our success, guiding our team with expertise, integrity, and a commitment to innovation."
    />
    {/* For Social Media */}
    <meta property="og:title" content="Meet the Leadership | AltumindGlobal Technology Experts" />
    <meta property="og:description" content="Discover the visionary leaders behind our success, guiding our team with expertise, integrity, and a commitment to innovation." />
    <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href="https://altumindglobal.com/about/about-altumind/leadership" />
  </Helmet>
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <Banner />
      <Overview />
      <LeaderBoard/>
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="custom-sub-heading">
            Our Philosophy
          </p>
          <p className="custom-gradient-text">
            Leading with Clarity and Conviction
          </p>
        </div>
        <WhyAltumind />
      </section>
      <OurAspiration />
      <GetStarted />
      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Insights
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Altumind&apos;s Commitment to a Better World
          </p>
        </div>
        <InsightsBlogs />
      </section>
      <SubscribeForm />
    </div>
    </>
  );
}

export default Leadership