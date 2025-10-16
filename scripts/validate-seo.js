#!/usr/bin/env node

/**
 * Sitemap Validator for Ironleaf Technology
 * Validates sitemap.xml for common SEO issues
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = 'https://ironleaftechnology.com';

function validateSitemap() {
  console.log('🔍 Validating sitemap.xml...\n');

  // Check if sitemap exists
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ sitemap.xml not found!');
    return false;
  }

  try {
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');

    // Basic XML validation
    if (!sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.error('❌ Invalid XML declaration');
      return false;
    }

    if (!sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      console.error('❌ Invalid sitemap namespace');
      return false;
    }

    // Extract URLs from sitemap
    const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) {
      console.error('❌ No URLs found in sitemap');
      return false;
    }

    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
    console.log(`📊 Found ${urls.length} URLs in sitemap`);

    // Validate URL format
    let validUrls = 0;
    let invalidUrls = 0;

    urls.forEach(url => {
      if (url.startsWith(BASE_URL)) {
        validUrls++;
      } else {
        invalidUrls++;
        console.warn(`⚠️  Invalid URL format: ${url}`);
      }
    });

    console.log(`✅ Valid URLs: ${validUrls}`);
    if (invalidUrls > 0) {
      console.log(`❌ Invalid URLs: ${invalidUrls}`);
    }

    // Check for required pages
    const requiredPages = ['/', '/contact', '/services', '/about'];
    const missingPages = requiredPages.filter(page => !urls.includes(BASE_URL + page));

    if (missingPages.length > 0) {
      console.warn('⚠️  Missing important pages:');
      missingPages.forEach(page => console.warn(`   - ${page}`));
    } else {
      console.log('✅ All important pages present');
    }

    // Check for duplicate URLs
    const uniqueUrls = new Set(urls);
    if (uniqueUrls.size !== urls.length) {
      console.error('❌ Duplicate URLs found in sitemap');
      return false;
    } else {
      console.log('✅ No duplicate URLs');
    }

    // Validate priority values
    const priorityMatches = sitemapContent.match(/<priority>(.*?)<\/priority>/g);
    if (priorityMatches) {
      const invalidPriorities = priorityMatches.filter(match => {
        const priority = parseFloat(match.replace(/<\/?priority>/g, ''));
        return priority < 0 || priority > 1;
      });

      if (invalidPriorities.length > 0) {
        console.error('❌ Invalid priority values found (must be between 0.0 and 1.0)');
        return false;
      } else {
        console.log('✅ All priority values are valid');
      }
    }

    console.log('\n🎉 Sitemap validation completed successfully!');
    return true;

  } catch (error) {
    console.error('❌ Error reading sitemap:', error.message);
    return false;
  }
}

function checkRobotsTxt() {
  console.log('\n🔍 Checking robots.txt...\n');

  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');

  if (!fs.existsSync(robotsPath)) {
    console.error('❌ robots.txt not found!');
    return false;
  }

  try {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    // Check for sitemap reference
    if (!robotsContent.includes('Sitemap:')) {
      console.warn('⚠️  No sitemap reference found in robots.txt');
    } else {
      console.log('✅ Sitemap reference found');
    }

    // Check for user-agent directive
    if (!robotsContent.includes('User-agent:')) {
      console.error('❌ No User-agent directive found');
      return false;
    } else {
      console.log('✅ User-agent directive present');
    }

    console.log('🎉 robots.txt validation completed!');
    return true;

  } catch (error) {
    console.error('❌ Error reading robots.txt:', error.message);
    return false;
  }
}

function main() {
  const sitemapValid = validateSitemap();
  const robotsValid = checkRobotsTxt();

  if (sitemapValid && robotsValid) {
    console.log('\n🎉 All SEO files validated successfully!');
    process.exit(0);
  } else {
    console.log('\n❌ Validation failed. Please fix the issues above.');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}