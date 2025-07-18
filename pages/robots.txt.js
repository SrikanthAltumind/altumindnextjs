function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://altumindglobal.com/sitemap.xml

# Disallow admin and private directories
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow all other content
Allow: /`;
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the robots.txt content
  const robotsTxt = generateRobotsTxt();

  res.setHeader('Content-Type', 'text/plain');
  // we send the robots.txt to the browser
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxt;