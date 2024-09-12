import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gradientStyle } from "../../ReactFunctions";
 
const services = {
  experience: {
    heading: "Turn Vision into Impactful Digital Experiences.",
    caption: "Start Your Experience Transformation Today ",
    linkText: "Get in Touch ",
    url:'/contact'
  },
  digitalMarketingServices: {
    heading: "Amplify Your Brand's Voice in the Digital Sphere",
    caption:
      "Build Brand Recognition as an Industry Leader and Increase Profitability",
    linkText: "Get Started",
    url: '/contact'
  },
  aiAutomation: {
    heading:
      "Shaping the Future of Intelligent Automation: Our Next-Gen AI & RPA Solutions Propel Your Business Forward. ",

    linkText: "Reach Out Today",
    url:'/contact'
  },
  qaTesting: {
    heading:
      "Elevate Quality Standards. Deliver Flawless Solution with Precision Testing and Robust Quality Assurance.",
    linkText: "Get Started",
    url:'/contact'
  },
  technologyEngineering: {
    heading:
      "Redefine What's Possible with Advanced Engineering. Build the Future with Scalable and Robust Solutions.",
    linkText: "Get Started",
    url: '/contact'
  },
  dataAnalytics: {
    heading: "Beyond Numbers: Your Data Tells a Story ",
    caption:
      "We Help You Listen, Understand, and Act. Covering All Angles of Your Business",
    linkText: "Get Started",
    url: '/contact'
  },
  managedOperations: {
    heading: "Empower Your Business: Expertise and Resilience on Demand",
    caption:
      "Streamline Operations, Enhance Communication, and Boost Agility with Our Managed Services",
    linkText: "Get Started",
    url: '/contact'
  },
  services: {
    heading: "Evolving Business for the ‘Now’ Era",
    caption:
      "Harness the power of integrated transformation for unparalleled growth with Altumind. ",
    linkText: "Get Started Today",
    url:'/contact'
  },
  digitalStrategy: {
    heading: "The Digital Differentiator Your Business Needs",
    caption:
      "We bring the skills, technology, and scale necessary to think and deliver big for your business.",
    linkText: "Get Started",
    url: '/contact'
  },
  cloudServices: {
    heading:
      "Build the foundations for success. Next-Gen Cloud Services for Agility, Scalability, and Success.",
    linkText: "Reach Out Today",
    url: '/contact'
  },
  MissionAndVision: {
    heading: "Driven by purpose, fueled by empathy",
    caption:
      "We blend technology, data, and creativity to craft solutions that resonate and deliver meaningful impact. If you're ready for purpose-driven innovation that transforms challenges into opportunities",
    linkText: "Connect with us Today",
    url:'/contact'
  },
  leadership: {
    heading:
      "Relentlessly pursuing a world that thrives for everyone. Be a Part of Change.",
    linkText: "Contact Us Today",
    url:'/contact'
  },
  sukhiba: {
    heading:
      "Unlock E-commerce Growth in Emerging Markets",
      caption:
      "User-Centric Design. Tailored Solutions. Measurable Results. ",
    linkText: "Contact Us Today",
    url: '/contact'
  },
  secpod: {
    heading:
      "Ready for a Website Makeover?",
      caption:
      "User-Centric Design. Tailored Solutions. Measurable Results. ",
    linkText: "Contact Us Today",
    url: '/contact'
  },
 enphase: {
    heading:
      "Ready to transform your business and make a positive impact?  ",
      caption:
      "Partner with Altumind and let's create innovative, user-centric solutions. ",
    linkText: "Contact Us Today",
    url: '/contact'
  },
  unitedFinance: {
    heading:
      "Outdated Systems Holding You Back? Let's Fix That",
      caption:
      "Revitalize Your Web Presence with Altumind.",
    linkText: "Start with a Free Consultation!",
    url: '/contact'
  },
  // sukhiba: {
  //   heading: "Unlock E-commerce Growth in Emerging Markets",
  //   caption: "User-Centric Design. Tailored Solutions. Measurable Results.",
  //   linkText: "Contact Us Today",
  // },
  // secpod: {
  //   heading: "Ready for a Website Makeover?",
  //   caption: "User-Centric Design. Tailored Solutions. Measurable Results.",
  //   linkText: "Contact Us Today",
  // },
  // enphase: {
  //   heading: "Ready to transform your business and make a positive impact?",
  //   caption:
  //     "Partner with Altumind and let's create innovative, user-centric solutions.",
  //   linkText: "Contact Us Today",
  // },
  // unitedFinance: {
  //   heading: "Outdated Systems Holding You Back? Let's Fix That",
  //   caption: "Revitalize Your Web Presence with Altumind.",
  //   linkText: "Start with a Free Consultation!",
  // },
};
 
 
const GetStarted = () => {
  const [data, setData] = useState("");
  const location = useLocation();
 
  useEffect(() => {
    if (location.pathname === "/services/experience-design") {
      setData(services.experience);
    } else if (location.pathname === "/services/digital-marketing") {
      setData(services.digitalMarketingServices);
    } else if (location.pathname === "/services/ai-and-chat-bot") {
      setData(services.aiAutomation);
    } else if (
      location.pathname === "/services/quality-assurance-quality-control"
    ) {
      setData(services.qaTesting);
    } else if (location.pathname === "/services/technology-and-engineering") {
      setData(services.technologyEngineering);
    } else if (location.pathname === "/services/data-analytics") {
      setData(services.dataAnalytics);
    } else if (location.pathname === "/services/managed-operations") {
      setData(services.managedOperations);
    } else if (location.pathname === "/services") {
      setData(services.services);
    } else if (location.pathname === "/services/digital-strategy-consulting") {
      setData(services.digitalStrategy);
    } else if (location.pathname === "/services/cloud-automation") {
      setData(services.cloudServices);
    } else if (
      location.pathname === "/about/about-altumind/mission-and-vision"
    ) {
      setData(services.MissionAndVision);
    } else if (location.pathname === "/about/about-altumind/leadership") {
      setData(services.leadership);
    } else if (location.pathname === "/portfolio/sukhiba") {
      setData(services.sukhiba);
    } else if (location.pathname === "/portfolio/secpod") {
      setData(services.secpod);
    } else if (location.pathname === "/portfolio/enphase") {
      setData(services.enphase);
    } else if (location.pathname === "/portfolio/united-finance") {
      setData(services.unitedFinance);
    }
  }, [location.pathname]);
 
 
 
  return (
    <div className="bg-[#EAF1FF] min-h-[280px] w-full flex  flex-col  justify-center  dark:bg-[#1F3257] pr-2 py-10">
      <div className="ml-[10%]  md:ml-[15%] flex flex-col gap-8  font-raleway dark:text-white">
        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold max-w-[500px]">
          {data?.heading}
        </p>
        {data?.caption && (
          <p className="font-medium max-w-[60%]">{data?.caption}</p>
        )}

        <a
          href={data?.url}
          className="group w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1"
        >
          {data?.linkText}
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
        </a>
      </div>
    </div>
  );
};
 
export default GetStarted;
 
 