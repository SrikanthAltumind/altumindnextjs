import { useState } from 'react'
import CareersForm from './CareersForm'
import CommonForm from './CommonForm'

const formTabs = [
    {id:'projects', name:'Projects'},
    {id:'partnership', name:'Partnership'},
    {id:'careers', name:'Careers'},
    {id:'general', name:'General'},
]

const ContactForms = () => {
    const [selectedForm, setSelectedForm] = useState(formTabs[0].id)
  return (
    <div className='py-10 font-raleway'>
        <div className='w-[90%] max-w-[450px] md:max-w-[700px] mx-auto flex justify-between dark:text-white'>
            {formTabs?.map(tab=> (
                <button
                    key={tab.id} 
                    onClick={()=> setSelectedForm(tab.id)}
                    className={`text-xs sm:text-sm font-semibold border-b-[3.5px] py-1 px-1 sm:px-4 hover:border-secondary ${selectedForm===tab.id ? 'border-secondary' : 'border-transparent'}`}>
                {tab.name}</button>
            ))}
        </div>
        <div className='mt-7'>
            {selectedForm==='careers'
             ? <CareersForm/>
             : <CommonForm selectedForm={selectedForm}/>
            }
        </div>
    </div>
  )
}

export default ContactForms
