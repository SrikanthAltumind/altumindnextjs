import { Helmet } from "react-helmet-async"
import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SolutionPartners from "../Components/common-components/SolutionPartners"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Menu from "../Components/industries-common/Menu"
import EngModel from "../Components/services-common/EngModel"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import ValueSection from "../Components/services-common/ValueSection"
import WhyAltumind from "../Components/services-common/WhyAltumind"


const CloudServices = () => {
  const servicesMenu = [
    { id: "section1", tabId: "tab1", name: "OverView" },
    { id: "section2", tabId: "tab2", name: "Services" },
    { id: "section3", tabId: "tab3", name: "Partnerships" },
    { id: "section4", tabId: "tab4", name: "Why Us" },
    { id: "section5", tabId: "tab5", name: "Our Model" },
    { id: "section6", tabId: "tab6", name: "Testimonial" },
    { id: "section7", tabId: "tab7", name: "Benefits" },
    { id: "section8", tabId: "tab8", name: "Success Stories" },
    { id: "section9", tabId: "tab9", name: "Insights" },
  ];
  return (
    <>
     <Helmet>
                {/* For SEO  */}
                <title>Cloud Consulting Services | Cloud Strategy Engineering Services</title>
                <meta
                  name="description"
                  content="Explore our cloud strategy engineering services and cloud advisory services to help your business optimize its cloud strategy and achieve lasting success."
                />
                <meta name="keywords" content="cloud consulting services, cloud implementation services, cloud strategy engineering services, cloud advisory services, cloud technology consultant, hybrid cloud consulting" />
                {/* For Social Media */}
                <meta property="og:title" content="Cloud Consulting Services | Cloud Strategy Engineering Services" />
                <meta property="og:description" content="Explore our cloud strategy engineering services and cloud advisory services to help your business optimize its cloud strategy and achieve lasting success." />
                <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
                <meta property="og:keywords" content="cloud consulting services, cloud implementation services, cloud strategy engineering services, cloud advisory services, cloud technology consultant, hybrid cloud consulting" />
                {/* canonical */}
                <link rel="canonical" href="https://altumindglobal.com/services/cloud" />
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
        <section id="section3">
          <div className="text-center space-y-3 mb-10 font-raleway">
            <p className="custom-sub-heading">
              Our Partnership Ecosystem
            </p>
            <p className=" custom-gradient-text">
              Elite Partners Behind Our Cloud Innovation
            </p>
          </div>
          <SolutionPartners />
        </section>
        <section id="section4" className="bg-[#F3F9FF] py-8">
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
              Why Altumind Stands Out
            </p>
            <p className=" custom-gradient-text">
              Making Cloud Work for You
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
              Benefits
            </p>
            <p className="custom-gradient-text">
              Adaptive Solutions for Modern Success
            </p>
          </div>
          <SettingUpForSuccess />
        </section>
        <GetStarted />
        <section id="section8">
          <SuccessStories heading="Transforming Challenges into Triumphs"/>
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

export default CloudServices