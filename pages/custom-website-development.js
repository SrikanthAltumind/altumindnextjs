import { generateSEOTags } from '../src/utils/pageHelpers';
import CustomWebDev from '../src/pages/CustomWebDev';

export default function CustomWebsiteDevelopmentPage() {
  const seoData = {
    title: 'Custom Website Development - Altumind | Tailored Web Solutions',
    description: 'Get custom website development services from Altumind. We create tailored web solutions that meet your specific business needs and drive growth.',
    keywords: 'custom website development, web development, tailored web solutions, business websites, custom web applications',
    url: 'https://altumindglobal.com/custom-website-development',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Website Development",
      "description": "Tailored web solutions for businesses",
      "url": "https://altumindglobal.com/custom-website-development",
      "provider": {
        "@type": "Organization",
        "name": "Altumind",
        "url": "https://altumindglobal.com"
      },
      "serviceType": "Web Development Services"
    }
  };

  return (
    <>
      {generateSEOTags(seoData)}
      <CustomWebDev />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  };
}