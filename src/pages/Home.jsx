// import React from 'react'

import LogoMarquee from '../Components/common-components/LogoMarquee'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import Testimonials from '../Components/common-components/Testimonials'
import GlobalImprint from '../Components/contact-components/GlobalImprint'
import Affirmations from '../Components/home-components/Affirmations'
import CorePillars from '../Components/home-components/CorePillars'
import DigitalJourney from '../Components/home-components/DigitalJourney'
import HomeBanner from '../Components/home-components/HomeBanner'
import HomeBannerUpdated from '../Components/home-components/HomeBannerUpdated'
import LifeandCarrer from '../Components/home-components/LifeandCareer'
import ResourceCenter from '../Components/home-components/ResourceCenter'
import SuccessStories from '../Components/home-components/SuccessStories'

const Home = () => {
  return (
    <div className='dark:bg-darkTheme lg:space-y-24 space-y-24 w-full'>
      {/* <HomeBannerUpdated /> */}
      <HomeBanner />
    <DigitalJourney />
    <SuccessStories />
      <CorePillars />
      <GlobalImprint />
      <div className=" font-raleway font-semibold text-center text-primary dark:text-white">
        <p>Client Testimonials</p>
        <div className="font-extrabold  mb-10 pt-2 space-y-1">
          <p className="text-3xl lg:text-4xl uppercase">
            Resonating
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientGreen to-gradientBlue">
              {" "}
              Affirmations
            </span>
          </p>
        </div>
        <Testimonials />
      </div>
      <LogoMarquee />
    {/* <Testimonials/> */}
    <ResourceCenter/>
    <LifeandCarrer/>
    <SubscribeForm/>
    </div>
 
  )
}

export default Home