const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const FAVICON_DIR = path.join(__dirname, '../public/favicon');
const FAVICON_16 = path.join(FAVICON_DIR, 'favicon-16x16.png');
const FAVICON_32 = path.join(FAVICON_DIR, 'favicon-32x32.png');
const FAVICON_ICO = path.join(FAVICON_DIR, 'favicon.ico');

async function generateFaviconIco() {
  console.log('Generating favicon.ico...');

  try {
    // Check if the PNG files exist
    if (!fs.existsSync(FAVICON_16) || !fs.existsSync(FAVICON_32)) {
      console.error('Error: favicon PNG files not found. Please run generate-favicons.js first.');
      process.exit(1);
    }

    // Read the PNG files
    const favicon16 = fs.readFileSync(FAVICON_16);
    const favicon32 = fs.readFileSync(FAVICON_32);

    // Convert to ICO
    const icoBuffer = await toIco([favicon16, favicon32]);

    // Write the ICO file
    fs.writeFileSync(FAVICON_ICO, icoBuffer);

    console.log(`Created favicon.ico at ${FAVICON_ICO}`);
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
  }
}

generateFaviconIco(); 