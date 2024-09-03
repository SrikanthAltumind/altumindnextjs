import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Altumind logo-01.webp"
import AltumindDark from '../../assets/AltumindDark.png'
import ToggleTheme from "./ToggleTheme"
import { useContext, useState } from "react"
import { ThemeContext } from "../../Layouts/AppLayout"

import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

// const data = [
//   {
//     menu: "About",
//     path: "/about",
//     children: [
//       {
//         innerMenu: "About Altumind",
//         children: [
//           {
//             name: "Mission and Vision",
//             path: "/about/mission-and-vision",
//           },
//           {
//             name: "Leadership",
//             path: "/about/leadership",
//           },
//           {
//             name: "Alliance",
//             path: "/about/alliance",
//           },
//           {
//             name: "Community Engagement",
//             path: "/about/community-engagement",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     menu: "Services",
//     path: "/services",
//     children: [
//       {
//         innerMenu: "Experience Design",
//         path: "/services/experience-design",
//         children: [
//           {
//             name: "UI Design",
//             path: "/services/experience-design/ui-design",
//           },
//           {
//             name: "UX Design",
//             path: "/services/experience-design/ux-design",
//           },
//           {
//             name: "CX Design",
//             path: "/services/experience-design/cx-design",
//           },
//         ],
//       },
//       {
//         innerMenu: "Technology and Engineering",
//         path: "/services/technology-and-engineering",
//         children: [
//           {
//             name: "Web Development",
//             path: "/services/technology-and-engineering/web-development",
//           },
//           {
//             name: "Mobile App Development",
//             path: "/services/technology-and-engineering",
//           },
//           {
//             name: "ERP Integration",
//             path: "/services/technology-and-engineering",
//           },
//           {
//             name: "Ecommerce Services",
//             path: "/services/technology-and-engineering",
//           },
//         ],
//       },
//       {
//         innerMenu: "AI & Chat Bot",
//         children: [
//           {
//             name: "Conversational AI",
//           },
//           {
//             name: "AI Chatbot",
//           },
//         ],
//       },
//       {
//         innerMenu: "Quality Assurance & Quality control ",
//         children: [
//           {
//             name: "Platforms",
//           },
//           {
//             name: "Industries",
//           },
//           {
//             name: "Levels of software Testing services",
//           },
//           {
//             name: "Test Management",
//           },
//           {
//             name: "Defect Management",
//           },
//           {
//             name: "Other QA services",
//           },
//           {
//             name: "Resources",
//           },
//         ],
//       },
//       {
//         innerMenu: "Cloud & Automation",
//         children: [
//           {
//             name: "Cloud",
//           },
//           {
//             name: "RPA",
//           },
//         ],
//       },
//       {
//         innerMenu: "Digital Marketing",
//         children: [
//           {
//             name: "Branding & Design",
//           },
//           {
//             name: "Marketing Services",
//           },
//           {
//             name: "Paid Advertising",
//           },
//           {
//             name: "Marketing Optimization",
//           },
//           {
//             name: "Analytics & Strategy Consulting",
//           },
//           {
//             name: "Marketing Automation",
//           },
//         ],
//       },
//       {
//         innerMenu: "Data Analytics ",
//       },
//       {
//         innerMenu: "IT Services & Consulting",
//       },
//     ],
//   },
//   {
//     menu: "Industries",
//     path: "/industries",
//     children: [
//       {
//         innerMenu: "BFSI & Fintech",
//       },
//       {
//         innerMenu: "Digital Commerce",
//       },
//       {
//         innerMenu: "Healthcare",
//       },
//       {
//         innerMenu: "Green & Sustainability",
//       },
//       {
//         innerMenu: "EdTech",
//       },
//       {
//         innerMenu: "Internet & SaaS",
//       },
//     ],
//   },
//   {
//     menu: "Portfolio",
//     path: "/portfolio",
//   },
//   {
//     menu: "Insights",
//     path: "/insights",
//     children: [
//       {
//         innerMenu: "Blogs",
//       },
//       {
//         innerMenu: "Expert Articles",
//       },
//       {
//         innerMenu: "White Paper",
//       },
//       {
//         innerMenu: "PR & Events",
//       },
//       {
//         innerMenu: "Awards",
//       },
//       {
//         innerMenu: "Podcasts",
//       },
//     ],
//   },
//   {
//     menu: "Career",
//     path: "/career",
//     children: [
//       {
//         innerMenu: "Open Roles",
//         path: "/open-roles",
//       },
//       {
//         innerMenu: "Life At Altumind",
//       },
//     ],
//   },
// ];
// console.log(data[0].children[0].children, 'innermenus')

