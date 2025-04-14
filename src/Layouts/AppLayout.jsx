import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/common-components/Footer";
import Navbar from "../Components/common-components/Navbar";
import { createContext, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CookieConsent from "react-cookie-consent";
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
  //   } ,4000);
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
          </GoogleReCaptchaProvider>
        ) : ( */}
        <QueryClientProvider client={queryClient}>
          <div className="dark:bg-black bg-white w-full">
            <main>
              <Navbar />
              <Outlet />
            </main>
            <Footer />
          </div>
        </QueryClientProvider>
         {/* )}  */}
         <CookieConsent
          location="bottom"
          buttonText="Accept Cookies"
          enableDeclineButton
          declineButtonText="Decline"
          cookieName="cookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ background:'red', color: "#ffffff", fontSize: "15px" }}
          declineButtonStyle={{ background:'transparent', border:'1px solid red',  color: "red", fontSize: "15px", }}
          expires={7} // days
        >
          <div>
            <p className="text-xs sm:text-sm px-1"> We use cookies to enhance your experience with Altumind. These include session cookies to support seamless navigation. We do not store any user-sensitive data in cookies. By clicking "Accept Cookies," you consent to our use of cookies as described. For detailed information on how we use cookies, please review our Terms Policy and Privacy Statement.
            </p>
            <div className="flex gap-8 mt-1">
              <Link to="/privacy">
                <p className="border-b dark:border-white dark:font-normal border-black underline text-sm">
                  Privacy
                </p>
              </Link>
              <Link to="/terms">
                <p className="border-b dark:border-white dark:font-normal border-black  cursor-pointer underline text-sm">
                  Terms
                </p>
              </Link>
            </div>
        </div>
      </CookieConsent>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
};

export { AppLayout, ThemeContext };
