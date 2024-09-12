// import React from 'react'

import SubscribeForm from '../Components/common-components/SubscribeForm'
import Testimonials from '../Components/common-components/Testimonials'
import GlobalImprint from '../Components/contact-components/GlobalImprint'
import LifeandCarrer from '../Components/home-components/LifeandCareer'
import ResourceCenter from '../Components/home-components/ResourceCenter'
import SuccessStories from '../Components/home-components/SuccessStories'
import HomeBanner from '../Components/common-components/HomeBanner'

const Home = () => {
  return (
    <div className='dark:bg-darkTheme lg:space-y-28 space-y-24'>
    <HomeBanner/>
    <SuccessStories/>
    {/* <Affirmations/> */}
    <GlobalImprint/>
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
        <Testimonials/>
      </div>
    <ResourceCenter/>
    <LifeandCarrer/>
    <SubscribeForm/>
    </div>
 
  )
}

export default Home