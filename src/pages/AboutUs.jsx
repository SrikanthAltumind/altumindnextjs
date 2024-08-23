import Banner from "../Components/common-components/Banner"
import OurImpactByNumbers from "../Components/services-common/OurImpactByNumbers"
import Overview from "../Components/services-common/Overview"
import WhyAltumind from "../Components/services-common/WhyAltumind"


const AboutUs = () => {
  return (
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
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
    </div>
  )
}

export default AboutUs