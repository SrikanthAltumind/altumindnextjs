import { useContext, useEffect, useState } from 'react';
import { teckStack } from '../../Utils'
import Marquee from 'react-fast-marquee';

import { ThemeContext } from '../../Layouts/AppLayout';

const TechStackSlider = () => {
const {theme} = useContext(ThemeContext)
const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
    <div className='font-raleway'>
        <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue text-3xl lg:text-4xl mb-10 w-fit mx-auto">
            Tech Stack
        </p> 
     
        <Marquee
         pauseOnHover={screenWidth>=640} speed={55} delay={1} gradient gradientWidth={screenWidth>768 ? '180px' : screenWidth<=640 ? '30px' : '100px'} gradientColor={theme=='dark' ? '#0d1015' : 'white'}>
            {teckStack.map(stack=> 
                <div key={stack.id} className='mx-5 bg-[#F9FBFF] dark:bg-DarkBackground dark:text-white   flex flex-col justify-between items-center p-3 w-[250px] h-[280px] border-2 border-gray-400 rounded-xl'>
                    <div className='text-center'>
                        <p className='text-xl font-semibold dark:font-normal'>{stack.title}</p>
                        <p className='font-medium mt-1 mb-4 text-sm'>{stack.heading}</p>
                    </div>
                    <div className='w-full grow flex justify-evenly items-center flex-wrap'>
                        {stack?.images?.map(image=> 
                            <img key={image.id} className='w-[50%] h-16 px-1 py-2 object-contain'
                                src={image.url} alt={image.altText}
                            />
                        )}
                    </div>
                </div>
            )}
        </Marquee>
    </div>
  )
}

export default TechStackSlider