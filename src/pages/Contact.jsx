import SubscribeForm from "../Components/common-components/SubscribeForm"
import ContactBanner from "../Components/contact-components/ContactBanner"
import GlobalImprint from "../Components/contact-components/GlobalImprint"
import OurLocation from "../Components/contact-components/OurLocation"
// import ReachOutToAltumind from "../Components/contact-components/ReachOutToAltumind"

import ContactMenu from '../Components/contact-components/ContactMenu'
import CareerForm from "../Components/contact-components/CareerForm"
import { Helmet } from "react-helmet-async"

const Contact = () => {
  return (
    <>
       <Helmet>
            {/* For SEO  */}
            <meta name="title" content="Contact Us | We're Here to Help – Get in Touch Today" />
            <meta
              name="description"
              content="Let’s talk! Whether you need support or have questions, our team is ready and eager to assist. Get in touch with us today."
            />
            <meta name="keywords" content="" />
            {/* For Social Media */}
            <meta property="og:title" content="Contact Us | We're Here to Help – Get in Touch Today" />
            <meta property="og:description" content="Let’s talk! Whether you need support or have questions, our team is ready and eager to assist. Get in touch with us today." />
            <meta property="og:image" content="https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png" />
            <meta property="og:keywords" content="" />
            {/* canonical */}
            <link rel="canonical" href="https://altumindglobal.com/contact" />
          </Helmet>
  
    <div className="dark:bg-darkTheme flex flex-col gap-24 lg:gap-28">
      <ContactBanner/>
      <ContactMenu/>
 
      <OurLocation/>
      
      {/* <ReachOutToAltumind/> */}
      <GlobalImprint/>
      <CareerForm/>
      {/* <ThankyouNote/> */}
      {/* <SubscribeForm/> */}
    </div>
    </>
  );
};

export default Contact;
