import Thankyou from '../../assets/Thankyou.png'

const ThankyouNote = () => {
  return (
    <div className="w-[90%] max-w-[800px] shadow-md dark:bg-DarkBackground dark:shadow-none dark:text-white p-10 font-raleway mx-auto">
        <div className="sm:flex-row flex-col flex justify-center gap-10 items-center">
            <div className='basis-[50%] space-y-5'>
                <img src={Thankyou} alt="Thank You" width={250} className='mx-auto' />
                <p className='custom-gradient-text'>Thank You!</p>
            </div>
            <div className='basis-[50%]'> 
                <p className='sm:text-left text-center font-medium font-montserrat'>Your journey towards digital transformation starts here. Expect a call or email from us soon to explore how we can help you achieve your digital goals. We&apos;re excited to help you innovate and grow.</p>
            </div>
        </div>
    </div>
  )
}

export default ThankyouNote