import Banner from "../Components/common-components/Banner";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import SuccessStories from "../Components/home-components/SuccessStories";
import GetStarted from "../Components/services-common/GetStarted";
import Overview from "../Components/services-common/Overview";
import SettingUpForSuccess from "../Components/services-common/SettingUpForSuccess";
import { gradientStyle } from "../ReactFunctions";

const MissionAndVision = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <Banner />
      <section className="w-full flex flex-col p-4 font-raleway justify-center items-center gap-10">
        <div className="w-[80%] flex justify-between items-center">
          <div className="flex flex-col gap-6 w-[40%]">
            <p className="text-3xl font-extrabold" style={gradientStyle}>
              Our Mission
            </p>
            <p className="max-w-[450px]">
              {`"We deliver innovative, data-driven solutions that seamlessly
              blend human-centric design and cutting-edge technology, enabling
              our clients to thrive in the digital age and make a positive
              impact on the world."`}
            </p>
          </div>
          <div className="w-[40%] justify-center">
            <img
              src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Mision_Compressify_io_ff1b861850.webp"
              alt="msv-our-mission"
              className="w-[350px] h-[400px] object-contain"
              // height="100%"
              // width="100%"
            />
          </div>
        </div>
        <div className=" w-[80%] flex justify-between items-center">
          <div className="w-[40%] flex justify-center">
            <img
              src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Vision_Compressify_io_6dd26e8e7e.webp"
              alt="msv-our-mission"
              className="w-[400px] h-[400px] object-contain"
              // height="100%"
              // width="100%"
            />
          </div>
          <div className="flex flex-col gap-6 w-[40%]">
            <p className="text-3xl font-extrabold" style={gradientStyle}>
              Our Vision
            </p>
            <p className="max-w-[450px]">
              {`"To pioneer a future where technology and humanity converge, empowering businesses to create exceptional experiences and achieve sustainable growth."`}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Beyond Words
          </p>
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            How We Bring Our Vision to Life?
          </p>
        </div>
        <SettingUpForSuccess />
      </section>
      <Overview />
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
};

export default MissionAndVision;
