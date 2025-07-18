import Head from 'next/head';
import AboutUs from '../src/pages/AboutUs';

export default function AboutPage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Altumind - Digital Innovation & Transformation Leader</title>
        <meta name="title" content="About Altumind - Digital Innovation & Transformation Leader" />
        <meta name="description" content="Learn about Altumind's mission to empower businesses with cutting-edge digital innovation and transformation solutions. Discover our story, values, and expertise." />
        <meta name="keywords" content="about altumind, digital innovation company, transformation leader, our story, mission, values" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://altumindglobal.com/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altumindglobal.com/about" />
        <meta property="og:site_name" content="Altumindglobal.com" />
        <meta property="og:title" content="About Altumind - Digital Innovation & Transformation Leader" />
        <meta property="og:description" content="Learn about Altumind's mission to empower businesses with cutting-edge digital innovation and transformation solutions. Discover our story, values, and expertise." />
        <meta property="og:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:type" content="image/jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="altumindglobal.com" />
        <meta property="twitter:url" content="https://altumindglobal.com/about" />
        <meta property="twitter:title" content="About Altumind - Digital Innovation & Transformation Leader" />
        <meta property="twitter:description" content="Learn about Altumind's mission to empower businesses with cutting-edge digital innovation and transformation solutions. Discover our story, values, and expertise." />
        <meta property="twitter:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Altumind",
              "description": "Learn about Altumind's mission to empower businesses with cutting-edge digital innovation and transformation solutions.",
              "url": "https://altumindglobal.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "Altumind",
                "url": "https://altumindglobal.com",
                "description": "Digital innovation and transformation leader"
              }
            })
          }}
        />
      </Head>
      
      <AboutUs />
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