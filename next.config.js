/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.altumindglobal.com'],
    unoptimized: false,
  },
  async redirects() {
    return [
      // Add any necessary redirects here
    ];
  },
  async rewrites() {
    return [
      // Add any necessary rewrites here
    ];
  },
  // Enable static export if needed
  // output: 'export',
  // trailingSlash: true,
  
  // SEO and performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Compression
  compress: true,
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
  
  // Custom webpack config if needed
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack modifications can go here
    return config;
  },
};

module.exports = nextConfig;