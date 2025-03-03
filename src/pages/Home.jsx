// import React from 'react'

import { Helmet } from 'react-helmet-async'
import LogoMarquee from '../Components/common-components/LogoMarquee'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import Testimonials from '../Components/common-components/Testimonials'
import GlobalImprint from '../Components/contact-components/GlobalImprint'
// import Affirmations from '../Components/home-components/Affirmations'
import CorePillars from '../Components/home-components/CorePillars'
import DigitalJourney from '../Components/home-components/DigitalJourney'
// import HomeBanner from '../Components/home-components/HomeBanner'
import HomeBannerUpdated from '../Components/home-components/HomeBannerUpdated'
import LifeandCarrer from '../Components/home-components/LifeandCareer'
import ResourceCenter from '../Components/home-components/ResourceCenter'
import SuccessStories from '../Components/home-components/SuccessStories'
// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

const Home = () => {

    // const { pathname } = useLocation();
  
    // useEffect(() => {
    //   window.scrollTo(0,0);
    //   console.log("useeffect called")
    //   return () => {
    //     console.log("return block")
    //   }
    // }, [pathname]);
  return (
    <>
    <Helmet>
    {/* For SEO  */}
    <title>Leading Digital Innovation | Digital Transformation Companies</title>
    <meta
      name="description"
      content="Explore AltumindGlobal for top-tier Digital Innovation and Digital Transformation Companies that drive innovation and success."
    />
    <meta name="keywords" content="Digital Integration, Digital Transformation Companies"/>
    {/* For Social Media */}
    <meta property="og:title" content="Leading Digital Innovation | Digital Transformation Companies" />
    <meta property="og:description" content="Explore AltumindGlobal for top-tier Digital Innovation and Digital Transformation Companies that drive innovation and success." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    <meta property="og:url" content="https://altumindglobal.com" />
    <meta property="og:keywords" content="Digital Integration, Digital Transformation Companies" />
    {/* canonical */}
    <link rel="canonical" href="https://altumindglobal.com" />
    <script type="application/ld+json">
    {` {"@context": "https://schema.org","@type": "Organization","name": "Altumind",
  "alternateName": "Altumind Digital","url": "https://altumindglobal.com/","logo": "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "8031405675",
    "contactType": "sales"
  },
  "sameAs": [
    "https://www.instagram.com/altumindglobal/",
    "https://www.linkedin.com/company/altumindglobal/",
    "https://www.facebook.com/AltumindGlobal",
    "https://x.com/altumind"
  ]}`}
   </script>
   {/* <link 
          rel="preload" 
          as="image" 
          href="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Homepage_Desktop_Compressify_io_75ff825852.webp" 
          type="image/webp"
        /> */}
  </Helmet>
    <div className="dark:bg-darkTheme dark:text-white font-raleway lg:space-y-24 space-y-24 w-full">
      <HomeBannerUpdated />
      <DigitalJourney />
      <SuccessStories heading="Experiences That Inspire Innovation"/>
      <CorePillars />
      <GlobalImprint />
      <section className='space-y-16'>
        <div className="space-y-3 text-center font-raleway">
        <p className='custom-sub-heading'>Client Testimonials</p>
          {/* <p className="text-3xl lg:text-4xl uppercase">
            Resonating
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientGreen to-gradientBlue">
              {" "}
              Affirmations
            </span>
          </p> */}
          <p className='custom-gradient-text'>Resonating Affirmations</p>
        </div>
        <Testimonials />
      </section>
      <LogoMarquee />
      {/* <Testimonials/> */}
      <ResourceCenter />
      <LifeandCarrer />
      <SubscribeForm />
    </div>
    </>
  );
}

export default Home