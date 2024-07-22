// import React from 'react'

import SubscribeForm from '../Components/common-components/SubscribeForm'
import Testimonials from '../Components/common-components/Testimonials'
import Affirmations from '../Components/home-components/Affirmations'
import LifeandCarrer from '../Components/home-components/LifeandCareer'
import ResourceCenter from '../Components/home-components/ResourceCenter'
import SuccessStories from '../Components/home-components/SuccessStories'

const Home = () => {
  return (
    <div className='dark:bg-darkTheme lg:space-y-28 space-y-24 pt-16'>
    <SuccessStories/>
    <Affirmations/>
    <Testimonials/>
    <ResourceCenter/>
    <LifeandCarrer/>
    <SubscribeForm/>
    </div>
 
  )
}

export default Home