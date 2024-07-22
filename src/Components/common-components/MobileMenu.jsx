// import { useState } from "react";

import { Link } from "react-router-dom";

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
      children: [
        {
          innerMenu: 'Open Roles'
        },
        {
          innerMenu: 'Life At Altumind'
        },
      ]
    }
  ]

// eslint-disable-next-line react/prop-types
const MobileMenu = ({showMobileMenu}) => {
    // const [activeMenu, setActiveMenu] = useState(null)
    // const [subMenu, setSubMenu] = useState(null)
   
  return (
    <div className={`${showMobileMenu ? 'right-0 w-full sm:w-[50%] p-2 z-20' : '-right-full w-0'} overflow-hidden duration-500 absolute top-full bg-green-500 h-screen`}>
    {/* {!activeMenu &&  */}
     <ul >
         {data?.map(item=> (
             <li key={item.id}
                 className='flex items-center justify-between'
                 >
             <Link to={item.navLink} className='p-1'> {item.menu} </Link>
             <button className='p-1'
                    >
                 <svg  className="w-6 h-6 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                 </svg>
             </button>
             </li>
         ))}
     </ul>
    {/* } */}
     {/* Clicked Menu Item */}
     {/* {activeMenu && */}
     {/* <div className={`bg-red-300 py-2 ${activeMenu ? 'block' : 'hidden'} absolute w-44 h-full top-0 left-0`}>
         <div className='flex items-center gap-2'>
             <button onClick={()=> {setActiveMenu(null); setSubMenu(null)}} className='flex items-center text-primary font-semibold'>
                 <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                 </svg>
             </button>
             <Link to={activeMenu?.navLink} className='text-primary font-semibold'>{activeMenu?.name}</Link>
         </div>
         <ul className='ml-5'>
         {activeMenu?.children?.map(child=> (
             <li key={child.id}>
                 <div className='flex items-center gap-1'>
                     <Link to={child?.navLink} className='py-1'>{child.name}</Link>
                     {child?.children?.length>0 && 
                     <button onClick={()=> setSubMenu(prevMenu=> prevMenu?.id===child.id ? null : child)} className='flex items-center p-1'>
                         { subMenu?.id!==child.id 
                         ? <svg className="w-4 h-4 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                         </svg>
                         : <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                         </svg>
                     
                         }
                     </button>
                     }
                 </div>
                 {subMenu?.id===child.id &&
                     <ul className='ml-10 list-disc '>
                         {subMenu?.children?.map(lastChild=> (
                             <Link key={lastChild.id} to={lastChild?.navLink}><li className='py-1 hover:text-secondary hover:underline decoration-1 underline-offset-'>{lastChild.name}</li></Link>
                         ))}
                     </ul>
                 }
             </li>
         ))}
         </ul>
     </div> */}
     {/* } */}
 </div>
  )
}

export default MobileMenu