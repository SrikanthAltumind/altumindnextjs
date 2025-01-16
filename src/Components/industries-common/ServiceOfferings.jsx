import { useEffect, useState } from "react";
import { gradientStyle } from "../../ReactFunctions";
import Accordion from "../common-components/Accordion";
import { useLocation } from "react-router-dom";
import LoaderSpinner from "../common-components/LoaderSpinner";
import axios from "axios";

const bfsi = {
  heading: "Fueling the Next Wave of Innovation",
  description:
    "Driving Fintech Transformation with Advanced and Secure Solutions.",
  points: [
    {
      id: 1,
      attributes: {
        title: "Digital Banking & Financial Solutions ",
        description:
          "Revolutionize your financial services with our custom fintech applications, mobile banking apps, wealth management tools, accounting management software, crowdfunding platforms, digital wallets, and P2P lending solutions.",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Advance AI and Data-Driven Insights",
        description:
          "Leverage AI-driven Data Insights, Predictive Analytics for Financial Forecasting, AI-driven Customer Service, Fraud Detection and Prevention, Conversational AI, Chatbots, and Voice Assistant Integration. ",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud and Infrastructure Management",
        description:
          "Embrace the future with Cloud Infrastructure Management with AWS, Google Cloud, Azure, and Enterprise Application Integration. Automate your Fintech Digital Transformation journey and integrate Payment Gateways with ease.",
      },
    },
    {
      id: 4,
      attributes: {
        title: "User Experience and Interface Design ",
        description:
          "Explore interactive prototypes, wireframes, innovative digital-only bank development, and visionary neobank platform design, delivering the best Customer experiences for fintech mobile app solutions.",
      },
    },
    {
      id: 5,
      attributes: {
        title: "Technology and Engineering Solutions",
        description:
          "Experience the future of fintech with our Responsive Website Development, CMS, Progressive Web Apps, Mobile Development, and Enterprise Applications. Integrate seamlessly with Salesforce, Power BI, JIRA, and ServiceNow to streamline your operations.",
      },
    },
    {
      id: 6,
      attributes: {
        title: "Fintech Branding & Digital Marketing",
        description:
          "Crafting cohesive fintech brand identities, logos, visuals, and collaterals. Strategizing content, automating marketing, optimizing SEO, social media, and ecommerce.",
      },
    },
  ],
};

const edtech = {
  heading: "Shaping the Future of Education",
  description: "Redefining Learning Norms with our Innovative Edtech Solutions",
  points: [
    {
      id: 1,
      attributes: {
        title: "Digital EdTech Solutions",
        description:
          "Experience education anew with our Digital EdTech Solutions. Elevate your learning path with our LCMS, e-learning apps, and remote proctoring solutions, customized for personalized learning and efficient educational administration.",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Advance AI and Data-Driven Insights",
        description:
          "Leveraging predictive models, LMS enhancements, and AI-powered chatbots, our advanced solutions improve learning outcomes, optimize resources, and provide data-driven insights for educators and administrators alike.",
        
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud and Infrastructure Management ",
        description:
          "Tailored cloud and DevOps solutions for seamless integration of e-learning platforms, LMS, and educational resources with AWS, Google Cloud, and Azure.",
        
      },
    },
    {
      id: 4,
      attributes: {
        title: "User Experience & Design",
        description:
          "Designing exceptional user experiences with interactive prototypes, wireframes, and immersive platform designs focused on intuitive interfaces and engaging digital learning solutions. ",
        
      },
    },
    {
      id: 5,
      attributes: {
        title: "Technology and Engineering Solutions ",
        description:
          "Comprehensive suite of digital solutions, including teacher tools, parent-teacher platforms, virtual classrooms, online learning, assessments, and content libraries. ",
        
      },
    },
    {
      id: 6,
      attributes: {
        title: "Branding & Digital Marketing ",
        description:
          "Strategic branding and digital marketing services, encompassing brand identity, social media campaigns, and targeted advertising for your EdTech buisness growth.",
        
      },
    },
  ],
};

