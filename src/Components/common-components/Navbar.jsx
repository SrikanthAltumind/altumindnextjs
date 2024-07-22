import { Link } from "react-router-dom"
import logo from "../../assets/Altumind logo-01.webp"
import AltumindDark from '../../assets/AltumindDark.png'
import ToggleTheme from "./ToggleTheme"
import { useContext, useState } from "react"
import { ThemeContext } from "../../Layouts/AppLayout"

import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

const data = [
  {
    menu : 'About',
    children : [
      {
        innerMenu: 'About Altumind',
        children: [
          {
            name: 'Mission and Vision'
          },
          {
            name: 'Leadership'
          },
          {
            name: 'Alliance'
          },
          {
            name: 'Community Engagement'
          }
        ]
      }
    ]
  },
  {
    menu : 'Services',
    children : [
      {
        innerMenu : 'Experience Design',
        children : [
          {
            name : 'UI Design'
          },
          {
            name : 'UX Design'
          },
          {
            name : 'CX Design'
          },
        ]
      },
      {
        innerMenu : 'Technology and Engineering',
        children : [
          {
            name : 'Web Development'
          },
          {
            name : 'Mobile App Development'
          },
          {
            name : 'ERP Integration'
          },
          {
            name : 'Ecommerce Services'
          },
        ]
      },
      {
        innerMenu : 'AI & Chat Bot',
        children : [
          {
            name : 'Conversational AI'
          },
          {
            name : 'AI Chatbot'
          },
        ]
      },
      {
        innerMenu : 'Quality Assurance & Quality control ',
        children : [
          {
            name : 'Platforms'
          },
          {
            name : 'Industries'
          },
          {
            name : 'Levels of software Testing services'
          },
          {
            name : 'Test Management'
          },
          {
            name : 'Defect Management'
          },
          {
            name : 'Other QA services'
          },
          {
            name : 'Resources'
          },
        ]
      },
      {
        innerMenu : 'Cloud & Automation',
        children : [
          {
            name : 'Cloud'
          },
          {
            name : 'RPA'
          },
        ]
      },
      {
        innerMenu : 'Digital Marketing',
        children : [
          {
            name : 'Branding & Design'
          },
          {
            name : 'Marketing Services'
          },
          {
            name : 'Paid Advertising'
          },
          {
            name : 'Marketing Optimization'
          },
          {
            name : 'Analytics & Strategy Consulting'
          },
          {
            name : 'Marketing Automation'
          },
        ]
      },
      {
        innerMenu : 'Data Analytics '
      },
      {
        innerMenu : 'IT Services & Consulting'
      },
    ]
  },
  {
    menu : 'Industries',
    url: '/industries',
    children: [
      {
        innerMenu: 'BFSI & Fintech'
      },
      {
        innerMenu: 'Digital Commerce'
      },
      {
        innerMenu: 'Healthcare'
      },
      {
        innerMenu: 'Green & Sustainability'
      },
      {
        innerMenu: 'EdTech'
      },
      {
        innerMenu: 'Internet & SaaS'
      },
    ]
  },
  {
    menu : 'Portfolio',
  },
  {
    menu : 'Insights',
    children: [
      {
        innerMenu: 'Blogs'
      },
      {
        innerMenu: 'Expert Articles'
      },
      {
        innerMenu: 'White Paper'
      },
      {
        innerMenu: 'PR & Events'
      },
      {
        innerMenu: 'Awards'
      },
      {
        innerMenu: 'Podcasts'
      },
    ]
  },
  {
    menu : 'Career',
    url:'/career',
    children: [
      {
        innerMenu: 'Open Roles',
        url:'/open-roles',
      },
      {
        innerMenu: 'Life At Altumind'
      },
    ]
  }
]
console.log(data[0].children[0].children, 'innermenus')

const Navbar = () => {
 const [showMobileMenu, setShowMobileMenu] = useState(false)
 const [currentItem, setCurrentItem] = useState(null)
  const {theme} = useContext(ThemeContext)

  return (
    <header className="dark:bg-[#1b305c] relative bg-white z-20 dark:text-white top-0">
        <nav className="flex justify-between items-center px-2 py-5 sm:px-5 lg:py-0">
            <img src={theme === 'dark' ? AltumindDark : logo} alt="altumind" className="sm:w-[180px] w-[150px]" />
            <div className="items-center gap-5 hidden lg:flex ml-auto">
            <ul className="flex mr-3">
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
                      <div className=" bg-black bg-opacity-20 h-screen absolute top-full  w-full left-0"> </div>
                    }
                      
                    <Link
                    onMouseOver={() => setCurrentItem(item?.children ? item : null)}
                    onMouseLeave={() => setCurrentItem(null)}
                    onClick={() => setCurrentItem(null)}
                    className="py-6 px-4 border-b-4 border-transparent hover:border-secondary"  to={item?.url} key={index}><li className="" >{item?.menu}
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
           
            <Link to="/contact"> <button className="bg-[#DD5143] hidden lg:block outline-none border-none rounded-md text-white px-4 text-sm py-3">Lets Talk</button></Link>
            </div>
         
            <MobileMenu showMobileMenu={showMobileMenu}/>
       
           
        </nav>
    </header>
  )
}

export default Navbar