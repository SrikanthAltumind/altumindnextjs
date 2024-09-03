// import axios from "axios"
// import { useEffect, useState } from "react"
import InsightsBlogs from "../common-components/InsightsBlogs"

const ResourceCenter = () => {
    // const [data, setData] = useState()
    // const [activeCategory, setActiveCategory] = useState()
    // const fetchResourceData = ()=> {
    // const url = `${import.meta.env.VITE_APP_API_URL}api/categories?populate[category_card_mains][populate]=image`
    //     axios.get(url)
    //     .then(response=> {
    //         setData(response?.data?.data)
    //         setActiveCategory(response?.data?.data[1])
    //     })
    //     .catch( () => {
    //         console.log('Error While Fetching Resources')
    //     })

    // }

    // useEffect(()=> {
    //     fetchResourceData()
    // },[])
    return (
      <div  className='bg-[#F3F9FF] dark:bg-darkTheme dark:text-white py-14 dark:py-0'>
      <div className="mx-auto w-[90%] max-w-[950px]">
          <div className="font-raleway font-semibold text-center text-primary dark:text-white">
              <p>Resource Center</p>
              <div className="font-extrabold text-3xl lg:text-4xl mb-10 pt-2 space-y-1">
              <p className="bg-clip-text w-fit mx-auto text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">Stay in Sync</p> 
              <p className="">with the Latest Updates</p>
          </div>
          <InsightsBlogs/>
          
            <div className='overflow-x-auto'>
            {/* <ul className='flex min-w-max gap-5 justify-between px-2 '>
                {data?.map(cat=> (
                    <li key={cat.id} className=''>
                        <button className={`py-1 sm:px-1 border-b-[3px] ${cat.id===activeCategory.id ?'border-secondary font-bold ': 'border-transparent font-medium'} text-black dark:text-white text-xs sm:text-sm`}
                        onClick={()=> setActiveCategory(cat)}
                            >{cat.attributes.title}</button>
                    </li>

                ))}
            </ul> */}
            </div>
            {/* <div className={`mt-10 gap-10 items-start flex max-sm:flex-col max-sm:items-center
                    ${activeCategory?.attributes?.category_card_mains?.data?.length>2? 'justify-between sm:gap-0':'justify-center sm:gap-16'}
                `}>
            {activeCategory?.attributes?.category_card_mains?.data?.slice(-3)?.map(card=> (
            <div key={card?.id} className='w-[250px] sm:w-[31%] max-w-[280px] space-y-3 text-start'>
                <div className='rounded-3xl w-[250px] h-[210px] sm:w-full  max-w-[280px] md:h-[280px] lg:h-[300px] overflow-hidden'>
                   <img src={card?.attributes?.image?.data?.attributes?.url} alt="blog" className='h-full w-full hover:scale-105  transition-all'/>
                </div>
                <p className='text-xs  lg:text-sm font-medium'>{card?.attributes?.title}</p>
                <p className='line-clamp-2 md:text-lg lg:text-xl'>{card?.attributes?.heading}</p>
                <a className='text-sm group flex items-center cursor-pointer gap-1 max-w-max'>
                            <span className='group-hover:border-b border-black'>Read Article</span>
                            <svg className="w-5 h-5 group-hover:w-10 transition-all duration-200 dark:text-white text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </a>
                    </div>
                        
                ))}
            </div> */}
          </div>
          {/* <div className='justify-center flex items-center mt-10'>
          <button className="bg-secondary rounded-full text-sm text-white font-montserrat py-3 px-3">View All Insights</button>
          </div> */}
      </div>
      </div>
    )
  }
  
  export default ResourceCenter