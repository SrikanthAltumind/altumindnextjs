import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const aiAndAutomationData = {
  caption: "Advanced AI & Automation Solutions",
  heading: "Accelerate Success with \n Next-Gen Business Solutions",
  data: [
    {
      id: 1,
      attributes: {
        title: "AI & Chatbot Solutions",
        description: `Experience the future of healthcare with our comprehensive digital
              transformation solutions. Utilizing Generative AI, cloud
              technologies, and Advanced app development, we provide intelligent
              automation and tailored patient experiences. Boost productivity`,
        pointsList: [
          { id: 1, content: "Content Marketing" },
          { id: 2, content: "Social Media Marketing" },
          { id: 3, content: "Email Marketing" },
          { id: 4, content: "Ecommerce Marketing" },
          { id: 5, content: "Performance Marketing" },
          { id: 6, content: "Marketing Automation" },
        ],
        CTA: "Explore AI Solutions",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Advance_AI_and_automation_solutions_Compressify_io_99b981da92.webp",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        title: "RPA Solutions",
        description: `Unleash the power of intelligent automation with our state of art Robotic Process Automation (RPA) solutions. From process discovery to ROI projection and managed services, we streamline your business for peak productivity. Seamlessly capture and automate workflows through user interfaces, documents, or images, breaking down silos and fostering collaboration between business and IT teams. Leveraging our strong partnerships with leading RPA Partnership and deep domain expertise, we'll elevate your operational efficiency to unprecedented levels.`,
        pointsList: [
          { id: 1, content: "RPA-driven Agile Delivery" },
          { id: 2, content: "Intelligent Automation Consulting" },
          { id: 3, content: "Workflow Automation Services" },
          { id: 4, content: "Industry-Specific RPA Solutions" },
          { id: 5, content: "Cognitive Automation Support" },
          { id: 6, content: "RPA Process Mining" },
        ],
        CTA: "Explore RPA Services",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/RPA_solutions_Compressify_io_365f07ffb9.webp",
            },
          },
        },
      },
    },
  ],
};
const digitalMarketingData = {
  caption: "Our Digital Marketing Services",
  heading: "Full Spectrum Digital\nEvolution of Your Brand",
  data: [
    {
      id: 1,
      attributes: {
        title: "Branding & Design",
        description:
          "Transform your brand's visual identity and captivate your audience. Our branding and design services go beyond aesthetics to create a cohesive, memorable brand experience that resonates with your target market.",
        subTitle: "We specialize in:",
        pointsList: [
          { id: 1, content: "Logos" },
          { id: 2, content: "Email Design & Illustrations" },
          { id: 3, content: "Motion & Creative Graphics" },
        ],
        subDescription:
          "Our Branding & design approach combines creativity with strategic thinking, ensuring your brand stands out in the digital landscape while effectively communicating your values and message.",
        CTA: "Explore Branding Services",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Branding_and_design_Compressify_io_d11bc71888.webp",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        title: "Marketing Services",
        description:
          "Reach, engage, and convert your target audience across multiple digital channels. Our marketing services are tailored to your business goals, leveraging the latest trends and technologies to maximize your online presence.",
        subTitle: "Our comprehensive marketing solutions include:",
        pointsList: [
          { id: 1, content: "Content Marketing" },
          { id: 2, content: "Social Media Marketing" },
          { id: 3, content: "Email Marketing" },
          { id: 4, content: "Ecommerce Marketing" },
          { id: 5, content: "Performance Marketing" },
          { id: 6, content: "Marketing Automation" },
        ],
        subDescription:
          "We craft integrated marketing strategies that work together to create a powerful, cohesive digital presence for your brand. ",
        CTA: "Discover Marketing Solutions",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Marketing_Services_Compressify_io_714e95291e.webp",
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        title: "Marketing Optimization",
        description:
          "Maximize the effectiveness of your digital marketing efforts with our optimization services. We use data-driven insights and industry best practices to refine your strategies, improve performance, and increase your return on investment.",
        subTitle: "Our optimization services cover:",
        pointsList: [
          { id: 1, content: "Search Engine Optimization (SEO)" },
          { id: 2, content: "ORM" },
          { id: 3, content: "App Store Optimization (ASO)" },
          { id: 4, content: "CRO" },
        ],
        subDescription:
          "Our team of experts continually analyzes and adjusts your marketing efforts to ensure you're always getting the best possible results in the ever-changing digital landscape.",
        CTA: "Optimize Your Marketing",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Marketing_optimization_Digital_marketing_16da877bb9.webp",
            },
          },
        },
      },
    },
  ],
};

// const

