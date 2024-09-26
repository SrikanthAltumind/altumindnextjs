import React, { useEffect, useState } from "react";
import { gradientStyle } from "../ReactFunctions";
import Dropdown from "../Components/common-components/Dropdown";
import axios from "axios";
import LoaderSpinner from "../Components/common-components/LoaderSpinner";
import InsightsBlogs from "../Components/common-components/InsightsBlogs";
import SubscribeForm from "../Components/common-components/SubscribeForm";

const Insights = () => {
  const [topicFilters, setTopicFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [prodServiceFilters, setProdServiceFilters] = useState([]);
  const [tagsFilters, setTagsFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selections, setSelections] = useState({
    Type: "",
    "Product & Services": "",
    Topics: "",
    Tags: "",
  });

  const handleSelectionChange = (ddName, selectedItem) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [ddName]: selectedItem,
    }));
  };

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [topics, types, prodServices, tags] = await Promise.all([
          axios.get(`${import.meta.env.VITE_APP_API_URL}api/insight-topics`),
          axios.get(`${import.meta.env.VITE_APP_API_URL}api/insight-types`),
          axios.get(
            `${
              import.meta.env.VITE_APP_API_URL
            }api/insight-product-and-services`
          ),
          axios.get(`${import.meta.env.VITE_APP_API_URL}api/insight-tags`),
        ]);

        setTopicFilters(topics.data?.data);
        setTypeFilters(types.data?.data);
        setProdServiceFilters(prodServices.data?.data);
        setTagsFilters(tags.data?.data);
      } catch (error) {
        console.error("Error fetching filters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  return (
    <div className="w-full flex flex-col font-raleway">
      <div className="w-full bg-[#F3F9FF] p-3 flex flex-col justify-center items-center gap-4 md:min-h-[320px] py-12 text-center">
        <p className="font-extrabold text-3xl">
          Beyond <span style={gradientStyle}>the Byte</span>
        </p>
        <p className="md:text-base text-sm">
          Explore our insights for ROI-driven strategies, industry-redefining
          <br />
          perspectives, and future disruptions to propel your business forward.
        </p>
      </div>
      {/* <div className="flex w-full justify-center items-center p-5 lg:h-[200px]">
        <p
          className="lg:text-4xl text-2xl text-center font-extrabold"
          style={gradientStyle}
        >
          Featured Blog
        </p>
      </div> */}
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[70%] flex lg:flex-row flex-col md:justify-center md:items-start justify-center items-center lg:gap-5 gap-8 p-3 py-6">
          <div className="md:w-40% w-full flex justify-center items-center rounded-md ">
            <img
              src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/1_Compressify_io_d1ef9f5071.webp"
              alt=""
              height="100%"
              width="100%"
              className="lg:h-[400px] lg:w-[530px] max-w-[530px] object-contain rounded-md max-h-[380px]"
            />
            {/* md:h-[300px] sm:h-[300px] md:w-[420px] sm-[360px] w-[300px] */}
          </div>
          <div className="md:w-[65%] lg:p-0 py-6 w-full flex flex-col lg:justify-start justify-center items-start gap-6 lg:px-5">
            <p className="font-bold text-sm">Featured Blog</p>
            <p className="text-xl font-semibold w-full">
              Ultimate Guide to App Store Optimization: Strategies to Increase
              Downloads
            </p>
            <p className="w-full text-sm lg:text-base leading-6">
              Master App Store Optimization (ASO) to boost your app's
              visibility, downloads, and user engagement. Learn essential
              strategies for Apple App Store and Google Play success in 2024.
            </p>
            <a
              href="insights/blog/4/ultimate-guide-to-app-store-optimization-strategies-to-increase-downloads"
              className="text-sm font-medium group flex items-center gap-2 cursor-pointer underline"
            >
              <span>Read Article</span>{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 group-hover:translate-x-3 duration-200"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full justify-start items-center p-5">
        <p className="font-semibold capitalize">Filter By</p>
      </div> */}
      {/* {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <div className="w-full flex justify-evenly gap-5 flex-wrap items-start relative p-5">
            <Dropdown
              data={topicFilters}
              ddName="Type"
              selection={selections.Type}
              onSelectionChange={handleSelectionChange}
            />
            <Dropdown
              data={typeFilters}
              ddName="Products & Services"
              selection={selections["Product & Services"]}
              onSelectionChange={handleSelectionChange}
            />
            <Dropdown
              data={prodServiceFilters}
              ddName="Topics"
              selection={selections.Topics}
              onSelectionChange={handleSelectionChange}
            />
            <Dropdown
              data={tagsFilters}
              ddName="Tags"
              selection={selections.Tags}
              onSelectionChange={handleSelectionChange}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <InsightsBlogs />
          </div>
        </div>
      )} */}
      <div className="flex w-full justify-center items-center p-5 lg:h-[200px]">
        <p
          className="lg:text-4xl text-2xl text-center font-extrabold"
          style={gradientStyle}
        >
          Innovations & Beyond
        </p>
      </div>
      <div className="w-full flex flex-col gap-8 items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <InsightsBlogs />
        </div>
      </div>
      <div className="mt-16">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Insights;
