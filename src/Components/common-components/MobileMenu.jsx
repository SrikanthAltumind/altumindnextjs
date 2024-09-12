import { useEffect, useState } from "react";
import { NavMenuData } from "../../Utils";

import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const MobileMenu = ({showMobileMenu}) => {
    const [activeMenu, setActiveMenu] = useState(null)
    const [subMenu, setSubMenu] = useState(null)

    useEffect(()=> {
      setActiveMenu(null)
      setSubMenu(null)
  },[showMobileMenu])
   
  return (
    <div className={`${showMobileMenu ? 'right-0 w-full sm:w-[40%] md:w-[50%] px-10 py-5 z-20' : '-right-full w-0'} overflow-hidden shadow-md font-medium text-[15px] duration-500 absolute top-full font-montserrat bg-LightBlue h-screen`}>
  {/* {!activeMenu &&   */}
  <div>
     <ul className="space-y-5">
         {NavMenuData?.map((item)=> (
             <li key={item.id}
                 className='flex items-center justify-between'
                 >
             <Link to={item.url} className='p-1'> {item.name} </Link>
             {
              item?.children?.length > 0 &&
             
             <button className='p-1' onClick={()=>setActiveMenu(item)}>
                    
                 <svg  className="w-6 h-6 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                 </svg>
             </button>
             }
             </li>
         ))}
     </ul>
     <div className="text-center my-10">
     <Link to='/contact' className="bg-secondary rounded-md py-2 px-20 text-white font-medium font-raleway">Let&apos;s Talk</Link>
     </div>
     </div>
   {/* }   */}
     {/* Clicked Menu Item */}
     {/* {activeMenu && */}
     <div className={` ${activeMenu ? ' right-0' : '-right-full'} w-[99%] font-medium overflow-y-auto text-[15px] px-10 py-5 duration-500 absolute top-0 font-montserrat bg-LightBlue h-screen`}>
         <div className='flex items-center gap-5'>
             <button onClick={()=> {setActiveMenu(null); setSubMenu(null)}} className='flex items-center text-primary font-semibold'>
                 <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                 </svg>
             </button>
             <Link to={activeMenu?.url} className='font-semibold text-secondary'>{activeMenu?.name}</Link>
         </div>
         <ul className='py-5 space-y-5 h-full overflow-y-auto'>
         {activeMenu?.children?.map(child=> (
             <li key={child.id}>
                 <div className='flex justify-between items-center gap-1'>
                     <Link to={child?.url} className={`${subMenu?.id === child.id ? 'text-primary font-semibold' : 'rotate-0 text-black hover:text-secondary font-medium' } py-1`}>{child.name}</Link>
                     {child?.children?.length>0 && 
                     <button onClick={()=> setSubMenu(prevMenu=> prevMenu?.id===child?.id ? null : child)} className='flex items-center p-1'>
                          <svg className={`${subMenu?.id === child.id ? 'rotate-180 text-primary' : 'rotate-0 text-black' } duration-300 w-5 h-5 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                         </svg> 
                         
                      
                     </button>
                     }
                 </div>
                 {subMenu?.id===child.id &&
                     <ul className={`ml-5`}>
                         {subMenu?.children?.map(lastChild=> (
                             <li key={lastChild.id}  className='py-2.5 hover:text-secondary '><Link to={lastChild?.url}>{lastChild.name}</Link></li>
                         ))}
                     </ul>
                } 
             </li>
         ))}
         </ul>
     </div>
     {/* }  */}
 </div>
  )
}

export default MobileMenu