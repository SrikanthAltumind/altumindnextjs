import { Helmet } from "react-helmet-async";
import Banner from "../Components/common-components/Banner";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import SuccessStories from "../Components/home-components/SuccessStories";
import GetStarted from "../Components/services-common/GetStarted";
import Overview from "../Components/services-common/Overview";
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess";

const MissionAndVision = () => {
  return (
    <>
    <Helmet>
    {/* For SEO  */}
    <title>Altumind: Our Mission & Vision | Innovative IT Solutions</title>
    <meta
      name="description"
      content="Learn about our mission to inspire growth and our vision for a future built on innovation, integrity, and excellence."
    />
    {/* For Social Media */}
    <meta property="og:title" content="AltumindGlobal: Our Mission & Vision | Innovative IT Solutions" />
    <meta property="og:description" content="Learn about our mission to inspire growth and our vision for a future built on innovation, integrity, and excellence." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href="https://altumindglobal.com/about/about-altumind/mission-and-vision" />
  </Helmet>

    <div className="dark:bg-darkTheme  flex flex-col gap-24 lg:gap-28">
      <Banner />
        <section className=" w-[90%] max-w-[1000px] mx-auto">
        <p className="custom-gradient-text pb-10 sm:hidden font-raleway lg:mx-0">
              Our Mission
            </p>
          <div className="flex sm:flex-row flex-col-reverse gap-5 items-center">
            <div className="basis-[50%] space-y-5">
            <p className="custom-gradient-text max-sm:hidden font-raleway sm:ml-0">
              Our Mission
            </p>
            <p className="font-montserrat">
              {`"We deliver innovative, data-driven solutions that seamlessly
              blend human-centric design and cutting-edge technology, enabling
              our clients to thrive in the digital age and make a positive
              impact on the world."`}
            </p>
            </div>
              <div className="basis-[50%]">
              <img
              src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Mision_Compressify_io_ff1b861850.webp"
              alt="msv-our-mission"
              className="w-[360px]  mx-auto"
            />
              </div>

          </div>

          <div  className="mt-24 lg:mt-28">
            <p className="custom-gradient-text pb-10 sm:hidden font-raleway lg:mx-0">
            Our Vision
            </p>
            <div className="flex sm:flex-row flex-col gap-5 items-center">
            <div className="basis-[50%]">
                <img
                src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Vision_Compressify_io_6dd26e8e7e.webp"
                alt="msv-our-mission"
                className="w-[360px]"
                />
              </div>
              <div className="basis-[50%] space-y-5">
            <p className="custom-gradient-text max-sm:hidden font-raleway sm:ml-0">
            Our Vision
            </p>
            <p className="font-montserrat">
              {`"To pioneer a future where technology and humanity converge, empowering businesses to create exceptional experiences and achieve sustainable growth."`}
            </p>
              </div>
              
            </div>
          </div>
        </section>

      <section>
        <div className="text-center space-y-3 mb-10 font-raleway">
          <p className="custom-sub-heading">
            Beyond Words
          </p>
          <p className="custom-gradient-text">
            How We Bring Our Vision to Life?
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <Overview />
      <GetStarted />
      <SuccessStories heading="Proven Result of our Marketing Expertise"/>
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
    </>
  );
};

export default MissionAndVision;
