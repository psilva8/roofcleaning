const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const FAVICON_DIR = path.join(__dirname, '../public/favicon');
// For favicon.ico, we'll only use 32x32 to make it more visible
// Most modern browsers prefer the 32x32 size when displaying in tabs
const FAVICON_32 = path.join(FAVICON_DIR, 'favicon-32x32.png');
const FAVICON_ICO = path.join(FAVICON_DIR, 'favicon.ico');

async function generateFaviconIco() {
  console.log('Generating favicon.ico...');

  try {
    // Check if the PNG file exists
    if (!fs.existsSync(FAVICON_32)) {
      console.error('Error: favicon PNG file not found. Please run generate-favicons.js first.');
      process.exit(1);
    }

    // Read the PNG file
    const favicon32 = fs.readFileSync(FAVICON_32);

    // Convert to ICO - using only 32x32 size for better visibility
    const icoBuffer = await toIco([favicon32]);

    // Write the ICO file
    fs.writeFileSync(FAVICON_ICO, icoBuffer);

    console.log(`Created favicon.ico at ${FAVICON_ICO}`);
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
  }
}

generateFaviconIco(); 