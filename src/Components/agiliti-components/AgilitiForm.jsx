import React from 'react'
import ContactForm from '../contact-components/ContactForm'


const AgilitiForm = () => {
  return (
    <div className='w-[90%] md:w-[95%] 2xl:max-w-[1100px] mx-auto flex md:flex-row flex-col md:justify-between gap-y-5'>
        <div className='md:py-10 space-y-5 pl-3 sm:pl-0 lg:space-y-8 font-raleway dark:text-white'>
            <h2 className='text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
                Let's build the Best <br/> Offshore Development <br/> Team of Tomorrow</h2>
            <p className='text-sm xl:text-base font-medium'>Partner with us to Future-proof your workforce</p>
        </div>
        <div className='lg:w-[55%]'>
            <ContactForm selectedForm={{id:'agiliti', name:'Agiliti'}}/>
        </div>
    </div>
  )
}

export default AgilitiForm