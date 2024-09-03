import Banner from "../Components/common-components/Banner"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SolutionPartners from "../Components/common-components/SolutionPartners"
import Spectrum from "../Components/common-components/Spectrum"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import GetStarted from "../Components/services-common/GetStarted"
import Overview from "../Components/services-common/Overview"
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import { gradientStyle } from "../ReactFunctions"

const DigitalStrategy = () => {
    return (
      <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-16">
        <Banner />
        <Overview />
        <div className="w-full flex flex-col gap-3 justify-start items-center p-5 py-7 font-raleway">
          <div className="w-full justify-center items-center flex flex-col p-4 gap-3 text-center">
            <p className="font-semibold">Our Digital Strategy & Consulting</p>
            <p className="text-3xl font-extrabold md:max-w-[500px]">
              <span style={gradientStyle}>
                Offering End-to-End Support
                <br />{" "}
              </span>
              <span>for Your Digital Visions</span>
            </p>
            {/* <p className="md:max-w-[800px]">{data?.attributes?.description}</p> */}
          </div>
        </div>
        <Spectrum />
        <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
          <div className="text-center font-raleway space-y-3 mb-10">
            <p className="text-sm md:text-base dark:text-white text-black font-semibold">
              Why Altumind Stands Out
            </p>
            <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
              Ensuring your business win in the digital world
            </p>
          </div>
          <WhyAltumind />
        </section>
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
        <section>
          <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
              Benefit
            </p>
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
              Leaping Ahead with Value-Driven Digital Solutions
            </p>
          </div>
          <SettingUpForSuccess />
        </section>
        <section>
          <div className="text-center space-y-3 mb-10 font-raleway">
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
              Tech Stack
            </p>
            <p className=" font-extrabold w-fit mx-auto text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
              Harnessing the Power of Leading Technologies
            </p>
          </div>
          <SolutionPartners />
        </section>
        <GetStarted />
        <SuccessStories />
        <section>
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

export default DigitalStrategy