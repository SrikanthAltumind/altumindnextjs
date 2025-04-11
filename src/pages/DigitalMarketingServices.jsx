import { Helmet } from "react-helmet-async"
import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Menu from "../Components/industries-common/Menu"
import EngModel from "../Components/services-common/EngModel"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import TechStack from "../Components/services-common/TechStack"
import ValueSection from "../Components/services-common/ValueSection"
import WhyAltumind from "../Components/services-common/WhyAltumind"
// import { gradientStyle } from "../ReactFunctions"

const DigitalMarketingServices = () => {
   const servicesMenu = [
     { id: "section1", tabId: "tab1", name: "OverView" },
     { id: "section2", tabId: "tab2", name: "Services" },
     { id: "section3", tabId: "tab3", name: "Why Us" },
     { id: "section4", tabId: "tab4", name: "Our Model" },
     { id: "section5", tabId: "tab5", name: "Testimonials" },
     { id: "section6", tabId: "tab6", name: "Benefits" },
     { id: "section7", tabId: "tab7", name: "Tech Stack" },
     { id: "section8", tabId: "tab8", name: "Success Stories" },
     { id: "section9", tabId: "tab9", name: "Insights" },
   ];
  return (
    <>
     <Helmet>
                {/* For SEO  */}
                <meta name="title" content="Digital Marketing Services | Digital Marketing Strategy Consulting" />
                <meta
                  name="description"
                  content="Looking for digital marketing services? Our digital marketing strategy consulting helps you build successful online campaigns and boost brand performance."
                />
                <meta name="keywords" content="digital marketing services, web marketing services, digital branding services, digital marketing services list, digital marketing strategy consulting, digital media company, digital marketing planing" />
                {/* For Social Media */}
                <meta property="og:title" content="Digital Marketing Services | Digital Marketing Strategy Consulting" />
                <meta property="og:description" content="Looking for digital marketing services? Our digital marketing strategy consulting helps you build successful online campaigns and boost brand performance." />
                <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
                <meta property="og:keywords" content="digital marketing services, web marketing services, digital branding services, digital marketing services list, digital marketing strategy consulting, digital media company, digital marketing planing" />
                {/* canonical */}
                <link rel="canonical" href="https://altumindglobal.com/services/digital-marketing" />
        </Helmet>
      <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
        <Banner />

        <div className="w-full sticky top-[70px] bg-white -mt-28 dark:bg-darkTheme z-[2]">
          <Menu sections={servicesMenu} />
        </div>
        <section id="section1">
          <Overview />
        </section>
        <section id="section2">
          <ValueSection />
        </section>
        <section id="section3" className="bg-[#F3F9FF] py-10">
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
            Why Choose Altumind
            </p>
            <h2 className=" custom-gradient-text max-w-[700px]">
              {/* Leading the Way in Fulfilling Your Brand&apos;s Vision */}
              End-to-End Digital Marketing Strategy Consulting
            </h2>
          </div>
          <WhyAltumind />
        </section>
        <section id="section4">
          <EngModel />
        </section>
        <section id="section5">
          <div className="text-center space-y-3 mb-20 font-raleway">
            <p className="custom-sub-heading">
              Client Testimonials
            </p>
            <p className="custom-gradient-text">
              The Altumind Impact: In Their Words
            </p>
          </div>
          <Testimonials />
        </section>
        <section id="section6">
          <div className="text-center space-y-3 mb-20 font-raleway">
            <p className="custom-sub-heading">
              Benefits
            </p>
            <p className="custom-gradient-text">
                Blending creativity and Results
              <br />
                to Elevate Your Brand
           
            </p>
          </div>
          <SettingUpForSuccess />
        </section>
        <section id="section7">
          <TechStack />
        </section>
        <GetStarted />
        <section id="section8">
          <SuccessStories heading="Proven Result of our Marketing Expertise"/>
        </section>
        <section id="section9">
          <div className="text-center space-y-3 mb-20 font-raleway">
            <p className="custom-sub-heading">
              Insights
            </p>
            <p className="custom-gradient-text">
              Dive into Our Latest Perspectives
            </p>
          </div>
          <InsightsBlogs />
        </section>

        <SubscribeForm />
      </div>
    </>
  );
}

export default DigitalMarketingServices