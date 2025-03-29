import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/common-components/Footer";
import Navbar from "../Components/common-components/Navbar";
import { createContext, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ThemeContext = createContext();

const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();
  const queryClient = new QueryClient()
  // const [loadCaptcha, setLoadCaptcha] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoadCaptcha(true);
  //   } ,3000);
  //   return () => clearTimeout(timer);
  // }, []);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* {loadCaptcha ? (
          <GoogleReCaptchaProvider
            scriptProps={{
              async: true,
              defer: true,
              // explicitRender: false
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
          </GoogleReCaptchaProvider> */}
        {/* ) : ( */}
        <QueryClientProvider client={queryClient}>
          <div className="dark:bg-black bg-white w-full">
            <main>
              <Navbar />
              <Outlet />
            </main>
            <Footer />
          </div>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
        {/* )} */}
      </ThemeContext.Provider>
    </HelmetProvider>
  );
};

export { AppLayout, ThemeContext };
