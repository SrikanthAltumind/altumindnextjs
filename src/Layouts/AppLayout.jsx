import { Outlet } from "react-router-dom";
import Footer from "../Components/common-components/Footer";
import Navbar from "../Components/common-components/Navbar";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const AppLayout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="dark:bg-black bg-white w-full">
        <main>
          <Navbar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export { AppLayout, ThemeContext };
