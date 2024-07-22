import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const NavigatingKeyChallenges = () => {
    const [data, setData] = useState()

    const location = useLocation()
    let apiUrl;

    if(location.pathname === '/bfsi-finance')
        apiUrl = 'api/industry-bfsi-challenge-contents?populate=*'
    else if(location.pathname === '/healthcare')
        apiUrl = 'api/industry-hc-challenge-contents?populate=*'
    else if(location.pathname === '/ed-tech')
        apiUrl = 'api/industry-ed-challenge-contents?populate=*'
      else if(location.pathname === '/internet')
        apiUrl = 'api/industry-internet-challenge-contents?populate=*'

    const fetchData = () => {
        const url = `${import.meta.env.VITE_APP_API_URL}${apiUrl}`
        axios.get(url)
        .then((res) => {
            console.log(res)
            setData(res?.data?.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <section id="section4" className="w-[90%] mx-auto font-raleway">
        <div>
            <p className="w-fit font-extrabold text-2xl lg:text-3xl py-2 mb-10 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">Navigating Key Challenges</p>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap max-w-[950px] mx-auto">
        {
            data?.map((item) => (
                <div key={item.id} className="h-[270px] w-[250px] shadow-custom-shadow p-3 dark:bg-white rounded-sm">
                    <img src={item?.attributes?.icon?.data?.attributes?.url} />
                    <p className="text-lg font-medium py-3">{item?.attributes?.title}</p>
                    <p className="text-sm">{item?.attributes?.description}</p>
                </div>
            ))
        }
    </div>
    </section>
  )
}

export default NavigatingKeyChallenges