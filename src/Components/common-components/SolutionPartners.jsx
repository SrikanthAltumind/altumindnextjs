import axios from 'axios'
import  { useEffect, useState } from 'react'

const SolutionPartners = () => {
    const [partners, setPartners] = useState(null)
    const [loading, setLoading] = useState(true)


    const fetchOurPartners = ()=> {
        axios.get(`${import.meta.env.VITE_APP_API_URL}api/industry-bfsi-sol-partners?populate=*`)
          .then(response=> {
            setPartners(response?.data?.data[0]?.attributes?.images?.data)
            setLoading(false)
          })
          .catch(error=> {
            console.log('Error fetching Partners data', error)
            setLoading(false)
          })
      }
    
    useEffect(()=> {
      fetchOurPartners()
    },[])
  return (
    <div className='w-[95%] max-w-[800px] mx-auto'>
        <div className=' flex justify-center items-center flex-wrap  mt-5 gap-10'>
            {partners?.map((partner) => (
            <img  key = {partner.id} src = {partner?.attributes?.url} alt = {partner?.attributes?.name} className='w-28 md:w-44 lg:w-52 ' />
        ))}
        </div>
    </div>
  )
}
 
export default SolutionPartners