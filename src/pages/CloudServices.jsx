import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SolutionPartners from "../Components/common-components/SolutionPartners"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Menu from "../Components/industries-common/Menu"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import ValueSection from "../Components/services-common/ValueSection"
import WhyAltumind from "../Components/services-common/WhyAltumind"


const CloudServices = () => {
  const servicesMenu = [
    { id: "section-1", tabId: "tab1", name: "OverView" },
    { id: "section-2", tabId: "tab2", name: "Services" },
    { id: "section-3", tabId: "tab3", name: "Partnerships" },
    { id: "section-4", tabId: "tab4", name: "Why Us" },
    { id: "section-5", tabId: "tab5", name: "Testimonial" },
    { id: "section-6", tabId: "tab6", name: "Benefits" },
    { id: "section-7", tabId: "tab7", name: "Success Stories" },
    { id: "section-8", tabId: "tab8", name: "Insights" },
  ];
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <div>
        <Banner />
        <Menu sections={servicesMenu} />
      </div>
      <section id="section-1">
        <Overview />
      </section>
      <section id="section-2">
        <ValueSection />
      </section>
      <section id="section-3">
        <div className="text-center space-y-3 mb-10 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Our Partnership Ecosystem
          </p>
          <p className=" font-extrabold w-fit mx-auto text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Elite Partners Behind Our Cloud Innovation
          </p>
        </div>
        <SolutionPartners />
      </section>
      <section id="section-4" className="bg-[#F3F9FF] py-8">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Why Altumind Stands Out
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Making Cloud Work for You
          </p>
        </div>
        <WhyAltumind />
      </section>
      <section id="section-5">
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
      <section id="section-6">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Benefits
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Adaptive Solutions for Modern Success
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <GetStarted />
      <section id="section-7">
        <SuccessStories />
      </section>
      <section id="section-8">
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Insights
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Dive into Our Latest Perspectives
          </p>
        </div>
        <InsightsBlogs />
      </section>
      <SubscribeForm />
    </div>
  );
}

export default CloudServices