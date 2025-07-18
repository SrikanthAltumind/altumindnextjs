import { generateSEOTags } from '../src/utils/pageHelpers';
import Error404 from '../src/pages/Error404';

export default function Custom404() {
  const seoData = {
    title: '404 - Page Not Found | Altumind',
    description: 'The page you are looking for could not be found. Return to Altumind homepage or explore our digital services.',
    keywords: '404, page not found, error page',
    url: 'https://altumindglobal.com/404',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "404 - Page Not Found",
      "description": "Page not found error page",
      "url": "https://altumindglobal.com/404"
    }
  };

  return (
    <>
      {generateSEOTags(seoData)}
      <Error404 />
    </>
  );
}