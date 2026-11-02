import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, '..', 'out', 'sitemap.xml');
const BASE_URL = 'https://ukbplumbing.co.uk';

function validateSitemap() {
  const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  
  // Extract all <loc> tags
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const locs = [];
  let match;
  
  while ((match = locRegex.exec(content)) !== null) {
    locs.push(match[1]);
  }
  
  console.log(`Total URLs found: ${locs.length}`);
  
  // Check for duplicates
  const uniqueLocs = new Set(locs);
  const duplicates = locs.length - uniqueLocs.size;
  
  if (duplicates > 0) {
    console.error(`❌ Found ${duplicates} duplicate URLs`);
    const locCounts = {};
    locs.forEach(loc => {
      locCounts[loc] = (locCounts[loc] || 0) + 1;
    });
    Object.entries(locCounts).forEach(([loc, count]) => {
      if (count > 1) {
        console.error(`  Duplicate: ${loc} (${count} times)`);
      }
    });
  } else {
    console.log('✅ Zero duplicate URLs found');
  }
  
  // Check for malformed domains
  const malformedDomains = locs.filter(loc => !loc.startsWith(BASE_URL));
  
  if (malformedDomains.length > 0) {
    console.error(`❌ Found ${malformedDomains.length} URLs with malformed domains`);
    malformedDomains.forEach(loc => {
      console.error(`  Malformed: ${loc}`);
    });
  } else {
    console.log('✅ All URLs start with correct base URL');
  }
  
  // Check for any domain typos
  const domainErrors = locs.filter(loc => {
    return loc.includes('ukbukplumbing') || 
           loc.includes('ukbpublicukbplumbing') ||
           loc.includes('ukb-plumbing') ||
           !loc.startsWith('https://ukbplumbing.co.uk');
  });
  
  if (domainErrors.length > 0) {
    console.error(`❌ Found ${domainErrors.length} URLs with domain errors`);
    domainErrors.forEach(loc => {
      console.error(`  Domain error: ${loc}`);
    });
  } else {
    console.log('✅ No domain typos detected');
  }
  
  // Show sample URLs
  console.log('\nFirst 5 URLs:');
  locs.slice(0, 5).forEach(loc => console.log(`  ${loc}`));
  
  console.log('\nLast 5 URLs:');
  locs.slice(-5).forEach(loc => console.log(`  ${loc}`));
  
  return {
    total: locs.length,
    duplicates,
    malformedDomains: malformedDomains.length,
    domainErrors: domainErrors.length
  };
}

const results = validateSitemap();
console.log('\nValidation Summary:');
console.log(`  Total URLs: ${results.total}`);
console.log(`  Duplicates: ${results.duplicates}`);
console.log(`  Malformed domains: ${results.malformedDomains}`);
console.log(`  Domain errors: ${results.domainErrors}`);
