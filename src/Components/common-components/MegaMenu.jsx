import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MegaMenu = ({ item, onMouseLeave }) => {
  // eslint-disable-next-line react/prop-types
  const [subMenu, setSubMenu] = useState(item.children[0]);
  return (
      <div
      className="absolute dark:text-black mx-auto right-0 w-[90%] min-w-[820px] top-[70px] z-20"
        onMouseLeave={onMouseLeave}
      >
        <div className=" rounded-lg  shadow-lg bg-[#F3F9FF] p-5 mt-3 ">
          <div className="flex text-[13px] font-medium justify-between w-full h-full">
            {/*  eslint-disable-next-line react/prop-types */}
            <div
              className="basis-[60%] flex h-full"
              onMouseLeave={() => setSubMenu(item?.children[0])}
            >
              <div className="border-r min-h-[300px] basis-[50%] w-full h-full">
                <ul className="text-black font-montserrat">
                  {
                    // eslint-disable-next-line react/prop-types
                    item?.children?.map((child, index) => (
                      <Link to={child?.path} key={index}>
                        <li
                          onMouseOver={() => setSubMenu(child)}
                          onClick={onMouseLeave}
                          className={`${
                            subMenu?.innerMenu === child.innerMenu
                              ? "bg-[#DE5346] text-white"
                              : ""
                          } rounded-md flex justify-between group font-semibold capitalize items-center  p-2 m-2`}
                        >
                          {child.innerMenu}
                          {child?.children?.length > 0 && (
                            <svg
                              className={`${
                                subMenu?.innerMenu === child.innerMenu
                                  ? "border-white"
                                  : "border-black"
                              } w-[19px] h-[19px] border p-[1.5px] rounded-full`}
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
                                strokeWidth="3"
                                d="m9 5 7 7-7 7"
                              />
                            </svg>
                          )}
                        </li>
                      </Link>
                    ))
                  }
                </ul>
              </div>

              <div className="basis-[50%]">
                <ul className="font-montserrat">
                  {subMenu?.children?.map((child, index) => (
                    <li
                      key={index}
                      className="p-2 m-2 font-medium hover:font-semibold hover:text-secondary capitalize"
                      onClick={onMouseLeave}
                    >
                      <Link to={child?.path} className="capitalize">{child.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MegaMenu;
