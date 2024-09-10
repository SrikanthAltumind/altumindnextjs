
import CareersBanner from "../Components/career-components/CareersBanner"
import DiscoverRoles from "../Components/career-components/DiscoverRoles"
import LeadershipVoices from "../Components/career-components/LeadershipVoices"
import LifeAtAltumind from "../Components/career-components/LifeAtAltumind"
import WhyJoinAltumind from "../Components/career-components/WhyJoinAltumind"
import InsightsBlogs from "../Components/common-components/InsightsBlogs"
import SubscribeForm from "../Components/common-components/SubscribeForm"

const Career = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
    <CareersBanner/>
    <WhyJoinAltumind/>
    <LifeAtAltumind/>
    <LeadershipVoices/>
    <DiscoverRoles/>
    <section>
    <div className="text-center space-y-2 mb-20 font-raleway">
            <p className="font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue">Altumind Insights</p>
            <p className="text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold">Stories of Nurturing Innovation and Excellence.</p>
          </div>
    <InsightsBlogs/>
    </section>
    <SubscribeForm />
    </div>
  )
}

export default Career