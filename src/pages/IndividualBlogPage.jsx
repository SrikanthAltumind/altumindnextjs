import React, { useEffect, useState } from "react";
import AltumindLogo from "../assets/altumind_logo.png";
import LoaderSpinner from "../Components/common-components/LoaderSpinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { customRenderers } from "../ReactFunctions";

const IndividualBlogPage = () => {
    const [blogData, setBlogData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    
    

  const getData = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/blog-main-contents/${id}?populate=*`
      )
      .then((response) => {
        setBlogData(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error while fetching the blog content");
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
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
    <div className="w-full flex flex-col gap-8 p-5">
      <div className="w-full flex lg:flex-row flex-col gap-5 relative font-raleway">
        <img
          src={blogData?.attributes?.bannerImage?.data?.attributes?.url}
          alt={blogData?.attributes?.title}
          srcSet={`
                    ${blogData?.attributes?.bannerImage?.data?.attributes?.formats?.large?.url} 1024w,
                    ${blogData?.attributes?.bannerImage?.data?.attributes?.formats?.medium?.url} 768w,
                    ${blogData?.attributes?.bannerImage?.data?.attributes?.formats?.small?.url} 480w
                `}
          sizes="
                    (min-width: 1024px) 1024px,
                    (min-width: 768px) 768px,
                    100vw
                "
          className="w-full object-fit h-full rounded-xl max-h-[700px]"
        />
        <div className="lg:w-full max-w-screen lg:absolute md:bottom-0 lg:p-5 bottom-5 rounded-xl space-y-6 lg:backdrop-blur-md">
          <p className="lg:w-[70%] lg:text-white lg:text-4xl md:text-2xl text-lg text-wrap font-semibold lg:font-bold">
            {blogData?.attributes?.title}
          </p>
          <p className="lg:text-white text-slate-600 lg:w-[70%]">
            {blogData?.attributes?.description}
          </p>
          <div className="flex gap-3 lg:flex-row flex-col lg:items-center items-start justify-start">
            <div className="flex gap-3 justify-start items-center flex-wrap">
              {blogData?.attributes?.otherDetails?.tags?.map((tag, index) => {
                return (
                  <p
                    className="lg:min-w-[100px] min-w-[60px] px-3 py-1 border lg:border-white border-gray-400 font-medium lg:text-white rounded-full text-center lg:text-base text-xs"
                    key={blogData?.attributes?.title + tag}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
            <div>
              <p className="lg:ml-4 lg:text-gray-100 lg:text-base text-xs font-medium">
                {blogData?.attributes?.otherDetails?.date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[95%] mx-auto relative flex flex-col lg:flex-row gap-10 justify-between">
        <div className="lg:w-[70%] w-full font-raleway">
          <Markdown className="markdown" components={customRenderers}>
            {blogData?.attributes?.content}
          </Markdown>
        </div>
        <div className="w-full max-w-[750px] mx-auto lg:w-[28%] lg:max-w-[350px] sticky h-full top-[100px]">
          <div className="font-raleway flex flex-col sm:flex-row items-start gap-7 lg:flex-col">
            <div className="basis-[50%] max-sm:w-fit border-b-2 sm:border-0 lg:border-b-2 dark:border-b">
              <p className="xl:text-xl font-semibold">Written By</p>
              <div className="flex gap-3 items-center my-5">
                <div className="h-12 w-12 xl:h-14 xl:w-14 shrink-0 p-2 border-2 dark:border rounded-full flex items-center justify-center">
                  <img className="object-contain" src={AltumindLogo} />
                </div>
                <div>
                  <p className="font-medium xl:text-xl font-raleway">
                    Altumind
                  </p>
                  <p className="font-montserrat text-xs xl:text-sm">
                    Marketing Manager, Altumind Global
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[50%] w-full space-y-5">
              <p className="font-semibold xl:text-xl">
                Subscribe to our newsletter
              </p>
              <div className="w-full max-w-[310px] border-2 dark:border rounded-xl p-3 flex flex-col gap-3">
                <input
                  className="font-montserrat outline-primary bg-transparent font-medium border-2 dark:border rounded-md px-3 py-2 text-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-secondary font-montserrat font-medium text-sm text-white py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="space-y-10 dark:text-white">
    //   <div className="px-3 sm:px-5 py-3">
    //     <div
    //       className='relative rounded-xl text-white font-raleway p-4 sm:p-6 lg:p-16 xl:p-12 h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col justify-end'
    //     >
    //       <img
    //         src={blogData?.attributes?.bannerImage?.data?.attributes?.url}
    //         alt={blogData?.attributes?.title}
    //         srcSet="
    //                 https://alt-digital-cms.s3.ap-south-1.amazonaws.com/medium_Banner_Compressify_io_7829692dc1.webp 1024w,
    //                 https://example.com/image-medium.jpg 768w,
    //                 https://example.com/image-small.jpg 480w
    //             "
    //         sizes="
    //                 (min-width: 1024px) 1024px,
    //                 (min-width: 768px) 768px,
    //                 100vw
    //             "
    //         className="w-full object-cover h-full rounded-xl"
    //       />
    //       {/* <img
    //         className="rounded-xl absolute -z-10 left-0 bottom-0 w-full h-full object-cover"
    //         src={bannerImg}
    //       /> */}
    //       <div className="space-y-4 lg:max-w-[75%]">
    //         <p className="text-xl md:text-3xl font-semibold">
    //           How AI is Transforming Design: A New Era of Creativity and
    //           Innovation
    //         </p>
    //         <p className="text-[13px] md:text-base">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //         <div className="text-xs lg:text-base flex items-center flex-wrap gap-5">
    //           {["Design", "AI"].map((tag) => (
    //             <p
    //               key={tag}
    //               className="min-w-[100px] px-3 py-1 border border-white rounded-full"
    //             >
    //               {tag}
    //             </p>
    //           ))}
    //           <p className="ml-5">15th August 2024</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[90%] lg:w-[95%] mx-auto relative flex flex-col lg:flex-row gap-y-5 justify-between">
    //     <div className="lg:w-[70%]">
    //       <p></p>
    //     </div>
    //     <div className="w-full max-w-[750px] mx-auto lg:w-[28%] lg:max-w-[350px]  sticky h-full top-[100px]">
    //       <div className="font-raleway flex flex-col sm:flex-row items-start gap-7 lg:flex-col">
    //         <div className="basis-[50%] max-sm:w-fit border-b-2 sm:border-0 lg:border-b-2 dark:border-b">
    //           <p className="xl:text-xl font-semibold">Written By</p>
    //           <div className="flex gap-3 items-center my-5">
    //             <div className="h-12 w-12 xl:h-14 xl:w-14 shrink-0 p-2 border-2 dark:border rounded-full flex items-center justify-center">
    //               <img className="object-contain" src={AltumindLogo} />
    //             </div>
    //             <div>
    //               <p className="font-medium xl:text-xl font-raleway">
    //                 Altumind
    //               </p>
    //               <p className="font-montserrat text-xs xl:text-sm">
    //                 Marketing Manager, Altumind Global
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="basis-[50%] w-full space-y-5">
    //           <p className="font-semibold xl:text-xl">
    //             Subscribe to our newsletter
    //           </p>
    //           <div className="w-full max-w-[310px] border-2 dark:border rounded-xl p-3 flex flex-col gap-3">
    //             <input
    //               className="font-montserrat outline-primary bg-transparent font-medium border-2 dark:border rounded-md px-3 py-2 text-sm"
    //               type="email"
    //               placeholder="Enter your email"
    //             />
    //             <button className="bg-secondary font-montserrat font-medium text-sm text-white py-2 rounded-md">
    //               Subscribe
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default IndividualBlogPage;
