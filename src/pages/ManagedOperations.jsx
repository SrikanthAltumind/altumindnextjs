import { Helmet } from "react-helmet-async";
import Banner from "../Components/common-components/Banner";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
import SolutionPartners from "../Components/common-components/SolutionPartners";
import Spectrum from "../Components/common-components/Spectrum";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import Testimonials from "../Components/common-components/Testimonials";
import SuccessStories from "../Components/home-components/SuccessStories";
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Menu from "../Components/industries-common/Menu";
import EngModel from "../Components/services-common/EngModel";

import GetStarted from "../Components/services-common/GetStarted";
import Overview from "../Components/services-common/Overview";
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess";
import WhyAltumind from "../Components/services-common/WhyAltumind";
// import { gradientStyle } from "../ReactFunctions";

const servicesMenu = [
  { id: "section1", tabId: "tab1", name: "Overview" },
  { id: "section2", tabId: "tab2", name: "Services" },
  { id: "section3", tabId: "tab3", name: "Why Us" },
  { id: "section4", tabId: "tab4", name: "Our Model" },
  { id: "section5", tabId: "tab5", name: "Testimonials" },
  { id: "section6", tabId: "tab6", name: "Benefits" },
  { id: "section7", tabId: "tab7", name: "Tech Stack" },
  { id: "section8", tabId: "tab8", name: "Success" },
  { id: "section9", tabId: "tab9", name: "Insights" },
];

const ManagedOperations = () => {
  return (
    <>
     <Helmet>
        {/* For SEO  */}
        <title>Best IT Management Consulting | Operations Managed Services</title>
        <meta
          name="description"
          content="Let us help you simplify your IT processes. Our operations managed services and IT management consulting help you run smoother, more efficient operations."
        />
        <meta name="keywords" content="managed application services, infrastructure managed services, operations managed services, Cloud managed services, it management consulting, it management company, it and management consulting" />
        {/* For Social Media */}
        <meta property="og:title" content="Best IT Management Consulting | Operations Managed Services" />
        <meta property="og:description" content="Let us help you simplify your IT processes. Our operations managed services and IT management consulting help you run smoother, more efficient operations." />
        <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
        <meta property="og:keywords" content="managed application services, infrastructure managed services, operations managed services, Cloud managed services, it management consulting, it management company, it and management consulting" />
        {/* canonical */}
        <link rel="canonical" href="https://altumindglobal.com/services/managed-operations" />
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
            <div className="space-y-3 text-center">
              <p className="custom-sub-heading">Our IT Management Consulting services</p>
              <p className="custom-gradient-text">
               
                  Tailored Management for
                  <br />
           
               Every Aspect of Your Business
              </p>
              {/* <p className="md:max-w-[800px]">{data?.attributes?.description}</p> */}
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Spectrum />
          </div>
        </section>
        <section
          id="section3"
          className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-8"
        >
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
            Why Choose Altumind
            </p>
            <h2 className=" custom-gradient-text max-w-[700px]">
              {/* Architect of Your Digital Success Story */}
              Optimizing Operations with IT Management Consulting
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
              Harmonizing Your IT with Business Goals
            </p>
          </div>
          <SettingUpForSuccess />
        </section>
        <section id="section7">
          <div className="text-center space-y-3 mb-10 font-raleway">
            <p className="custom-sub-heading">
              Tech Stack
            </p>
            <p className="custom-gradient-text">
              Harnessing the Power of Leading Technologies
            </p>
          </div>
          <SolutionPartners />
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
};

export default ManagedOperations;
