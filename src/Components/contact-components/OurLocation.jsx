import location from '../../assets/location.png'
 
const OurLocation = () => {
  return (
    // <section className="w-[90%] dark:text-white mx-auto font-raleway space-y-20">
    //     <div>
    //         <p className="w-fit font-extrabold text-2xl lg:text-3xl py-2 mb-2 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">Our Location</p>
    //         <p className="text-sm mx-auto text-center max-w-[650px] font-semibold">Rooted in India and the US but branching out worldwide. Wherever there&apos;s Wi-Fi, you&apos;ll find our digital leaves ready to support you.</p>
    //     </div>
    //     <div className="space-y-14">
    //         <div className="flex max-w-[950px] justify-between mx-auto sm:flex-row sm:gap-10 gap-5 flex-col ">
    //             <div className="flex sm:mx-auto basis-[20%] ">
    //                 <p className="lg:text-3xl  text-xl font-semibold">INDIA</p>
    //             </div>
    //             <div className="flex justify-between basis-[80%] md:basis-[65%]  sm:flex-row flex-col sm:gap-10 gap-5">
    //             <div> 
    //                 <p className="lg:text-2xl text-xl font-semibold mb-2 ">Bangalore, India</p>
    //                 <p className="font-montserrat text-sm text-[#4F4F4F]">#775, 100 Feet Rd, <br/>Indiranagar, Bengaluru, KA <br/>560038<br/>Email: sales@altumindglobal.com<br/>Phone: 080-42242799</p>
    //             </div>
    //             <div>
    //                 <p className="lg:text-2xl text-xl font-semibold mb-2 ">Hyderabad, India</p>
    //                 <p className="font-montserrat text-sm text-[#4F4F4F]">HD-192, SY130P&115/1P,<br/>NanakRamguda Rd,<br/>Gachibowli, Seri Lingampally,<br/>K.V.Rangareddy- Telangana <br/>500032<br/>Email: sales@altumindglobal.com<br/>Phone: +91-9810777720</p>
    //             </div>
    //          </div>
    //         </div>
    //         <div className="flex justify-between max-w-[950px] mx-auto sm:flex-row sm:gap-10 gap-5 flex-col">
    //             <div className="flex sm:mx-auto items-start  basis-[20%]">
    //                 <p className="lg:text-3xl  text-xl font-semibold">USA</p>
    //             </div>
    //             <div className=" basis-[80%] md:basis-[65%] justify-between">
    //                 <p className="lg:text-2xl text-xl font-semibold mb-2">San Diego, USA</p>
    //                 <p className="font-montserrat text-sm text-[#4F4F4F]">10620 Treena Street,<br/>Suite 230, San Diego,<br/>CA 92131<br/>Email: sales@altumindglobal.com<br/>Phone: 1-866-381-8411</p>
    //             </div>
                
    //         </div>
    //     </div>
    // </section>
    <section className="w-[90%] dark:text-white bg-LightBlue dark:bg-DarkBackground space-y-20 p-10 mx-auto font-raleway">
        <div className='flex justify-between md:flex-row flex-col gap-10 items-center'>
            <div className='space-y-8 md:text-left text-center'>
                <p className='custom-gradient-text md:mx-0'>Our Location</p>
                <p className='font-montserrat max-w-[450px] text-sm font-medium'>Rooted in India and the US but branching out worldwide. Wherever there&apos;s Wi-Fi, you&apos;ll find our digital leaves ready to support you.</p>
            </div>
            <div>
                <img src={location} alt="location" width={300} /> 
            </div>
        </div>
        <div className='flex lg:flex-row flex-col gap-10 font-raleway'>
            <div className='md:w-1/3 sm:w-1/2'>
                <p className='md:text-2xl text-lg mb-2 font-semibold'>United States</p>
                    <div className='lg:min-h-[190px] flex flex-col justify-between'>
                        <div className='space-y-2'>
                        <p className='flex gap-2 items-center md:text-lg font-medium'>
                            <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                            </svg>
                            San Diego
                        </p>
                        <p className='text-[#707070] text-sm dark:text-white font-medium dark:font-extralight'>
                            10620 Treena Street, Suite 230, San Diego, CA 92131
                        </p>
                        </div>
                    {/* <hr className='h-[1.6px] bg-[#B7B7B7]'/> */}
                    <div className='border-t border-[#B7B7B7] space-y-2 pt-3'>
                    <p className='flex gap-2 font-medium'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                        sales@altumindglobal.com
                    </p>
                    <p className='flex gap-2'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                        1-866-381-8411
                    </p>
                    </div>
                </div>
            </div>
            <div className='md:w-2/3'>
                <p className='md:text-2xl text-lg mb-2 font-semibold'>India</p>
                <div className='flex sm:flex-row flex-col gap-10'>
                    <div className='sm:w-1/2 lg:min-h-[190px] flex flex-col justify-between'>
                   <div className='space-y-2'>
                   <p className='flex gap-2 items-center md:text-lg font-medium'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                        </svg>
                        Bangalore
                    </p>
                    <p className='text-[#707070] dark:text-white text-sm font-medium dark:font-extralight'>
                        #775, 100 Feet Rd, Indiranagar, Bengaluru, KA 560038
                    </p>
                    </div>
                   {/* <hr className='h-[1.6px] bg-[#B7B7B7]'/> */}
                   <div className='border-t border-[#B7B7B7] space-y-2 pt-3'>
                   <p className='flex gap-2 font-medium'>
                        <svg className="w-6 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                        sales@altumindglobal.com
                    </p>
                   <p className='flex gap-2'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                        080-42242799
                    </p>
                    </div>
               </div>
               <div className=' lg:min-h-[190px] flex flex-col justify-between sm:w-1/2'>
                   <div className='space-y-2'>
                   <p className='flex gap-2 items-center md:text-lg font-medium'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                        </svg>
                        Hyderabad
                    </p>
                    <p className='text-[#707070] dark:text-white text-sm font-medium dark:font-extralight'>
                        HD-192, SY130P&115/1P, NanakRamguda Rd, Gachibowli, Seri Lingampally,K.V.Rangareddy –Telangana 500032
                    </p>
                    </div>
                   {/* <hr className='h-[1.6px] bg-[#B7B7B7]'/> */}
                   
                   <div className='border-t border-[#B7B7B7] space-y-2 pt-3'>
                   <p className='flex gap-2 font-medium'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                        sales@altumindglobal.com
                    </p>
                   <p className='flex gap-2'>
                        <svg className="w-5 h-6 text-secondary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                        1-866-381-8411
                    </p>
                    </div>
               </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurLocation