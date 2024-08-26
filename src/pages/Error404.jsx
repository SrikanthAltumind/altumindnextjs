import Errorimage404 from '../assets/404Error.png'
const Error404 = () => {
  return (
   <section  className='dark:text-white h-screen bg-darkTheme '>
   <div className=" w-[90%] mx-auto md:flex-row flex-col flex items-center gap-5">
    <div className='lg:basis-[65%]'>
      <img src={Errorimage404} alt="404" className='mx-auto' width={700}/>
    </div>
    <div className='text-center space-y-3 lg:basis-[35%] p-5 md:p-0'>
      <p className="font-raleway text-xl font-semibold">Page not found</p>
      <p className="font-montserrat">Oops! Our robots are still learning to navigate the digital universe. It seems they took a wrong turn. Perhaps you&apos;d like to try a different route or beam back to the homepage?</p>
      <a href = "#" className='group font-semibold mx-auto w-fit text-sm md:text-base underline decoration-1 underline-offset-2   text-secondary  flex justify-center items-center gap-1'>
      Back to Homepage
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </a>
    </div>
   </div>
   </section>
  )
}

export default Error404