import { Link } from "react-router-dom"
import logo from "../../assets/Altumind logo-01.webp"
import AltumindDark from '../../assets/AltumindDark.png'
import ToggleTheme from "./ToggleTheme"
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../Layouts/AppLayout"
import { NavMenuData} from "../../Utils"


import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"


const Navbar = () => {
 const [showMobileMenu, setShowMobileMenu] = useState(false)
 const [currentItem, setCurrentItem] = useState(null)
  const {theme} = useContext(ThemeContext)
  const menuRef = useRef()

  useEffect(()=> {
    const handleClick = (e)=> {
        if(!menuRef.current.contains(e.target) || e.target.localName === 'a') {
            setShowMobileMenu(false)
        }
    }
    showMobileMenu && document.addEventListener('click', handleClick)
 
    return ()=> {
        document.removeEventListener('click', handleClick)
    }
  },[showMobileMenu])

  return (
    <header className="dark:bg-[#1b305c] w-full bg-white z-20 h-[70px] dark:text-white top-0 fixed">
        <nav className="flex justify-between items-center h-full px-2 sm:px-5">
            <Link to='/'><img src={theme === 'dark' ? AltumindDark : logo} alt="altumind" className="sm:w-[180px] w-[150px]" /></Link>
            <div className="items-center gap-5 hidden lg:flex ml-auto h-full">
            {
                      currentItem &&
                      <div className=" bg-black bg-opacity-50 h-screen absolute top-full w-screen left-0"> </div>
                    }
            <ul className="flex mr-3 h-full relative font-montserrat">
                {/* <Link to="/"><li>About us</li></Link>
                <Link to="/"><li>Services</li></Link>
                <Link to="/industries"><li>Industries</li></Link>
                <Link to="/"><li>Portfolio</li></Link>
                <Link to="/"><li>Insights</li></Link>
                <Link to="/"><li>Career</li></Link> */}
                {
                  NavMenuData?.map((item) => (
                 
                    <Link
                    key={item?.id}
                    onMouseOver={() => setCurrentItem(item?.children ? item : null)}
                    onMouseLeave={() => setCurrentItem(null)}
                    onClick={() => setCurrentItem(null)}
                    className="h-full flex items-center px-4 border-b-4 border-transparent  hover:border-secondary"  to={item?.url}>
                      <li>{item?.name}
                      {
                       
                        item?.children && currentItem === item &&
                       
                       <MegaMenu item={currentItem}/>
              
          
                      }
                    </li></Link>
                  
                  
                  ))
                }
            </ul>
            </div>
            <div className="flex lg:gap-5 items-center justify-between">
            <ToggleTheme />
              <div className="ml-5 lg:hidden" ref={menuRef}>
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
                <MobileMenu showMobileMenu={showMobileMenu}/>
              </div>
           
            <Link to="/contact-us"> <button className="bg-secondary hidden lg:block outline-none border-none rounded-md text-white px-4 text-sm font-medium font-montserrat py-3">Lets Talk</button></Link>
            </div>
         
           
       
           
        </nav>
    </header>
  )
}

export default Navbar