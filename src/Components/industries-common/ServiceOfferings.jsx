import React from "react";
import { gradientStyle } from "../../ReactFunctions";
import { motion } from "framer-motion";
import Accordion from "../common-components/Accordion";

const ServiceOfferrings = () => {
  const offerings = [
    {
      id: 1,
      title: "Digital EdTech Solutions",
      content:
        "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, E learning apps, and Remote Proctoring Solutions, customized for personalized learning and efficient educational administration.",
    },
    {
      id: 2,
      title: "Advance AI and Data-Driven Insights",
      content:
        "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, E learning apps, and Remote Proctoring Solutions, customized for personalized learning and efficient educational administration.",
    },
    {
      id: 3,
      title: "Cloud and Infrastructure Management",
      content:
        "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, E learning apps, and Remote Proctoring Solutions, customized for personalized learning and efficient educational administration.",
    },
    {
      id: 4,
      title: "User Experience & Design",
      content:
        "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, E learning apps, and Remote Proctoring Solutions, customized for personalized learning and efficient educational administration.",
    },
    {
      id: 5,
      title: "Technology and Engineering Solutions",
      content:
        "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, E learning apps, and Remote Proctoring Solutions, customized for personalized learning and efficient educational administration.",
    },
    {
      id: 6,
      title: "Branding & Digital Marketing",
      content:
        "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, E learning apps, and Remote Proctoring Solutions, customized for personalized learning and efficient educational administration.",
    },
  ];
  return (
    <div className="w-full bg-[#EAF1FF] flex flex-col gap-4 pt-3 font-raleway">
      <div className="flex justify-center items-center w-full p-3">
        <p className="text-5xl font-extrabold" style={gradientStyle}>
          Service Offerings
        </p>
      </div>
      <div className="w-full flex gap-2 items-start justify-between p-5">
        <div className="w-[30%] justify-start h-full items-center flex flex-col gap-4 p-3">
          <p className="font-semibold text-3xl w-full py-2">
            Crafting Robust
            <br />
            Digital Ecosystems
            <br />
            for Unparalleled
            <br />
            Growth
          </p>
          <p>
            Elevate your SaaS business with state-of-the-art
            <br />
            services designed to create seamless,
            <br />
            efficient, and innovative digital environments.
          </p>
          <p className="text-[#DD5143] w-full flex gap-2 font-semibold group cursor-pointer hover:underline items-center">
            <span>Explore All Services</span>
            <span className="group-hover:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>

        <div className="w-[60%] flex flex-col gap-4">
          {offerings?.map((service, index) => {
            return <Accordion content={service} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferrings;
