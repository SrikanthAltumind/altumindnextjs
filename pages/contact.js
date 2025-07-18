import Head from 'next/head';
import Contact from '../src/pages/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact Us - Altumind | Get in Touch for Digital Solutions</title>
        <meta name="title" content="Contact Us - Altumind | Get in Touch for Digital Solutions" />
        <meta name="description" content="Contact Altumind for digital innovation and transformation solutions. Get in touch with our experts to discuss your business needs and digital strategy." />
        <meta name="keywords" content="contact altumind, digital solutions, business consultation, get in touch" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://altumindglobal.com/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altumindglobal.com/contact" />
        <meta property="og:site_name" content="Altumindglobal.com" />
        <meta property="og:title" content="Contact Us - Altumind | Get in Touch for Digital Solutions" />
        <meta property="og:description" content="Contact Altumind for digital innovation and transformation solutions. Get in touch with our experts to discuss your business needs and digital strategy." />
        <meta property="og:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:type" content="image/jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="altumindglobal.com" />
        <meta property="twitter:url" content="https://altumindglobal.com/contact" />
        <meta property="twitter:title" content="Contact Us - Altumind | Get in Touch for Digital Solutions" />
        <meta property="twitter:description" content="Contact Altumind for digital innovation and transformation solutions. Get in touch with our experts to discuss your business needs and digital strategy." />
        <meta property="twitter:image" content="https://cdn.altumindglobal.com/og_Image_2.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Us - Altumind",
              "description": "Contact Altumind for digital innovation and transformation solutions.",
              "url": "https://altumindglobal.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "Altumind",
                "url": "https://altumindglobal.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Service",
                  "availableLanguage": "English"
                }
              }
            })
          }}
        />
      </Head>
      
      <Contact />
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