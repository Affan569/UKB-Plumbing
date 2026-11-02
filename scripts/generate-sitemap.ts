
import { allAreas, slugify } from '@/data/allAreasData'
import { writeFileSync } from 'fs'
import { join } from 'path'
 
const base = 'https://www.ukbplumbing.co.uk'
 
const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/portfolio', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blogs', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/areas-we-cover', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/booking', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' },
]
 
const services = [
  '247-emergency-plumber',
  'blocked-drains-and-jetting',
  'boiler-installation-and-upgrades',
  'boiler-repair-and-breakdown',
  'cp12-landlord-safety-certificates',
  'gas-safe-inspection-and-repairs',
  'radiator-and-heating-repairs',
  'water-leak-repairs-and-detection',
]
 
// Safety net in case allAreasData is ever missing an entry or a slug mismatches
const forcedPaths = [
  '/areas-we-cover/southampton/sholing',
  '/areas-we-cover/bournemouth/new-milton',
  '/areas-we-cover/southampton/millbrook',
  '/areas-we-cover/southampton/weston',
  '/areas-we-cover/southampton/romsey',
  '/areas-we-cover/portsmouth/havant',
  '/areas-we-cover/new-forest/lyndhurst',
  '/areas-we-cover/new-forest/fordingbridge',
  '/booking',
  '/areas-we-cover/southampton/bitterne',
  '/areas-we-cover/southampton/shirley',
  '/areas-we-cover/southampton/hamble-le-rice',
  '/areas-we-cover/southampton/portswood',
  '/areas-we-cover/southampton/chandlers-ford',
  '/areas-we-cover/southampton/bassett',
  '/areas-we-cover/southampton/lordswood',
  '/areas-we-cover/southampton/redbridge',
  '/areas-we-cover/southampton/highfield',
  '/areas-we-cover/southampton/st-denys',
  '/areas-we-cover/southampton/lordshill',
  '/areas-we-cover/bournemouth/lymington',
  '/areas-we-cover/bournemouth/wimborne',
  '/areas-we-cover/andover/upper-clatford',
  '/areas-we-cover/andover/stockbridge',
  '/areas-we-cover/andover/wherwell',
  '/areas-we-cover/andover/goodworth-clatford',
  '/areas-we-cover/andover/andover-down',
  '/areas-we-cover/andover/charlton',
  '/areas-we-cover/portsmouth/bognor-regis',
  '/areas-we-cover/bournemouth/christchurch',
  '/areas-we-cover/southampton/west-end',
  '/areas-we-cover/southampton/hedge-end',
  '/areas-we-cover/portsmouth',
]
 
const cityPagesPaths = [
  '/areas-we-cover/southampton',
  '/areas-we-cover/bournemouth',
  '/areas-we-cover/andover',
  '/areas-we-cover/new-forest',
  '/areas-we-cover/portsmouth',
  '/areas-we-cover/salisbury',
  '/areas-we-cover/winchester',
  '/areas-we-cover/poole',
  '/areas-we-cover/eastleigh',
]
 
function buildUrlEntries() {
  const validAreas = allAreas.filter((area: any) => area?.slug || area?.name)
 
  const entries: { url: string; priority: number; changefreq: string }[] = []
 
  // Static pages
  staticPages.forEach((p) => {
    entries.push({ url: `${base}${p.path}`, priority: p.priority, changefreq: p.changeFrequency })
  })
 
  // Service pages per area
  validAreas.forEach((area: any) => {
    const areaSlug = slugify(area.slug || area.name || '')
    if (!areaSlug) return
    services.forEach((service) => {
      entries.push({ url: `${base}/services/${areaSlug}/${service}`, priority: 0.7, changefreq: 'monthly' })
    })
  })
 
  // City + area pages
  validAreas.forEach((area: any) => {
    const areaSlug = slugify(area.slug || area.name || '')
    const citySlug = slugify(area.city || 'southampton')
    entries.push({ url: `${base}/areas-we-cover/${citySlug}/${areaSlug}`, priority: 0.7, changefreq: 'monthly' })
  })
 
  // City-level pages
  cityPagesPaths.forEach((path) => {
    entries.push({ url: `${base}${path}`, priority: 0.7, changefreq: 'monthly' })
  })
 
  // Forced/safety-net pages
  forcedPaths.forEach((path) => {
    entries.push({ url: `${base}${path}`, priority: 0.7, changefreq: 'monthly' })
  })
 
  // Deduplicate
  const seen = new Set<string>()
  const deduped = entries.filter((e) => {
    if (seen.has(e.url)) return false
    seen.add(e.url)
    return true
  })
 
  return deduped
}
 
function generateSitemapXml() {
  const deduped = buildUrlEntries()
  const lastmod = new Date().toISOString()
 
  const urlsXml = deduped
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n')
 
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`
}
 
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/
 
Sitemap: ${base}/sitemap.xml
`
}
 
const publicDir = join(process.cwd(), 'public')
 
writeFileSync(join(publicDir, 'sitemap.xml'), generateSitemapXml(), 'utf-8')
writeFileSync(join(publicDir, 'robots.txt'), generateRobotsTxt(), 'utf-8')
 
const count = buildUrlEntries().length
console.log(`✅ sitemap.xml (${count} URLs) and robots.txt generated in /public`)