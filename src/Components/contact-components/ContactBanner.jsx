

const ContactBanner = () => {
  return (
    <div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse justify-between items-center font-raleway gap-y-10 px-4 md:px-10 lg:px-28'>
      
       <div className="max-md:px-5">
      <p className=' custom-gradient-text mx-0  py-2'>
      Let&apos;s Build Your  Digital Future
      </p>
      <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'>Chart unexplored territories with Altumind&apos;s innovation compass. Start a conversation about your digital growth.</p>
      </div>
   
      <div>
        <img className="lg:h-[260px] h-[230px] mx-auto" src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Careers_1_e52e0f1b4a.svg" alt="Illustration of a person with a headset, smiling and holding a chart, surrounded by phone, chat, and book icons, with abstract leaf patterns in the background." />
      </div>
    </div>
  )
}

export default ContactBanner