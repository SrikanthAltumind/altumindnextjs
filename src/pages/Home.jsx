import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async'
import LoaderSpinner from '../Components/common-components/LoaderSpinner';
const LogoMarquee = lazy(() => import('../Components/common-components/LogoMarquee'));
const SubscribeForm = lazy(() => import('../Components/common-components/SubscribeForm'));
const Testimonials = lazy(() => import('../Components/common-components/Testimonials'));
const GlobalImprint = lazy(() => import('../Components/contact-components/GlobalImprint'));
const CorePillars = lazy(() => import('../Components/home-components/CorePillars'));
const DigitalJourney = lazy(() => import('../Components/home-components/DigitalJourney'));
import HomeBannerUpdated from '../Components/home-components/HomeBannerUpdated';
const LifeandCarrer = lazy(() => import('../Components/home-components/LifeandCareer'));
const ResourceCenter = lazy(() => import('../Components/home-components/ResourceCenter'));
const SuccessStories = lazy(() => import('../Components/home-components/SuccessStories'));

const Home = () => {

    // const { pathname } = useLocation();
  
    // useEffect(() => {
    //   window.scrollTo(0,0);
    //   console.log("useeffect called")
    //   return () => {
    //     console.log("return block")
    //   }
    // }, [pathname]);
  return (
    <>
    <Helmet>
    {/* For SEO  */}
    {/* <!-- HTML Meta Tags -->  */}
    <title>Trusted Partner in Digital Innovation & Digital Integration</title> 
    <meta name="description" content="Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation."/> 
    
    {/* <!-- OG Meta Tags -->  */}
    <meta property="og:url" content="https://altumindglobal.com/"/>
    <meta property="og:site_name" content="Altumindglobal.com" />
    <meta property="og:type" content="website"/> 
    <meta property="og:title" content="Trusted Partner in Digital Innovation & Digital Integration"/> 
    <meta property="og:description" content="Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation."/> 
    <meta property="og:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="627"/>
    <meta property="og:image:type" content="image/jpg"/>
 
    
    {/* <!-- Twitter Meta Tags -->  */}
    <meta name="twitter:card" content="summary_large_image"/> 
    <meta property="twitter:domain" content="altumindglobal.com"/> 
    <meta property="twitter:url" content="https://altumindglobal.com/"/>
    <meta name="twitter:title" content="Trusted Partner in Digital Innovation & Digital Integration"/> 
    <meta name="twitter:description" content="Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation."/> 
    <meta name="twitter:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg"/>
    {/* canonical */}
    <link rel="canonical" href="https://altumindglobal.com" />
    <script type="application/ld+json">
    {` {"@context": "https://schema.org","@type": "Organization","name": "Altumind",
  "alternateName": "Altumind Digital","url": "https://altumindglobal.com/","logo": "https://cdn.altumindglobal.com/OG_image_sample_1_da398efc3b.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "8031405675",
    "contactType": "sales"
  },
  "sameAs": [
    "https://www.instagram.com/altumindglobal/",
    "https://www.linkedin.com/company/altumindglobal/",
    "https://www.facebook.com/AltumindGlobal",
    "https://x.com/altumind"
  ]}`}
   </script>
 
  </Helmet>
    <div className="dark:bg-darkTheme dark:text-white font-raleway lg:space-y-24 space-y-24 w-full">
      <HomeBannerUpdated />
      <Suspense fallback={<LoaderSpinner/>}>
      <DigitalJourney />
      <SuccessStories heading="Experiences That Inspire Innovation"/>
      <CorePillars />
      <GlobalImprint />
      <section className='space-y-16'>
        <div className="space-y-3 text-center font-raleway">
        <p className='custom-sub-heading'>Client Testimonials</p>
          {/* <p className="text-3xl lg:text-4xl uppercase">
            Resonating
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientGreen to-gradientBlue">
              {" "}
              Affirmations
            </span>
          </p> */}
          <p className='custom-gradient-text'>Resonating Affirmations</p>
        </div>
        <Testimonials />
      </section>
      <LogoMarquee />
      <ResourceCenter />
      <LifeandCarrer />
      <SubscribeForm />
      </Suspense>
    </div>
    </>
  );
}

export default Home