import { useEffect, useState } from "react";
import { Navbardata } from "./Navbar";

import {Link, useNavigate } from "react-router-dom";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
    const [activeMenu, setActiveMenu] = useState(null)
  const [subMenu, setSubMenu] = useState(null)
  const [L3Menu, setL3Menu] = useState(null)
  const navigate = useNavigate()

    useEffect(()=> {
      setActiveMenu(null)
      setSubMenu(null)
      setL3Menu(null)
  },[showMobileMenu])

  console.log(L3Menu?.children, 'L3Menu')
   
  return (
    <div
      className={`${
        showMobileMenu
          ? "right-0 w-full sm:w-[40%] md:w-[50%] px-10 py-5 z-10"
          : "-right-full w-0"
      } overflow-x-hidden lg:hidden shadow-md font-medium text-[15px] duration-500 absolute top-full font-montserrat bg-LightBlue h-screen pb-10`}
    >
      {/* {!activeMenu &&   */}
      <div className={`${activeMenu ? 'h-0 overflow-hidden' : 'h-auto'} duration-300`}>
        <ul className="space-y-5">
          {Navbardata?.map((item) => (
            <li key={item.menu} className="flex items-center justify-between">
              <Link
                target={item.path === "https://resources.altumindglobal.com/" ? "_blank" : ""}
                to={item?.path}
                className="p-1"
                onClick={() => {
                  setShowMobileMenu(false);
                  // navigate(item.path, {replace:true});
                }}
              >
                {" "}
                {item.menu}{" "}
              </Link>
              {item?.children?.length > 0 && (
                <button
                  className="p-1 flex justify-between items-center"
                  onClick={() => setActiveMenu(item)}
                  aria-label={`Open ${item.menu}`}
                >
                  <svg
                    className="w-6 h-6 ml-auto"
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
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="text-center mb-10 my-10">
          <button
            className="bg-secondary rounded-md py-2 px-20 text-white font-medium font-raleway"
            onClick={() => {
              setShowMobileMenu(false);
              navigate("/contact")
            }}
          >
           Discuss
          </button>
        </div>
      </div>
      {/* }   */}
      {/* Clicked Menu Item */}
      {/* {activeMenu && */}
      <div
        className={` ${
          activeMenu ? " right-0" : "-right-full"
        } w-[99%] font-medium text-[15px] px-10 py-5 duration-500 absolute top-0 font-montserrat bg-LightBlue`}
      >
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              setActiveMenu(null);
              setSubMenu(null);
              setL3Menu(null)
            }}
            className="flex items-center text-primary font-semibold"
            aria-label="Back"
          >
            <svg
              className="w-6 h-6"
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
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>
          <p
            className="font-semibold text-secondary"
            onClick={() => navigate(activeMenu?.path)}
          >
            {activeMenu?.menu}
          </p>
        </div>
        <ul className="py-5 space-y-5">
          {activeMenu?.children?.map((child) => (
            <li key={child.innerMenu}>
              <div className="flex justify-between items-center gap-1">
                <p
                  onClick={() => {
                    setShowMobileMenu(false);
                    navigate(child?.path)
                  }}
                  className={`${
                    subMenu?.innerMenu === child.innerMenu
                      ? "text-primary font-semibold"
                      : "rotate-0 text-black hover:text-secondary font-medium"
                  } py-1`}
                >
                  {child?.innerMenu}
                </p>
                {child?.children?.length > 0 && (
                  <button
                    onClick={() =>
                      setSubMenu((prevMenu) =>
                        prevMenu?.innerMenu === child?.innerMenu ? null : child
                      )
                    }
                    className="flex items-center p-1"
                  >
                    <svg
                      className={`${
                        subMenu?.innerMenu === child.innerMenu
                          ? "rotate-180 text-primary"
                          : "rotate-270 text-black"
                      } duration-300 w-5 h-5 dark:text-white`}
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
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {subMenu?.innerMenu === child.innerMenu && (
                <ul className={`ml-3`}>
                  {subMenu?.children?.map((lastChild) => (
                    <li
                      key={lastChild.name}
                      className="py-2.5"
                    >
                      <div className="flex justify-between items-center">
                      <p
                        onClick={() => {
                          setShowMobileMenu(false);
                          navigate(lastChild?.path)
                        }}
                      >
                        {lastChild.name}
                      </p>
                      {lastChild?.children?.length > 0 && (
                  <button
                    onClick={() =>
                      setL3Menu((prevMenu) =>
                        prevMenu?.name === lastChild?.name ? null : lastChild
                      )
                    }
                    className="flex items-center p-1"
                  >
                    <svg
                      className={`${
                        L3Menu?.name === lastChild.name
                          ? "rotate-180 text-primary"
                          : "rotate-270 text-black"
                      } duration-300 w-5 h-5 dark:text-white`}
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
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </button>
                
                )}
                  </div>
                     {
                        L3Menu?.name === lastChild?.name && (
                          <ul className={`ml-3 py-3`}>
                            {
                              L3Menu?.children?.map((lastItem) => (
                                <li key={lastItem?.name}
                                className="py-2.5 hover:text-secondary "
                                >
                                  <p
                                   onClick={() => {
                                    setShowMobileMenu(false);
                                    navigate(lastItem?.path)
                                  }}
                                  >{lastItem?.name}</p>
                                </li>
                              ))
                            }
                          </ul>
                        )
                     }
                    </li>
                  ))}
                </ul>
                
              )}
            
            </li>
          ))}
        </ul>
        <div className="text-center mb-10 py-10">
          <button
            className="bg-secondary rounded-md py-2 px-20 text-white font-medium font-raleway"
            onClick={() => {
              setShowMobileMenu(false);
              navigate("/contact")
            }}
          >
           Discuss
          </button>
        </div>
      </div>
      {/* }  */}
    </div>
  );
}

export default MobileMenu