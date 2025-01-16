import React, { useEffect, useState } from "react";
import { gradientStyle } from "../ReactFunctions";
import axios from "axios";
import LogoMarquee from "../Components/common-components/LogoMarquee";
import LoaderSpinner from "../Components/common-components/LoaderSpinner";
import SubscribeForm from "../Components/common-components/SubscribeForm";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [data, setData] = useState([])
  const categoriesUrl = `${
    import.meta.env.VITE_APP_API_URL
  }api/portfolio-categories?populate=*`;
  const [catgoriesData, setCatgoriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const portData = [
    {
      title: "By Industry",
      tags: [
        "ALL",
        "BFSCI and Fintech",
        "Digital Commerce",
        "Healthcare",
        "Green & Sustainability",
        "Edtech",
        "Internet & Saas",
      ],
    },
    {
      title: "By solution",
      tags: [
        "Mobile",
        "Web",
        "Software",
        "Cross-Platform Solutions",
        "Emerging Technologies",
        "Cloud Solutions",
        "Automation Solutions",
        "Digital Marketing",
      ],
    },
    {
      title: "By Technology",
      tags: [
        "Web Technologies",
        "Mobile Technologies",
        "Cloud Technologies",
        "Enterprise Applications",
        "Automation Technologies",
        "Data and Analytics Technologies",
        "Branding and Digital Marketing Technologies",
      ],
    },
  ];
  // const [tagData, setTagData] = useState(portData?.[0]?.tags);
  // const [selectedSector, setSelectedSector] = useState("By Industry");
  // const projectsArray = new Array(10).fill(null);
  const [activeCategory, setActiveCategory] = useState(1 || null);
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  // const changeSector = (selectedValue) => {
  //   setSelectedSector(selectedValue);
  //   setTagData(
  //     catgoriesData?.find((e) => e?.id === selectedValue)?.attributes
  //       ?.portfolio_subcategories?.data
  //   );
  // };

  // const getCategories = () => {
  //   axios
  //     .get(categoriesUrl)
  //     .then((response) => {
  //       setCatgoriesData(response?.data?.data);
  //       setTagData(
  //         response?.data?.data[0]?.attributes?.portfolio_subcategories?.data
  //       );
  //     })
  //     .catch((error) => {
  //       console.log("error while categories", error);
  //     });
  // };

  const getFilteredBlogs = () => {
    const activeCategoryData = data.find(
      (category) => category.id === activeCategory
    );

    if (!activeCategoryData) return [];
    
    const subcategoryData =
      activeCategoryData.attributes.portfolio_subcategories.data.find(
        (subcategory) => subcategory.attributes.title === activeSubcategory
      );          

    return subcategoryData?.attributes.portfolio_cards.data || [];
  };
  const filteredBlogs = getFilteredBlogs();


  const fetchAllData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}`+"api/portfolio-categories?populate[portfolio_subcategories][populate][portfolio_cards][populate]=image")
      .then((response) => {
        setData(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error while categories", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
        
      });
  };

  
  useEffect(() => {
    fetchAllData();
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
    <>
      <Helmet>
    {/* For SEO  */}
    <title>Portfolio | Proven Success Across Industries & Projects</title>
    <meta
      name="description"
      content="See our success stories in action. Our portfolio showcases the projects we’ve delivered, helping businesses thrive with innovative solutions."
    />
    <meta name="keywords" content="" />
    {/* For Social Media */}
    <meta property="og:title" content="Portfolio | Proven Success Across Industries & Projects" />
    <meta property="og:description" content="See our success stories in action. Our portfolio showcases the projects we’ve delivered, helping businesses thrive with innovative solutions." />
    <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
    <meta property="og:keywords" content="" />
    {/* canonical */}
    <link rel="canonical" href="https://altumindglobal.com/portfolio" />
  </Helmet>
   
    <div className="font-raleway w-full flex flex-col gap-9 overflow-x-auto">
      {/* <div className="banner w-full h-[280px] flex text-center p-3 flex-col justify-center items-center gap-4 bg-[#F3F9FF]">
        <p className="custom-gradient-text">
        Success Stories 
        </p>
        <p className="leading-7 text-lg">
        Discover Inspiring Client Stories<br/> that Fuel Innovation 
        </p>
      </div> */}

<div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse justify-between items-center gap-y-10 font-raleway px-4 md:px-10 lg:px-28'>
      
      <div className="max-md:px-5 space-y-3">
     <p className=' custom-gradient-text mx-0  py-2'>
     Success Stories 
     </p>
     <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'>Discover Inspiring Client Stories that Fuel Innovation</p>
     </div>
  
     <div>
       <img className="lg:h-[260px] h-[230px] mx-auto" src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Portfolio_1ceb081916.svg" alt="Two people collaborate at a table with a tablet, papers, a cup, and a laptop, framed by a red and blue decorative border." />
     </div>
   </div>

      <div className="w-full flex flex-col gap-4 justify-start items-center p-3">
        <div className="w-full flex justify-evenly flex-wrap gap-4 items-center">
          {data.map((category) => (
            <button
              key={"category" + category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubcategory("All");
              }}
              className={`w-[280px] h-[60px] border border-gray-300 rounded-md flex justify-center cursor-pointer items-center group`}
            >
              <p
                className={`text-base font-semibold group-hover:text-[#E42D38] ${
                  activeCategory === category?.id ? "text-[#E42D38]" : ""
                }`}
              >
                {category.attributes.title}
              </p>
            </button>
          ))}
        </div>
        <div className="lg:flex justify-evenly p-4 items-center  w-full overflow-x-auto no-scrollbar">
          <div className="w-full min-w-screen flex gap-8 justify-evenly items-center p-3">
            {data
              .find((category) => category.id === activeCategory)
              ?.attributes.portfolio_subcategories.data.map((subcategory) => (
                <button
                  key={activeCategory + "subcategory" + subcategory.id}
                  onClick={() =>
                    setActiveSubcategory(subcategory.attributes.title)
                  }
                  className={`border-b-[3px] py-3 ${
                    subcategory.attributes.title === activeSubcategory
                      ? "border-secondary font-bold "
                      : "border-transparent font-medium"
                  }
              
              `}
                >
                  <p className="text-nowrap text-center font-mont cursor-pointer text-sm font-medium">
                    {subcategory.attributes.title}
                  </p>
                </button>
              ))}
          </div>
        </div>
        {/* <div className="w-full flex justify-center items-center px-3 py-2 lg:hidden">
          <select
            name="subcat-dd"
            id="subcat-dd"
            value={activeSubcategory}
            onChange={(e) => setActiveSubcategory(e.target.value)}
            className="border rounded-md border-gray-400 text-sm px-3 p-2 w-[280px] h-[60px] cursor-pointer"
          >
            {data
              .find((category) => category.id === activeCategory)
              ?.attributes.portfolio_subcategories.data.map((subcategory) => (
                <option
                  value={subcategory.attributes.title}
                  key={"subcat_option" + subcategory.attributes.title}
                  className=""
                >
                  <p className="truncate">{subcategory.attributes.title}</p>
                </option>
              ))}
          </select>
        </div> */}
      </div>
      <div className="w-full flex lg:flex-row flex-col flex-wrap items-center justify-center gap-8 lg:px-12 px-4 md:px-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={blog.id} className="blog-card">
              {/* <img
                src={blog.attributes.image.data.attributes.url}
                alt={blog.attributes.title}
              />
              <h3>{blog.attributes.title}</h3>
              <p>{blog.attributes.tag}</p> */}
              <div
                className="w-[350px] flex p-2 flex-col justify-start items-start gap-2"
                key={index + "project"}
              >
                <img
                  src={blog.attributes.image.data.attributes.url}
                  alt="random-work"
                  width="100%"
                  height="100%"
                  className="w-[350px] h-[260px] object-fit"
                />
                <p className="m-0 text-xs text-gray-600">
                  {blog.attributes.tag}
                </p>
                <p className="m-0 font-medium">{blog.attributes.title}</p>
                <Link
                  className="m-0 cursor-pointer underline text-sm flex gap-1 items-center group"
                  to={
                    `/portfolio/` +
                    blog.attributes.title.toLowerCase()?.replace(" ", "-")
                  }
                >
                  <span>Read Article</span>
                  <span>
                    <svg
                      className="w-4 h-4 text-gray-800 group-hover:translate-x-3 transition-all duration-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
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
                  </span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No stories available for this category.</p>
        )}
      </div>
      {/* <div className="w-full justify-center items-center flex h-[140px]">
        <button
          disabled
          className="bg-[#213560] text-white w-[220px] h-[50px] disabled:bg-gray-400 cursor-not-allowed"
          onClick={() => alert("No more stories to load")}
        >
          Load More
        </button>
      </div> */}
      <div className="w-full mt-16">
        <LogoMarquee />
      </div>
      <SubscribeForm />
    </div>
    </>
  );
};

export default Portfolio;


/* <div className="w-full flex flex-col gap-4 justify-start items-center p-3">
        <div className="flex justify-evenly w-full p-4 items-center">
          {catgoriesData?.map((type, index) => {
            return (
              <div
                className="w-[280px] h-[60px] border border-gray-300 rounded-md flex justify-center cursor-pointer items-center group"
                key={type?.attributes?.title + index}
                onClick={() => changeSector(type?.id)}
              >
                <p
                  className={`text-base font-semibold group-hover:text-[#E42D38] ${
                    selectedSector === type?.id ? "text-[#E42D38]" : ""
                  }`}
                >
                  {type?.attributes?.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-evenly w-full p-4 items-center h-[95px]">
          {tagData?.map((tag, index) => {
            return (
              <p
                className="max-w-[160px] text-wrap text-center hover:underline font-mont cursor-pointer text-sm font-medium"
                key={index}
              >
                {tag?.attributes?.title}
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 p-3 justify-center items-center">
          {projectsArray?.map((_, index) => {
            return (
              <div
                className="w-[350px] flex p-2 flex-col justify-start items-start gap-2"
                key={index + "project"}
              >
                <img
                  src="https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp"
                  alt="random-work"
                  width="100%"
                  height="100%"
                  className="w-[350px] h-[200px] object-fit"
                />
                <p className="m-0 text-xs">Project tags here</p>
                <p className="m-0 font-medium">Project Name here</p>
                <p className="m-0 cursor-pointer hover:underline text-sm flex gap-1 items-center">
                  <span>Read Article</span>
                  <span>
                    <svg
                      className="w-4 h-4 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
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
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full justify-center items-center flex h-[140px]">
          <button className="bg-[#213560] text-white w-[220px] h-[50px]">
            Load More
          </button>
        </div>
      </div> */