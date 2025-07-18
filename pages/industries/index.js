import { generateSEOTags } from '../../src/utils/pageHelpers';
import Industry from '../../src/pages/Industry';

export default function IndustriesPage() {
  const seoData = {
    title: 'Industries - Altumind | Digital Solutions Across Sectors',
    description: 'Discover how Altumind provides tailored digital solutions across various industries including BFSI, Healthcare, EdTech, SaaS, Digital Commerce, and Sustainability.',
    keywords: 'industries, BFSI, healthcare, edtech, SaaS, digital commerce, sustainability, sector solutions',
    url: 'https://altumindglobal.com/industries',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Industries - Altumind",
      "description": "Digital solutions across various industries and sectors.",
      "url": "https://altumindglobal.com/industries",
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
      <Industry />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  };
}