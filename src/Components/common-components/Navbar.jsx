import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Altumind logo-01.webp";
import AltumindDark from "../../assets/AltumindDark.png";
// import ToggleTheme from "./ToggleTheme";
import { useContext, useEffect, useState } from "react";
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
       
     
        //  {
        //   innerMenu: "Mission and Vision",
        //     path: "/about/about-altumind/mission-and-vision",
        //   },
        //   {
        //     innerMenu: "Leadership",
        //     path: "/about/about-altumind/leadership",
        //    },
        //    {
        //      innerMenu: "Alliance",
        //      path: "/about/about-altumind/alliance",
        //    },
        //   {
        //     innerMenu: "Community Engagement",
        //     path: "/about/about-altumind/community-engagement",
        //    },
            children: [
          {
            name: "Mission and Vision",
            path: "/about/about-altumind/mission-and-vision",
          },
          {
            name: "Leadership",
            path: "/about/about-altumind/leadership",
          },
          {
            name: "Alliance",
            path: "/about/about-altumind/alliance",
          },
          {
            name: "Community Engagement",
            path: "/about/about-altumind/community-engagement",
          },
        ],
      },
    ],
  },
  {
    menu: "Services",
    path: "/services",
    children: [
      {
        innerMenu: "Experience Design",
        path: "/services/experience-design-services",
        children: [
          {
            name: "UI Design",
            path: "/experience-design-services/ui-design-services",
            
          },
          {
            name: "UX Design",
            path: "/experience-design-services/ux-design-services",
          },
          {
            name: "CX Design",
            path: "/experience-design-services/cx-design",
          },
        ],
      },
      {
        innerMenu: "Technology & Engineering",
        path: "/services/digital-development-services",
        children: [
          {
            name: "Web Development",
            path: "/digital-development-services/web-development-consulting",
            children:[
              {
                name:"Responsive Website Development",
                path:"/digital-development-services/web-development-consulting/responsive-web-development-services"
              },
              {
                name:"Content Management Systems (CMS)",
                path:"/digital-development-services/web-development-consulting/cms-development-services"
              },
              {
                name:"Progressive Web App Development",
                path:"/digital-development-services/web-development-consulting/progressive-web-app-development-services"
              },
            ]
          },
          {
            name: "Mobile App Development",
            path: "/digital-development-services/mobile-app-design-development",
            children:[
              {
                name:'iOS Development',
                path:"/digital-development-services/mobile-app-design-development/ios-development-services"
              },
              {
                name:'Android Development',
                path:"/digital-development-services/mobile-app-design-development/android-application-development-services"
              },
              {
                name:'Hybrid App Development',
                path:"/digital-development-services/mobile-app-design-development/hybrid-app-development-services"
              },

            ]
          },
          {
            name: "ERP Integration",
            path: "/digital-development-services/erp-integration-service",
          },
          {
            name: "Ecommerce Services",
            path: "/digital-development-services/ecommerce-services",
          },
        ],
      },
      {
        innerMenu: "AI & Automation",
        path: "/services/ai-services",
        children: [
          {
            name: "Conversational AI & Chatbot",
            path: "/ai-services/chatbot-development-services",
          },
          {
            name: "RPA",
            path: "/ai-services/rpa-services",
          },
        ],
      },
      {
        innerMenu: "QA & Testing Services",
        path: "/services/quality-assurance-services",
        children: [
          {
            name: "Automation Testing",
            path: "/quality-assurance-services/automation-testing-services",
          },
          {
            name: "Security Testing",
            path: "/quality-assurance-services/security-testing-services",
          },
          {
            name: "Performance Testing",
            path: "/quality-assurance-services/performance-testing-services",
          },
          {
            name: "Functional Testing",
            path: "/quality-assurance-services/functional-testing-services",
          },
          {
            name: "QA Consulting",
            path: "/quality-assurance-services/quality-assurance-consulting",
          },
          // {
          //   name: "Defect Management",
          //   path: "/services/quality-assurance/defect-management",
          // },
          // {
          //   name: "Other QA Services",
          //   path: "/services/quality-assurance/other-qa-services",
          // },
          // {
          //   name: "Resources",
          //   path: "/services/quality-assurance/resources",
          // },
        ],
      },
      {
        innerMenu: "Cloud",
        path: "/services/cloud-strategy-engineering-services",
        children: [
          {
            name: "Cloud Migration",
            path: "/cloud-strategy-engineering-services/cloud-migration-services",
          },
          {
            name: "Cloud App Services",
            path: "/cloud-strategy-engineering-services/cloud-application-development-services",
          },
        ],
      },
      {
        innerMenu: "Digital Marketing",
        path: "/services/digital-marketing-services",
        children: [
          {
            name: "Branding & Design",
            path: "/digital-marketing-services/branding-design-services",
          },
          {
            name: "Marketing Services",
            path: "/digital-marketing-services/integrated-digital-marketing-services",
            children:[
              {
                name:'Content Marketing',
                path:"/digital-marketing-services/integrated-digital-marketing-services/b2b-content-marketing-services"
              },
              {
                name:'Social Media Marketing',
                path:"/digital-marketing-services/integrated-digital-marketing-services/social-media-strategy-services"
              },
              {
                name:'Email Marketing',
                path:"/digital-marketing-services/integrated-digital-marketing-services/targeted-email-marketing-services"
              },
              {
                name:'Ecommerce Marketing',
                path:"/digital-marketing-services/integrated-digital-marketing-services/ecommerce-marketing-solution"
              },
              {
                name:'Performance Marketing',
                path:"/digital-marketing-services/integrated-digital-marketing-services/performance-marketing-services"
              },
              {
                name:'Marketing Automation',
                path:"/digital-marketing-services/integrated-digital-marketing-services/marketing-automation-strategy"
              },

            ]
            
          },
          // {
          //   name: "Paid Advertising",
          //   path: "/services/digital-marketing/paid-advertising",
          // },
          {
            name: "Marketing Optimization",
            path: "/digital-marketing-services/optimization-services",
            children: [
              {
                name:"Search Engine Optimization (SEO)",
                path:"/digital-marketing-services/optimization-services/b2b-seo-services"
              },
              {
                name:"App Store Optimization (ASO)",
                path:"/digital-marketing-services/optimization-services/app-store-optimization-services"
              },
              {
                name:"ORM",
                path:"/digital-marketing-services/optimization-services/orm-service"
              },
              {
                name:"CRO",
                path:"/digital-marketing-services/optimization-services/cro-services"
              }
            ]
          },
          // {
          //   name: "Analytics & Strategy Consulting",
          //   path: "/services/digital-marketing/analytics-strategy-consulting",
          // },
          // {
          //   name: "Marketing Automation",
          //   path: "/services/digital-marketing/marketing-automation",
          // },
        ],
      },
      {
        innerMenu: "Data Analytics",
        path: "/services/data-analytics-services",
        children: [
          {
            id: 1,
            name: "Business Intelligence",
            path: "/data-analytics-services/business-intelligence-consulting",
          },
          {
            id: 2,
            name: "Digital Intelligence",
            path: "/data-analytics-services/digital-intelligence-services",
          },
          {
            id: 3,
            name: "Marketing Intelligence",
            path: "/data-analytics-services/marketing-intelligence-solutions",
          },
          {
            id: 4,
            name: "Customer 360",
            path: "/data-analytics-services/customer-360-analytics",
          },
          {
            id: 5,
            name: "Sales Intelligence",
            path: "/data-analytics-services/sales-intelligence-solutions",
          },
        ],
      },
      {
        innerMenu: "Managed Operations",
        path: "/services/operations-managed-services",
        children: [
          {
            id: 1,
            name: "Product Innovation & Management",
            path: "/operations-managed-services/product-development-and-innovation",
          },
          {
            id: 2,
            name: "Website Operations & Management",
            path: "/operations-managed-services/website-management",
          },
          {
            id: 3,
            name: "Cloud Management",
            path: "/operations-managed-services/cloud-management-solutions",
          },
          {
            id: 4,
            name: "Software Maintenance & Support",
            path: "/operations-managed-services/maintenance-support-services",
          },
        ],
      },
      {
        innerMenu: "Digital Strategy & Consulting",
        path: "/services/digital-strategy-services",
        children: [
          {
            id: 1,
            name: "Digital Experience & Engagement",
            path: "/digital-strategy-services/digital-experience",
          },
          {
            id: 2,
            name: "Digital Build",
            path: "/digital-strategy-services/digital-build",
          },
          {
            id: 3,
            name: "Digital Modernization",
            path: "/digital-strategy-services/digital-modernization",
          },
          {
            id: 4,
            name: "Digital Audits",
            path: "/digital-strategy-services/digital-audit",
          },
          {
            id: 5,
            name: "Incubation Of Products & Services",
            path: "/digital-strategy-services/product-incubation",
          },
        ],
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

  useEffect(() => {
    const handleFocusLost = ()=> {
        setShowMobileMenu(false)
    }
    document.addEventListener('visibilitychange', handleFocusLost)
 
    return () => {
      document.removeEventListener('visibilitychange', handleFocusLost)
    }
  }, [])

  const handleMouseLeave = () => {
    setCurrentItem(null);
  };

  return (
    <header className="dark:bg-[#1b305c] w-full bg-white z-[99] h-[70px] dark:text-white top-0 sticky">
      <nav className="flex justify-between items-center h-full px-2 sm:px-5 relative">
        <img
          src={theme === "dark" ? AltumindDark : logo}
          alt="altumind"
          loading="lazy"
          height={"100%"}
          width={"100%"}
          className="sm:w-[180px] w-[150px] cursor-pointer"
          onClick={() => {
            setShowMobileMenu(false);
            navigate("/");
          }}
        />
        <div className="items-center gap-5 hidden lg:flex ml-auto h-full">
          {currentItem && (
            <div className=" bg-black bg-opacity-50 h-screen absolute top-full w-full left-0">
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
              aria-label={showMobileMenu ? 'Close Menu' : 'Open Menu'}
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
