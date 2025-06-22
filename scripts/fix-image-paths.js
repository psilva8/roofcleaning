const fs = require('fs');
const path = require('path');

// Function to recursively find all files with specific extension
function findFiles(dir, extension) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Fix gutter cleaning image paths
function fixGutterCleaningImages() {
  console.log('🔧 Fixing gutter cleaning image paths...');
  
  // Find all gutter cleaning service pages
  const gutterPages = findFiles('src/app/services/gutter-cleaning', '.tsx');
  
  for (const filePath of gutterPages) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace the old image path with the new one
      const updated = content.replace(
        '/images/gutter cleaning.jpg',
        '/images/gutter-cleaning.jpg'
      );
      
      if (updated !== content) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${filePath}:`, error);
    }
  }
}

// Fix deck and patio cleaning image paths
function fixDeckPatioCleaningImages() {
  console.log('🔧 Fixing deck and patio cleaning image paths...');
  
  // Find all deck and patio cleaning service pages
  const deckPages = findFiles('src/app/services/deck-and-patio-cleaning', '.tsx');
  
  for (const filePath of deckPages) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace the old image path with the new one
      const updated = content.replace(
        '/images/deck and pato cleaning.jpg',
        '/images/deck-and-patio-cleaning.jpg'
      );
      
      if (updated !== content) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${filePath}:`, error);
    }
  }
}

// Run the fixes
console.log('🚀 Starting image path fixes...');
fixGutterCleaningImages();
fixDeckPatioCleaningImages();
console.log('✅ All image paths have been fixed!'); 