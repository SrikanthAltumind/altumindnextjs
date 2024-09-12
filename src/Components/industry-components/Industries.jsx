import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Industries = ( ) => {
  const [data , setData] = useState([])
  const [industryData, setIndustryData] = useState(0)

const fetchData = () => {
  const url = `${import.meta.env.VITE_APP_API_URL}api/industry-categories?populate[industry_category_mains][populate]=*`
  axios.get(url)
  .then((res) => {
  console.log('res',res)
  setData(res?.data?.data)
  setIndustryData(res?.data?.data[0])
})
  .catch((err) => 
  console.log('err',err)
  )
}

useEffect(() => {
  fetchData();
},[])

  return (
    <div className="w-[90%] mx-auto -mt-[50px]">
      <div className="overflow-x-auto lg:w-[90%] mx-auto">
        <ul className="flex justify-between gap-14 min-w-max font-montserrat">
      {
        data?.map((item) => {
            return (
            <li key={item.id}  onClick={()=> setIndustryData(item)} className={`${item.id === industryData.id ? 'border-b-[3px] border-secondary font-medium' : 'border-none'} cursor-pointer text-[#1E1E1E] lg:text-base text-sm dark:text-white`}>{item?.attributes?.industry_category}</li>
        )})
      }
      </ul>
      </div>

      <div>
      {
          industryData && (
            <div key={industryData.id} className="w-[90%] mx-auto dark:text-white dark:font-light flex mt-20 lg:flex-row flex-col  justify-center items-center gap-5 gap-y-5">
              <div className="basis-[50%]">
                <img src={industryData?.attributes?.industry_category_mains?.data[0]?.attributes?.image?.data?.attributes?.url} alt={industryData?.attributes?.industry_category_mains?.data[0]?.attributes?.title} />
              </div>
              <div className="basis-[50%]">
              <h2 className="text-xl font-semibold font-montserrat">
               <span className="bg-[#F5F8FF] font-medium rounded-full p-[6px] dark:text-black">0{industryData.id}</span> {industryData?.attributes?.industry_category_mains?.data[0]?.attributes?.title}
              </h2>
              <p className="font-raleway py-5">
                {industryData?.attributes?.industry_category_mains?.data[0]?.attributes?.description}
              </p>
              <div className="font-montserrat flex gap-5 items-center text-sm">
              <Link to={industryData?.attributes?.industry_category_mains?.data[0]?.attributes?.url}><button className="bg-secondary border border-secondary rounded-full px-5 text-white py-2">Learn How</button></Link>
              <Link to='/contact-us'><button className="bg-transparent flex items-center gap-2 border border-secondary text-secondary rounded-full px-5 py-2">Get in Touch
              <svg className="w-5 h-5 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
              </button></Link>
              </div>
              </div>
             
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Industries