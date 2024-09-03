import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
 
const services = {
  experience: {
    heading: "Turn Vision into Impactful Digital Experiences.",
    caption: "Start Your Experience Transformation Today ",
    linkText: "Get in Touch ",
  },
  digitalMarketingServices: {
    heading: "Amplify Your Brand's Voice in the Digital Sphere",
    caption:
      "Build Brand Recognition as an Industry Leader and Increase Profitability",
    linkText: "Get Started",
  },
  aiAutomation: {
    heading:
      "Shaping the Future of Intelligent Automation: Our Next-Gen AI & RPA Solutions Propel Your Business Forward. ",
 
    linkText: "Reach Out Today",
  },
  qaTesting: {
    heading:
      "Elevate Quality Standards. Deliver Flawless Solution with Precision Testing and Robust Quality Assurance.",
    linkText: "Get Started",
  },
  technologyEngineering: {
    heading:
      "Redefine What's Possible with Advanced Engineering. Build the Future with Scalable and Robust Solutions.",
    linkText: "Get Started",
  },
  dataAnalytics: {
    heading:
      "Beyond Numbers: Your Data Tells a Story ",
      caption:
      "We Help You Listen, Understand, and Act. Covering All Angles of Your Business",
    linkText: "Get Started",
  },
  managedOperations: {
    heading:
      "Empower Your Business: Expertise and Resilience on Demand",
      caption:
      "Streamline Operations, Enhance Communication, and Boost Agility with Our Managed Services",
    linkText: "Get Started",
  },
  services: {
    heading:
      "Evolving Business for the ‘Now’ Era",
      caption:
      "Harness the power of integrated transformation for unparalleled growth with Altumind. ",
    linkText: "Get Started Today",
  },
  digitalStrategy: {
    heading:
      "The Digital Differentiator Your Business Needs",
      caption:
      "We bring the skills, technology, and scale necessary to think and deliver big for your business.",
    linkText: "Get Started",
  },
  cloudServices: {
    heading:
      "Build the foundations for success. Next-Gen Cloud Services for Agility, Scalability, and Success.",
    linkText: "Reach Out Today",
  },
  MissionAndVision: {
    heading:
      "Driven by purpose, fueled by empathy",
      caption:
      "We blend technology, data, and creativity to craft solutions that resonate and deliver meaningful impact. If you're ready for purpose-driven innovation that transforms challenges into opportunities",
    linkText: "Connect with us Today",
  },
  leadership: {
    heading:
      "Relentlessly pursuing a world that thrives for everyone. Be a Part of Change.",
    linkText: "Contact Us Today",
  },
};
 
 
const GetStarted = () => {
  const [data, setData] = useState("");
  const location = useLocation();
 
  useEffect(() => {
   
    if (location.pathname === "/services/experience-design") {
      setData(services.experience);
    }
    else if (location.pathname === "/services/digital-marketing") {
      setData(services.digitalMarketingServices);
    }
    else if (location.pathname === "/services/ai-automation") {
      setData(services.aiAutomation);
    }
    else if (location.pathname === "/services/qa-testing" ) {
       setData(services.qaTesting);
    }
    else if (location.pathname === "/services/technology-engineering" ) {
      setData(services.technologyEngineering);
   }
   else if (location.pathname === "/services/data-analytics" ) {
    setData(services.dataAnalytics);
   }
    else if (location.pathname === "/services/managed-operations" ) {
      setData(services.managedOperations);
 }
 else if (location.pathname === "/services" ) {
  setData(services.services);
}
else if (location.pathname === "/services/digital-strategy-consulting" ) {
  setData(services.digitalStrategy);
}
else if (location.pathname === "/services/cloud-services" ) {
  setData(services.cloudServices);
}
else if (location.pathname === "/mission-and-vision" ) {
  setData(services.MissionAndVision);
}
else if (location.pathname === "/leadership" ) {
  setData(services.leadership);
}
 
  }, [location.pathname]);
 
 
 
  return (
        <div className="bg-LightBlue min-h-[280px]  flex  flex-col  justify-center  dark:bg-[#1F3257] pr-2">
          <div className="ml-[10%]  md:ml-[15%] space-y-5  font-raleway dark:text-white">
            <h3 className=" font-bold text-2xl lg:text-3xl max-w-[500px] ">
              {data?.heading}
            </h3>
            {data?.caption && <p className="font-medium max-w-[600px]">{data?.caption}</p>}
 
            <a href = "#" className='group w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1'>
                  {data?.linkText}
                    <svg className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </a>
          </div>
        </div>
  );
};
 
export default GetStarted;
 
 