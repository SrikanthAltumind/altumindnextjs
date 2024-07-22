import banner from '../../assets/industry.png'

const IndustryBanner = () => {
  return (
    <div>
    <div className='relative flex justify-center items-center'>
        <img className='h-[250px] md:h-auto' src={banner} alt='Industries' />
        <div className='text-center absolute w-[90%] max-w-[400px] space-y-5'>
            <p className='font-extrabold text-3xl lg:text-4xl font-raleway bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue  via-gradientGreen'>Industries<span className='text-white'> We Serve</span></p>
            <p className='font-montserrat text-white text-sm md:text-base'>We Empower Industries with Scalable, Secure, and User-Focused Solutions</p>
        </div>
    </div>
    </div>
  )
}

export default IndustryBanner