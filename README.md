# Altumind - Next.js Website

This is the official website for Altumind, converted from a React (Vite) application to Next.js for better SEO, performance, and server-side rendering capabilities.

## 🚀 Features

- **Next.js 14** - Latest version with App Router support
- **Server-Side Rendering (SSR)** - Improved SEO and performance
- **Static Site Generation (SSG)** - Pre-rendered pages for better performance
- **SEO Optimized** - Comprehensive meta tags, structured data, and sitemaps
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Code splitting, lazy loading, and image optimization
- **TypeScript Support** - Written in JavaScript but ready for TypeScript migration

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd altumind-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── pages/                 # Next.js pages (file-based routing)
│   ├── _app.js           # Custom App component
│   ├── _document.js      # Custom Document component
│   ├── index.js          # Home page
│   ├── about.js          # About page
│   ├── services/         # Services pages
│   ├── industries/       # Industry pages
│   ├── portfolio.js      # Portfolio page
│   ├── career.js         # Career page
│   ├── contact.js        # Contact page
│   ├── privacy.js        # Privacy policy
│   ├── terms.js          # Terms of service
│   ├── 404.js            # Custom 404 page
│   ├── sitemap.xml.js    # Dynamic sitemap
│   └── robots.txt.js     # Dynamic robots.txt
├── src/                  # Source files
│   ├── Components/       # React components
│   ├── pages/            # Original page components
│   ├── assets/           # Static assets
│   ├── utils/            # Utility functions
│   ├── MetaData.js       # SEO metadata
│   └── index.css         # Global styles
├── public/               # Static files
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` file includes:
- Image optimization settings
- SEO optimizations
- Compression enabled
- Custom webpack configuration

### SEO Features
- **Meta Tags**: Comprehensive meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Dynamic robots.txt generation

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Static Export (if needed)
```bash
npm run build
npm run export
```

## 📊 SEO Optimizations

1. **Server-Side Rendering**: All pages are server-rendered for better SEO
2. **Meta Tags**: Each page has unique, optimized meta tags
3. **Structured Data**: JSON-LD schema markup for rich snippets
4. **Sitemap**: Automatically generated sitemap.xml
5. **Robots.txt**: Dynamic robots.txt file
6. **Image Optimization**: Next.js Image component for optimized images
7. **Performance**: Code splitting and lazy loading

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Theme switching capability
- **Custom Components**: Reusable UI components

## 📱 Performance

- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components lazy-loaded for better performance
- **Image Optimization**: Next.js Image component
- **Static Generation**: Pre-rendered pages where possible
- **Caching**: Optimized caching strategies

## 🔄 Migration from React (Vite)

Key changes made during the conversion:

1. **Routing**: Migrated from React Router to Next.js file-based routing
2. **Components**: Updated components to work with Next.js Link and router
3. **SEO**: Added comprehensive SEO optimization
4. **Build System**: Replaced Vite with Next.js build system
5. **Static Assets**: Moved to Next.js public directory structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Altumind.

## 📞 Support

For support, please contact the Altumind development team.

---

Built with ❤️ by the Altumind team using Next.js