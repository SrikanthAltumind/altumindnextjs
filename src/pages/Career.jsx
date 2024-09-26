
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
    <div className=" dark:bg-darkTheme flex flex-col gap-16 lg:gap-20">
      <CareersBanner />
      <WhyJoinAltumind />
      <CareerScrollingCards />
      <LifeAtAltumind />
      <LeadershipVoices />
      <DiscoverRoles />
      <section>
        <div className="text-center space-y-2 mb-20 font-raleway">
          <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">
            Altumind Insights
          </p>
          <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">
            Stories of Nurturing Innovation and Excellence.
          </p>
        </div>
        <InsightsBlogs />
      </section>
        <FAQ />
       <CareerForm/>
    
    </div>
  );
}

export default Career