import Banner from "../Components/common-components/Banner";
import Testimonials from "../Components/common-components/Testimonials";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import SuccessStories from "../Components/home-components/SuccessStories";
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess";
import Overview from "../Components/services-common/Overview";
import OurDesignServices from "../Components/experience-design-components/OurDesignServices";
import TechStack from "../Components/services-common/TechStack";
import WhyAltumind from "../Components/services-common/WhyAltumind";
import GetStarted from "../Components/services-common/GetStarted";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
// import { gradientStyle } from "../ReactFunctions";
import Menu from "../Components/industries-common/Menu";
import EngModel from "../Components/services-common/EngModel";
import { Helmet } from "react-helmet-async";

const ExperienceDesign = () => {
  const servicesMenu = [
    { id: "section-1", tabId: "tab1", name: "Overview" },
    { id: "section-2", tabId: "tab2", name: "Services" },
    { id: "section-3", tabId: "tab3", name: "Tech Stack" },
    { id: "section-4", tabId: "tab4", name: "Why Us" },
    { id: "section-5", tabId: "tab4", name: "Our Model" },
    { id: "section-6", tabId: "tab5", name: "Testimonials" },
    { id: "section-7", tabId: "tab6", name: "Benefits" },
    { id: "section-8", tabId: "tab8", name: "Success" },
    { id: "section-9", tabId: "tab9", name: "Insights" },
  ];
  return (
     <>
    <Helmet>
    {/* For SEO  */}
    <title>Experience Design Services & Consulting | Altumind</title>
    <meta
      name="description"
      content="Transform your digital presence with our experience design services and experience design consulting, focused on creating seamless, user-centered solutions."
    />
    {/* For Social Media */}
    <meta property="og:title" content="Experience Design Services & Consulting | AltumindGlobal" />
    <meta property="og:description" content="Transform your digital presence with our experience design services and experience design consulting, focused on creating seamless, user-centered solutions." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href="https://altumindglobal.com/services/experience-design" />
  </Helmet>
   
    <div className="dark:bg-darkTheme flex flex-col gap-16 relative">
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full sticky top-[70px] bg-white dark:bg-darkTheme -mt-16 z-[2]">
        <Menu sections={servicesMenu} />
      </div>
      <section id="section-1">
        <Overview />
      </section>
      <section id="section-2">
        <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
          {/* <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
            <p className="font-semibold">Our Design Services</p>
            <p className="text-3xl font-extrabold">
              <span>Your Partner in </span>
              <span style={gradientStyle}>Experience-Driven Growth</span>
            </p>
          </div> */}
          <OurDesignServices />
        </div>
      </section>
      <section id="section-3">
        <TechStack />
      </section>
      <section
        id="section-4"
        className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10"
      >
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="custom-sub-heading">
            Why Altumind Stands Out
          </p>
          <p className="custom-gradient-text">
            Shaping Digital Interactions Since Inception
          </p>
        </div>
        <WhyAltumind />
      </section>
      <section id="section-5">
        <EngModel />
      </section>
      <section id="section-6">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="custom-sub-heading">
            Client Testimonials
          </p>
          <p className="custom-gradient-text">
            The Altumind Impact: In Their Words
          </p>
        </div>
        <Testimonials />
      </section>
      <section id="section-7">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="custom-sub-heading">
            Benefits
          </p>
          <p className="custom-gradient-text">
            Setting You Up For Success
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <GetStarted />
      <section id="section-8">
        <SuccessStories heading="Experiences That Inspire Innovation" />
      </section>
      <section id="section-9">
        <div className="text-center space-y-2 mb-20 font-raleway">
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

export default ExperienceDesign;
