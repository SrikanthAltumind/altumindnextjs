const Results = () => {
  return (
    <div className='py-10 flex flex-col gap-5 sm:gap-3 items-center w-[90%] md:max-w-[950px] mx-auto dark:text-white'>
        <div className='flex flex-col items-center sm:flex-row gap-5 justify-between sm:w-[90%] md:w-[85%] mx-auto'>
            <div className='flex hover:scale-110 transition-all items-center dark:bg-DarkBackground shadow-custom-shadow w-[240px] py-4 px-5 rounded-xl gap-6 font-montserrat'>
                <p className='text-3xl font-semibold'>40%</p>
                <p className='text-xs font-medium'>Faster Time-to-Market </p>
            </div>
            <div className='flex hover:scale-110 transition-all items-center dark:bg-DarkBackground shadow-custom-shadow w-[240px] py-4 px-5 rounded-xl gap-6 font-montserrat'>
                <p className='text-3xl font-semibold'>52%</p>
                <p className='text-xs font-medium'>Surge in Mobile Traffic </p>
            </div>
        </div>

        <p className='max-sm:-order-1 text-[#7C7C85] max-w-[480px] text-2xl md:text-3xl font-extrabold font-raleway text-center'>
            Delivering Transformative Results for Your <span className='text-[#020013] dark:text-white'>Business Growth</span>
        </p>

        <div className='flex flex-col items-center sm:flex-row gap-5 justify-between w-full'>
            <div className='flex hover:scale-110 transition-all items-center dark:bg-DarkBackground shadow-custom-shadow w-[240px] py-4 px-5 rounded-xl gap-6 font-montserrat'>
                <p className='text-3xl font-semibold'>90%</p>
                <p className='text-xs font-medium'>User Satisfaction  </p>
            </div>
            <div className='flex hover:scale-110 transition-all items-center dark:bg-DarkBackground shadow-custom-shadow w-[240px] py-4 px-5 rounded-xl gap-6 font-montserrat'>
                <p className='text-3xl font-semibold'>30%</p>
                <p className='text-xs font-medium'>Reduction in Bounce Rates </p>
            </div>
        </div>
    </div>
  )
}

export default Results