import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const SettingUpForSuccess = () => {
    const [data, setData] = useState()
    const [activeTab, setActiveTab] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    
    const location = useLocation()
    let apiUrl;

    if(location.pathname === '/services/experience-design')
        apiUrl = 'api/service-exp-design-benifits?populate=*'
    else if(location.pathname === '/services/ai-automation')
        apiUrl = 'api/service-ai-auto-we-serves?populate=*'
    else if(location.pathname === '/services/qa-testing')
        apiUrl = 'api/service-qa-testing-we-serves?populate=*'
    else if(location.pathname === '/services/digital-marketing')
        apiUrl = 'api/service-digital-marketing-benifits?populate=*'
    else if(location.pathname === '/services/technology-engineering')
        apiUrl = 'api/service-tech-engg-we-serves?populate=*'
    else if(location.pathname === '/services/data-analytics')
      apiUrl = 'api/service-data-analytics-benifits?populate=*'
       else if(location.pathname === '/services/managed-operations')
      apiUrl = 'api/service-managed-operation-benifits?populate=*'
      else if(location.pathname === '/services')
      apiUrl = 'api/service-root-benifits?populate=*'
      else if(location.pathname === '/services/digital-strategy-consulting')
      apiUrl = 'api/service-digital-strategy-consulting-benifits?populate=*'
      else if(location.pathname === '/services/cloud-services')
      apiUrl = 'api/service-cloud-benifits?populate=*'
          else if(location.pathname === '/mission-and-vision')
      apiUrl = 'api/our-mission-and-vision-words?populate=*'
    

    const fetchData = () => {
        const url = `${
          import.meta.env.VITE_APP_API_URL
        }${apiUrl}`;
        axios
          .get(url)
          .then((res) => {
            setData(res?.data?.data);
            setActiveTab(res?.data?.data[0])
            setLoading(false);
          })
          .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
      };

    useEffect(()=> {
        fetchData()
    },[])
    
 if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error}
      </div>
    );
  }

  return (
    <div className='dark:text-white w-[90%] max-w-[950px] mx-auto font-raleway'>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
            <ul className='basis-[50%] max-w-[400px] space-y-4'>
                {data?.map((tab,index)=> (
                    <li key={tab?.id}>
                        <button className={`min-w-max ${activeTab?.id===tab.id ? 'bg-[#EAF1FF] dark:bg-[#294376]' : 'hover:bg-[#eaf1ff82]'} w-full text-left  font-bold py-4 px-8 rounded-md`}
                            onClick={()=> setActiveTab(tab)}> 
                           
                            <span className='font-semibold md:text-lg text-[#EFB6BA]'>{index+1}.&nbsp;&nbsp;</span>
                            {tab?.attributes?.title}
                        </button>
                        {tab?.id===activeTab?.id &&
                            <div className='sm:hidden p-5 space-y-5'>
                                <img src={tab?.attributes?.image?.data?.attributes?.url} className='w-[250px] mx-auto' alt={tab?.attributes?.title}/>
                                <p className='font-montserrat font-medium text-sm'>{tab?.attributes?.description}</p>
                            </div>
                        }
                    </li>
                ))}
            </ul>
            <div className='hidden sm:block  basis-[55%] p-5 space-y-5 '>
                    <img src={activeTab?.attributes?.image?.data?.attributes?.url} className='w-[250px] md:w-[300px] mx-auto'/>
                    <p className='font-montserrat dark:font-normal font-medium text-sm '>{activeTab?.attributes?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default SettingUpForSuccess