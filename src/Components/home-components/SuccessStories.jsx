import axios from 'axios'
import { useEffect, useState } from 'react'

const SuccessStories = () => {
    const [data, setData] = useState()
    const fetchSuccessStoriesData = ()=> {
    const url = `${import.meta.env.VITE_APP_API_URL}api/success-storie?populate[success_story_mains][populate]=image`
        axios.get(url)
        .then(response=> {
            setData(response?.data?.data?.attributes?.success_story_mains?.data)
        })
        .catch(() => {
            console.log('Error While Fetching Resources')
        })

    }

    useEffect(()=> {
        fetchSuccessStoriesData()
    },[])

  return (
    <section className='font-raleway  dark:text-white'>
    <div>
        <h1 className='text-center font-semibold'>Success Stories</h1>
        <h1 className='text-3xl mb-10 lg:mb-20 mt-2 text-center leading-9 font-extrabold text-primary dark:text-white'>Experiences That
            <span className='text-transparent bg-clip-text bg-gradient-to-r  from-gradientGreen to-gradientBlue'> Inspire Innovation</span>
        </h1>
        <div className='flex items-start gap-7 overflow-x-auto no-scrollbar max-sm:px-5 sm:flex-col  sm:w-[90%] mx-auto md:w-[85%] md:max-w-[900px]'>
            {data?.map(story=> (
              <div key={story.id} className='min-w-[210px] sm:w-[250px] md:w-[280px]  even:sm:self-end even:sm:mt-[-320px] even:md:mt-[-350px]  '> 
                <div className='h-[210px] sm:h-[250px] md:h-[280px]'>
                    <img className='w-full' 
                         src={story?.attributes?.image?.data?.attributes?.url}
                        // src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Group_5118_Compressify_io_bfde8a23ac.webp"
                         alt={story?.attributes?.name}/>
                </div>
                <div className='pt-3'>
                    <p className='font-bold text-[10px] sm:text-xs  mb-2 sm:mb-4 lg:mb-5'>{story?.attributes?.name}</p>
                    <p className='font-extrabold text-lg md:text-xl'>{story?.attributes?.heading}</p>
                    <p className='max-sm:line-clamp-2 font-medium text-xs sm:text-sm lg:text-base my-4 md:my-5'>{story?.attributes?.description}</p>
                    <a href={story.id} className='group text-xs sm:text-sm md:text-base font-bold flex items-center gap-1 max-w-max'>
                        <span className='border-b border-black dark:border-white leading-4'>Learn more</span>
                        <svg className="w-5 h-5 group-hover:translate-x-3 transition-all duration-300  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </a>
                </div>
            </div>  
            ))}
        </div>
    </div>
    </section>
  )
}

export default SuccessStories