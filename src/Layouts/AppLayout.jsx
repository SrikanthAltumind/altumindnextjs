import { Outlet, useLocation, } from "react-router-dom";
import Footer from "../Components/common-components/Footer";
import Navbar from "../Components/common-components/Navbar";
import { createContext, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ThemeContext = createContext();




 
const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GoogleReCaptchaProvider
          scriptProps={{
            async: true,
            defer: true,
          }}
          reCaptchaKey={import.meta.env.VITE_APP_CAPTCHA_SITE_KEY}
        >
          <div className="dark:bg-black bg-white w-full">
            <main>
              <Navbar />
              <Outlet />
            </main>
            <Footer />
          </div>
        </GoogleReCaptchaProvider>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
};

export { AppLayout, ThemeContext };
