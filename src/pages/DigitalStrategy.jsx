import Banner from "../Components/common-components/Banner";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
import SolutionPartners from "../Components/common-components/SolutionPartners";
import Spectrum from "../Components/common-components/Spectrum";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import Testimonials from "../Components/common-components/Testimonials";
import SuccessStories from "../Components/home-components/SuccessStories";
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import EngModel from "../Components/services-common/EngModel";
import Menu from "../Components/industries-common/Menu";
import GetStarted from "../Components/services-common/GetStarted";
import Overview from "../Components/services-common/Overview";
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess";
import WhyAltumind from "../Components/services-common/WhyAltumind";
// import { gradientStyle } from "../ReactFunctions";
import { Helmet } from "react-helmet-async";

const DigitalStrategy = () => {
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
  return (
    <>
    <Helmet>
      {/* For SEO  */}
      <title>Digital Strategy Services | Best Digital Strategy consultant</title>
      <meta
        name="description"
        content="Need a winning digital strategy? Our digital strategy services and experienced digital strategist consultants provide the insights to grow your business online."
      />
      <meta name="keywords" content="digital strategy services, it strategy consulting services, digital strategist consultant, digital strategy consulting firms, digital strategy consulting companies" />
      {/* For Social Media */}
      <meta property="og:title" content="Digital Strategy Services | Best Digital Strategy consultant" />
      <meta property="og:description" content="Need a winning digital strategy? Our digital strategy services and experienced digital strategist consultants provide the insights to grow your business online." />
      <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
      <meta property="og:keywords" content="managed application services, infrastructure managed services, operations managed services, Cloud managed services, it management consulting, it management company, it and management consulting" />
      {/* canonical */}
      <link rel="canonical" href="https://altumindglobal.com/services/digital-strategy-consulting" />
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
              <p className="custom-sub-heading">Our IT Strategy Consulting Services</p>
              <p className="custom-gradient-text">
              
                  Offering End-to-End IT Strategy
                  <br />
             
                Consulting Services for Your Digital Visions
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Spectrum />
            </div>
          </div>
        </section>
        <section id="section3" className="bg-[#F3F9FF] py-8">
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="custom-sub-heading">
            Why Choose Altumind
            </p>
            <h2 className=" custom-gradient-text max-w-[700px]">
            Your Success Partner Among Digital Strategy Consulting Firms
              {/* Ensuring your business win in the digital world */}
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
                Leaping Ahead with
            
              
                Value-Driven
                <br /> Digital Solutions
          
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

export default DigitalStrategy;
