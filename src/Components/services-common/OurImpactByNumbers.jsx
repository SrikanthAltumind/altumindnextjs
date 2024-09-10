import  { useEffect, useState } from 'react'
import Counter from '../common-components/Counter'
import businessYears from '../../assets/skill.png'
import globeIcon from '../../assets/globe.png'
import userIcon from '../../assets/user-icon.png'
import bulbIcon from '../../assets/bulb.png'
import starIcon from '../../assets/star.png'
import { useLocation } from 'react-router-dom'

  const servicesImpactData = [
    {id:'years', title:'Years of Transforming Businesses', value:8, suffix:'+', countSpeed:200, imagePath:businessYears},
    {id:'countries', title:'Presence in Countries', value:5, suffix:'', countSpeed:200, imagePath:globeIcon},
    {id:'users', title:'Users Benefiting from Our Solutions', value:30, suffix:'+', countSpeed:50, imagePath:userIcon},
    {id:'projects', title:'Successful Projects Delivered', value:100, suffix:'+', countSpeed:20, imagePath:bulbIcon},
    {id:'domains', title:'Domains of Specialized Expertise', value:20, suffix:'+', countSpeed:70, imagePath:starIcon},
  ]

  const aboutUsImpactData = [
    {id:'years', title:'8 Years of Proven Expertise', description: 'Delivering results and exceeding expectations since 2016.', value:8, suffix:'+', countSpeed:200, imagePath:businessYears},
    {id:'projects', title:'Successful Projects', description: 'A track record of driving innovation across diverse industries.', value:100, suffix:'+', countSpeed:20, imagePath:bulbIcon},
    {id:'domains', title:'Domains of Expertise', description: 'Providing comprehensive solutions tailored to your unique needs. ', value:20, suffix:'+', countSpeed:70, imagePath:starIcon},
    {id:'trust', title:'Client Attrition Rate ', description: 'Building lasting partnerships based on trust and exceptional service. ', value:9, suffix:'%', countSpeed:200, imagePath:userIcon},
    {id:'countries', title:'Global Reach, Local Impact', description: 'Serving clients across 5 continents with a personalized approach. ', value:5, suffix:'', countSpeed:200, imagePath:globeIcon},
    {id:'users', title:'Users and Counting', description: ' Empowering millions with our transformative solutions. ', value:30, suffix:'M+', countSpeed:50, imagePath:userIcon},
  ]

const OurImpactByNumbers = () => {
  const [statsData, setStatsData] = useState()
  const location = useLocation()

  useEffect(()=> {
      if(location.pathname==='/services'){
        setStatsData(servicesImpactData)
      }
      else if(location.pathname==='/about-us'){
        setStatsData(aboutUsImpactData)
      }
  },[])
  return (
    <div className=''>
        <div className='w-[95%] max-w-[950px] mx-auto font-raleway'>
            <p className='text-2xl sm:text-3xl lg:text-4xl text-center w-fit mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue '>Our Impact by the Numbers</p>
            <div className='text-black dark:text-white mt-14 flex flex-wrap justify-center gap-y-16 sm:gap-y-20 gap-x-20'>
              {statsData?.map(stat=> (
                <div key={stat.id} className='flex flex-col gap-y-2 md:gap-y-4 text-center '>
                   {stat?.imagePath && 
                    <img className="w-16 h-16 object-contain mx-auto dark:invert" src={stat.imagePath} alt={stat.id}/>
                   }
                   <p className='text-3xl text-secondary font-bold'>
                    <Counter value={stat.value} countSpeed={stat.countSpeed}/>
                    <span>{stat?.suffix}</span>
                  </p>
                  <div className='font-montserrat space-y-1'>
                    <p className='font-semibold dark:font-medium text-sm xl:text-base'>{stat.title}</p>
                    {stat?.description && 
                        <p className='text-[13px] font-medium dark:font-normal max-w-[260px]'>{stat.description}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default OurImpactByNumbers

// import Counter from '../common-components/Counter'
// import businessYears from '../../assets/skill.png'
// import globeIcon from '../../assets/globe.png'
// import userIcon from '../../assets/user-icon.png'
// import bulbIcon from '../../assets/bulb.png'
// import starIcon from '../../assets/star.png'

//   const ourImpactByNumbers = [
//     {id:'years', title:'Years of Transforming Businesses', value:8, countSpeed:200, imagePath:businessYears},
//     {id:'countries', title:'Presence in Countries', value:5, countSpeed:200, imagePath:globeIcon},
//     {id:'users', title:'Users Benefiting from Our Solutions', value:30, countSpeed:50, imagePath:userIcon},
//     {id:'projects', title:'Successful Projects Delivered', value:100, countSpeed:20, imagePath:bulbIcon},
//     {id:'domains', title:'Domains of Specialized Expertise', value:20, countSpeed:70, imagePath:starIcon},
//   ]

// const OurImpactByNumbers = () => {

//   return (
//     <div className='py-10'>
//         <div className='w-[95%] max-w-[950px] mx-auto font-raleway'>
//             <p className='text-2xl sm:text-3xl lg:text-4xl text-center w-fit mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue '>Our Impact by the Numbers</p>
//             <div className='text-black dark:text-white mt-14 flex flex-wrap justify-center gap-y-16 gap-x-24'>
//               {ourImpactByNumbers?.map(stat=> (
//                 <div key={stat.id} className='flex flex-col lg:gap-y-2 justify-between text-center'>
//                    {stat?.imagePath && 
//                     <img className="w-14 lg:w-16 mx-auto mb-2 dark:invert" src={stat.imagePath} alt={stat.id}/>
//                    }
//                    <p className='text-2xl lg:text-3xl text-secondary font-bold mb-2'>
//                     <Counter value={stat.value} countSpeed={stat.countSpeed}/>{stat.id==='users' ? 'M+' : stat.id==='countries' ? '' : '+'}
//                   </p>
//                   <p className='font-medium font-montserrat text-xs md:text-sm xl:text-base'>{stat.title}</p>
//                 </div>
//               ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default OurImpactByNumbers