import { generateSEOTags } from '../src/utils/pageHelpers';
import Privacy from '../src/pages/Privacy';

export default function PrivacyPage() {
  const seoData = {
    title: 'Privacy Policy - Altumind | Data Protection & Privacy',
    description: 'Read Altumind\'s privacy policy to understand how we collect, use, and protect your personal information and data.',
    keywords: 'privacy policy, data protection, personal information, GDPR, data security',
    url: 'https://altumindglobal.com/privacy',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Altumind",
      "description": "Altumind's privacy policy explaining data protection practices.",
      "url": "https://altumindglobal.com/privacy",
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
      <Privacy />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400, // Revalidate once per day
  };
}