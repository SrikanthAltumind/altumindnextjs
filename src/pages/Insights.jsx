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
      <div className="w-full bg-[#F3F9FF] p-3 flex flex-col justify-center items-center gap-4 md:min-h-[320px] py-6">
        <p className="font-extrabold text-3xl">
          Beyond <span style={gradientStyle}>the Byte</span>
        </p>
        <p>
          Explore our insights for ROI-driven strategies, industry-redefining
          <br />
          perspectives, and future disruptions to propel your business forward.
        </p>
      </div>
      <div className="w-full flex justify-center items-start gap-5 p-3 py-6">
        <div className="w-50% flex justify-center items-center rounded-md">
          <img
            src="https://blogging.co.uk/wp-content/uploads/2024/07/AI-Prompts-for-Bloggers-1000x640.jpg"
            alt=""
            height="100%"
            width="100%"
            className="h-[400px] w-[530px] object-fill rounded-md"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-start items-start gap-6 px-5">
          <p className="font-medium text-xs">Blog</p>
          <p className="text-xl font-semibold">
            Ultimate Guide to App Store Optimization:
            <br />
            Strategies to Increase Downloads
          </p>
          <p>
            Master App Store Optimization (ASO) to boost your app's visibility,
            <br />
            downloads, and user engagement. Learn essential strategies for Apple
            <br />
            App Store and Google Play success in 2024.
          </p>
          <a
            href="/blog/3"
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
      <div className="flex w-full justify-center items-center p-5 h-[200px]">
        <p className="text-4xl font-extrabold" style={gradientStyle}>
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
