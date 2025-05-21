const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix image paths and handling
async function fixImagePaths() {
  console.log('Fixing image paths in components...');
  
  // Find all TSX files in the src directory
  const files = glob.sync('src/**/*.tsx');
  
  let updatedCount = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Replace img tags with explicit width and height
      content = content.replace(
        /<img\s+src="([^"]+)"\s+alt="([^"]+)"([^>]*)>/g,
        (match, src, alt, rest) => {
          // Check if the rest already contains width and height
          if (!rest.includes('width=') || !rest.includes('height=')) {
            return `<img src="${src}" alt="${alt}" width="800" height="600" ${rest}>`;
          }
          return match;
        }
      );
      
      // Replace relative image paths to ensure they have proper format for static export
      content = content.replace(
        /src="(\/images\/[^"]+)"/g,
        'src="$1"'
      );

      // Replace backgroundImage style with properly formatted path
      content = content.replace(
        /backgroundImage:\s*`[^`]*url\(\$\{([^}]+)\}\)`/g,
        (match, path) => {
          return `backgroundImage: \`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\${${path}})\``;
        }
      );
      
      // Update next/image components to use better quality and loading strategy
      content = content.replace(
        /<Image\s+src="([^"]+)"\s+alt="([^"]+)"([^>]*)>/g,
        (match, src, alt, rest) => {
          if (!rest.includes('quality=')) {
            rest = rest + ' quality={90}';
          }
          if (!rest.includes('loading=')) {
            rest = rest + ' loading="eager"';
          }
          return `<Image src="${src}" alt="${alt}"${rest}>`;
        }
      );
      
      // Update Hero component to use higher quality image
      content = content.replace(
        /backgroundImage="\/images\/hero-bg.jpg"/g,
        'backgroundImage="/images/hero-bg.jpg" quality={100}'
      );
      
      // Write back if any changes were made
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Updated image paths in ${file}`);
        updatedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error);
    }
  }
  
  console.log(`Completed updating ${updatedCount} files.`);
}

// Run the function
fixImagePaths().catch(console.error); 