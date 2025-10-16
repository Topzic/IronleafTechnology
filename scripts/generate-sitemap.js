#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for Ironleaf Technology
 * Generates sitemap.xml based on pages and blog posts
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ironleaftechnology.com';

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'monthly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/portfolio', priority: '0.7', changefreq: 'monthly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/support', priority: '0.7', changefreq: 'monthly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

// Web developer location pages
const locationPages = [
  'web-developer-peterborough',
  'web-developer-ottawa',
  'web-developer-belleville',
  'web-developer-toronto',
  'web-developer-kawarthalakes',
  'web-developer-kingston',
  'web-developer-lindsay',
  'web-developer-ajax',
  'web-developer-cobourg',
  'web-developer-hamilton',
  'web-developer-london',
  'web-developer-oshawa',
  'web-developer-scarborough',
  'web-developer-whitby',
  'web-developer-windsor',
];

// Blog posts data (should match the data in pages/blog.js)
const blogPosts = [
  { id: 1, date: '2025-10-10' },
  { id: 2, date: '2025-10-05' },
  { id: 3, date: '2025-09-28' },
  { id: 4, date: '2025-09-20' },
  { id: 5, date: '2025-10-12' },
  { id: 6, date: '2025-10-15' },
];

function formatDate(dateString) {
  return dateString;
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add location pages
  locationPages.forEach(location => {
    sitemap += `  <url>
    <loc>${BASE_URL}/${location}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    sitemap += `  <url>
    <loc>${BASE_URL}/blog/${post.id}</loc>
    <lastmod>${formatDate(post.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  });

  sitemap += '</urlset>';

  return sitemap;
}

function main() {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

  try {
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully!');
    console.log(`📄 Sitemap saved to: ${sitemapPath}`);
    console.log(`📊 Total URLs: ${staticPages.length + locationPages.length + blogPosts.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateSitemap };