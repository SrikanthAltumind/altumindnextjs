import ERPblog from "../../assets/ERP-blog.png"
import useFetchData from "../../CustomHooks/useFetchData";
import LoaderSpinner from "../common-components/LoaderSpinner";

const BlogHighlights = () => {
    const blogData = [
        {
            id:1, 
            img: ERPblog,
            tags: ["Enterprise Software", "IT Strategy"],
            heading:"Enterprise Applications for Business: Choosing the Right Solution",
            url:""
        },
          {
            id:2, 
            img: ERPblog,
            tags: ["Enterprise Software", "IT Strategy"],
            heading:"Enterprise Applications for Business: Choosing the Right Solution",
            url:""
        },
          {
            id:3, 
            img: ERPblog,
            tags: ["Enterprise Software", "IT Strategy"],
            heading:"Enterprise Applications for Business: Choosing the Right Solution",
            url:""
        },
    ]

      const apiUrl = `/api/service-landing-blogs?populate=*`;
  const { data, isError, isLoading, error } = useFetchData(
    ["blogHighlights", location.pathname],
    apiUrl
  );
  const blogHighlightsData = data?.data?.data || [];
  console.log(blogHighlightsData, 'bloghighlightsData')

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
        {error?.message}
      </div>
    );
  }
  return (
    <div className="bg-[#1C1C1C] px-5 sm:px-10 space-y-10 py-20">
        <p className="text-xl md:text-3xl text-center text-white font-semibold">Blog Highlights</p>
        <div className="flex sm:flex-row max-md:flex-wrap flex-col justify-center items-center gap-8">
            {
            blogHighlightsData?.map((item) => (
            <div key={item?.id} className="bg-white max-sm:w-[300px] w-[320px] h-[350px] overflow-hidden rounded-xl">
                <div>
                    <img src={item?.attributes?.image?.data?.attributes?.url} alt={item?.attributes?.image?.data?.attributes?.alternativeText} />
                </div>
                <div className="p-3 space-y-4 h-full bg-[#f6f6f6]">
                    <div className="flex gap-3  text-xs">
                        {
                            item?.attributes?.tags?.map((tag) => (
                                <p className="bg-white rounded-full px-2 py-1" key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className="text-lg sm:text-xl">{item?.attributes?.title}</p>
                    <div>
                    <a href={item?.attributes?.path} target="_blank">
                        <p className="text-red-500 flex font-medium sm:text-lg gap-1 items-center">Read more  
                            <svg
                              className='w-4 h-4 mt-1'
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
                                d="m9 5 7 7-7 7"
                            />
                            </svg> 
                        </p>
                    </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default BlogHighlights