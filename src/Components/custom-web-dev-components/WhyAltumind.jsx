
const keyPoints = [
    { id: 1, description: "Global Expertise: We combine a connected workforce with cost-effective solutions to help you thrive on a global scale." },
    { id: 2, description: "End-to-End Solutions: From research to launch, we’re with you every step of the way." },
    { id: 3, description: "Tailored Innovation: Custom solutions designed specifically for your unique business needs." },
    { id: 4, description: "Scalable Solutions: We build websites that grow with your business, ensuring long-term success and flexibility as your needs evolve." },
    { id: 5, description: "Cutting-Edge Technology: Leveraging the latest tools and frameworks, we create high-performance websites that keep you ahead in today’s digital landscape." }
  ];
  

const WhyAltumind = () => {

  return (
    <div className="flex font-raleway items-center w-[90%] flex-col md:flex-row md:max-w-[1100px] gap-y-5 mx-auto">
        <div className="basis-[50%] ">
            <div className="md:border-l-[1px] md:border-black">
                <h2 className="font-bold md:text-3xl text-2xl md:w-[60%] lg:text-4xl px-5 md:text-left text-center">Why Altumind is the best option for Custom Web Development</h2>
            </div>
        </div>
        <div  className="basis-[50%]  px-5">
            {
                keyPoints.map((item) => (
                    <div key={item.id} className="py-3">
                        <p className="flex gap-3 text-lg items-start"><svg className="w-7 h-7 shrink-0 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                        </svg>{item?.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhyAltumind