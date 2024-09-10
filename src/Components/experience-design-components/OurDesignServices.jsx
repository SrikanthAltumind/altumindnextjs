import axios from "axios";
import { useEffect, useState, useContext } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { ThemeContext } from "../../Layouts/AppLayout"
import { Link, useLocation } from "react-router-dom";


const OurDesignServices = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {theme} = useContext(ThemeContext)

    const location = useLocation()
    let apiUrl;

    if(location.pathname === '/services/experience-design')
        apiUrl = 'api/service-exp-design-services'
      else if(location.pathname === '/services')
        apiUrl = 'api/service-root-explores'


    const fetchData = () => {
        const url = `${
            import.meta.env.VITE_APP_API_URL
          }${apiUrl}`;
        axios
          .get(url)
          .then((res) => {
            setData(res?.data?.data);
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
        fetchData();
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
    <section className='dark:text-white w-[90%] p-5 mx-auto font-raleway'>
      <div className="max-w-[1000px] mx-auto">
        {
          location.pathname === '/services/experience-design' &&
          <div className='text-center space-y-3 mb-10'>
            <p className='text-sm md:text-base dark:text-white text-black dark:font-normal font-semibold'>Our Design Services</p>
            <p className=' font-extrabold text-3xl  lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue  via-gradientGreen to-gradientBlue'>Your Partner in Experience-Driven Growth</p>
        </div>
        }
        <div className="flex justify-center sm:flex-row  flex-wrap lg:flex-nowrap flex-col gap-5  ">
            {
               data?.map((item) => (
                
                <div key={item.id} className='max-w-[300px] flex justify-between flex-col text-white  lg:h-auto md:h-[300px] h-[350px] space-y-2 p-5 rounded-xl mx-auto'  style={{ backgroundColor: (theme === 'dark' && item.id===1 ) ? "#5EC7A7" : item?.attributes?.hexvalue}}>
                    <div className="space-y-2">
                    <p className="font-semibold">{item?.attributes?.title}</p>
                    <p className="text-[13px] font-light font-montserrat">{item?.attributes?.description}</p>
                    </div>
                    <Link to={item?.attributes?.url} className="w-fit">
                    <p className="text-[13px] flex gap-2 items-center w-fit group font-semibold">{item?.attributes?.cta  || item?.attributes?.CTA}
                    <svg className="w-5 h-5 group-hover:translate-x-3 transition-all duration-300  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </p>
                    </Link>
                </div>
               ))
            }
        </div>
        </div>
    </section>
  )
}

export default OurDesignServices