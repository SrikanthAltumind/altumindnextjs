import ExploreFurther from "../Components/about-components/ExploreFurther"
import Banner from "../Components/common-components/Banner"
import OurImpactByNumbers from "../Components/services-common/OurImpactByNumbers"
import Overview from "../Components/services-common/Overview"
import WhyAltumind from "../Components/services-common/WhyAltumind"
import SolutionPartners from '../Components/common-components/SolutionPartners'
import NorthAndVisionary from "../Components/about-components/NorthAndVisionary"
import { Link } from "react-router-dom"


const AboutUs = () => {
  return (
    <div className="dark:bg-darkTheme dark:text-white flex flex-col gap-24 lg:gap-28">
        <Banner/>
        <Overview/>
        <OurImpactByNumbers/>
        <section className="bg-[#F3F9FF] dark:bg-gradient-to-b from-[#031848] to-darkTheme py-10">
      <div className='text-center font-raleway space-y-3 mb-10'>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>Why Us?</p>
            <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>The Altumind of Today & Tomorrow</p>
            <p className="max-w-[950px] mx-auto text-sm fon-medium pt-5 ">At Altumind, we embrace a philosophy of continuous evolution, recognizing that true growth emerges from a willingness to experiment, learn from setbacks, and adapt to an ever-changing landscape. Our journey is a testament to this ethos, marked by bold attempts, resilience in the face of challenges, and an unwavering commitment to progress.</p>
        </div>
      <WhyAltumind/>
      </section>
      <NorthAndVisionary/>
      <section>
      <div className='text-center font-raleway space-y-3 mb-10'>
            <p className='text-sm md:text-base dark:text-white text-black font-semibold'>Trusted Partnerships</p>
            <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Our Network of Trusted Allies</p>
            <p className="max-w-[650px] mx-auto text-sm fon-medium pt-5 ">We believe in the power of collaboration. That&apos;s why we partner with the best in the business to bring you the most innovative and effective solutions.</p>
        </div>
      <SolutionPartners/>
      <div className="bg-LightBlue dark:bg-DarkBackground dark:text-white max-w-[500px] rounded-xl space-y-3 w-[90%] text-sm md:text-base mx-auto mt-20 p-5 text-center font-raleway font-semibold">
        <p className="">Discover the advantages of our strategic network.</p>
        <Link to= "/about-us/alliance" className='group mx-auto w-fit text-sm md:text-base underline decoration-1 underline-offset-2   text-secondary  flex justify-center items-center gap-1'>
        Explore Our Alliances
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </Link>
      </div>
      </section>
      
      <ExploreFurther/>
    </div>
  )
}

export default AboutUs