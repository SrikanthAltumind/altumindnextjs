import { useState } from "react";
import FeaturedInsights from "./FeaturedInsights"
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const MegaMenu = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const [subMenu , setSubMenu] = useState(item.children[0]);
  return (
    <>
  <div className="absolute dark:text-black mx-auto right-[calc((100vw-950px)/2)] w-[950px] z-10 top-full">
    <div className=" rounded-lg  shadow-lg bg-[#F3F9FF] p-5 mt-3 " >
        <div className="flex text-[13px] font-medium justify-between w-full h-full">
          {/*  eslint-disable-next-line react/prop-types */}
          <div className="basis-[60%] flex"  onMouseLeave={() => setSubMenu(item?.children[0])}>
    
          <div className="border-r basis-[50%] w-full h-full">
            <ul className="text-black font-montserrat">
            {
              // eslint-disable-next-line react/prop-types
              item?.children?.map((child, index) => (
              <Link to={child?.url}  key={index}><li onMouseOver={() => setSubMenu(child)} className={`${subMenu?.innerMenu === child.innerMenu ? 'bg-[#DE5346] text-white' : '' } rounded-md flex gap-2 items-center  p-2 m-2`}>{subMenu?.innerMenu === child.innerMenu ? <span className="bg-white p-1 rounded-full"></span> : ''}{child.innerMenu}
              </li></Link>
              ))
            }
            </ul>
          </div>
      
          <div className="basis-[50%]">
            <ul className="font-montserrat">
            {subMenu?.children?.map((child, index) => (
              <li key={index} className="p-2 m-2 font-medium hover:font-semibold hover:text-secondary">
                <Link to="/">{child.name}</Link>
              </li>
            ))}
            </ul>
          </div>
          </div>
         
          <div className="basis-[40%]" >
           <FeaturedInsights/>
          </div>

        </div>
 
       
    </div>
    </div>
 </>
  )
}

export default MegaMenu