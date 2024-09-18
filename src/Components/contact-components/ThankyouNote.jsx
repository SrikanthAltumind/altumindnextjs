import Thankyou from '../../assets/Thankyou.png'

// eslint-disable-next-line react/prop-types
const ThankyouNote = ({setShowPopup}) => {
  
  return (
    <dialog className='font-raleway fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 flex justify-center items-center'>
    <div className="w-[90%] max-w-[800px] relative rounded-lg bg-white shadow-md dark:bg-DarkBackground dark:shadow-none dark:text-white p-10 font-raleway mx-auto">
        <div className="sm:flex-row flex-col flex justify-center gap-10 items-center">
            <div className='basis-[50%] space-y-5'>
                <img src={Thankyou} alt="Thank You" width={250} className='mx-auto' />
                <p className='custom-gradient-text'>Thank You!</p>
            </div>
            <div className='basis-[50%]'> 
                <p className='sm:text-left text-center font-medium font-montserrat'>Your journey towards digital transformation starts here. Expect a call or email from us soon to explore how we can help you achieve your digital goals. We&apos;re excited to help you innovate and grow.</p>
            </div>
        </div>
      
        <svg  onClick={()=> setShowPopup(false)} className="w-6 h-6 absolute top-5 cursor-pointer right-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
        
    </div>
    </dialog>
  )
}

export default ThankyouNote
