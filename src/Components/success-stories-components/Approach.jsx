import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Approach = () => {
    const [headerData, setHeaderData] = useState()
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const {storyId} = useParams()
    let HeadingApiUrl;
    let ContentApiUrl;
    
    if(storyId === 'sukhiba'){
        HeadingApiUrl = 'api/success-story-sukiba-approach-head',
        ContentApiUrl = 'api/success-story-sukiba-approach-contents'}
        else if(storyId === 'secpod'){
            HeadingApiUrl = 'api/success-story-secpod-approach-head',
        ContentApiUrl = 'api/success-story-secpod-approach-contents' 
        }
        else if(storyId === 'enphase'){
            HeadingApiUrl = 'api/success-story-enphase-approach-head',
        ContentApiUrl = 'api/success-story-enphase-approach-contents?populate=*' 
        }
        else if(storyId === 'united-finance'){
            HeadingApiUrl = 'api/success-story-sukiba-approach-head',
        ContentApiUrl = 'api/success-story-sukiba-approach-contents' 
        }
       

    const fetchHeaderData = ()=> {
        axios.get(`${import.meta.env.VITE_APP_API_URL}${HeadingApiUrl}`)
            .then(response=> {
                setHeaderData(response?.data?.data?.attributes)
                setLoading(false)
            })
            .catch(error=> {
                console.log('Error fetching Banner data', error)
                setError(error.message)
                setLoading(false)
            })
        }

    const fetchContent = ()=> {
        axios.get(`${import.meta.env.VITE_APP_API_URL}${ContentApiUrl}`)
            .then(response=> {
                setContent(response?.data?.data)
                setLoading(false)
            })
            .catch(error=> {
                console.log('Error fetching Banner data', error)
                setError(error.message)
                setLoading(false)
            })
        }
    
useEffect(()=> {
    fetchHeaderData()
    fetchContent()
},[])
    
    if (loading) {
        return <LoaderSpinner/>
        }

    if (error) {
    return (
        <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
        </div>
    );
    }
    
  return (
    <div className='w-[90%] max-w-[800px] mx-auto py-10 dark:text-white'>
        <div className='text-center font-raleway'>
            <p className='font-extrabold text-2xl md:text-3xl xl:text-4xl mb-1 text-primary dark:text-white'>{headerData?.title}:</p>
            <p className='custom-gradient-text'>{headerData?.heading}</p>
            <p className='text-[13px] lg:text-sm font-medium mt-2'>{headerData?.description}</p>
        </div>
        <div className='flex flex-col flex-wrap gap-y-8 sm:flex-row justify-between mt-5 sm:mt-12 font-raleway'>
        {content?.map(item => 
            <div key={item.id} className={`${content?.length === 3 ? 'basis-[30%]' : 'basis-[48%]'} space-y-1`}>
                <p className=' text-2xl font-semibold text-[#D1D7ED]'>{item?.id}.</p>
                <p className='text-sm font-bold dark:font-semibold'>{item?.attributes?.title}</p>
                <p className='text-[13px] font-medium dark:font-normal leading-5'>{item?.attributes?.description}</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default Approach