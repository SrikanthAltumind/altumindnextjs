import React, { useState } from "react";
import Banner from "../Components/common-components/Banner";

const BlogCard = () => {
  return (
    <div className="w-[360px] flex flex-col h-[420px] shadow-lg">
      <div className="w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QJGQJ4Sud5OORHqkPyoJGQ0B8QldOI3mtQ&s"
          alt=""
          className="h-[210px] w-full object-fit"
        />
      </div>
      <div className="p-3 font-raleway flex flex-col justify-between items-start h-[210px]">
        <div className="flex flex-col gap-3">
          <p className=" text-gray-400 text-sm">UX, Design, AI</p>
          <p className="w-full font-medium text-lg">
            Breaking Down 5 UX Design Myths Plaguing Financial Services
          </p>
        </div>
        <div>
          <p>30 July, 2024</p>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const filters = [
    "All",
    "Design",
    "Development",
    "Data Analytics",
    "AI",
    "Digital Marketing",
    "UX/UI",
    ];
    
    const [selectedTab, setSelectedTab] = useState(filters[0])
  return (
    <div className="w-full flex flex-col gap-8 py-4 items-center justify-center">
      <section className="w-full">
        <Banner />
        <div className="w-full md:h-[70px] p-3 gap-4 flex justify-evenly items-center bg-[#EAF1FF]  overflow-x-auto">
          {filters?.map((filter, index) => (
            <button
              key={"blog-filter-" + index}
              className={`pb-3 pt-4 sm:pt-6 sm:pb-4 px-2 sm:px-3 border-b-[3px] font-raleway sm:border-b-4 ${
                filter === selectedTab
                  ? "border-secondary font-bold "
                  : "border-transparent font-medium"
              } text-black text-xs sm:text-sm`}
              onClick={() => {
                setSelectedTab(filter);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>
      <section className="w-full p-6 flex flex-wrap gap-7 justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <BlogCard key={index} />
        ))}
      </section>
      <section className="w-full"></section>
      <section className="w-full"></section>
      <section className="w-full"></section>
      <section className="w-full"></section>
      <section className="w-full"></section>
    </div>
  );
};

export default Blogs;
