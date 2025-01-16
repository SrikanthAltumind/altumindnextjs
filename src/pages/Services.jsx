import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import WhyAltumind from "../Components/services-common/WhyAltumind"
// import EngagementModel from '../Components/services-common/EngagementModel'
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
// import OurDesignServices from "../Components/experience-design-components/OurDesignServices"
import OurPhilosophy from "../Components/services-common/OurPhilosophy"
import OurImpactByNumbers from '../Components/services-common/OurImpactByNumbers'
import LogoMarquee from "../Components/common-components/LogoMarquee"
// import { gradientStyle } from "../ReactFunctions"
import Spectrum from "../Components/common-components/Spectrum"
import EngModel from "../Components/services-common/EngModel"
// import ExploreFurther from "../Components/about-components/ExploreFurther"
import { Helmet } from "react-helmet-async"
// import UpdatedEngagementModel from "../Components/services-common/UpdatedEngagementModel"


const Services = () => {
  const exploreFurtherData = [
    {
      title: "Dive into our latest insights and industry analyses.",
      hexvalue: "#02194A",
      cta: "/insights",
      ctaText: "Explore Our Insights",
    },
    {
      title:
        "Curious about our industry expertise? Let’s dive in and discover how we excel across various sectors!",
      hexvalue: "#DD5143",
      cta: "/industries",
      ctaText: "Explore Our Industries Expertise",
    },
    {
      title:
        "Discover the journey behind Altumind. From our humble beginnings to our current position.",
      hexvalue: "#5489FC",
      cta: "/about",
      ctaText: "Our Story",
    },
  ];
  return (
     <>
    <Helmet>
    {/* For SEO  */}
    <title>Our Services | Next-Gen Technology Solutions</title>
    <meta
      name="description"
      content="Learn about the wide range of services we offer to deliver effective solutions that support your business goals."
    />
    {/* For Social Media */}
    <meta property="og:title" content="Our Services | Next-Gen Technology Solutions" />
    <meta property="og:description" content="Learn about the wide range of services we offer to deliver effective solutions that support your business goals." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href= "https://altumindglobal.com/services" />
  </Helmet>
   
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <Banner />
      <Overview />
      <OurImpactByNumbers />
      <div className="w-full flex flex-col p-4 px-10 gap-3">
        <p className="font-raleway text-2xl font-semibold">Trusted By</p>
        <LogoMarquee />
      </div>
      <div className="font-raleway space-y-14 w-[90%] mx-auto">
        <div className="w-full text-center">
          <p className="custom-sub-heading">Our Key Services</p>
          <p className="custom-gradient-text md:max-w-[500px]">Offering Inside-Out<br />Business Transformation</p>
          {/* <p className="md:max-w-[800px]">{data?.attributes?.description}</p> */}
        </div>
        <Spectrum />
      </div>
      <EngModel/>
      <SuccessStories heading="Stories of Real-World Impact"/>
      <section>
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
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="custom-sub-heading">
            Why Choose Altumind
          </p>
          <p className="custom-gradient-text">
            Driving Change Through Strategic<br className="max-sm:hidden"/> Digital Innovation Services
          </p>
        </div>
        <WhyAltumind />
      </section>
      <OurPhilosophy />
      {/* <EngagementModel /> */}

      <section>
        <div className="text-center space-y-3 mb-20 font-raleway">
          <p className="custom-sub-heading">
            Benefits
          </p>
          <p className="custom-gradient-text">
            Powerful Advantages to Navigate Your Success
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <section>
        <div className="text-center mb-10 font-raleway">
          <p className="custom-gradient-text">
            Explore Further
          </p>
        </div>
        <div className="mx-auto w-[90%] max-w-[950px] dark:text-white space-y-10 font-raleway">
          <div className="flex gap-10 flex-wrap  justify-center text-white">
            {exploreFurtherData?.map((item) => (
              <div
                key={item.id}
                className="rounded-lg p-5 w-[270px] h-[310px] flex justify-between flex-col"
                style={{ backgroundColor: item?.hexvalue }}
              >
                <p className="font-semibold text-lg">
                  {item?.title}
                </p>
                <a href={item?.cta} to={item?.attributes?.url} className="w-fit cursor-pointer underline">
                  <p className="text-[13px] flex gap-2 items-center w-fit group font-semibold">
                    {item?.ctaText}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-3 transition-all duration-300  dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* <OurDesignServices /> */}
      </section>
      <GetStarted />
      <SubscribeForm />
    </div>
    </>
  );
}

export default Services