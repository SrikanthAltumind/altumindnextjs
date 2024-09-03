import { Link } from 'react-router-dom'

const WeAreSeeking = () => {
  return (
    <div className='w-full mx-auto bg-gradient-to-b from-[#f3f9ff] to-transparent  dark:from-[#25282c] min-h-[280px] xl:min-h-[300px] p-8 flex justify-center items-center'>
    <div className='max-w-[760px] text-center font-raleway'>
      <p className='font-extrabold text-primary dark:text-white text-3xl lg:text-4xl'>
        &ldquo;We&apos;re seeking those who dare to turn
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue '> 
            {" "} &apos;What If&apos; into &apos;What&apos;s Next&apos;.&rdquo;
        </span>
      </p>
      <Link to="/">
        <button className='group mx-auto underline decoration-1 underline-offset-2 text-secondary dark:text-white font-semibold flex justify-center items-center gap-1 mt-10'>
            Join Our Team
            <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
        </button>
      </Link>
    </div>
    </div>
  )
}

export default WeAreSeeking