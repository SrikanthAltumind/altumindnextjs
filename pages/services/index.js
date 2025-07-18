import Head from 'next/head';
import Services from '../../src/pages/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Digital Services - Altumind | Comprehensive Business Solutions</title>
        <meta name="title" content="Digital Services - Altumind | Comprehensive Business Solutions" />
        <meta name="description" content="Explore Altumind's comprehensive digital services including web development, mobile apps, AI automation, data analytics, and digital transformation solutions." />
        <meta name="keywords" content="digital services, web development, mobile apps, AI automation, data analytics, digital transformation" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://altumindglobal.com/services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altumindglobal.com/services" />
        <meta property="og:site_name" content="Altumindglobal.com" />
        <meta property="og:title" content="Digital Services - Altumind | Comprehensive Business Solutions" />
        <meta property="og:description" content="Explore Altumind's comprehensive digital services including web development, mobile apps, AI automation, data analytics, and digital transformation solutions." />
        <meta property="og:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:type" content="image/jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="altumindglobal.com" />
        <meta property="twitter:url" content="https://altumindglobal.com/services" />
        <meta property="twitter:title" content="Digital Services - Altumind | Comprehensive Business Solutions" />
        <meta property="twitter:description" content="Explore Altumind's comprehensive digital services including web development, mobile apps, AI automation, data analytics, and digital transformation solutions." />
        <meta property="twitter:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Digital Services - Altumind",
              "description": "Comprehensive digital services including web development, mobile apps, AI automation, data analytics, and digital transformation solutions.",
              "url": "https://altumindglobal.com/services",
              "provider": {
                "@type": "Organization",
                "name": "Altumind",
                "url": "https://altumindglobal.com"
              },
              "serviceType": "Digital Transformation Services"
            })
          }}
        />
      </Head>
      
      <Services />
    </>
  );
}

// This function gets called at build time for SSG
export async function getStaticProps() {
  return {
    props: {
      // Any props you want to pass to the page
    },
    revalidate: 3600, // Revalidate every hour
  };
}