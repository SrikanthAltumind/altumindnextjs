import { generateSEOTags } from '../src/utils/pageHelpers';
import Portfolio from '../src/pages/Portfolio';

export default function PortfolioPage() {
  const seoData = {
    title: 'Portfolio - Altumind | Our Digital Success Stories',
    description: 'Explore Altumind\'s portfolio of successful digital transformation projects, web development, mobile apps, and innovative solutions across various industries.',
    keywords: 'portfolio, success stories, digital transformation projects, web development, mobile apps, case studies',
    url: 'https://altumindglobal.com/portfolio',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio - Altumind",
      "description": "Explore Altumind's portfolio of successful digital transformation projects.",
      "url": "https://altumindglobal.com/portfolio",
      "mainEntity": {
        "@type": "Organization",
        "name": "Altumind",
        "url": "https://altumindglobal.com"
      }
    }
  };

  return (
    <>
      {generateSEOTags(seoData)}
      <Portfolio />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  };
}