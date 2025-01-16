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
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
    <Helmet>
    {/* For SEO  */}
    <title>About Altumind | IT Solutions & Technology Consulting</title>
    <meta
      name="description"
      content="Find out who we are, what drives us, and how we help clients achieve success with innovative and reliable solutions."
    />
    {/* For Social Media */}
    <meta property="og:title" content="About AltumindGlobal | IT Solutions & Technology Consulting" />
    <meta property="og:description" content="Find out who we are, what drives us, and how we help clients achieve success with innovative and reliable solutions." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    {/* canonical */}
    <link rel="canonical" href= "https://altumindglobal.com/about" /> 
  </Helmet>
   
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
      <section className="bg-[#F3F9FF] font-raleway dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
        <div className="text-center space-y-3 mb-10">
          <p className="custom-sub-heading">
            Why Altumind?
          </p>
          <p className="custom-gradient-text">
            {/* The Altumind of Today & Tomorrow */}
            Where Innovation Meets Evolution 
          </p>
          <p className="max-w-[950px] mx-auto text-sm font-medium dark:text-gray-200">
            {/* At Altumind, we embrace a philosophy of continuous evolution,
            recognizing that true growth emerges from a willingness to
            experiment, learn from setbacks, and adapt to an ever-changing
            landscape. Our journey is a testament to this ethos, marked by bold
            attempts, resilience in the face of challenges, and an unwavering
            commitment to progress. */}
            We empower businesses to turn technology into growth through impactful solutions. We believe in continuous evolution, embracing experimentation and learning from setbacks to adapt to an ever-changing landscape. Our journey reflects bold initiatives and resilience, showcasing our unwavering commitment to progress. 
          </p>
        </div>
        <WhyAltumind />
      </section>
      <section>
        <NorthAndVisionary />
      </section>
      <section>
        <div className="text-center font-raleway flex flex-col gap-6 items-center justify-start p-3">
          <div className="text-center space-y-3 mb-10">
          <p className="custom-sub-heading">
          Partnerships and Alliances
          </p>
          <p
            className="custom-gradient-text"
          >
            Our Network of Trusted Allies
          </p>
          <p className="max-w-[550px] mx-auto text-sm fon-medium dark:text-gray-200">
            {/* {`We believe in the power of collaboration. That's why we partner with
            the best in the business to bring you the most innovative and
            effective solutions.`} */}
            We believe in the power of collaboration. That’s why we team up with the industry leaders to deliver the most innovative and effective solutions for you. 
          </p>
          </div>
        </div>
        <SolutionPartners />
        <div className="w-full flex flex-col justify-center items-center p-4 gap-6 mt-10 font-raleway font-medium text-center">
          <p>Discover the advantages of our strategic network.</p>
          <a href="/about/about-altumind/alliance" className="cursor-pointer">
            <p className=" md:text-base text-sm flex gap-2 underline items-center w-fit group font-semibold text-[#DD5143]">
              Explore Our Alliances
              <svg
                className="w-5 h-5 group-hover:translate-x-3 transition-all duration-300"
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
      </section>
      <section className="w-full font-raleway flex flex-col items-center justify-start">
        <div className="w-[90%] max-w-[1100px] mx-auto lg:flex-row flex flex-col text-center items-center justify-between dark:text-white">
          <div className="md:w-[65%] w-full gap-6 flex-col flex md:items-start items-center">
            <div className="lg:text-left space-y-3">
              <p className="custom-sub-heading">
              Our Commitment to Sustainability
              </p>
              <p className="max-w-[550px]  custom-gradient-text">
              Transforming Our Ecosystem for a Greener Tomorrow 
              </p>
            </div>
            {/* <div className="lg:hidden max-w-[320px] mx-auto">
          <img src={data?.image?.data?.attributes?.url} alt={data?.title} />
        </div> */}
            <p className="font-montserrat font-medium dark:font-normal md:text-left text-center text-sm xl:text-base leading-6">
            Sustainability is at the heart of everything we do. We empower businesses on their journey to a greener future by offering innovative digital solutions that optimize resource use, enhance transparency, and promote eco-conscious practices.  
            </p>
            <p className="font-montserrat font-medium dark:font-normal md:text-left text-center text-sm xl:text-base leading-6">
            Our unwavering commitment to sustainability ensures that we are not just providers of digital solutions, but your partners in fostering a collective commitment to a better world!    
            </p>
            <a
              href="/about/about-altumind/community-engagement"
              className="cursor-pointer text-[#DD5143] underline font-medium group flex md:justify-start justify-center gap-1 items-center w-full"
            >
              <span>Learn more</span>
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
          <div className="basis-[32%] bg-red-10 max-w-[320px] lg:block">
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
    </>
  );
};

export default AboutUs;
