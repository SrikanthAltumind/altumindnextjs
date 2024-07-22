

const OurLocation = () => {
  return (
    <section className="w-[90%] dark:text-white mx-auto font-raleway space-y-20">
        <div>
            <p className="w-fit font-extrabold text-2xl lg:text-3xl py-2 mb-2 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">Our Location</p>
            <p className="text-sm mx-auto text-center max-w-[650px] font-semibold">Rooted in India and the US but branching out worldwide. Wherever there&apos;s Wi-Fi, you&apos;ll find our digital leaves ready to support you.</p>
        </div>
        <div className="space-y-14">
            <div className="flex max-w-[950px] justify-between mx-auto sm:flex-row sm:gap-10 gap-5 flex-col ">
                <div className="flex sm:mx-auto basis-[20%] ">
                    <p className="lg:text-3xl  text-xl font-semibold">INDIA</p>
                </div>
                <div className="flex justify-between basis-[80%] md:basis-[65%]  sm:flex-row flex-col sm:gap-10 gap-5">
                <div> 
                    <p className="lg:text-2xl text-xl font-semibold mb-2 ">Bangalore, India</p>
                    <p className="font-montserrat text-sm text-[#4F4F4F]">#775, 100 Feet Rd, <br/>Indiranagar, Bengaluru, KA <br/>560038<br/>Email: sales@altumindglobal.com<br/>Phone: 080-42242799</p>
                </div>
                <div>
                    <p className="lg:text-2xl text-xl font-semibold mb-2 ">Hyderabad, India</p>
                    <p className="font-montserrat text-sm text-[#4F4F4F]">HD-192, SY130P&115/1P,<br/>NanakRamguda Rd,<br/>Gachibowli, Seri Lingampally,<br/>K.V.Rangareddy- Telangana <br/>500032<br/>Email: sales@altumindglobal.com<br/>Phone: +91-9810777720</p>
                </div>
             </div>
            </div>
            <div className="flex justify-between max-w-[950px] mx-auto sm:flex-row sm:gap-10 gap-5 flex-col">
                <div className="flex sm:mx-auto items-start  basis-[20%]">
                    <p className="lg:text-3xl  text-xl font-semibold">USA</p>
                </div>
                <div className=" basis-[80%] md:basis-[65%] justify-between">
                    <p className="lg:text-2xl text-xl font-semibold mb-2">San Diego, USA</p>
                    <p className="font-montserrat text-sm text-[#4F4F4F]">10620 Treena Street,<br/>Suite 230, San Diego,<br/>CA 92131<br/>Email: sales@altumindglobal.com<br/>Phone: 1-866-381-8411</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default OurLocation