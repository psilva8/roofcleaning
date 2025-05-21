const fs = require('fs');
const path = require('path');

// List of LA County cities (same as in generate-city-schemas.js)
const losAngelesCities = [
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
const baseUrl = 'https://www.prontocleanz.com';

// Function to capitalize words (reusing from generate-city-schemas.js)
function capitalizeWords(str) {
  return str.split(' ').map(word => {
    if (word === 'la' || word === 'el') return word.toUpperCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Function to add metadata with canonicals to city pages
async function addCityCanonicalTags() {
  console.log('Adding canonical and alternate tags to city pages...');
  
  // Update pressure washing city pages
  for (const city of losAngelesCities) {
    const formattedCityName = capitalizeWords(city.replace(/-/g, ' '));
    const filePath = path.join(__dirname, `../src/app/pressure-washing/${city}/page.tsx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping pressure-washing/${city} - file does not exist`);
      continue;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const cityUrl = `${baseUrl}/pressure-washing/${city}`;
      const mainServiceUrl = `${baseUrl}/pressure-washing`;
      
      // Check if metadata is already exported
      if (content.includes('export const metadata')) {
        // Update existing metadata
        if (content.includes('canonical:')) {
          // Update existing canonical
          const canonicalRegex = /canonical:\s*['"]([^'"]*)['"]/;
          content = content.replace(canonicalRegex, `canonical: "${cityUrl}"`);
        } else {
          // Add canonical to existing metadata
          const metadataEndIndex = content.indexOf('}', content.indexOf('export const metadata'));
          content = content.slice(0, metadataEndIndex) + 
            `  canonical: "${cityUrl}",\n` + 
            `  alternates: {\n    canonical: "${cityUrl}",\n    types: {\n      'application/rss+xml': [\n        { url: "${mainServiceUrl}", title: "Pressure Washing Services" }\n      ]\n    }\n  },\n` + 
            content.slice(metadataEndIndex);
        }
      } else {
        // Add new metadata export before the component
        const importEndIndex = content.lastIndexOf('import');
        const importBlockEndIndex = content.indexOf(';', importEndIndex) + 1;
        
        const metadataToAdd = `\nexport const metadata = {\n  title: "Professional Pressure Washing Services in ${formattedCityName} | Pronto Cleanz",\n  description: "Expert pressure washing services in ${formattedCityName}. Residential & commercial solutions for houses, driveways, and more. Get a free quote today!",\n  canonical: "${cityUrl}",\n  alternates: {\n    canonical: "${cityUrl}",\n    types: {\n      'application/rss+xml': [\n        { url: "${mainServiceUrl}", title: "Pressure Washing Services" }\n      ]\n    }\n  },\n};\n\n`;
        
        content = content.slice(0, importBlockEndIndex) + metadataToAdd + content.slice(importBlockEndIndex);
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added canonical to pressure-washing/${city}`);
    } catch (error) {
      console.error(`❌ Error processing pressure-washing/${city}:`, error);
    }
  }
  
  // Update power washing city pages
  for (const city of losAngelesCities) {
    const formattedCityName = capitalizeWords(city.replace(/-/g, ' '));
    const filePath = path.join(__dirname, `../src/app/power-washing/${city}/page.tsx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping power-washing/${city} - file does not exist`);
      continue;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const cityUrl = `${baseUrl}/power-washing/${city}`;
      const mainServiceUrl = `${baseUrl}/power-washing`;
      
      // Check if metadata is already exported
      if (content.includes('export const metadata')) {
        // Update existing metadata
        if (content.includes('canonical:')) {
          // Update existing canonical
          const canonicalRegex = /canonical:\s*['"]([^'"]*)['"]/;
          content = content.replace(canonicalRegex, `canonical: "${cityUrl}"`);
        } else {
          // Add canonical to existing metadata
          const metadataEndIndex = content.indexOf('}', content.indexOf('export const metadata'));
          content = content.slice(0, metadataEndIndex) + 
            `  canonical: "${cityUrl}",\n` + 
            `  alternates: {\n    canonical: "${cityUrl}",\n    types: {\n      'application/rss+xml': [\n        { url: "${mainServiceUrl}", title: "Power Washing Services" }\n      ]\n    }\n  },\n` + 
            content.slice(metadataEndIndex);
        }
      } else {
        // Add new metadata export before the component
        const importEndIndex = content.lastIndexOf('import');
        const importBlockEndIndex = content.indexOf(';', importEndIndex) + 1;
        
        const metadataToAdd = `\nexport const metadata = {\n  title: "Professional Power Washing Services in ${formattedCityName} | Pronto Cleanz",\n  description: "Expert power washing services in ${formattedCityName}. Commercial & industrial solutions for business properties. Get a free quote today!",\n  canonical: "${cityUrl}",\n  alternates: {\n    canonical: "${cityUrl}",\n    types: {\n      'application/rss+xml': [\n        { url: "${mainServiceUrl}", title: "Power Washing Services" }\n      ]\n    }\n  },\n};\n\n`;
        
        content = content.slice(0, importBlockEndIndex) + metadataToAdd + content.slice(importBlockEndIndex);
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added canonical to power-washing/${city}`);
    } catch (error) {
      console.error(`❌ Error processing power-washing/${city}:`, error);
    }
  }
  
  console.log('✅ All city pages have been updated with canonical tags!');
}

// Run the function
addCityCanonicalTags().catch(console.error); 