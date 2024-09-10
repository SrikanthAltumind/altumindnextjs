import axios from 'axios'
import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import { useParams } from 'react-router-dom';

const SuccessStoryBanner = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const {storyId} = useParams()

   let apiUrl;
    if(storyId === 'secpod')
      apiUrl = 'api/success-story-secpod-banner?populate=*'
    else if(storyId === 'sukhiba')
        apiUrl = 'api/success-story-sukiba-content?populate=*'
    else if(storyId === 'enphase')
        apiUrl = 'api/success-story-enphase-content?populate=*' //api needes to be changed
    else if(storyId === 'united-finance')
        apiUrl = 'api/success-story-uf-banner?populate=*'

  const fetchBannerData = ()=> {
    axios.get(import.meta.env.VITE_APP_API_URL + apiUrl)
        .then(response=> {
        setData(response?.data?.data?.attributes)
        setLoading(false)
        })
        .catch(error=> {
        console.log('Error fetching Banner data', error)
        setError(error.message)
        setLoading(false)
        })
    }

useEffect(()=> {
    fetchBannerData()
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
    <div className='bg-LightBlue lg:min-h-[380px] py-6 sm:py-10 flex justify-center items-center'>
        <div className='w-[90%]  sm:w-[80%] md:max-w-[750px] lg:max-w-[850px] justify-between flex flex-col sm:flex-row items-center gap-y-5 font-raleway'>
            <div className='basis-[60%] flex flex-col gap-6 max-sm:text-center'>
                <p className='custom-gradient-text sm:mx-0 lg:text-4xl'>{data?.title}</p>
                {data?.description &&
                    <p className='font-semibold text-sm '>{data?.description}</p>
                }
                <div className='font-semibold text-sm  space-y-2'>
                    <p>Clinet: {data?.client}</p>
                    <p>Industry: {data?.industry}</p>
                </div>
            </div>
            <div className='basis-[35%] max-w-[200px] md:max-w-[220px] lg:max-w-[250px] '>
                <img src={data?.image?.data?.attributes?.url} />
            </div>
        </div>
    </div>
  )
}

export default SuccessStoryBanner