const cloudServicesData = {
  caption: "Cloud Solutions",
  heading: "Powering Business with Smart Cloud Solutions",
  data: [
    {
      id: 1,
      attributes: {
        title: "Cloud Migration Services",
        description:
          "Embrace agility with Altumind's Cloud Migration Services. We provide a tailored roadmap to navigate your enterprise's unique migration journey, streamlining complexities and ensuring a seamless transition of your workloads to the ideal cloud environment.",
        subTitle: "What we offer:",
        pointsList: [
          { id: 1, content: "Expert migration assessment & planning" },
          { id: 2, content: "Secure workload migration" },
          { id: 3, content: "Scalable Cloud Environments" },
          { id: 4, content: "Cloud optimization and management" },
        ],
        CTA: "Explore More",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Cloud_Migration_Services_Compressify_io_27a955fa6a.webp",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        title: "Cloud App Services",
        description:
          "Accelerate innovation and streamline operations with Altumind's comprehensive suite of cloud application services. We empower your business to leverage the full potential of the cloud, from development and deployment to management and scaling. ",
        subTitle: "What we offer:",
        pointsList: [
          { id: 1, content: "Cloud-Native Application Development " },
          { id: 2, content: "Legacy Application Modernization " },
          { id: 3, content: "Serverless & Microservices Architectures " },
          { id: 4, content: "API Development & Integration" },
          { id: 5, content: "DevOps & Automation" },
          { id: 6, content: "Application Performance Optimization" },
        ],
        CTA: "Explore More",
        url: "/contact",
        image: {
          data: {
            attributes: {
              url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Cloud_App_Services_Compressify_io_aa532cad3e.webp",
            },
          },
        },
      },
    },
  ],
};

const ValueSection = () => {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/services/ai-automation")
      setData(aiAndAutomationData);
    else if (location.pathname === "/services/digital-marketing")
      setData(digitalMarketingData);
    else if (location.pathname === "/services/cloud")
      setData(cloudServicesData);
  }, []);

  return (
    <div className="w-[90%] sm:max-w-[650px] lg:max-w-[1100px] mx-auto font-raleway dark:text-white space-y-20">
      <div className="text-center space-y-2">
        <p className="font-semibold dark:font-medium">{data?.caption}</p>
        <p className="text-transparent max-w-[420px] xl:max-w-[520px] mx-auto bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue font-extrabold text-3xl xl:text-4xl ">
          {data?.heading}
        </p>
      </div>
      <div className="space-y-36">
        {data?.data?.map((section) => (
          <div
            key={section.id}
            className=" w-full lg:flex items-center justify-between even:flex-row-reverse"
          >
            <div className="hidden lg:block basis-[35%] max-w-[380px]">
              <img
                src={section?.attributes?.image?.data?.attributes?.url}
                alt={section?.attributes?.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="basis-[60%] gap-8 flex flex-col">
              <div className="flex flex-col gap-4 max-lg:items-center">
                <p className="font-bold dark:font-semibold text-xl">
                  {section?.attributes?.title}
                </p>
                <div className="lg:hidden max-w-[320px]">
                  <img
                    src={section?.attributes?.image?.data?.attributes?.url}
                    alt={section?.attributes?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-montserrat font-medium dark:font-normal">
                  {section?.attributes?.description}
                </p>
                {/* <div className={`${section.id===2? 'custom-ul' : ''} markdown-styles space-y-3`}>
                  <Markdown >{section?.attributes?.description}</Markdown>
                  </div> */}
              </div>
              {section?.attributes?.subTitle && (
                <p className="font-raleway font-semibold">
                  {section?.attributes?.subTitle}
                </p>
              )}
              <div className="w-full mx-auto flex flex-col sm:flex-row flex-wrap gap-y-8 justify-between">
                {section?.attributes?.pointsList?.map((point) => {
                  return (
                    <div
                      className="w-full text-sm font-bold flex gap-2 items-center sm:w-[48%]"
                      key={point.id}
                    >
                      <svg
                        className="w-4 h-4 border-2 border-black dark:border-white rounded-sm"
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
                          strokeWidth="3"
                          d="M5 11.917 9.724 16.5 19 7.5"
                        />
                      </svg>

                      <p className="truncate">{point.content}</p>
                    </div>
                  );
                })}
              </div>
              {section?.attributes?.subDescription && (
                <p className="text-sm font-montserrat font-medium dark:font-normal">
                  {section?.attributes?.subDescription}
                </p>
              )}

              <Link
                to={section?.attributes?.url}
                className="group w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1"
              >
                {section?.attributes?.CTA}
                <svg
                  className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueSection;
