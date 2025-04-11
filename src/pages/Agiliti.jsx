import Banner from "../Components/common-components/Banner"
import IndustriesMenu from "../Components/industries-common/IndustriesMenu"
import Testimonials from "../Components/common-components/Testimonials"
import SuccessStories from "../Components/home-components/SuccessStories"
import TechStackSlider from "../Components/services-common/TechStackSlider"
import PainPoints from "../Components/agiliti-components/PainPoints"
import TechContent from "../Components/agiliti-components/TechContent"
// import TimeLineFlow from "../Components/common-components/TimeLineFlow"
import AgilitiStats from "../Components/agiliti-components/AgilitiStats"
import LogoMarquee from "../Components/common-components/LogoMarquee"
import CultureAndSynergy from "../Components/agiliti-components/CultureAndSynergy"
import FAQ from "../Components/agiliti-components/FAQ"
import AgilitiForm from "../Components/agiliti-components/AgilitiForm"
import { useEffect, useRef, useState } from "react"
import AgilitiEngagementModels from "../Components/agiliti-components/AgilitiEngagementModels"
import { Helmet } from "react-helmet-async"
import HowAgilitiWorks from "../Components/agiliti-components/HowAgilitiWorks"

const sectionsMenu = [
  { id: "section1", tabId: "tab1", name: "Why Agiliti" },
  { id: "section2", tabId: "tab2", name: "How It Works" },
  { id: "section3", tabId: "tab3", name: "Engagement Models" },
  { id: "section4", tabId: "tab4", name: "Tech Stack" },
  { id: "section5", tabId: "tab5", name: "Clients"},
  { id: "section6", tabId: "tab6", name: "Culture" },
  { id: "section7", tabId: "tab7", name: "Success" },
  { id: "section8", tabId: "tab8", name: "Testimonials" },
  // { id: "section9", tabId: "tab9", name: "FAQ" },
];

const Agiliti = () => {
  const [isFloatingButtonVisible, setIsFloatingButtonVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(false);
  const bannerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const bannerObserver = new IntersectionObserver(
      ([entry]) => {
        // setIsFloatingButtonVisible(!entry.isIntersecting); 
        if (entry.isIntersecting) {
          setIsFloatingButtonVisible(true); 
        } else {
          setIsFloatingButtonVisible(false); 
        }
      },
      { threshold: 0 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true); 
        } else {
          setFormVisible(false); 
        }
      },
      { threshold: 0 }
    );

    if (bannerRef.current) bannerObserver.observe(bannerRef.current);
    if (formRef.current) formObserver.observe(formRef.current);

    return () => {
      if (bannerRef.current) bannerObserver.unobserve(bannerRef.current);
      if (formRef.current) formObserver.unobserve(formRef.current);
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Helmet>
    {/* For SEO  */}
    <meta name="title" content="Hire Dedicated Developers | Expert Offshore Development Teams – Agiliti"/>
    <meta name="description" content="Looking to hire dedicated developers for your next project? Partner with our expert offshore development teams for cost-effective and high-quality solutions. Build your dream team today!" />
    <meta name="keywords" content="hire dedicated developers, offshore development, dedicated development team, offshore developers, remote developers"/>
    {/* For Social Media */}
    <meta property="og:title" content="Hire Dedicated Developers | Expert Offshore Development Teams – Agiliti" />
    <meta property="og:description" content="Looking to hire dedicated developers for your next project? Partner with our expert offshore development teams for cost-effective and high-quality solutions. Build your dream team today!" />
    <meta property="og:image" content="https://cdn.altumindglobal.com/Agiliti_Logo_1_b704dfb935.png" />
    <meta property="og:url" content="https://altumindglobal.com/agiliti-hire-dedicated-developers" />
    {/* !-- Event snippet for Agiliti_Visitors remarketing page --> */}
    <script>
      {`
      gtag('event', 'conversion', {
      'send_to': 'AW-16664537432/jD3qCMKLs_QZENjSooo-',
      'value': 1.0,
      'currency': 'INR',
      'aw_remarketing_only': true
      });`}
    </script>
  </Helmet>
    <div className="dark:bg-darkTheme flex flex-col ">
      <div ref={bannerRef}>
        <Banner />
      </div>
        <div className="z-[2] flex flex-col gap-24 lg:gap-28">
          
      <IndustriesMenu  sectionsMenu={sectionsMenu}/>
      <section id="section1" className="flex flex-col gap-24 lg:gap-28 ">
      
          <PainPoints/><AgilitiStats/></section>
         
      <section id="section2">
        <div className="max-w-[800px] mx-auto text-center font-raleway  mb-16">
          <h2 className="custom-gradient-text">How Agiliti Works - Hiring A Dedicated Development Team</h2>
        </div>
        {/* <TimeLineFlow/> */}
        <HowAgilitiWorks/>
      </section>
      <section id="section3">
      <div className="max-w-[800px] mx-auto text-center font-raleway space-y-3 mb-16">
          <p className="custom-sub-heading">Diverse Models for Every Size, Budget, and Requirement</p>
          <h2 className="custom-gradient-text">Different Engagement Models for An Offshore Development Team</h2>
          </div>
          <AgilitiEngagementModels/>
      </section>
      <section id="section4">
          <div className="max-w-[950px] mx-auto text-center font-raleway space-y-3 mb-16">
          <p className="custom-sub-heading">A Non-Exhaustive List of Business Facets Across Any Programming Language and Framework</p>
          <h2 className="custom-gradient-text">Hire Dedicated Developers across Service and Tech Stack</h2>
          </div>
          <div className="space-y-14">
            <TechStackSlider/>
            <TechContent/>
          </div>
      </section>
      <section id="section5">
          <div className="max-w-[800px] mx-auto text-center font-raleway space-y-3 mb-10">
          {/* <p className="custom-sub-heading">Some of Our Happy Clients</p> */}
          <h2 className="custom-gradient-text">Trusted by - Clients Served So Far</h2>
          </div>
          <LogoMarquee/>
      </section>
      <section id="section6"><CultureAndSynergy/></section>
      <section id="section7"><SuccessStories title="Case Studies" heading="Our Past Talent Integration Success Stories"/></section>
      <section id="section8">
        <div className="max-w-[800px] mx-auto text-center font-raleway space-y-3 mb-16">
          <p className="custom-sub-heading">Hear from A Few of Our Satisfied Clients</p>
          <p className="custom-gradient-text">Client Speak About Our Offshore Development Team</p>
        </div>
      <Testimonials/>
      </section>
      </div>
      <div className="pt-24 lg:pt-28">
      <FAQ />
      </div>
      
      <div className="pt-24 lg:pt-28" id="agiliti-form" ref={formRef}>
        <AgilitiForm />
      </div>
      {/* Floating Button */}
      {!isFloatingButtonVisible && !formVisible && (
        <button
          onClick={scrollToForm}
          className="fixed bottom-10 text-lg right-8 shadow-custom-shadow z-10  font-raleway text-white bg-[#DD5143] font-semibold py-3 px-8 animate-bounce rounded-full"
        >
         Expand Your Crew
        </button>
      )}
    </div>
    </>
  )
}

export default Agiliti