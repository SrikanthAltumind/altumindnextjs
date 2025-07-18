import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/Altumind_favicon.ico" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://cdn.altumindglobal.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Additional meta tags that are consistent across all pages */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Schema.org markup for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Altumind",
              "url": "https://altumindglobal.com",
              "logo": "https://cdn.altumindglobal.com/og_Image_2.jpg",
              "description": "Altumind empowers businesses with future-ready digital innovation & agile tech building smart, connected ecosystems for seamless digital transformation.",
              "sameAs": [
                // Add social media URLs here
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}