const data = [
  {
    menu: "About",
    path: "/about",
    children: [
      {
        innerMenu: "About Altumind",
        path: "/about/about-altumind",
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
        path: "/services/experience-design",
        children: [
          {
            name: "UI Design",
            path: "/services/experience-design/ui-design",
          },
          {
            name: "UX Design",
            path: "/services/experience-design/ux-design",
          },
          {
            name: "CX Design",
            path: "/services/experience-design/cx-design",
          },
        ],
      },
      {
        innerMenu: "Managed Operations",
        path: "/services/managed-operations",
      },
      {
        innerMenu: "Technology and Engineering",
        path: "/services/technology-and-engineering",
        children: [
          {
            name: "Web Development",
            path: "/services/technology-and-engineering/web-development",
          },
          {
            name: "Mobile App Development",
            path: "/services/technology-and-engineering/mobile-app-development",
          },
          {
            name: "ERP Integration",
            path: "/services/technology-and-engineering/erp-integration",
          },
          {
            name: "Ecommerce Services",
            path: "/services/technology-and-engineering/ecommerce-services",
          },
        ],
      },
      {
        innerMenu: "AI & Chat Bot",
        path: "/services/ai-and-chat-bot",
        children: [
          {
            name: "Conversational AI",
            path: "/services/ai-and-chat-bot/conversational-ai",
          },
          {
            name: "AI Chatbot",
            path: "/services/ai-and-chat-bot/ai-chatbot",
          },
        ],
      },
      {
        innerMenu: "Quality Assurance & Testing Services",
        path: "/services/quality-assurance-quality-control",
        children: [
          {
            name: "Platforms",
            path: "/services/quality-assurance-quality-control/platforms",
          },
          {
            name: "Industries",
            path: "/services/quality-assurance-quality-control/industries",
          },
          {
            name: "Levels of Software Testing Services",
            path: "/services/quality-assurance-quality-control/levels-of-software-testing-services",
          },
          {
            name: "Test Management",
            path: "/services/quality-assurance-quality-control/test-management",
          },
          {
            name: "Defect Management",
            path: "/services/quality-assurance-quality-control/defect-management",
          },
          {
            name: "Other QA Services",
            path: "/services/quality-assurance-quality-control/other-qa-services",
          },
          {
            name: "Resources",
            path: "/services/quality-assurance-quality-control/resources",
          },
        ],
      },
      {
        innerMenu: "Cloud & Automation",
        path: "/services/cloud-automation",
        children: [
          {
            name: "Cloud",
            path: "/services/cloud-automation/cloud",
          },
          {
            name: "RPA",
            path: "/services/cloud-automation/rpa",
          },
        ],
      },
      {
        innerMenu: "Digital Marketing",
        path: "/services/digital-marketing",
        children: [
          {
            name: "Branding & Design",
            path: "/services/digital-marketing/branding-design",
          },
          {
            name: "Marketing Services",
            path: "/services/digital-marketing/marketing-services",
          },
          {
            name: "Paid Advertising",
            path: "/services/digital-marketing/paid-advertising",
          },
          {
            name: "Marketing Optimization",
            path: "/services/digital-marketing/marketing-optimization",
          },
          {
            name: "Analytics & Strategy Consulting",
            path: "/services/digital-marketing/analytics-strategy-consulting",
          },
          {
            name: "Marketing Automation",
            path: "/services/digital-marketing/marketing-automation",
          },
        ],
      },
      {
        innerMenu: "Data Analytics",
        path: "/services/data-analytics",
      },
      {
        innerMenu: "Digital Strategy and Consulting",
        path: "/services/digital-strategy-consulting",
      },
    ],
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
    children: [
      {
        innerMenu: "Blogs",
        path: "/insights/blogs",
      },
      {
        innerMenu: "Expert Articles",
        path: "/insights/expert-articles",
      },
      {
        innerMenu: "White Paper",
        path: "/insights/white-paper",
      },
      {
        innerMenu: "PR & Events",
        path: "/insights/pr-events",
      },
      {
        innerMenu: "Awards",
        path: "/insights/awards",
      },
      {
        innerMenu: "Podcasts",
        path: "/insights/podcasts",
      },
    ],
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
 const [showMobileMenu, setShowMobileMenu] = useState(false)
 const [currentItem, setCurrentItem] = useState(null)
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  return (
    <header className="dark:bg-[#1b305c] w-full bg-white z-20 h-[70px] dark:text-white top-0 fixed font-raleway">
        <nav className="flex justify-between items-center h-full px-2 sm:px-5">
        <img src={theme === 'dark' ? AltumindDark : logo} alt="altumind" className="sm:w-[180px] w-[150px] cursor-pointer" onClick={()=>navigate("/")} />
            <div className="items-center gap-5 hidden lg:flex ml-auto h-full">
            <ul className="flex mr-3 h-full ">
                {/* <Link to="/"><li>About us</li></Link>
                <Link to="/"><li>Services</li></Link>
                <Link to="/industries"><li>Industries</li></Link>
                <Link to="/"><li>Portfolio</li></Link>
                <Link to="/"><li>Insights</li></Link>
                <Link to="/"><li>Career</li></Link> */}
                {
                  data?.map((item, index) => (
                    <>
                    {
                      currentItem &&
                      <div className=" bg-black bg-opacity-20 h-screen absolute top-full font- w-full left-0"> </div>
                    }
                      
                    <Link
                    onMouseOver={() => setCurrentItem(item?.children ? item : null)}
                    onMouseLeave={() => setCurrentItem(null)}
                    onClick={() => setCurrentItem(null)}
                    className="h-full flex items-center px-4 border-b-4 border-transparent text-sm font-medium hover:border-secondary"  to={item?.path} key={index}><li className="" >{item?.menu}
                      {
                       
                        item?.children && currentItem === item &&
                       
                       <MegaMenu item={currentItem}/>
              
          
                      }
                    </li></Link>
                  
                    </>
                  ))
                }
            </ul>
            </div>
            <div className="flex lg:gap-5 items-center justify-between">
            <ToggleTheme />
              <div className="ml-5 lg:hidden">
                <button className="flex items-center" onClick={()=> setShowMobileMenu(prev=> !prev)}>
                  {showMobileMenu
                   ? <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                    :  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                   </svg>    
                  }
                </button>
        
              </div>
           
            <Link to="/contact"> <button className="bg-[#DD5143] hidden lg:block outline-none border-none font-medium rounded-md text-white px-4 text-sm py-3">Lets Talk</button></Link>
            </div>
         
            <MobileMenu showMobileMenu={showMobileMenu}/>
       
           
        </nav>
    </header>
  )
}

export default Navbar