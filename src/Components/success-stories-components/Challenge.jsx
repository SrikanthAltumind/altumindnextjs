import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner'
import axios from 'axios'
import {useParams } from 'react-router-dom'

const Challenge = () => {
    const [headerData, setHeaderData] = useState()
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const {storyId} = useParams()

    let HeadingApiUrl;
    let ContentApiUrl;

    if(storyId === 'sukhiba')
        HeadingApiUrl = 'api/success-story-sukiba-challenge-head'

     if(storyId === 'sukhiba')
        ContentApiUrl = 'api/success-story-sukiba-challenge-contents?populate=*'

    const  fetchHeaderData = () => {
        const url = `${
            import.meta.env.VITE_APP_API_URL
          }${HeadingApiUrl}`;
        axios
          .get(url)
          .then((res) => {
            setHeaderData(res?.data?.data?.attributes);
            setLoading(false);
          })
          .catch(() => {
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
      };

    const  fetchContent = () => {
        const url = `${
            import.meta.env.VITE_APP_API_URL
          }${ContentApiUrl}`;
        axios
          .get(url)
          .then((res) => {
            setContent(res?.data?.data);
            console.log(res?.data?.data, 'test')
            setLoading(false);
          })
          .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
      };
    
      useEffect(() => {
        fetchHeaderData()
        fetchContent()
      }, []);
    
      if (loading) {
        return <LoaderSpinner />;
      }
    
      if (error) {
        return (
          <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
            {error}
          </div>
        );
      }

  return (
    <div className='w-[90%] max-w-[800px] mx-auto dark:text-white'>
        <div className='text-center font-raleway mb-10'>
        <p className='font-extrabold text-2xl md:text-3xl xl:text-4xl mb-1 text-primary dark:text-white'>{headerData?.title}:</p>
        <p className='custom-gradient-text'>{headerData?.heading}</p>
        </div>
        <div className='flex flex-col gap-10 sm:flex-row'>
      {
        content.map(item => (
            <div key={item.id} className='space-y-5 basis-[47%] items-start'>
                <div>
                <img src={item?.attributes?.icon?.data?.attributes?.url} alt='Challenge' width={50}/>
                </div>
                <div>
                    <p className="text-[13px] font-medium font-montserrat dark:font-normal leading-[26px]">{item?.attributes?.description}</p>
                </div>
            </div>
        ))
      }
       
           
        </div>
    </div>
  )
}

export default Challenge