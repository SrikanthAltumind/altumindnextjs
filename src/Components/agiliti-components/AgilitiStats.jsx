import React from 'react'
import Counter from '../common-components/Counter'

const statsData = [
    {id:'years', title:'Years of Experience', value:8, suffix:'+', countSpeed:200},
    {id:'clients', title:'Satisfied Clients', value:55, suffix:'+', countSpeed:40},
    {id:'rate', title:'Retention Rate', value:98.2, suffix:'%', countSpeed:20},
  ]

const AgilitiStats = () => {
  return (
    <div className='bg-[#EAF1FF] dark:bg-DarkBackground py-12 font-raleway'>
        <div className='w-[95%] mx-auto flex justify-center flex-wrap gap-y-10 gap-x-14'>
            {statsData.map(stat=>
            <div key={stat.id} className='text-center w-[230px] lg:w-[280px] space-y-4 lg:space-y-5 py-5 lg:py-10 bg-white dark:bg-gray-700 shadow-custom-shadow'>
                <p className='text-3xl lg:text-4xl text-secondary font-bold'>
                    <Counter value={stat.value} countSpeed={stat.countSpeed}/>
                    <span>{stat.suffix}</span>
                </p>
                <p className='text-sm  lg:text-base font-montserrat font-medium dark:text-white'>{stat.title}</p>
            </div>
             )}
        </div>
    </div>
  )
}

export default AgilitiStats