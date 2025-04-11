import { Helmet } from "react-helmet-async"
import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import Spectrum from "../Components/common-components/Spectrum"
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
import WhyAltumind from "../Components/services-common/WhyAltumind"
// import { gradientStyle } from "../ReactFunctions"


const DataAnalytics = () => {
  const servicesMenu = [
    { id: "section1", tabId: "tab1", name: "OverView" },
    { id: "section2", tabId: "tab2", name: "Services" },
    { id: "section3", tabId: "tab3", name: "Why Us" },
    { id: "section4", tabId: "tab4", name: "Our Model" },
    { id: "section5", tabId: "tab5", name: "Testimonials" },
    { id: "section6", tabId: "tab6", name: "Tech Stack" },
    { id: "section7", tabId: "tab7", name: "Benefits" },
    { id: "section8", tabId: "tab8", name: "Success Stories" },
    { id: "section9", tabId: "tab9", name: "Insights" },
  ];
  return (
    <>
    <Helmet>
                    {/* For SEO  */}
                    <meta name="title" content="Data Analytics Company | Professional Data Analytics Services" />
                    <meta
                      name="description"
                      content="Make better decisions with data. Our data analytics services and experienced data analytics company help you turn your data into a powerful growth tool."
                    />
                    <meta name="keywords" content="data analytics services, data analytics as a service, data analytics service providers, data analytics solution, data analytics Company, data analytics consulting services, data analytics services companies" />
                    {/* For Social Media */}
                    <meta property="og:title" content="Data Analytics Company | Professional Data Analytics Services" />
                    <meta property="og:description" content="Make better decisions with data. Our data analytics services and experienced data analytics company help you turn your data into a powerful growth tool." />
                    <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
                    <meta property="og:keywords" content="data analytics services, data analytics as a service, data analytics service providers, data analytics solution, data analytics Company, data analytics consulting services, data analytics services companies" />
                    {/* canonical */}
                    <link rel="canonical" href="https://altumindglobal.com/services/data-analytics" />
            </Helmet>

      <div className="dark:bg-darkTheme flex flex-col gap-16">
        <Banner />

        <div className="w-full sticky top-[70px] bg-white -mt-16 dark:bg-darkTheme z-[2]">
          <Menu sections={servicesMenu} />
        </div>
        <section id="section1">
          <Overview />
        </section>
        <section id="section2">
          <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
            <div className="space-y-3 text-center">
              <p className="custom-sub-heading">Our Data Analytics Services</p>
              <p className="custom-gradient-text">
               
                  Full Spectrum Data Analytics Services -
                  <br />
              from Insight to Impact
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Spectrum />
          </div>
        </section>
        <section id="section3" className="bg-[#F3F9FF] py-8">
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
            Why Choose Altumind
            </p>
            <h2 className=" custom-gradient-text max-w-[700px]">
              {/* Turning Data into Your Competitive Edge */}
              Get Deep Insights with Data Analytics Consulting Services
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
          <TechStack />
        </section>
        <section id="section7">
          <div className="text-center space-y-3 mb-20 font-raleway">
            <p className="custom-sub-heading">
              Benefits
            </p>
            <p className="custom-gradient-text">
            Transforming Raw Data
             into Real Results
            </p>
          </div>
          <SettingUpForSuccess />
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

export default DataAnalytics