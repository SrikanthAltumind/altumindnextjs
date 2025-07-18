import { generateSEOTags } from '../../src/utils/pageHelpers';
import BFSIAndFinance from '../../src/pages/BFSIAndFinance';
import { industriesMetaData } from '../../src/MetaData';

export default function BFSIFintechPage() {
  const metaData = industriesMetaData['bfsi-fintech'];
  
  const seoData = {
    title: metaData.title,
    description: metaData.description,
    keywords: 'BFSI, fintech, banking solutions, financial services, digital banking, financial technology',
    url: metaData.canonicalUrl,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "BFSI & Fintech Solutions",
      "description": metaData.description,
      "url": metaData.canonicalUrl,
      "provider": {
        "@type": "Organization",
        "name": "Altumind",
        "url": "https://altumindglobal.com"
      },
      "serviceType": "Financial Technology Solutions"
    }
  };

  return (
    <>
      {generateSEOTags(seoData)}
      <BFSIAndFinance />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  };
}