import React, { useEffect, useState } from "react";
import Banner from "../Components/common-components/Banner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../Components/common-components/LoaderSpinner";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[360px] flex flex-col h-[420px] shadow-lg">
      <div className="w-full">
        <img
          src={blog?.attributes?.image?.data?.attributes?.url}
          alt={blog.attributes.title}
          className="h-[210px] w-full object-fit pointer-cursor"
        />
      </div>
      <div className="font-raleway flex flex-col justify-between items-start h-[210px]">
        <div className="flex flex-col gap-3 p-3">
          <p className=" text-gray-400 text-sm">{blog.attributes.tag}</p>
          <p
            className="cursor-pointer w-full font-medium text-lg"
            onClick={() => navigate(`/blog/${blog?.id}`)}
          >
            {blog.attributes.title}
          </p>
        </div>
        <div className="p-3">
          <p>30 July, 2024</p>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(1);
  const [blogData, setBlogData] = useState([]);

  const getData = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/blog-categories?populate[blog_main_cards][populate]=image`
      )
      .then((response) => {
        setData(response?.data?.data);
        setBlogData(
          response?.data?.data?.[0]?.attributes?.blog_main_cards?.data || []
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log("error while fetching categories", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
    };
    
    const filterData = () => {
        const filterData = data.find(e => e?.id === activeCategory)?.attributes?.blog_main_cards?.data || []
        setBlogData(filterData)
    }

    useEffect(() => {
        getData();
    }, []);
    
    useEffect(() => {
        filterData()
    },[activeCategory])

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
    <div className="w-full flex flex-col gap-8 py-4 items-center justify-center">
      <section className="w-full">
        <Banner />
        <div className="lg:flex justify-evenly items-center  w-full overflow-x-auto no-scrollbar bg-[#EAF1FF]">
          <div className="w-full min-w-screen p-3 gap-7 flex justify-evenly items-center ">
            {data?.map((type) => (
              <button
                key={"type" + type.id}
                className={`pb-3 pt-4 sm:pt-6 sm:pb-4 px-2 sm:px-3 border-b-[3px] font-raleway sm:border-b-4 ${
                  activeCategory === type?.id
                    ? "border-secondary font-bold "
                    : "border-transparent font-medium"
                } text-black text-xs sm:text-sm`}
                onClick={() => {
                  setActiveCategory(type?.id);
                }}
              >
                <p
                  className={`text-base text-nowrap font-semibold group-hover:text-[#E42D38] ${
                    activeCategory === type?.id ? "text-[#E42D38]" : ""
                  }`}
                >
                  {type?.attributes?.type}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full p-6 flex flex-wrap gap-7 justify-center items-center">
        {blogData?.length > 0 ? (
          blogData?.map((blog, index) => {
            return <BlogCard key={"blogCard" + index} blog={blog} />;
          })
        ) : (
          <p>No blogs available for this category.</p>
        )}
      </section>
    </div>
  );
};

export default Blogs;
