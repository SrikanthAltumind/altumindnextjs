import Head from 'next/head';

/**
 * Generate SEO meta tags for a page
 * @param {Object} seoData - SEO data object
 * @param {string} seoData.title - Page title
 * @param {string} seoData.description - Page description
 * @param {string} seoData.keywords - Page keywords
 * @param {string} seoData.url - Canonical URL
 * @param {string} seoData.type - Page type (default: 'website')
 * @param {string} seoData.image - OG image URL
 * @param {Object} seoData.structuredData - Structured data object
 */
export function generateSEOTags(seoData) {
  const {
    title,
    description,
    keywords,
    url,
    type = 'website',
    image = 'https://cdn.altumindglobal.com/og_Image_2.jpg',
    structuredData
  } = seoData;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Altumindglobal.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:type" content="image/jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="altumindglobal.com" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}

/**
 * Create a Next.js page component with SEO optimization
 * @param {React.Component} Component - The page component to render
 * @param {Object} seoData - SEO data object
 */
export function createSEOPage(Component, seoData) {
  return function SEOPage(props) {
    return (
      <>
        {generateSEOTags(seoData)}
        <Component {...props} />
      </>
    );
  };
}

/**
 * Generate static props for SSG with revalidation
 * @param {Object} props - Props to pass to the page
 * @param {number} revalidate - Revalidation time in seconds (default: 3600)
 */
export function generateStaticProps(props = {}, revalidate = 3600) {
  return {
    props,
    revalidate
  };
}