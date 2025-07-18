const EXTERNAL_DATA_URL = 'https://altumindglobal.com';

function generateSiteMap() {
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/portfolio',
    '/career',
    '/privacy',
    '/terms',
    '/industries',
    '/services/experience-design-services',
    '/services/digital-development-services',
    '/services/ai-services',
    '/services/quality-assurance-services',
    '/services/digital-marketing-services',
    '/services/data-analytics-services',
    '/services/operations-managed-services',
    '/services/digital-strategy-services',
    '/services/cloud-strategy-engineering-services',
    '/industries/bfsi-fintech',
    '/industries/healthcare',
    '/industries/edtech',
    '/industries/internet-saas',
    '/industries/digital-commerce',
    '/industries/green-sustainability',
    '/career/open-roles',
    '/career/life-at-altumind',
    '/about/about-altumind/mission-and-vision',
    '/about/about-altumind/leadership',
    '/about/about-altumind/alliance',
    '/about/about-altumind/community-engagement',
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map((page) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${page}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;