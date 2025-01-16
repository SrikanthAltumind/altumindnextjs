import { useEffect, useState } from "react";
import { gradientStyle } from "../../ReactFunctions";
import { useLocation } from "react-router-dom";

const bfsi = {
  title: "bfsi",
  description:
    "From leading in open banking to advancing sustainable finance, we co-create tailored fintech solutions that elevate your institution to the forefront of the digital finance revolution. Leveraging data-driven insights, AI, and cloud-native architectures, we redefine customer experiences, optimize operational efficiencies, and foster continuous innovation, making us the partner of choice for future-ready, customer-centric fintech enterprises.",
  points: [
    "End-to-End Fintech Solutions",
    "Globally Compliant Systems",
    "Robust Fraud Prevention Mechanisms",
    "Proven Track Record",
    "Technical Expertise and Excellence",
    "User-Centric Approach",
  ],
  url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Values_that_matter_image_Compressify_io_05c32869f2.webp",
};

const healthcare = {
  title: "healthcare",
  description:
    "Experience the future of healthcare with our comprehensive digital transformation solutions. Utilizing Generative AI, cloud technologies, and Advanced app development, we provide intelligent automation and tailored patient experiences. Boost productivity with intelligent workflow optimization and integrated CRM systems, all designed with a user-centric focus. As Digital Health Innovators, we create a future-ready healthcare ecosystem that delivers exceptional outcomes.",
  points: [
    "Comprehensive Digital Healthcare Solutions",
    "Advanced Fraud Prevention Systems",
    "HIPAA-Compliant Health Ecosystem",
    "Cloud-Based Health Infrastructure",
    "AI-Driven Interoperability",
    "Patient-Centric Digital Solutions",
  ],
  url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Value_that_matters_Compressify_io_44959e4c8e.webp",
};

const internet = {
  title: "internet",
  description:
    "Accelerate your transformation with our tailored solutions for the dynamic internet and SaaS landscape. Leverage AI-driven customer experience platforms for exceptional digital interactions, modernize infrastructure with cloud-centric strategies, and streamline operations through intelligent automation. Our agile services and integration capabilities across marketing, sales, and finance make it easy to adapt and grow. Propelling your business to new heights in the ever-evolving digital realm.",
  points: [
    "Advanced CX Platforms",
    "Cloud Transformation Solutions",
    "Intelligent Process Automation",
    "Agile Digital Transformation",
    "Enterprise Integration Platforms",
    "AI-Driven Marketing Automation",
  ],
  url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Value_that_matters_Compressify_io_f350ae5a06.webp",
};

const greenSustainability = {
  title: "greenSustainability",
  description:
    "Embrace a greener tomorrow with our sustainable GreenTech solutions, designed to minimize environmental impact, conserve resources, and promote sustainability featuring intuitive eco-conscious UX/UI design and advanced cloud sustainability platforms. Monitor and optimize resource utilization, mitigate carbon footprints, and streamline eco-friendly supply chain operations. Harness the power of data with AI, ML, and powerful visualization with Power BI to lead the way of a greener future.",
  points: [
    "Seasoned Greentech Solution Expert",
    "AI/ML-Powered Resource Utilization",
    "Renewable Energy Management Solutions",
    "Advanced Cloud Sustainability Platforms",
    "Environmental Policy Compliant",
  ],
  url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Value_that_matters_Compressify_io_9610c53bb8.webp",
};

const edtech = {
  title: "edtech",
  description:
    "Experts in crafting transformative digital learning experiences, we drive the EdTech industry forward. Our comprehensive offerings in web and mobile development, digital commerce, and LCMS deliver feature-rich learning experiences with AI personalization, gamification, seamless payments, chatbots, and robust analytics. With our technical prowess and deep EdTech expertise, we became trusted partners for educational institutions and companies leading the future of digital education.",
  points: [
    "Learner-centric Solutions",
    "AI-Powered Learning Platforms",
    "Immersive VR/AR Experiences",
    "Data-Driven Learning Analytics",
    "Customizable LMS Solutions",
    "Interactive E-Learning Content",
  ],
  url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Value_that_matters_Compressify_io_9c29249843.webp",
};

const digitalEcommerce = {
  title: "digitalEcommerce",
  description:
    "Altumind's Digital Commerce Practice delivers transformative end-to-end services that empower enterprises to seamlessly engage, transact, and deliver exceptional omnichannel experiences in today's dynamic landscape. Our comprehensive offerings integrate hyper-personalized experiences, omnichannel solutions, next-gen technologies like AI and chatbots, smart supply chains, marketing automation, UI/UX design, mobile apps, cloud solutions, ERP integration, and digital marketing strategies – ensuring exceptional customer engagement and rapidly adapting to evolving demands.",
  points: [
    "Digital Application Development",
    "Seamless Cloud Transformation",
    "Robust Partner Ecosystem",
    "Process Orchestration",
    "Data-Driven CX Analytics",
  ],
  url: "https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Value_that_Matters_Compressify_io_266e82d184.webp",
};

const ValueThatMatters = () => {

  const [data, setData] = useState([]);

  const location = useLocation();

  const fetchData = () => {
    if (location.pathname === "/industries/bfsi-fintech") setData(bfsi);
    else if (location.pathname === "/industries/healthcare") setData(healthcare);
    else if (location.pathname === "/industries/edtech") setData(edtech);
    else if (location.pathname === "/industries/internet-saas") setData(internet);
    else if (location.pathname === "/industries/digital-commerce") setData(digitalEcommerce);
    else if (location.pathname === "/industries/green-sustainability") setData(greenSustainability);
  }

  
  useEffect(() => {
    fetchData();
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col items-center justify-center font-raleway py-6 gap-5">
      <div>
        <p className="custom-gradient-text">
          Value That Matters
        </p>
      </div>
      {/* <div className="lg:w-[90%] w-full flex md:flex-row flex-col items-center p-3 gap-2 md:h-[450px] justify-between"> */}
        <div className="lg:w-[90%] w-full flex lg:flex-row flex-col items-center p-3 gap-2 justify-between">
        <div className="">
          <img
            src={data?.url}
            alt="healthcare-img"
            height="100%"
            width="100%"
            className="object-contain md:h-[400px] h-[200px] w-[300px] md:w-[500px]"
          />
        </div>
        {/* <div className="md:w-[60%] w-full h-full py-3 px-2 gap-8 flex flex-col"> */}
        <div className="lg:w-[60%] w-full h-full py-3 px-2 gap-8 flex flex-col">
          <div className="flex flex-col justify-start items-start">
            <p className="dark:text-white text-sm leading-relaxed">{data?.description}</p>
          </div>
          <div className="w-full flex flex-wrap gap-8 justify-between mt-4">
            {data?.points?.map((content, index) => {
              return (
                <div
                  // className="flex gap-2 justify-start items-center w-[45%] dark:text-white"
                  className="flex gap-2 justify-start items-center w-full sm:w-[45%] dark:text-white"
                  key={content + index}
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

                  <p className="text-wrap font-semibold text-xs">{content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueThatMatters;
