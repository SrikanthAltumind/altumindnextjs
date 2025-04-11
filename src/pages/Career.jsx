
import { Helmet } from "react-helmet-async"
import CareersBanner from "../Components/career-components/CareersBanner"
import CareerScrollingCards from "../Components/career-components/CareerScrollingCards"
import DiscoverRoles from "../Components/career-components/DiscoverRoles"
import FAQ from "../Components/career-components/FAQ"
import LeadershipVoices from "../Components/career-components/LeadershipVoices"
import LifeAtAltumind from "../Components/career-components/LifeAtAltumind"
import WhyJoinAltumind from "../Components/career-components/WhyJoinAltumind"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import CareerForm from "../Components/contact-components/CareerForm"

const Career = () => {
  return (
    <>
      <Helmet>
            {/* For SEO  */}
            <meta name="title" content="Career Opportunities | Build Your Future with Us" />
            <meta
              name="description"
              content="Excited about new possibilities? Explore our career page and find a career path where your ideas and creativity can thrive in a dynamic, collaborative team."
            />
            <meta name="keywords" content="" />
            {/* For Social Media */}
            <meta property="og:title" content="Career Opportunities | Build Your Future with Us" />
            <meta property="og:description" content="Excited about new possibilities? Explore our career page and find a career path where your ideas and creativity can thrive in a dynamic, collaborative team." />
            <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
            <meta property="og:keywords" content="" />
            {/* canonical */}
            <link rel="canonical" href="https://altumindglobal.com/career" />
          </Helmet>
  
    <div className=" dark:bg-darkTheme flex flex-col gap-16 lg:gap-20">
      <CareersBanner />
      <WhyJoinAltumind />
      <CareerScrollingCards />
      <LifeAtAltumind />
      <LeadershipVoices />
      <DiscoverRoles />
      <section>
        <div className="text-center space-y-2 mb-16 font-raleway">
          <p className="custom-gradient-text py-2">
            Altumind Insights
          </p>
          <p className="custom-sub-heading">
            Stories of Nurturing Innovation and Excellence.
          </p>
        </div>
        <InsightsBlogs />
      </section>
        <FAQ />
       {/* <CareerForm/> */}
    
    </div>
    </>
  );
}

export default Career