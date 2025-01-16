import axios from 'axios';
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown';

const AgilitiEngagementModels = () => {
    const [data, setData] = useState();
    const [openedIds, setOpenedIds] = useState([]);

    const fetchData = ()=> {
        axios.get(`${import.meta.env.VITE_APP_API_URL}api/agiliti-root-engagement-content-v3s`)
        .then(response=> {
            setData(response?.data?.data)
            console.log(response?.data?.data)
            setOpenedIds(prev=> [...prev, response?.data?.data[0].id])
        })
        .catch(error=> {
            console.error('Error fetching Discover Roles Data', error)
        })
    }

    const toggleItemOpenClose = modelId=> {
        if(openedIds?.includes(modelId)){
            setOpenedIds(prev=> prev.filter(id=> id!==modelId))
        }else{
            setOpenedIds(prev=> [...prev, modelId])
        }
    }

    useEffect(()=> {
        fetchData()
    },[])


  return (
    <div className='w-[90%] md:w-[80%] max-w-[700px] mx-auto font-raleway'>
        {/* <div className='text-center mb-5 lg:mb-8'>
            <p className='custom-sub-heading'>Diverse Models for Every Size, Budget, and Requirement </p>
            <p className='custom-gradient-text'>Different Engagement Models for An Offshore Development Team</p>
        </div> */}
        <div className='flex flex-col gap-10 ids-center'>
            {data?.map(model=> 
                <div className='w-full p-3 md:px-4 rounded-lg space-y-3 border-[1.5px] border-[#999999]'
                    key={model?.id} style={{backgroundColor:model.attributes.bgClr}}>
                    <div className='flex items-center bg-transparent justify-between cursor-pointer'
                         onClick={()=> toggleItemOpenClose(model.id)}
                        >
                        <h3 className='text-[#01143B] text-[18px] font-bold'>{model?.attributes?.title}</h3>
                        <svg className={`w-4 h-4 text-[#01143B]  ${openedIds?.includes(model?.id) ? 'rotate-180' : 'rotate-0'} duration-300`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                    {openedIds?.includes(model?.id) && 
                    <div className='text-[14px] font-medium font-montserrat'>
                        <Markdown className='markdown-agiliti leading-6'>
                        {model?.attributes?.content}
                        </Markdown>
                    </div>
                    }
                </div>
            )}
        </div>
    </div>
  )
}

export default AgilitiEngagementModels