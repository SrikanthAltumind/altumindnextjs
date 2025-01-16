import { useEffect, useState } from 'react'

import Responsive from '../../assets/cwd-icons/responsive.svg'
import Intuitive from '../../assets/cwd-icons/IntuitiveUI.svg'
import Custom from '../../assets/cwd-icons/icon-1.svg'
import Headless from '../../assets/cwd-icons/HeadlessCMS.svg'
import Local from '../../assets/cwd-icons/LocalSEO.svg'


const data = {
    heading:'Transform Your Digital Presence with Custom Website Development',
    caption:'Crafted to Engage. Designed to Convert.',
    description:'We specialize in custom web development and user-centric web solutions that seamlessly integrate with your business ecosystem. Whether you need a sleek corporate website or a dynamic web application, we design responsive, usercentric solutions that keep your audience captivated and drive measurable results.',
    services:[
        {
            id:1,
            title:'Responsive & Interactive Designs',
            description:'From corporate websites to marketing sites and B2B platforms, our mobile-friendly designs engage users across devices while amplifying your brand s impact.',
            iconUrl:Responsive
        },
        {
            id:2,
            title:'Intuitive UI/UX',
            description:'Our interfaces prioritize ease of use, creating natural, enjoyable interactions that keep your audience coming back',
            iconUrl:Intuitive
        },
        {
            id:3,
            title:'Custom Website Development',
            description:'Tailored to meet your business needs, our solutions align with your unique goals for maximum ROI.',
            iconUrl:Custom
        },
        {
            id:4,
            title:'Headless CMS',
            description:'Achieve ultimate flexibility and scalability with a headless CMS. Separate your content from design to deliver fast & seamless omnichannel experience.',
            iconUrl:Headless
        },
        {
            id:5,
            title:'Local SEO',
            description:'Gain visibility in your market with a custom search engine optimization strategy that enhances local search rankings and attracts new customers.',
            iconUrl:Local
        }
    ]
}

const WebDevelopment = () => {
    const [selectedServiceId, setSelectedServiceId] = useState(data?.services[0]?.id)
    const [leftService, setLeftService] = useState(null)
    const [rightService, setRightService] = useState(data?.services[1])
    const selectedService = data?.services.find(service=> service?.id===selectedServiceId)

useEffect(()=> {
    const centerIndex = data?.services?.findIndex(service=> service.id===selectedServiceId)
    setLeftService(data?.services[centerIndex-1])
    setRightService(data?.services[centerIndex+1])
}, [selectedServiceId])

  return (
    <div className='font-raleway'>
        <div className='bg-[#1D2737] md:w-[95%] max-w-[950px] md:rounded-[40px] mx-auto text-white py-10'>
            <div className='text-center px-5 space-y-4 md:max-w-[580px] lg:max-w-[700px] mx-auto'>
                <p className='text-2xl sm:text-3xl max-w-[520px] md:max-w-[650px] lg:max-w-[700px] mx-auto lg:text-4xl lg:leading-[50px] font-extrabold text-transparent bg-gradient-to-r from-[#DD5143] via-[#5787F8] to-[#DD5143] bg-clip-text'>{data?.heading}</p>
                <p className='text-sm lg:text-base font-medium'>{data?.caption}</p>
                <p className='text-xs lg:text-base  font-light'>{data?.description}</p>
            </div>
            <div className='mt-10 flex flex-col'>
                {/* Tabs Dropdown */}
                 <select
                    value={selectedServiceId}
                    onChange={(e)=> {console.log(e.target.value);setSelectedServiceId(Number(e.target.value))}}
                        className='w-fit mx-auto sm:hidden bg-transparent outline-none border rounded-full py-3 px-3 text-xs'>
                        {data?.services?.map(service=> 
                            <option value={service.id} key={service.id} className='bg-DarkBackground'>{service?.title}</option>
                        )}
                </select>
                
                {/* Tab buttons */}
                <div className='hidden sm:block bg-white h-10 md:h-12 rounded-full text-black w-fit mx-auto'>
                    {data?.services?.map(service=> 
                        <button key={service?.id}
                          onClick={()=> setSelectedServiceId(service.id)}
                          className={`text-[11px] h-full px-2 md:px-4 font-semibold rounded-3xl ${selectedServiceId===service.id ? 'text-white bg-[#DD5143]' : ''} `}
                        >
                            {service?.title}
                        </button>
                    )}
                </div>
                {/* Cards UI */}
                <div className='mt-10 flex justify-between'>
                    {/* Left Card */}
                    <div onClick={()=> setSelectedServiceId(leftService?.id)} 
                        className={` ${leftService? 'visible' : 'invisible'} cursor-pointer select-none overflow-hidden min-h-[230px] sm:min-h-[200px] bg-white pr-7 py-6 text-black rounded-r-3xl w-[5%] sm:w-[15%] lg:w-[19%] opacity-40`}>
                        <div className=' space-y-2 -ml-[100%] '>
                            <div className='w-14 h-14 invisible'>
                                <img src={leftService?.iconUrl} alt={leftService?.title}/>
                            </div>
                            <p className='font-semibold line-clamp-1'>{leftService?.title}</p>
                            <p className='text-xs line-clamp-3'>{leftService ?.description}</p>
                        </div>
                    </div>
                    
                    {/* Middle Card */}
                    <div className='w-[75%] min-h-[230px] sm:min-h-[200px]  max-w-[400px] md:w-[52%] px-7 py-6 space-y-2 bg-white text-black rounded-3xl'>
                        <div className='w-14 h-14'>
                            <img src={selectedService?.iconUrl} alt={selectedService?.title}/>
                        </div>
                        <p className='font-semibold'>{selectedService?.title}</p>
                        <p className='text-xs'>{selectedService?.description}</p>
                    </div>

                    {/* Right Card */}
                    <div onClick={()=> setSelectedServiceId(rightService?.id)} 
                    className={` ${rightService? 'visible' : 'invisible'} cursor-pointer select-none overflow-hidden min-h-[230px] sm:min-h-[200px] bg-white text-black rounded-l-3xl pl-7 py-6 space-y-2  w-[5%] sm:w-[15%] lg:w-[19%] opacity-40`}>
                         <div className='w-14 h-14'>
                            <img src={rightService?.iconUrl} alt={rightService?.title}/>
                        </div>
                        <p className='font-semibold line-clamp-1'>{rightService?.title}</p>
                        <p className='text-xs line-clamp-3'>{rightService?.description}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WebDevelopment