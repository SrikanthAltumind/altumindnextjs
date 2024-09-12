import React, { useEffect, useState } from "react";
import { gradientStyle } from "../ReactFunctions";
import axios from "axios";
import LogoMarquee from "../Components/common-components/LogoMarquee";

const Portfolio = () => {
  const [data, setData] = useState([])
  const categoriesUrl = `${
    import.meta.env.VITE_APP_API_URL
  }api/portfolio-categories?populate=*`;
  const [catgoriesData, setCatgoriesData] = useState([]);
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
  const [tagData, setTagData] = useState(portData?.[0]?.tags);
  const [selectedSector, setSelectedSector] = useState("By Industry");
  const projectsArray = new Array(10).fill(null);
  const [activeCategory, setActiveCategory] = useState(1 || null);
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  const changeSector = (selectedValue) => {
    setSelectedSector(selectedValue);
    setTagData(
      catgoriesData?.find((e) => e?.id === selectedValue)?.attributes
        ?.portfolio_subcategories?.data
    );
  };

  const getCategories = () => {
    axios
      .get(categoriesUrl)
      .then((response) => {
        setCatgoriesData(response?.data?.data);
        setTagData(
          response?.data?.data[0]?.attributes?.portfolio_subcategories?.data
        );
      })
      .catch((error) => {
        console.log("error while categories", error);
      });
  };

  const getFilteredBlogs = () => {
    // Find the currently active category
    const activeCategoryData = data.find(
      (category) => category.id === activeCategory
    );

    if (!activeCategoryData) return [];

    // If "All" is selected, return all blogs from all subcategories within the active category

    
 
      // Start with an empty array for blogs
    // let allBlogs = [];
    
    const subcategoryData =
      activeCategoryData.attributes.portfolio_subcategories.data.find(
        (subcategory) => subcategory.attributes.title === activeSubcategory
      );

      // Loop through each subcategory and collect all the blogs
      // allBlogs.push(activeCategoryData?.attributes?.portfolio_subcategories?.data?.find(subcat => subcat.title == "All")?.portfolio_cards)
        

      console.log(subcategoryData?.attributes.portfolio_cards.data); // Return the collected blogs
    

    // If a specific subcategory is selected, find that subcategory
    

    // Return the blogs for the selected subcategory or an empty array if none found
    return subcategoryData?.attributes.portfolio_cards.data || [];
  };
  const filteredBlogs = getFilteredBlogs();


  const fetchAllData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}`+"api/portfolio-categories?populate[portfolio_subcategories][populate][portfolio_cards][populate]=image")
      .then((response) => {
        setData(response?.data?.data);
        // setTagData(
        //   response?.data?.data[0]?.attributes?.portfolio_subcategories?.data
        // );
      })
      .catch((error) => {
        console.log("error while categories", error);
      });
  };

  useEffect(() => {
    getCategories();
    fetchAllData()
  }, []);
  return (
    <div className="font-raleway w-full flex flex-col gap-9">
      <div className="banner w-full h-[280px] flex text-center p-3 flex-col justify-center items-center gap-4 bg-[#F3F9FF]">
        <p className="text-5xl font-extrabold text-[#02194a]">
          <span style={gradientStyle}>Success</span> Naratives
        </p>
        <p className="leading-7 text-lg">
          Discover inspiring client stories that fuel
          <br /> our transformational efforts.
        </p>
      </div>
      {/* <div className="w-full flex flex-col gap-4 justify-start items-center p-3">
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
      </div> */}
      <div className="w-full flex flex-col gap-4 justify-start items-center p-3">
        <div className="w-full flex justify-evenly items-center">
          {data.map((category) => (
            <button
              key={"category" + category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubcategory("All"); // Reset to "All" when changing category
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
        <div className="flex justify-evenly p-4 items-center h-[125px] w-full min-w-[1200px] overflow-x-auto">
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
                <p className="max-w-[160px] text-wrap text-center font-mont cursor-pointer text-sm font-medium">
                  {subcategory.attributes.title}
                </p>
              </button>
            ))}
        </div>
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
                <a
                  className="m-0 cursor-pointer underline text-sm flex gap-1 items-center group"
                  href={
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
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available for this category.</p>
        )}
      </div>
      <div className="w-full justify-center items-center flex h-[140px]">
        <button disabled className="bg-[#213560] text-white w-[220px] h-[50px] disabled:bg-gray-400 cursor-not-allowed" onClick={()=>alert("No more stories to load")}>
          Load More
        </button>
      </div>
      <div className="w-full mt-16">
        <LogoMarquee />
      </div>
    </div>
  );
};

export default Portfolio;
