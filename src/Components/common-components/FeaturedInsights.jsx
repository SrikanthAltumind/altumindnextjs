import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FeaturedInsights = () => {
    const [data, setData] = useState()
    
    const fetchResourceData = ()=> {
    const url = `${import.meta.env.VITE_APP_API_URL}api/industry-bfsi-insights?populate=*`
        axios.get(url)
        .then(response=> {
            setData(response?.data)
        })
        .catch((err) => {
            console.log('Error While Fetching Resources',err)
        })

    }

    useEffect(()=> {
        fetchResourceData()
    },[])
  return (
    <section className='px-5 py-3 bg-white rounded-lg'>
        <p className='text-[#858585] text-sm font-montserrat uppercase pb-2'>Featured Insights</p>
        <div className='space-y-5'>
            {data?.data?.slice(-3)?.map((item) => (
                <div key={item.id} className='flex items-center gap-5'>
                    <img src={item?.attributes?.image?.data?.attributes?.url} alt={item?.tag} className='h-20 w-20 shrink-0 rounded-lg object-cover' />
                    <div   className='space-y-1'>                    
                    <p className='text-[11px] font-medium'>{item?.attributes?.tag}</p>
                <p className='line-clamp-2 text-xs font-raleway'>{item?.attributes?.title}</p>
                <div>
                <Link to="/">
                            <p className='flex items-center text-secondary text-[13px] gap-1 group/two underline underline-offset-2'>Read Article
                            <svg className="w-5 h-5 group-hover/two:translate-x-2 transition-all duration-300 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                            </p>
                        </Link>
                        </div>
                        </div>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default FeaturedInsights