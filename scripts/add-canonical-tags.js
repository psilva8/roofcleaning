const fs = require('fs');
const path = require('path');

// Pages that need canonical URLs
const pagesToFix = [
  '../src/app/about/page.tsx',
  '../src/app/power-washing/page.tsx',
  '../src/app/pressure-washing/page.tsx'
];

// Base URL of the website
const baseUrl = 'https://www.prontocleanz.com';

// Function to add canonical tags
async function addCanonicalTags() {
  console.log('Adding canonical tags to fix duplicate content issues...');
  
  for (const pagePath of pagesToFix) {
    const filePath = path.join(__dirname, pagePath);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping ${pagePath} - file does not exist`);
      continue;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Extract canonical URL from filepath
      const canonicalPath = pagePath
        .replace('../src/app', '')
        .replace('/page.tsx', '')
        .replace(/\/+$/, ''); // Remove trailing slashes
      
      const canonicalUrl = `${baseUrl}${canonicalPath}`;
      
      // Check if metadata is already exported
      if (content.includes('export const metadata')) {
        // Check if canonical is already in metadata
        if (content.includes('canonical:')) {
          // Update existing canonical
          const canonicalRegex = /canonical:\s*['"]([^'"]*)['"]/;
          content = content.replace(canonicalRegex, `canonical: "${canonicalUrl}"`);
        } else {
          // Add canonical to existing metadata
          const metadataEndIndex = content.indexOf('}', content.indexOf('export const metadata'));
          content = content.slice(0, metadataEndIndex) + 
            `  canonical: "${canonicalUrl}",\n` + 
            content.slice(metadataEndIndex);
        }
      } else {
        // Add new metadata export before the component
        const importEndIndex = content.lastIndexOf('import');
        const importBlockEndIndex = content.indexOf(';', importEndIndex) + 1;
        
        const metadataToAdd = `\nexport const metadata = {\n  canonical: "${canonicalUrl}",\n};\n\n`;
        
        content = content.slice(0, importBlockEndIndex) + metadataToAdd + content.slice(importBlockEndIndex);
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added canonical tag to ${pagePath}: ${canonicalUrl}`);
    } catch (error) {
      console.error(`❌ Error processing ${pagePath}:`, error);
    }
  }
  
  console.log('✅ Canonical tags have been added to all specified pages!');
}

// Run the function
addCanonicalTags().catch(console.error); 