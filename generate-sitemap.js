import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ukbplumbing.co.uk';
const OUT_DIR = path.join(__dirname, '..', 'out');
const SITEMAP_PATH = path.join(__dirname, '..', 'out', 'sitemap.xml');
const PUBLIC_SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function convertFilePathToUrl(filePath) {
  // Remove the out/ prefix and .html extension
  const relativePath = filePath.replace(OUT_DIR, '').replace(/\\/g, '/');
  
  // Remove .html extension
  let urlPath = relativePath.replace(/\.html$/, '');
  
  // If it's index.html, make it the root
  if (urlPath === '/index') {
    urlPath = '';
  }
  
  // Build the full URL
  return `${BASE_URL}${urlPath}`;
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toISOString();
}

function generateSitemap() {
  const htmlFiles = getAllHtmlFiles(OUT_DIR);
  const urlSet = new Set();
  const urls = [];
  
  htmlFiles.forEach(filePath => {
    const url = convertFilePathToUrl(filePath);
    
    // Skip 404.html
    if (url.includes('/404')) {
      return;
    }
    
    // Deduplicate
    if (urlSet.has(url)) {
      console.warn(`Duplicate URL found: ${url}`);
      return;
    }
    
    urlSet.add(url);
    
    const stat = fs.statSync(filePath);
    const lastmod = formatDate(stat.mtimeMs);
    
    // Determine priority and changefreq based on URL pattern
    let priority = 0.7;
    let changefreq = 'monthly';
    
    if (url === BASE_URL) {
      priority = 1;
      changefreq = 'weekly';
    } else if (url.includes('/services')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (url.includes('/areas-we-cover')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (url.includes('/blogs')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (url.includes('/portfolio')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (url.includes('/privacy-policy') || url.includes('/terms-and-conditions')) {
      priority = 0.3;
      changefreq = 'yearly';
    } else if (url.includes('/booking')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    urls.push({ url, lastmod, changefreq, priority });
  });
  
  // Sort URLs for consistent output
  urls.sort((a, b) => a.url.localeCompare(b.url));
  
  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(({ url, lastmod, changefreq, priority }) => {
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  // Write sitemap to both out/ and public/
  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  fs.writeFileSync(PUBLIC_SITEMAP_PATH, xml, 'utf8');
  
  console.log(`Generated sitemap with ${urls.length} URLs`);
  console.log(`Sitemap written to: ${SITEMAP_PATH}`);
  console.log(`Sitemap copied to: ${PUBLIC_SITEMAP_PATH}`);
  
  return urls;
}

// Run the generation
const urls = generateSitemap();

// Print first 10 and last 10 URLs
console.log('\nFirst 10 URLs:');
urls.slice(0, 10).forEach(({ url, lastmod }) => {
  console.log(`  ${url} - ${lastmod}`);
});

console.log('\nLast 10 URLs:');
urls.slice(-10).forEach(({ url, lastmod }) => {
  console.log(`  ${url} - ${lastmod}`);
});
