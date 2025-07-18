import { useEffect, useState, createContext } from 'react';
import { useRouter } from 'next/router';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

// Import global styles
import '../src/index.css';

// Create theme context
const ThemeContext = createContext();

// Import common components
import Navbar from '../src/Components/common-components/NavbarNextJS';
import Footer from '../src/Components/common-components/Footer';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Theme handling
  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <QueryClientProvider client={queryClient}>
          <div className="dark:bg-black bg-white w-full">
            <main>
              <Navbar />
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </QueryClientProvider>
        
        <CookieConsent
          location="bottom"
          buttonText="Accept Cookies"
          enableDeclineButton
          declineButtonText="Decline"
          cookieName="cookieConsent"
          style={{ background: '#2B373B' }}
          buttonStyle={{ 
            background: '#DD5143', 
            color: '#ffffff', 
            fontSize: '14px', 
            fontWeight: '500', 
            border: '1px solid #DD5143',  
            borderRadius: '4px', 
            fontFamily: 'raleway'
          }}
          declineButtonStyle={{ 
            background: 'transparent', 
            border: '1px solid #DD5143',  
            color: '#DD5143', 
            fontSize: '14px', 
            fontWeight: '600', 
            borderRadius: '4px', 
            fontFamily: 'raleway'
          }}
          expires={7}
        >
          <div className="font-montserrat py-3">
            <p className="text-xs sm:text-sm px-1">
              We use cookies to enhance your experience with Altumind. These include session cookies to support seamless navigation. We do not store any user-sensitive data in cookies. By clicking "Accept Cookies," you consent to our use of cookies as described. For detailed information on how we use cookies, 
              please review our{' '}
              <Link href="/terms" className="underline underline-offset-4">
                Terms Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy Statement.
              </Link> 
            </p>
          </div>
        </CookieConsent>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export { ThemeContext };