const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_IMAGE = path.join(__dirname, '../public/favicon/pressure_washing_los_angeles.png');
const FAVICON_DIR = path.join(__dirname, '../public/favicon');

// Create the directory if it doesn't exist
if (!fs.existsSync(FAVICON_DIR)) {
  fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

async function generateFavicons() {
  console.log('Generating favicons from source:', SOURCE_IMAGE);

  try {
    // Generate favicon.ico (16x16 and 32x32)
    await sharp(SOURCE_IMAGE)
      .resize(32, 32)
      .toFile(path.join(FAVICON_DIR, 'favicon-32x32.png'));
    
    console.log('Created favicon-32x32.png');

    await sharp(SOURCE_IMAGE)
      .resize(16, 16)
      .toFile(path.join(FAVICON_DIR, 'favicon-16x16.png'));
    
    console.log('Created favicon-16x16.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(SOURCE_IMAGE)
      .resize(180, 180)
      .toFile(path.join(FAVICON_DIR, 'apple-touch-icon.png'));
    
    console.log('Created apple-touch-icon.png');

    // Generate Android icons
    await sharp(SOURCE_IMAGE)
      .resize(192, 192)
      .toFile(path.join(FAVICON_DIR, 'android-chrome-192x192.png'));
    
    console.log('Created android-chrome-192x192.png');

    await sharp(SOURCE_IMAGE)
      .resize(512, 512)
      .toFile(path.join(FAVICON_DIR, 'android-chrome-512x512.png'));
    
    console.log('Created android-chrome-512x512.png');

    console.log('Favicon generation complete!');
    console.log('Note: favicon.ico needs to be generated separately, you can use favicon-32x32.png and favicon-16x16.png to create it.');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 