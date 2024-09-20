import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { convertToUrlFormat } from '../../ReactFunctions'

const InsightsBlogs = () => {
    const [data, setData] = useState()
    
    const fetchResourceData = ()=> {
    const url = `${import.meta.env.VITE_APP_API_URL}api/blog-main-cards?populate=*&pagination[limit]=3`
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
      <div className="mx-auto w-[90%] max-w-[950px]">
        <div className="font-raleway font-semibold text-center text-primary dark:text-white">
          {/* <p className="w-fit mx-auto font-extrabold text-2xl lg:text-3xl mb-14 bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
              Industry-Focused Insights
            </p>  */}

          <div
            className={`gap-10 items-start flex max-sm:flex-col max-sm:items-center
                    ${
                      data?.length > 2
                        ? "justify-between sm:gap-0"
                        : "justify-center sm:gap-16"
                    }
                `}
          >
            {data?.data?.slice(-3)?.map((card) => (
              <div
                key={card?.id}
                className="w-[270px] sm:w-[31%] max-w-[280px] space-y-3 text-start"
              >
                <div className=" w-[270px] h-[180px] sm:w-full  max-w-[280px] md:h-[220px] rounded-xl overflow-hidden">
                  <img
                    src={card?.attributes?.image?.data?.attributes?.url}
                    alt={card?.tag}
                    className="h-full w-full hover:scale-105 transition-all object-fit"
                  />
                </div>
                <p className="text-xs px-2 lg:text-sm font-medium">
                  {card?.attributes?.tag}
                </p>
                <p className="line-clamp-2 px-2 md:text-lg lg:text-xl">
                  {card?.attributes?.title}
                </p>
                <a href={`/blog/${card?.id}/${convertToUrlFormat(card?.attributes?.title)}`} className="text-sm group px-2 flex items-center cursor-pointer gap-1 max-w-max">
                  <span className="">Read Article</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-3 transition-all duration-200 dark:text-white text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center flex items-center mt-16">
          {window.location.pathname !== "/insights" &&
            
          
            <Link to="/insights">
              <button className="group text-sm font-semibold font-raleway  flex items-center gap-1">
                <span className="border-b border-tertiary dark:border-white dark:text-white">
                  View all Insights
                </span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-3 transition-all duration-200 dark:text-white text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </Link>
          }
        </div>
      </div>
    );
  }
  
export default InsightsBlogs