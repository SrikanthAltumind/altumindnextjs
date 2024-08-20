import { useEffect, useState } from 'react'
import Counter from '../common-components/Counter'
import businessYears from '../../assets/skill.png'
import globeIcon from '../../assets/globe.png'
import userIcon from '../../assets/user-icon.png'
import bulbIcon from '../../assets/bulb.png'
import starIcon from '../../assets/star.png'
import { useLocation } from 'react-router-dom'

const ourGlobalImprintsData = [
    {id:'years', title:'Years in Digital Transformation', value:8, countSpeed:200},
    {id:'clients', title:'Clients Served', value:55, countSpeed:20},
    {id:'innovations', title:'Innovations Delivered', value:97, countSpeed:20},
    {id:'industries', title:'Industries Revolutionized', value:12, countSpeed:100},
    {id:'digitalImpact', title:'Digital Impacts Across Continents', value:5, countSpeed:200},
  ]

  const ourImpactByNumbers = [
    {id:'years', title:'Years of Transforming Businesses', value:8, countSpeed:200, imagePath:businessYears},
    {id:'countries', title:'Presence in Countries', value:5, countSpeed:200, imagePath:globeIcon},
    {id:'users', title:'Users Benefiting from Our Solutions', value:30, countSpeed:50, imagePath:userIcon},
    {id:'projects', title:'Successful Projects Delivered', value:100, countSpeed:20, imagePath:bulbIcon},
    {id:'domains', title:'Domains of Specialized Expertise', value:20, countSpeed:70, imagePath:starIcon},
  ]

const OurImpactByNumbers = () => {
  const [statsData, setStatsData] = useState()
  const location = useLocation()

  useEffect(()=> {
      if(location.pathname==='/services'){
        setStatsData(ourImpactByNumbers)
      }
      else if(location.pathname==='/contact-us'){
        setStatsData(ourGlobalImprintsData)
      }
  },[])
  return (
    <div className='py-10'>
        <div className='w-[95%] max-w-[950px] mx-auto font-raleway'>
            <p className='text-2xl sm:text-3xl lg:text-4xl text-center w-fit mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue '>Our Impact by the Numbers</p>
            <div className='text-black dark:text-white mt-14 flex flex-wrap justify-center gap-y-16 gap-x-24'>
              {statsData?.map(stat=> (
                <div key={stat.id} className='flex flex-col lg:gap-y-2 justify-between text-center'>
                   {stat?.imagePath && 
                    <img className="w-14 lg:w-16 mx-auto mb-2 dark:invert" src={stat.imagePath} alt={stat.id}/>
                   }
                   <p className='text-2xl lg:text-3xl text-secondary font-bold mb-2'>
                    <Counter value={stat.value} countSpeed={stat.countSpeed}/>{stat.id==='users' ? 'M+' : stat.id==='countries' ? '' : '+'}
                  </p>
                  <p className='font-medium font-montserrat text-xs md:text-sm xl:text-base'>{stat.title}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default OurImpactByNumbers