import { lazy, Suspense } from 'react';
import Head from 'next/head';
import LoaderSpinner from '../src/Components/common-components/LoaderSpinner';

// Lazy load components for better performance
const LogoMarquee = lazy(() => import('../src/Components/common-components/LogoMarquee'));
const SubscribeForm = lazy(() => import('../src/Components/common-components/SubscribeForm'));
const Testimonials = lazy(() => import('../src/Components/common-components/Testimonials'));
const GlobalImprint = lazy(() => import('../src/Components/contact-components/GlobalImprint'));
const CorePillars = lazy(() => import('../src/Components/home-components/CorePillars'));
const DigitalJourney = lazy(() => import('../src/Components/home-components/DigitalJourney'));
const LifeandCarrer = lazy(() => import('../src/Components/home-components/LifeandCareer'));
const ResourceCenter = lazy(() => import('../src/Components/home-components/ResourceCenter'));
const SuccessStories = lazy(() => import('../src/Components/home-components/SuccessStories'));

// Import non-lazy components
import HomeBannerUpdated from '../src/Components/home-components/HomeBannerUpdated';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Trusted Partner in Digital Innovation & Digital Integration</title>
        <meta name="title" content="Trusted Partner in Digital Innovation & Digital Integration" />
        <meta name="description" content="Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation." />
        <meta name="keywords" content="digital innovation, digital transformation, agile tech, digital integration, business solutions" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://altumindglobal.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altumindglobal.com/" />
        <meta property="og:site_name" content="Altumindglobal.com" />
        <meta property="og:title" content="Trusted Partner in Digital Innovation & Digital Integration" />
        <meta property="og:description" content="Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation." />
        <meta property="og:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:type" content="image/jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="altumindglobal.com" />
        <meta property="twitter:url" content="https://altumindglobal.com/" />
        <meta property="twitter:title" content="Trusted Partner in Digital Innovation & Digital Integration" />
        <meta property="twitter:description" content="Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation." />
        <meta property="twitter:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Trusted Partner in Digital Innovation & Digital Integration",
              "description": "Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation.",
              "url": "https://altumindglobal.com/",
              "mainEntity": {
                "@type": "Organization",
                "name": "Altumind",
                "url": "https://altumindglobal.com",
                "description": "Digital innovation and transformation partner"
              }
            })
          }}
        />
      </Head>
      
      <div>
        <HomeBannerUpdated />
        
        <Suspense fallback={<LoaderSpinner />}>
          <CorePillars />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <DigitalJourney />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <SuccessStories />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <LogoMarquee />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <LifeandCarrer />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <ResourceCenter />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <GlobalImprint />
        </Suspense>
        
        <Suspense fallback={<LoaderSpinner />}>
          <SubscribeForm />
        </Suspense>
      </div>
    </>
  );
}

// This function gets called at build time for SSG
export async function getStaticProps() {
  return {
    props: {
      // Any props you want to pass to the page
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 3600 seconds (1 hour)
    revalidate: 3600,
  };
}