

// eslint-disable-next-line react/prop-types
const Popup = ({setShowPopup}) => {
  return (
    <dialog className='font-raleway fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 flex justify-center items-center'>
        <div className='bg-white  -mt-20 px-4 py-6 md:py-12 w-[300px] sm:w-[420px] md:w-[600px] text-center rounded-lg'>
            <p className='bg-clip-text w-fit mx-auto text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue font-bold  text-2xl sm:text-3xl md:text-4xl '>Thank You!</p> 
            <p className='text-xs md:text-base font-medium  pb-8 pt-5'>
                Your journey towards digital transformation starts here. Expect a call or email from us soon to explore how we can help you achieve your digital goals. We&apos;re excited to help you innovate and grow. 
            </p>
            <button type='button' className='bg-secondary font-semibold text-white rounded-full px-14 py-2 '
                onClick={()=> setShowPopup(false)}
            >OK</button>
        </div>
    </dialog>
  )
}

export default Popup