const healthcare = {
  heading: "Redefining Healthcare with Adaptive Solutions",
  description:
    "Adaptive Care for Evolving Healthcare Needs at Every Touchpoint.",
  points: [
    {
      id: 1,
      attributes: {
        title: "Digital Healthcare Solutions",
        description:
          "Enhance healthcare technology with our custom app development, telehealth platforms, EHR/IoMT integration, patient portals. Expertise in remote monitoring, HIE solutions, medical billing systems.",
        
      },
    },
    {
      id: 2,
      attributes: {
        title: "AI and Data-Driven Insights",
        description:
          "Leverage AI-driven insights, predictive analytics, fraud prevention, conversational AI, medical chatbots, and voice assistant integration for enhance healthcare services.",
        
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud and Infrastructure Management",
        description:
          "Streamline your digital transformation by embracing cloud infrastructure management with AWS, Google Cloud, and Azure for healthcare, seamlessly integrating EHR systems and payment gateways.",
        
      },
    },
    {
      id: 4,
      attributes: {
        title: "Patient Experience and Healthcare Interface Design",
        description:
          "Designing intuitive, interactive prototypes, telehealth platforms, and visionary patient portals for exceptional healthcare user experiences.",
        
      },
    },
    {
      id: 5,
      attributes: {
        title: "Healthcare Technology and Engineering Solutions",
        description:
          "Discover our responsive websites, CMS, progressive web apps, mobile apps, and enterprise healthcare applications. Seamlessly integrate EHRs, healthcare analytics, project management, and IT services.",
        
      },
    },
    {
      id: 6,
      attributes: {
        title: "Healthcare Branding & Digital Marketing",
        description:
          "Developing cohesive healthcare brand identities that resonate with patients, foster loyalty, and elevate your Healthcare company's stature.",
        
      },
    },
  ],
};

const internet = {
  heading: "Crafting Robust Digital Ecosystems for Unparalleled Growth",
  description:
    "Elevate your SaaS business with state-of-the-art services designed to create seamless, efficient, and innovative digital environments.",
  points: [
    {
      id: 1,
      attributes: {
        title: "Innovative SaaS Solutions",
        description:
          "Accelerate digital transformation with tailored SaaS products, CRM integrations, and scalable cloud-native applications driving efficiency and growth.",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Advanced AI and Data Analytics ",
        description:
          "Leverage AI-powered insights, predictive models, and machine learning to enable data-driven decision-making, optimize operations, and boost customer engagement.",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud Infrastructure & DevOps",
        description:
          "Seamless cloud migration and DevOps automation for high-performance, scalable SaaS platforms on AWS, Google Cloud, and Azure.",
      },
    },
    {
      id: 4,
      attributes: {
        title: "Exceptional UX/UI Design",
        description:
          "Craft captivating user experiences with intuitive interfaces, interactive prototypes, and user-centric platform designs maximizing satisfaction and retention.",
      },
    },
    {
      id: 5,
      attributes: {
        title: "Agile Engineering Excellence ",
        description:
          "Robust digital solutions including API development, microservices, mobile apps, secure payment gateways, delivered through agile methodologies.",
      },
    },
    {
      id: 6,
      attributes: {
        title: "SaaS Growth Marketing",
        description:
          "Strategic branding, SEO, content marketing, and targeted advertising to elevate your SaaS brand and acquire a wider audience. ",
      },
    },
  ],
};

const digitalEcommerce = {
  heading: "Scale Digital Agility with the Right Solution",
  description:
    "Driving Business Value & Sustainability through Technology and Human Innovation.",
  points: [
    {
      id: 1,
      attributes: {
        title: "Digital Commerce Solutions",
        description:
          "Maximize online sales with our omnichannel platform, optimize inventory and supply chain management, integrated payment gateways, and streamlined order fulfillment.",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Advanced AI and Data-Driven Insights",
        description:
          "Leverage AI-driven predictive analytics, customer segmentation models, and shopper behavior data to enable intelligent merchandising and personalized marketing strategies.",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud and Infrastructure Management",
        description:
          "Deploy high-performance, secure e-commerce platforms with our cloud-based infrastructure solutions, ensuring seamless scalability and robust payment processing.",
      },
    },
    {
      id: 4,
      attributes: {
        title: "Customer-Centric UX and Design",
        description:
          "Boost conversion rates with intuitive product discovery interfaces and mobile-first e-commerce designs that deliver engaging, customer-centric shopping experiences.",
      },
    },
    {
      id: 5,
      attributes: {
        title: "Technology and Engineering Solutions",
        description:
          "Drive online revenue growth with responsive websites, progressive web apps, and headless commerce systems tailored to your evolving retail technology needs.",
      },
    },
    {
      id: 6,
      attributes: {
        title: "Digital Marketing Services",
        description:
          "Fuel your e-commerce growth through our full-funnel digital marketing solutions, encompassing strategic SEO, branding, ROI-driven PPC, and much more.",
      },
    },
  ],
};

