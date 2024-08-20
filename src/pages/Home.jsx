// import React from 'react'

import LogoMarquee from '../Components/common-components/LogoMarquee'
import SubscribeForm from '../Components/common-components/SubscribeForm'
import Testimonials from '../Components/common-components/Testimonials'
import Affirmations from '../Components/home-components/Affirmations'
import CorePillars from '../Components/home-components/CorePillars'
import DigitalJourney from '../Components/home-components/DigitalJourney'
import LifeandCarrer from '../Components/home-components/LifeandCareer'
import ResourceCenter from '../Components/home-components/ResourceCenter'
import SuccessStories from '../Components/home-components/SuccessStories'

const Home = () => {
  return (
    <div className='dark:bg-darkTheme lg:space-y-24 space-y-24 w-full'>
    <DigitalJourney />
    <SuccessStories />
    <CorePillars />
      <Affirmations />
      <LogoMarquee />
    <Testimonials/>
    <ResourceCenter/>
    <LifeandCarrer/>
    <SubscribeForm/>
    </div>
 
  )
}

export default Home