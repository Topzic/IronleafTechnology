# SEO Scripts

This directory contains utility scripts for maintaining SEO-related files and configurations.

## Scripts

### `generate-sitemap.js`
Generates a dynamic sitemap.xml file based on the current pages and blog posts.

**Usage:**
```bash
npm run generate-sitemap
# or
node scripts/generate-sitemap.js
```

**What it does:**
- Automatically includes all static pages
- Adds all web developer location pages
- Includes all blog posts with their publication dates
- Sets appropriate priorities and change frequencies
- Outputs to `public/sitemap.xml`

**When to run:**
- After adding new pages
- After publishing new blog posts
- Before deploying to production
- Monthly maintenance

### `validate-seo.js`
Validates SEO-related files for common issues and best practices.

**Usage:**
```bash
npm run validate-seo
# or
node scripts/validate-seo.js
```

**What it validates:**
- sitemap.xml structure and format
- URL format and validity
- Presence of important pages
- Duplicate URLs
- Priority value ranges
- robots.txt structure
- Sitemap reference in robots.txt

**When to run:**
- After generating a new sitemap
- Before deploying changes
- As part of CI/CD pipeline
- Regular maintenance checks

## Configuration

### Blog Posts
Update the `blogPosts` array in `generate-sitemap.js` when adding new blog posts:

```javascript
const blogPosts = [
  { id: 1, date: '2025-10-10' },
  { id: 2, date: '2025-10-05' },
  // Add new posts here
];
```

### New Pages
For new static pages, update the `staticPages` array in `generate-sitemap.js`:

```javascript
const staticPages = [
  // Existing pages...
  { url: '/new-page', priority: '0.6', changefreq: 'monthly' },
];
```

### Location Pages
Add new location pages to the `locationPages` array:

```javascript
const locationPages = [
  // Existing locations...
  'web-developer-newcity',
];
```

## Integration

These scripts are integrated into the npm scripts in `package.json`:

- `npm run generate-sitemap` - Generate sitemap
- `npm run validate-seo` - Validate SEO files

Consider adding these to your deployment pipeline for automatic sitemap generation on production builds.