// import { createWriteStream } from 'fs';
// import { SitemapStream } from 'sitemap';
// import { routes } from './src/App.jsx';

// const generateSitemap = async () => {
//   const hostname = import.meta.env.VITE_APP_BASE_URL // Replace with your domain

//   // Create a writable stream to save the sitemap
//   const sitemapStream = new SitemapStream({ hostname });
//   const writeStream = createWriteStream('./public/sitemap.xml'); // Path to save sitemap.xml
//   sitemapStream.pipe(writeStream);

//   // Add all routes to the sitemap
//   routes.forEach((route) => {
//     sitemapStream.write(route);
//   });

//   // End the stream
//   sitemapStream.end();

//   // Log success message
//   console.log('Sitemap generated successfully!');
// };

// // Run the script
// generateSitemap();