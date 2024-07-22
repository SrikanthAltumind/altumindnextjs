import React, { useEffect, useState } from "react";
import { gradientStyle } from "../ReactFunctions";
import axios from "axios";

const Portfolio = () => {
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

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="font-raleway w-full flex flex-col ">
      <div className="banner w-full h-[280px] flex text-center p-3 flex-col justify-center items-center gap-4 bg-[#F3F9FF]">
        <p className="text-5xl font-extrabold text-[#02194a]">
          <span style={gradientStyle}>Success</span> Naratives
        </p>
        <p className="leading-7 text-lg">
          Discover inspiring client stories that fuel
          <br /> our transformational efforts.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 justify-start items-center p-3">
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
                className="flex p-2 flex-col justify-start items-start gap-2"
                key={index + "project"}
              >
                <img
                  src="https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp"
                  alt="random-work"
                  width="100%"
                  height="100%"
                  className="w-[250px] h-[200px] object-contain"
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
      </div>
    </div>
  );
};

export default Portfolio;
