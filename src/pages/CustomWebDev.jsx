import { Helmet } from "react-helmet-async"
import Approach from "../Components/custom-web-dev-components/Approach"
import LandingBanner from "../Components/custom-web-dev-components/LandingBanner"
import LandingDigitalChallenges from "../Components/custom-web-dev-components/LandingDigitalChallenges"
import LandingPageFAQ from "../Components/custom-web-dev-components/LandingPageFAQ"
import OurExpertise from "../Components/custom-web-dev-components/OurExpertise"
import OurTrustedClients from "../Components/custom-web-dev-components/OurTrustedClients"
import ReadyToElevate from "../Components/custom-web-dev-components/ReadyToElevate"
import Results from "../Components/custom-web-dev-components/Results"
import WebDevelopment from "../Components/custom-web-dev-components/WebDevelopment"
import WhyAltumind from "../Components/custom-web-dev-components/WhyAltumind"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import { useEffect, useRef, useState } from "react"


const CustomWebDev = () => {
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
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <Helmet>
        {/* For SEO  */}
        <title>Tailored Custom Website Development for Your Business Success</title>
        <meta name="description" content="Your business deserves a website that works as hard as you do. Our custom website development team crafts sites that are engaging, and results-driven." />
        <meta name="keywords" content="custom website development, custom website development services, customized website development, custom web development, custom web development over wordpress, custom website development cost versus wordpress" />
        {/* For Social Media */}
        <meta property="og:title" content="Tailored Custom Website Development for Your Business Success" />
        <meta property="og:description" content="Your business deserves a website that works as hard as you do. Our custom website development team crafts sites that are engaging, and results-driven." />
        {/* canonical tag */}
        <link rel="canonical" href="https://altumindglobal.com/custom-website-development"></link>
        {/* for google ads conversion tracker */}
        {/* <!-- Google tag (gtag.js) event - delayed navigation helper --> */}
{/* <script>
  {`
  // Helper function to delay opening a URL until a gtag event is sent.
  // Call it in response to an action that should navigate to a URL.
  function gtagSendEvent(url) {
    var callback = function () {
      if (typeof url === 'string') {
        window.location = url;
      }
    };
    gtag('event', 'conversion_event_submit_lead_form', {
      'event_callback': callback,
      'event_timeout': 2000,
      // <event_parameters>
    });
    return false;
  }
  `}
</script> */}
      </Helmet>
      <div ref={bannerRef}>
      <LandingBanner/>
      </div>
      
        <Results/>
        <WebDevelopment/>
        <div className="flex flex-col justify-center">
        <OurTrustedClients/>
          <a href="https://altumindglobal.com/portfolio" className="mx-auto py-3 px-5 rounded-full bg-[#DD5143] font-medium text-white" target="blank"><button>Know More</button></a>
        </div>
        <Approach/>
        <LandingDigitalChallenges/>
        <OurExpertise/>
        <WhyAltumind/>
        <ReadyToElevate/>
        <LandingPageFAQ/>
        </div>
        <div id="subscribe-form" className="pt-24 lg:pt-28" ref={formRef}>
        <SubscribeForm />
        </div>
       
         {/* Floating Button */}
      {!isFloatingButtonVisible && !formVisible && (
        <button
          onClick={scrollToForm}
          className="fixed bottom-10 right-8 shadow-custom-shadow z-10 animate-bounce font-raleway text-white bg-[#DD5143] font-semibold py-2 px-5 rounded-full"
        >
        Start Your Project Now!
        </button>
      )}
   </>
  )
}

export default CustomWebDev