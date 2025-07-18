import { generateSEOTags } from '../src/utils/pageHelpers';
import Terms from '../src/pages/Terms';

export default function TermsPage() {
  const seoData = {
    title: 'Terms of Service - Altumind | Legal Terms & Conditions',
    description: 'Read Altumind\'s terms of service to understand the legal terms and conditions for using our digital services and website.',
    keywords: 'terms of service, legal terms, conditions, terms and conditions, user agreement',
    url: 'https://altumindglobal.com/terms',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - Altumind",
      "description": "Altumind's terms of service and legal conditions.",
      "url": "https://altumindglobal.com/terms",
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
      <Terms />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400, // Revalidate once per day
  };
}