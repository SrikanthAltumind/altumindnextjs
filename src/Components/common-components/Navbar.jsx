import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Altumind logo-01.webp";
import AltumindDark from "../../assets/AltumindDark.png";
// import ToggleTheme from "./ToggleTheme";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Layouts/AppLayout";

import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export const Navbardata = [
  {
    menu: "About",
    path: "/about",
    children: [
      {
        innerMenu: "About Altumind",
        path: "/about",
       
      },
         {
          innerMenu: "Mission and Vision",
            path: "/about/about-altumind/mission-and-vision",
          },
          {
            innerMenu: "Leadership",
            path: "/about/about-altumind/leadership",
           },
           {
             innerMenu: "Alliance",
             path: "/about/about-altumind/alliance",
           },
          {
            innerMenu: "Community Engagement",
            path: "/about/about-altumind/community-engagement",
           },
            // children: [
        //   {
        //     name: "Mission and Vision",
        //     path: "/about/about-altumind/mission-and-vision",
        //   },
        //   {
        //     name: "Leadership",
        //     path: "/about/about-altumind/leadership",
        //   },
        //   {
        //     name: "Alliance",
        //     path: "/about/about-altumind/alliance",
        //   },
        //   {
        //     name: "Community Engagement",
        //     path: "/about/about-altumind/community-engagement",
        //   },
        // ],
    ],
  },
  {
    menu: "Services",
    path: "/services",
    children: [
      {
        innerMenu: "Experience Design",
        path: "/services/experience-design",
        // children: [
        //   {
        //     name: "UI Design",
        //     // path: "/services/experience-design/ui-design",
        //     path: "/services/experience-design",
            
        //   },
        //   {
        //     name: "UX Design",
        //     // path: "/services/experience-design/ux-design",
        //     path: "/services/experience-design",
        //   },
        //   {
        //     name: "CX Design",
        //     // path: "/services/experience-design/cx-design",
        //     path: "/services/experience-design",
        //   },
        // ],
      },
      {
        innerMenu: "Technology & Engineering",
        path: "/services/technology-and-engineering",
        // children: [
        //   {
        //     name: "Web Development",
        //     // path: "/services/technology-and-engineering/web-development",
        //     path: "/services/technology-and-engineering",
        //   },
        //   {
        //     name: "Mobile App Development",
        //     // path: "/services/technology-and-engineering/mobile-app-development",
        //     path: "/services/technology-and-engineering",
        //   },
        //   {
        //     name: "ERP Integration",
        //     // path: "/services/technology-and-engineering/erp-integration",
        //     path: "/services/technology-and-engineering",
        //   },
        //   {
        //     name: "Ecommerce Services",
        //     // path: "/services/technology-and-engineering/ecommerce-services",
        //     path: "/services/technology-and-engineering",
        //   },
        // ],
      },
      {
        innerMenu: "AI & Automation",
        path: "/services/ai-automation",
        // children: [
        //   {
        //     name: "Conversational AI & Chatbot",
        //     // path: "/services/ai-automation/conversational-ai",
        //     path: "/services/ai-automation",
        //   },
        //   {
        //     name: "RPA",
        //     // path: "/services/ai-automation/ai-chatbot",
        //     path: "/services/ai-automation",
        //   },
        // ],
      },
      {
        innerMenu: "QA & Testing Services",
        path: "/services/quality-assurance",
        // children: [
        //   {
        //     name: "Automation Testing",
        //     // path: "/services/quality-assurance/platforms",
        //     path: "/services/quality-assurance",
        //   },
        //   {
        //     name: "Security Testing",
        //     // path: "/services/quality-assurance/industries",
        //     path: "/services/quality-assurance",
        //   },
        //   {
        //     name: "Performance Testing",
        //     // path: "/services/quality-assurance/levels-of-software-testing-services",
        //     path: "/services/quality-assurance",
        //   },
        //   {
        //     name: "QA Consulting",
        //     // path: "/services/quality-assurance/test-management",
        //     path: "/services/quality-assurance",
        //   },
        //   // {
        //   //   name: "Defect Management",
        //   //   path: "/services/quality-assurance/defect-management",
        //   // },
        //   // {
        //   //   name: "Other QA Services",
        //   //   path: "/services/quality-assurance/other-qa-services",
        //   // },
        //   // {
        //   //   name: "Resources",
        //   //   path: "/services/quality-assurance/resources",
        //   // },
        // ],
      },
      {
        innerMenu: "Cloud",
        path: "/services/cloud",
        // children: [
        //   {
        //     name: "Cloud Migration",
        //     // path: "/services/cloud/cloud",
        //     path: "/services/cloud",
        //   },
        //   {
        //     name: "Cloud App Services",
        //     // path: "/services/cloud/rpa",
        //     path: "/services/cloud",
        //   },
        // ],
      },
      {
        innerMenu: "Digital Marketing",
        path: "/services/digital-marketing",
        // children: [
        //   {
        //     name: "Branding & Design",
        //     path: "/services/digital-marketing/branding-design",
        //   },
        //   {
        //     name: "Marketing Services",
        //     path: "/services/digital-marketing/marketing-services",
        //   },
        //   // {
        //   //   name: "Paid Advertising",
        //   //   path: "/services/digital-marketing/paid-advertising",
        //   // },
        //   {
        //     name: "Marketing Optimization",
        //     path: "/services/digital-marketing/marketing-optimization",
        //   },
        //   // {
        //   //   name: "Analytics & Strategy Consulting",
        //   //   path: "/services/digital-marketing/analytics-strategy-consulting",
        //   // },
        //   // {
        //   //   name: "Marketing Automation",
        //   //   path: "/services/digital-marketing/marketing-automation",
        //   // },
        // ],
      },
      {
        innerMenu: "Data Analytics",
        path: "/services/data-analytics",
        // children: [
        //   {
        //     id: 1,
        //     name: "Business Intelligence",
        //     url: "/services/data-analytics/business-intelligence",
        //   },
        //   {
        //     id: 2,
        //     name: "Digital Intelligence",
        //     url: "/services/data-analytics/digital-intelligence",
        //   },
        //   {
        //     id: 3,
        //     name: "Marketing Intelligence",
        //     url: "/services/data-analytics/marketing-intelligence",
        //   },
        //   {
        //     id: 4,
        //     name: "Customer 360",
        //     url: "/services/data-analytics/customer-360",
        //   },
        //   {
        //     id: 5,
        //     name: "Sales Intelligence",
        //     url: "/services/data-analytics/sales-intelligence",
        //   },
        // ],
      },
      {
        innerMenu: "Managed Operations",
        path: "/services/managed-operations",
        // children: [
        //   {
        //     id: 1,
        //     name: "Product Innovation & Management",
        //     url: "/services/managed-operations/product-innovation-management",
        //   },
        //   {
        //     id: 2,
        //     name: "Website Operations & Management",
        //     url: "services/managed-operations/website-operations-management",
        //   },
        //   {
        //     id: 3,
        //     name: "Cloud Management",
        //     url: "services/managed-operations/cloud-management",
        //   },
        //   {
        //     id: 4,
        //     name: "Software Maintenance & Support",
        //     url: "services/managed-operations/software-maintenance-support",
        //   },
        // ],
      },
      {
        innerMenu: "Digital Strategy & Consulting",
        path: "/services/digital-strategy-consulting",
        // children: [
        //   {
        //     id: 1,
        //     name: "Digital Experience & Engagement",
        //     url: "/services/digital-strategy/digital-experience-engagement",
        //   },
        //   {
        //     id: 2,
        //     name: "Digital Build",
        //     url: "/services/digital-strategy/digital-build",
        //   },
        //   {
        //     id: 3,
        //     name: "Digital Modernization",
        //     url: "/services/digital-strategy/digital-modernization",
        //   },
        //   {
        //     id: 4,
        //     name: "Digital Audits",
        //     url: "/services/digital-strategy/digital-audits",
        //   },
        //   {
        //     id: 5,
        //     name: "Incubation Of Products & Services",
        //     url: "/services/data-analytics/incubaton-products-services",
        //   },
        // ],
      },
    ],
  },
  {
    menu: "Agiliti",
    path: "/agiliti-hire-dedicated-developers",
    // children: [
    //   {
    //     innerMenu: "Why Agiliti",
    //     path: "/agiliti/#why-agiliti",
    //   },
    //   {
    //     innerMenu: "How it Works",
    //     path: "/agiliti/#how-it-works",
    //   },
    //   {
    //     innerMenu: "Engagement Models",
    //     path: "/agiliti/#engagement-models",
    //   },
    //   {
    //     innerMenu: "Technologies",
    //     path: "/agiliti/#technologies",
    //   },
    //   {
    //     innerMenu: "Get in Touch with Us",
    //     path: "/agiliti/#get-in-touch-with-us",
    //   },
    // ]
  },
  {
    menu: "Industries",
    path: "/industries",
    children: [
      {
        innerMenu: "BFSI & Fintech",
        path: "/industries/bfsi-fintech",
      },
      {
        innerMenu: "Digital Commerce",
        path: "/industries/digital-commerce",
      },
      {
        innerMenu: "Healthcare",
        path: "/industries/healthcare",
      },
      {
        innerMenu: "Green & Sustainability",
        path: "/industries/green-sustainability",
      },
      {
        innerMenu: "EdTech",
        path: "/industries/edtech",
      },
      {
        innerMenu: "Internet & SaaS",
        path: "/industries/internet-saas",
      },
    ],
  },
  {
    menu: "Portfolio",
    path: "/portfolio",
  },
  {
    menu: "Insights",
    path: "/insights",
    // children: [
    //   {
    //     innerMenu: "Blogs",
    //     path: "/insights/blogs",
    //   },
    //   {
    //     innerMenu: "Expert Articles",
    //     path: "/insights/expert-articles",
    //   },
    //   {
    //     innerMenu: "White Paper",
    //     path: "/insights/white-paper",
    //   },
    //   {
    //     innerMenu: "PR & Events",
    //     path: "/insights/pr-events",
    //   },
    //   {
    //     innerMenu: "Awards",
    //     path: "/insights/awards",
    //   },
    //   {
    //     innerMenu: "Podcasts",
    //     path: "/insights/podcasts",
    //   },
    // ],
  },
  {
    menu: "Career",
    path: "/career",
    children: [
      {
        innerMenu: "Open Roles",
        path: "/career/open-roles",
      },
      {
        innerMenu: "Life At Altumind",
        path: "/career/life-at-altumind",
      },
    ],
  },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleMouseEnter = (item) => {
    if (item?.children) {
      setCurrentItem(item);
    }
  };

  const handleMouseLeave = () => {
    setCurrentItem(null);
  };

  return (
    <header className="dark:bg-[#1b305c] w-full bg-white z-[99] h-[70px] dark:text-white top-0 sticky">
      <nav className="flex justify-between items-center h-full px-2 sm:px-5 relative">
        <img
          src={theme === "dark" ? AltumindDark : logo}
          alt="altumind"
          className="sm:w-[180px] w-[150px] cursor-pointer"
          onClick={() => {
            setShowMobileMenu(false);
            navigate("/");
          }}
        />
        <div className="items-center gap-5 hidden lg:flex ml-auto h-full">
          {currentItem && (
            <div className=" bg-black bg-opacity-50 h-screen absolute top-full w-screen left-0">
              {" "}
            </div>
          )}
          {/* <ul className="flex mr-3 h-full relative font-montserrat"> */}
          <ul className="flex mr-3 h-full  font-montserrat">
            {Navbardata?.map((item, index) => (
              <li
                key={index}
                className="h-full relative flex items-center"
                // className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  onClick={() => setCurrentItem(null)}
                  className="h-full flex items-center px-4 border-b-4 border-transparent text-sm font-medium hover:border-secondary"
                  to={item?.path}
                >
                  {item?.menu}
                </Link>
                {item?.children && currentItem === item && (
                  <div className="z-50">
                    <MegaMenu
                      item={currentItem}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex lg:gap-5 items-center justify-between">
          {/* <ToggleTheme /> */}
          <div className="ml-5 lg:hidden">
            <button
              className="flex items-center"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              {showMobileMenu ? (
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
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
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
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
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h10"
                  />
                </svg>
              )}
            </button>
          </div>

          <Link to="/contact">
            {" "}
            <button className="bg-[#DD5143] hidden lg:block outline-none border-none font-medium rounded-md text-white px-4 text-sm py-3">
             Discuss
            </button>
          </Link>
        </div>
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* {currentItem && (
                  <div className=" bg-black bg-opacity-20 h-screen absolute top-full font- w-full left-0">
                    {" "}
                  </div>
                )} */
}

{
  /* <Link
                  onMouseOver={() =>
                    setCurrentItem(item?.children ? item : null)
                  }
                  onMouseLeave={() => setCurrentItem(null)}
                  onClick={() => setCurrentItem(null)}
                  className="h-full flex items-center px-4 border-b-4 border-transparent text-sm font-medium hover:border-secondary"
                  to={item?.path}
                  key={index}
                >
                  <li className="">
                    {item?.menu}
                    {item?.children && currentItem === item && (
                      <MegaMenu item={currentItem} />
                    )}
                  </li>
                </Link> */
}
