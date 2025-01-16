import Marquee from 'react-fast-marquee';
import {Expertises} from '../../Utils.js'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Layouts/AppLayout';

const OurExpertise = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const {theme} = useContext(ThemeContext)
    const midpoint = Math.ceil(Expertises.length / 2);
    const firstHalf = Expertises.slice(0, midpoint); 
    const secondHalf = Expertises.slice(midpoint); 

    useEffect(()=> {
        const handleScreenSizeChange = ()=> {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', (handleScreenSizeChange))
    
        return ()=> {
            window.removeEventListener('resize', handleScreenSizeChange)
        }
    }, [])

  return (
    <div className="font-raleway space-y-10">
        <p className="text-center font-bold md:text-4xl text-3xl">Our Expertise</p>
        <div className='space-y-8'>
        <Marquee
         pauseOnHover={screenWidth>=640} speed={55} delay={1} gradient gradientWidth={screenWidth>768 ? '180px' : screenWidth<=640 ? '30px' : '100px'} gradientColor={theme=='dark' ? '#0d1015' : 'white'}>
            {firstHalf.map((stack, index)=> 
                <div key={stack.id} className={`mx-5 flex flex-col p-3 text-white rounded-lg ${
                    index % 2 === 0
                      ? 'bg-[#DD5143]'
                      : 'bg-[#1D2737]'
                  }`}>
                    <div className=''>
                        <p className='font-medium dark:font-normal'>{stack?.name}</p>
                    </div>
                </div>
            )}
        </Marquee>
        <Marquee
        direction='right'
         pauseOnHover={screenWidth>=640} speed={55} delay={1} gradient gradientWidth={screenWidth>768 ? '180px' : screenWidth<=640 ? '30px' : '100px'} gradientColor={theme=='dark' ? '#0d1015' : 'white'}>
            {secondHalf.map((stack, index)=> 
                <div key={stack.id} className={`mx-5 flex px-4 py-3 text-white rounded-lg ${
                    index % 2 === 0
                      ? 'bg-[#DD5143]'
                      : 'bg-[#1D2737]'
                  }`}>
                    <div className=''>
                        <p className='font-medium dark:font-normal'>{stack?.name}</p>
                    </div>
                </div>
            )}
        </Marquee>
        </div>
    </div>
  )
}

export default OurExpertise