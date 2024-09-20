import Banner from "../Components/common-components/Banner"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import EngagementModel from '../Components/services-common/EngagementModel'
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import OurDesignServices from "../Components/experience-design-components/OurDesignServices"
import OurPhilosophy from "../Components/services-common/OurPhilosophy"
import OurImpactByNumbers from '../Components/services-common/OurImpactByNumbers'
import LogoMarquee from "../Components/common-components/LogoMarquee"
import { gradientStyle } from "../ReactFunctions"
import Spectrum from "../Components/common-components/Spectrum"
import EngModel from "../Components/common-components/EngModel"
import ExploreFurther from "../Components/about-components/ExploreFurther"
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
    <div className="dark:bg-darkTheme flex flex-col gap-16">
      <Banner />
      <Overview />
      <OurImpactByNumbers />
      <div className="w-full flex flex-col p-4 px-10 gap-3">
        <p className="font-raleway text-2xl font-semibold">Trusted By</p>
        <LogoMarquee />
      </div>
      <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
        <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
          <p className="font-semibold">Our Key Services</p>
          <p className="text-4xl font-extrabold md:max-w-[500px]">
            <span>
              Offering Inside-Out
              <br />{" "}
            </span>
            <span style={gradientStyle}>Business Transformation</span>
          </p>
          {/* <p className="md:max-w-[800px]">{data?.attributes?.description}</p> */}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Spectrum />
      </div>

      <SuccessStories />
      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Client Testimonials
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            The Altumind Impact: In Their Words
          </p>
        </div>
        <Testimonials />
      </section>
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Why Choose Altumind
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Driving Change Through Strategic Digital Innovation Services
          </p>
        </div>
        <WhyAltumind />
      </section>
      <OurPhilosophy />
      <EngagementModel />

      {/* <EngModel /> */}
      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Benefits
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Powerful Advantages to Navigate Your Success
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <section>
        <div className="text-center space-y-2 mb-10 font-raleway">
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
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
  );
}

export default Services