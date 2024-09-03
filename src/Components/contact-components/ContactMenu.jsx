import { useState } from 'react'
import ContactForm from './ContactForm'

const formTabs = [
    {id:'project', name:'Projects'},
    {id:'partner', name:'Partnership'},
    {id:'career', name:'Careers'},
    {id:'general', name:'General'},
]

const ContactMenu = () => {
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
            {/* {selectedForm==='career'
             ? <CareersForm/>
             : <CommonForm selectedForm={selectedForm}/>
            } */}
            <ContactForm selectedForm={selectedForm}/>
        </div>
    </div>
  )
}

export default ContactMenu