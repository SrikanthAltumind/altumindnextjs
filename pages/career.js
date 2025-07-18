import { generateSEOTags } from '../src/utils/pageHelpers';
import Career from '../src/pages/Career';

export default function CareerPage() {
  const seoData = {
    title: 'Careers at Altumind | Join Our Digital Innovation Team',
    description: 'Join Altumind\'s growing team of digital experts. Explore career opportunities in web development, mobile apps, AI, data analytics, and digital transformation.',
    keywords: 'careers, jobs, digital innovation careers, web development jobs, mobile app careers, AI jobs, data analytics careers',
    url: 'https://altumindglobal.com/career',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "name": "Careers at Altumind",
      "description": "Join Altumind's growing team of digital experts.",
      "url": "https://altumindglobal.com/career",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Altumind",
        "url": "https://altumindglobal.com"
      }
    }
  };

  return (
    <>
      {generateSEOTags(seoData)}
      <Career />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  };
}