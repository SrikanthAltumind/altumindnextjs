import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Markdown from "react-markdown";

const obj = {
  id: 1,
  attributes: {
    title: "Innovative SaaS Solutions",
    description:
      "Accelerate digital transformation with tailored SaaS products, CRM integrations, and scalable cloud-native applications driving efficiency and growth.",
  },
};

const Accordion = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false)
  },[location.pathname])

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="max-w-[90%] lg:text-lg md:text-base text-sm font-semibold">
            {content?.attributes?.title ?? content?.attributes?.question}
          </h3>
          <span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        {/* <div className="px-4 py-2 text-sm">
          {content?.attributes?.description ?? content?.attributes?.answer}
          
        </div> */}
        <div className="px-4 py-2 flex flex-col gap-2 text-sm">
         
          <p> <Markdown className="markdown">{content?.attributes?.description ?? content?.attributes?.answer}</Markdown></p>  
       
          {content?.attributes?.cta && 
          <Link to={content?.attributes?.path} className="group text-secondary font-medium flex items-center gap-1 font-montserrat w-fit">
              <span className="group-hover:underline underline-offset-1">{content?.attributes?.cta}</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
          </Link>
          }
           
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
