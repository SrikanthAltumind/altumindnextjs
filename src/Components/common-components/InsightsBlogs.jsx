import axios from 'axios'
import { Link } from 'react-router-dom'
// import { convertToUrlFormat } from '../../ReactFunctions'
import { useQuery } from '@tanstack/react-query'
import LoaderSpinner from './LoaderSpinner'

const InsightsBlogs = () => {
    // const [data, setData] = useState()
    //  const url = `${import.meta.env.VITE_APP_API_URL}api/blog-main-cards?populate=*&pagination[limit]=3`
    const url ="https://blogs.altumindglobal.com/wp-json/custom/v1/all-posts"

    const {data, isError, isLoading, error} = useQuery({
      queryKey: ["InsightsBlogs"],
      queryFn: () => {
        return   axios.get(url)
      },
      staleTime: 24 * 60 * 60 * 1000
    })

    console.log(data, 'queerrryy-wordpress')

    if(isLoading){
      return <LoaderSpinner/>
    }

    if(isError){
      return (
        <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error.message}
      </div>
      )
    }

    const blogs = data?.data|| []

    console.log(blogs, 'blog-wordpress')
    
    // const fetchResourceData = ()=> {
    // const url = `${import.meta.env.VITE_APP_API_URL}api/blog-main-cards?populate=*&pagination[limit]=3`
    //     axios.get(url)
    //     .then(response=> {
    //         setData(response?.data)
    //         console.log(data, 'insights')
    //     })
    //     .catch((err) => {
    //         console.log('Error While Fetching Resources',err)
    //     })

    // }

    // useEffect(()=> {
    //     fetchResourceData()
    // },[])
    return (
      <div className="mx-auto max-w-[1100px] w-full">
        <div className="font-raleway w-full font-semibold text-center text-primary dark:text-white">
          {/* <p className="w-fit mx-auto font-extrabold text-2xl lg:text-3xl mb-14 bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
              Industry-Focused Insights
            </p>  */}

          <div
            className={`gap-10 items-start flex max-sm:flex-col max-sm:items-center
                    ${
                      blogs?.length > 2
                        ? "justify-between sm:gap-0"
                        : "justify-center sm:gap-16"
                    }
                `}
          >
            {blogs?.slice(0, 3)?.map((card) => (
              <div
                key={card?.id}
                className="w-[350px] sm:w-[31%] max-w-[350px] space-y-3 text-start"
              >
                <div className=" w-[300px] h-[160px] sm:w-full  max-w-[350px] md:h-[180px] lg:h-[220px] rounded-xl overflow-hidden">
                  <img
                    src={card?.
                      featured_image}
                    alt={card?.attributes?.image?.data?.attributes?.alternativeText || card?.attributes?.title }
                    className="h-full w-full hover:scale-105 transition-all object-fit"
                    loading='lazy'
                  />
                </div>
                <p className="flex items-center text-xs px-2 lg:text-sm font-medium">
                {card?.tags?.map(tag => tag?.name).join(", ")}
                </p>
                <p className="line-clamp-2 px-2 md:text-lg lg:text-xl">
                  {card?.title}
                </p>
                {/* <Link to={`/insights/blog/${card?.id}/${convertToUrlFormat(card?.attributes?.title)}`} className="text-sm group px-2 flex items-center cursor-pointer gap-1 max-w-max"> */}
                <Link to={card?.link} className="text-sm group px-2 flex items-center cursor-pointer gap-1 max-w-max">
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
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center flex items-center mt-16">
          {window.location.pathname !== "/insights" &&
            
          
            <a target='_blank' href="https://blogs.altumindglobal.com/">
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
            </a>
          }
        </div>
      </div>
    );
  }
  
export default InsightsBlogs