const greenSustainability = {
  heading: "Eco-Forward Solutions for more sustainable future",
  description:
    "Driving Business Value & Sustainability through Technology and Human Innovation.",
  points: [
    {
      id: 1,
      attributes: {
        title: "Digital GreenTech Solutions",
        description:
          "Embrace sustainability with our Resource Monitoring, Carbon Footprint, Eco Supply Chain, Green Product Lifecycle, Renewable Energy Management, and Sustainable Waste Solutions for a greener tomorrow.",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Advanced AI and Data-Driven Solutions",
        description:
          "Leverage AI-powered Predictive Analytics, Sustainable Optimization models, and actionable Environmental Data Insights to drive intelligent sustainability strategies.",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Cloud and Infrastructure Management",
        description:
          "Enable seamless Renewable Energy System Deployment, Smart Grid Integration, and provision Scalable Sustainability Infrastructure leveraging cloud computing prowess.",
      },
    },
    {
      id: 4,
      attributes: {
        title: "Eco-Centric UX and Design",
        description:
          "Craft user-centric experiences fostering Sustainable User Engagement through intuitive Eco-Solution Adoption Interfaces and Green Product Prototyping services.",
      },
    },
    {
      id: 5,
      attributes: {
        title: "Technology and Engineering Solutions",
        description:
          "Unlock a greener digital world through our eco-conscious Web Apps, Progressive Web Apps, and Custom Content Management Systems, tailored to your sustainable technology needs.",
      },
    },
    {
      id: 6,
      attributes: {
        title: "Digital Marketing solutions",
        description:
          "Nurture a thriving, planet-friendly digital presence and amplify your eco-conscious brand with our comprehensive digital marketing solutions.",
      },
    },
  ],
};

const ServiceOfferrings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  const fetchData = () => {
    if (location.pathname === "/industries/bfsi-fintech") setData(bfsi);
    else if (location.pathname === "/industries/healthcare")
      setData(healthcare);
    else if (location.pathname === "/industries/edtech") setData(edtech);
    else if (location.pathname === "/industries/internet-saas")
      setData(internet);
    else if (location.pathname === "/industries/digital-commerce")
      setData(digitalEcommerce);
    else if (location.pathname === "/industries/green-sustainability")
      setData(greenSustainability);  
}

  useEffect(() => {
    fetchData();
  }, [location.pathname]);

  return (
    <div className="w-full bg-[#EAF1FF] flex flex-col gap-4 py-6 font-raleway">
      <div className="py-2">
        <p
          className="custom-gradient-text py-2"
        >
          Service Offerings
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-2 items-start justify-between p-5">
        <div className="md:w-[30%] w-full justify-start h-full md:items-start items-center flex flex-col gap-4 p-3">
          <p className="font-semibold lg:text-3xl md:text-2xl text-xl py-2 md:max-w-[450px] text-center md:text-left">
            {data?.heading}
          </p>
          <p className="md:max-w-[450px] text-center md:text-left text-sm lg:text-base">
            {data?.description}
          </p>
          <a
            href="/services"
            className="text-[#DD5143] w-full flex gap-2 font-semibold group cursor-pointer underline md:justify-start justify-center items-center"
          >
            <span className="md:text-left text-sm lg:text-base">
              Explore All Services
            </span>
            <span className="group-hover:mx-2 transition-all duration-200">
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
          </a>
        </div>

        <div className="md:w-[60%] w-full flex flex-col gap-4">
          {data?.points?.map((service, index) => {
            return <Accordion content={service} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferrings;
