import { useContext } from "react";
import { ThemeContext } from "../../Layouts/AppLayout";

const ToggleTheme = () => {

    const {setTheme} = useContext(ThemeContext)

    const Toggle = () => {
        setTheme(prevTheme=> prevTheme === "dark" ? "light" : "dark");
    }

  return (
    <>
    <button onClick={Toggle} className=" relative shadow-sm flex p-[1px] gap-2 items-center bg-[#102235] rounded-full">
<svg className=" dark:z-10 w-6 h-6  dark:ml-[2px] text-[#DD5143] dark:text-[#EE9B1F] transition-colors duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
</svg>
<svg className="dark:z-0 z-10 w-6 h-6  dark:mr-0 mr-[2px] text-white  transition-colors duration-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
</svg>
<div className='w-6 h-6 shadow-sm bg-white rounded-full absolute dark:translate-x-[34px] transition-all duration-300 '></div>
</button>
</>
  )
}

export default ToggleTheme