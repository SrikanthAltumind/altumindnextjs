import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import Spectrum from "../Components/common-components/Spectrum"
// import SpectrumDesc from "../Components/common-components/SpectrumDesc"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import EngModel from "../Components/services-common/EngModel"
import Menu from "../Components/industries-common/Menu"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import TechStack from "../Components/services-common/TechStack"
import WhyAltumind from "../Components/services-common/WhyAltumind"
// import { gradientStyle } from "../ReactFunctions"
// import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import { Helmet } from "react-helmet-async"


const TechnologyAndEngineering = () => {
   const servicesMenu = [
     { id: "section1", tabId: "tab1", name: "Overview" },
     { id: "section2", tabId: "tab2", name: "Services" },
     { id: "section3", tabId: "tab3", name: "Why Us" },
     { id: "section4", tabId: "tab4", name: "Our Model" },
     { id: "section5", tabId: "tab5", name: "Testimonial" },
     { id: "section6", tabId: "tab6", name: "Industries" },
     { id: "section7", tabId: "tab7", name: "Tech Stack" },
     { id: "section8", tabId: "tab8", name: "Success" },
     { id: "section9", tabId: "tab9", name: "Insights" },
   ];
  
  return (
     <>
    <Helmet>
    {/* For SEO  */}
    <title>Digital Engineering Transformation | Digital Development Services</title>
    <meta
      name="description"
      content="Leverage our digital engineering transformation and digital development services to drive innovation, optimize operations, and future-proof your business."
    />
    <meta name="keywords" content="digital engineering transformation, digital development services, platform engineering services, digital platform engineering services, consulting platform engineering, engineering services and products company" />
    {/* For Social Media */}
    <meta property="og:title" content="Digital Engineering Transformation | Digital Development Services" />
    <meta property="og:description" content="Leverage our digital engineering transformation and digital development services to drive innovation, optimize operations, and future-proof your business." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    <meta property="og:keywords" content="digital engineering transformation, digital development services, platform engineering services, digital platform engineering services, consulting platform engineering, engineering services and products company" />
    {/* canonical */}
    <link rel="canonical" href= "https://altumindglobal.com/services/technology-and-engineering"  />
  </Helmet>
   
    <div className="dark:bg-darkTheme flex flex-col gap-12 lg:gap-16 relative">
      <Banner />
      <div className="w-full sticky top-[70px] bg-white -mt-16 dark:bg-darkTheme z-[2]">
        <Menu sections={servicesMenu} />
        {/* <IndustriesMenu sectionsMenu={servicesMenu} /> */}
      </div>
      <section id="section1">
        <Overview />
      </section>
      <section id="section2">
        <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
          <div className="text-center space-y-3">
            <p className="custom-sub-heading">Our Engineering Services</p>
            <p className="custom-gradient-text">
             Unmatched 
          
                Engineering
                <br /> Service Spectrum
              
            </p>
            {/* <p className="md:max-w-[800px]">{data?.attributes?.description}</p> */}
          </div>
        </div>
        <div className="w-[90%] mx-auto flex justify-center items-center">
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
          <h2 className=" custom-gradient-text">
            {/* Elevating Businesses Through Smart Engineering */}
            Your Digital Engineering Transformation Partner
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
           Tailored Solutions Across
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
        <SuccessStories heading="Real results from our Engineering Excellence"/>
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

export default TechnologyAndEngineering