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


const QAandTesting = () => {
  const servicesMenu = [
    { id: "section1", tabId: "tab1", name: "OverView" },
    { id: "section2", tabId: "tab2", name: "Services" },
    { id: "section3", tabId: "tab3", name: "Why Us" },
    { id: "section4", tabId: "tab4", name: "Our Model" },
    { id: "section5", tabId: "tab5", name: "Testimonial" },
    { id: "section6", tabId: "tab6", name: "Industries" },
    { id: "section7", tabId: "tab7", name: "Tech Stack" },
    { id: "section8", tabId: "tab8", name: "Success Stories" },
    { id: "section9", tabId: "tab9", name: "Insights" },
  ];
  return (
    <>
     <Helmet>
            {/* For SEO  */}
            <meta name="title" content="Top Quality Assurance Services | Software Testing Services Companies" />
            <meta
              name="description"
              content="Get reliable Quality Assurance services from top software testing services companies. Ensure flawless software with expert testing and validation."
            />
            <meta name="keywords" content="Quality Assurance Services, quality assurance and testing services, Software testing services, Software testing services companies, quality assurance Company, quality assurance consulting services" />
            {/* For Social Media */}
            <meta property="og:title" content="Top Quality Assurance Services | Software Testing Services Companies" />
            <meta property="og:description" content="Get reliable Quality Assurance services from top software testing services companies. Ensure flawless software with expert testing and validation." />
            <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
            <meta property="og:keywords" content="Quality Assurance Services, quality assurance and testing services, Software testing services, Software testing services companies, quality assurance Company, quality assurance consulting services" />
            {/* canonical */}
            <link rel="canonical" href="https://altumindglobal.com/services/quality-assurance" />
          </Helmet>
      <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-16">
        <Banner />

        <div className="w-full sticky top-[70px] bg-white -mt-16 dark:bg-darkTheme z-[2]">
          <Menu sections={servicesMenu} />
        </div>
        <section id="section1">
          <Overview />
        </section>
        <section id="section2">
          <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
            <div className="text-center space-y-3">
              <p className="custom-sub-heading">Our QA & Testing Services</p>
              <p className="custom-gradient-text">
               
                  Comprehensive Testing
                  <br />
      
               Services for Peak Performance
              </p>
              {/* <p className="md:max-w-[800px]">
              Functional Testing: Ensure rock-solid functionality and
              reliability. Our domain-specific solutions
              <br /> rigorously evaluate features, stability, and user
              interactions, delivering peak performance before
              <br />
              production
            </p> */}
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Spectrum />
          </div>
        </section>
        <section
          id="section3"
          className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10"
        >
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
            Why Choose Altumind
            </p>
            <h2 className=" custom-gradient-text max-w-[700px]">
              {/* Your Gateway to Impeccable Quality Assurance */}
              Drive Precision with Quality Assurance Consulting Services
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
            Industries We Serve
          </p>
          <p className="custom-gradient-text">
           QA & Testing Solutions Across
           Diverse Sectors
          </p>
        </div>
          <SettingUpForSuccess />
        </section>
        <section id="section7">
          <TechStack />
        </section>
        <GetStarted />
        <section id="section8">
          <SuccessStories heading="Stories of Real-World Impact"/>
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

export default QAandTesting