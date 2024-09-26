import Timeline from "../Components/about-components/Timeline";
import Banner from "../Components/common-components/Banner";
import SolutionPartners from "../Components/common-components/SolutionPartners";
import OurImpactByNumbers from "../Components/services-common/OurImpactByNumbers";
import Overview from "../Components/services-common/Overview";
import WhyAltumind from "../Components/services-common/WhyAltumind";
import { gradientStyle } from "../ReactFunctions";
import NorthAndVisionary from '../Components/about-components/NorthAndVisionary'
import ExploreFurther from '../Components/about-components/ExploreFurther'
import SubscribeForm from "../Components/common-components/SubscribeForm";

const AboutUs = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-16 lg:gap-20">
      <Banner />
      <Overview />
      <OurImpactByNumbers />
      <section className="w-full flex flex-col gap-4 font-raleway">
        {/* <div className="w-full flex flex-col justify-center items-center gap-4 p-3">
          <p className="font-medium">The Altumind Story</p>
          <p className="text-3xl font-bold">
            <span className="dark:text-gray-100">A Journey of </span>
            <span className="text-4xl" style={gradientStyle}>
              TRY. FALL. CHANGE. RISE.
            </span>
          </p>
          <p className="w-[70%] text-center text-sm pt-4 dark:text-gray-200">
            {` At Altumind, we embrace a philosophy of continuous evolution,
            recognizing that true growth emerges from a willingness to
            experiment, learn from setbacks, and adapt to an ever-changing
            landscape. Our journey is a testament to this ethos, marked by bold
            attempts, resilience in the face of challenges, and an unwavering
            commitment to progress.`}
          </p>
        </div> */}
        <Timeline />

      </section>
      <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center font-raleway space-y-3 mb-10">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Why Us?
          </p>
          <p className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            The Altumind of Today & Tomorrow
          </p>
          <p className="max-w-[950px] mx-auto text-sm font-medium pt-5 dark:text-gray-200">
            At Altumind, we embrace a philosophy of continuous evolution,
            recognizing that true growth emerges from a willingness to
            experiment, learn from setbacks, and adapt to an ever-changing
            landscape. Our journey is a testament to this ethos, marked by bold
            attempts, resilience in the face of challenges, and an unwavering
            commitment to progress.
          </p>
        </div>
        <WhyAltumind />
      </section>
      <section>
        <NorthAndVisionary />
      </section>
      <section>
        <div className="text-center font-raleway flex flex-col gap-6 items-center justify-start p-3">
          <p className="text-sm md:text-base dark:text-white text-black font-semibold">
            Trusted Partnerships
          </p>
          <p
            className=" font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto"
            style={gradientStyle}
          >
            Our Network of Trusted Allies
          </p>
          <p className="max-w-[550px] mx-auto text-sm fon-medium dark:text-gray-200">
            {`We believe in the power of collaboration. That's why we partner with
            the best in the business to bring you the most innovative and
            effective solutions.`}
          </p>
        </div>
        <SolutionPartners />
      </section>
      <section className="w-full flex flex-col items-center justify-start">
        <div className="w-[90%] max-w-[1100px] mx-auto lg:flex items-center justify-between dark:text-white">
          <div className="basis-[65%] space-y-5">
            <div className="font-raleway space-y-2 max-lg:text-center">
              <p className="font-semibold dark:font-medium">
                Our Shared Commitment
              </p>
              <p className="lg:mx-0 max-w-[550px] text-3xl font-bold">
                Empowering <br />
                <span style={gradientStyle}>Green Transformations</span>
              </p>
            </div>
            {/* <div className="lg:hidden max-w-[320px] mx-auto">
          <img src={data?.image?.data?.attributes?.url} alt={data?.title} />
        </div> */}
            <p className="font-montserrat font-medium dark:font-normal max-lg:text-center text-sm xl:text-base leading-6">
              {`Sustainability is at the heart of everything we do. We empower businesses on their journey to a greener future by providing innovative digital solutions that optimize resource use, enhance transparency, and promote eco-conscious practices. Our own commitment to sustainability is unwavering, ensuring we're not just a provider of innovative digital solutions; we're a partner in your journey toward a greener future, fostering a collective commitment to a better world.`}
            </p>
            <a href="/about/about-altumind/community-engagement" className="cursor-pointer text-[#DD5143] underline font-medium group flex gap-1 items-center">
              <span>Learn more on our community page</span>
              <span>
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180 group-hover:mx-3 duration-200 transition-all"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="basis-[32%] bg-red-10 max-w-[320px] hidden lg:block">
            <img
              className=""
              src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Our_shared_commitment_Compressify_io_e57b08a7b4.webp"
              alt={`about-section-img`}
            />
          </div>
        </div>
      </section>
      <section className="py-6">
        <ExploreFurther />
      </section>
      <SubscribeForm />
    </div>
  );
};

export default AboutUs;
