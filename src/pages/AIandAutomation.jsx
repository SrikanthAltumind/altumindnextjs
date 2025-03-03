import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import SuccessStories from "../Components/home-components/SuccessStories"
import Overview from "../Components/services-common/Overview"
import SolutionPartners from '../Components/common-components/SolutionPartners'
import WhyAltumind from "../Components/services-common/WhyAltumind"
import Testimonials from "../Components/common-components/Testimonials"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import GetStarted from "../Components/services-common/GetStarted"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import ValueSection from "../Components/services-common/ValueSection"
import Menu from "../Components/industries-common/Menu"
// import { gradientStyle } from "../ReactFunctions"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import EngModel from "../Components/services-common/EngModel"
import { Helmet } from "react-helmet-async"

const servicesMenu = [
  { id: "section1", tabId: "tab1", name: "Overview" },
  { id: "section2", tabId: "tab2", name: "Services" },
  { id: "section3", tabId: "tab3", name: "Partnerships" },
  { id: "section4", tabId: "tab4", name: "Why Us" },
  { id: "section5", tabId: "tab5", name: "Our Model"},
  { id: "section6", tabId: "tab6", name: "Testimonial" },
  { id: "section7", tabId: "tab7", name: "Industries" },
  { id: "section8", tabId: "tab8", name: "Success Stories" },
  { id: "section9", tabId: "tab9", name: "Insights" },
];

const AIandAutomation = () => {
  return (
    <>
      <Helmet>
        {/* For SEO  */}
        <title>Intelligent Automation Services | Expert AI Services Provider</title>
        <meta
          name="description"
          content="Get AI services and intelligent automation services to automate workflows and improve efficiency. Innovate your business with cutting-edge technology."
        />
        <meta name="keywords" content="ai services, ai professional services, ai as a service, ai consulting services, intelligent automation services, automation consulting services, automation services" />
        {/* For Social Media */}
        <meta property="og:title" content="Intelligent Automation Services | Expert AI Services Provider" />
        <meta property="og:description" content="Get AI services and intelligent automation services to automate workflows and improve efficiency. Innovate your business with cutting-edge technology." />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        <meta property="og:keywords" content="ai services, ai professional services, ai as a service, ai consulting services, intelligent automation services, automation consulting services, automation services" />
        {/* canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/ai-automation" />
      </Helmet>
      <div className="dark:bg-darkTheme flex flex-col gap-20 lg:gap-20">
        <Banner />
        <div className="w-full sticky top-[70px] bg-white -mt-20 dark:bg-darkTheme z-[2]">
          <Menu sections={servicesMenu} />
        </div>
        <section id="section1">
          <Overview />
        </section>
        <section id="section2">
          <ValueSection />
        </section>
        <section id="section3">
          <div className="text-center space-y-3 mb-10 font-raleway">
            <p className="custom-sub-heading">
              Our Partnership Ecosystem
            </p>
            <p className=" font-extrabold w-fit mx-auto text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
              Powering Innovation Together
            </p>
          </div>
          <SolutionPartners />
        </section>
        <section
          id="section4"
          className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10"
        >
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
              Why Choose Altumind
            </p>
            <p className=" custom-gradient-text">
              {/* Powering Intelligent Transformation */}
              Results-Driven Automation Consulting Services
            </p>
          </div>
          <WhyAltumind />
        </section>
        <section id="section5">
          <EngModel />
        </section>
        <section id="section6">
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
        <section id="section7">
        <div className="text-center space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
            Industries We Serve
          </p>
          <p className="custom-gradient-text">
           Tailored Solutions Across
           Diverse Sectors
          </p>
        </div>
          <SettingUpForSuccess />
        </section>
        <GetStarted />
        <section id="section8">
          <SuccessStories heading="Stories of Innovation in AI Era"/>
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

export default AIandAutomation