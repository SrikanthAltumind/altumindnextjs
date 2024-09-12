import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'

const formTabs = [
    {id:'project', name:'Projects'},
    {id:'partner', name:'Partnership'},
    {id:'career', name:'Careers'},
    {id:'general', name:'General'},
]

const contentSection = {
    project : {
      title: 'Your Vision, Our Expertise',
      caption:'start a project',
      description:`Outline your project, and we'll help you with solutions that align perfectly with your goals. `,
      imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Projects_Compressify_io_76a2088943.webp'
    },
  
    partner : {
      title: 'Amplify transformation',
      caption:'Partnership Enquiries',
      description:`Explore partnership opportunities with Altumind to extend your 
                software solutionsto new markets and industries.`,
      imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Partnership_Compressify_io_c83693b19d.webp'
    },
  
    general : {
      title: 'Curiosity Welcomed',
      caption:'General Queries',
      description:`What's on your mind? Share your thoughts, and let's start a conversation that could transform your business.`,
      imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Genral_Compressify_io_a6ea7066a4.webp'
    },
    career : {
      title: 'Shape The Future With Us',
      caption:'Join altumind',
      description:`Explore career opportunities and become part of our innovative team.`,
      imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Careers_Compressify_io_7817557ffb.webp'
    }
  }

const ContactMenu = () => {
    const [selectedForm, setSelectedForm] = useState(formTabs[0].id)
    const [leftSection, setLeftSection] = useState();

    useEffect(() => {
        setLeftSection(contentSection[selectedForm])
    }, [selectedForm]);

  return (
    <div className='py-10 font-raleway'>
        {/* Form Types Menu */}
        <div className='w-[90%] max-w-[450px] md:max-w-[700px] mx-auto flex justify-between dark:text-white'>
            {formTabs?.map(tab=> (
                <button
                    key={tab.id} 
                    onClick={()=> setSelectedForm(tab.id)}
                    className={`text-xs sm:text-sm font-semibold border-b-[3.5px] py-1 px-1 sm:px-4 hover:border-secondary ${selectedForm===tab.id ? 'border-secondary' : 'border-transparent'}`}>
                {tab.name}</button>
            ))}
        </div>
        {/* Selected Form UI */}
        <div className='mt-7'>
         <div className={`w-[90%] md:w-[95%] max-w-[1200px] mx-auto dark:text-white flex flex-col md:flex-row shadow-custom-shadow`}>
            {/* Left Content section */}
            <div className="basis-[30%] shrink-0 p-5 lg:p-10 pb-2 font-raleway bg-LightBlue dark:bg-DarkBackground flex flex-col items-center md:items-start gap-4">
                <img src={leftSection?.imgUrl} className="w-36 h-36 lg:w-52 lg:h-52 object-cover bg-merald-200"/>
                <p className="custom-gradient-text md:mx-0 max-md:text-center text-2xl lg:text-3xl capitalize">{leftSection?.caption}</p>
                <p className="uppercase font-semibold text-xs sm:text-sm">{leftSection?.title}</p>
                <p className="max-md:text-center text-xs sm:text-sm lg:text-base max-w-[450px] font-montserrat font-medium leading-5">
                    {leftSection?.description}
                </p>
                <svg className="w-14 h-12 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>
            </div>
            {/* Actual Form with fields */}
            <div className="basis-[70%]">
                <ContactForm selectedForm={selectedForm}/>
            </div>
         </div>
        </div>
    </div>
  )
}

export default ContactMenu