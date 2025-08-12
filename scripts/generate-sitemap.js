const fs = require('fs');
const path = require('path');

// List of all LA County cities from next.config.js
const laCities = [
  'agoura-hills', 'alhambra', 'arcadia', 'artesia', 'avalon', 'azusa', 'baldwin-park', 
  'bell', 'bell-gardens', 'bellflower', 'beverly-hills', 'bradbury', 'burbank', 'calabasas', 
  'carson', 'cerritos', 'claremont', 'commerce', 'compton', 'covina', 'cudahy', 'culver-city', 
  'diamond-bar', 'downey', 'duarte', 'el-monte', 'el-segundo', 'gardena', 'glendale', 'glendora', 
  'hawaiian-gardens', 'hawthorne', 'hermosa-beach', 'hidden-hills', 'huntington-park', 'industry', 
  'inglewood', 'irwindale', 'la-canada-flintridge', 'la-habra-heights', 'la-mirada', 'la-puente', 
  'la-verne', 'lakewood', 'lancaster', 'lawndale', 'lomita', 'long-beach', 'los-angeles', 'lynwood', 
  'malibu', 'manhattan-beach', 'maywood', 'monrovia', 'montebello', 'monterey-park', 'norwalk', 
  'palmdale', 'palos-verdes-estates', 'paramount', 'pasadena', 'pico-rivera', 'pomona', 'rancho-palos-verdes', 
  'redondo-beach', 'rolling-hills', 'rolling-hills-estates', 'rosemead', 'san-dimas', 'san-fernando', 
  'san-gabriel', 'san-marino', 'santa-clarita', 'santa-fe-springs', 'santa-monica', 'sierra-madre', 
  'signal-hill', 'south-el-monte', 'south-gate', 'south-pasadena', 'temple-city', 'torrance', 'vernon', 
  'walnut', 'west-covina', 'west-hollywood', 'westlake-village', 'whittier'
];

// Base URL of the website
const WEBSITE_URL = 'https://www.prontocleanz.com';
// Current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];

// Standard pages
const standardPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about/', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { url: '/locations/', priority: '0.9', changefreq: 'monthly' },
  { url: '/pressure-washing/', priority: '0.9', changefreq: 'weekly' },
  { url: '/power-washing/', priority: '0.9', changefreq: 'weekly' },
];

// Generate sitemap content
function generateSitemap() {
  // Start XML content
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add standard pages
  for (const page of standardPages) {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${WEBSITE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  }

  // Add city pages for both services
  for (const city of laCities) {
    // Pressure washing city page
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${WEBSITE_URL}/pressure-washing/${city}/</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.7</priority>\n`;
    sitemap += `  </url>\n`;

    // Power washing city page
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${WEBSITE_URL}/power-washing/${city}/</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.7</priority>\n`;
    sitemap += `  </url>\n`;
  }

  // Close XML
  sitemap += '</urlset>';
  
  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const filePath = path.join(__dirname, '../public/sitemap.xml');
  
  // Ensure the directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  
  // Write the file
  fs.writeFileSync(filePath, sitemap);
  
  console.log(`Sitemap generated at ${filePath}`);
  console.log(`Total URLs: ${standardPages.length + (laCities.length * 2)}`);
}

// Execute
writeSitemap(); 