const fs = require('fs');
const path = require('path');

// Define replacement mappings
const replacements = {
  // Service names (titles and text)
  'Roof Washing': 'Roof Washing',
  'roof washing': 'roof washing',
  'Concrete Washing': 'Concrete Washing', 
  'concrete washing': 'concrete washing',
  'Gutter Washing': 'Gutter Washing',
  'gutter washing': 'gutter washing',
  'Deck and Patio Washing': 'Deck and Patio Washing',
  'deck and patio washing': 'deck and patio washing',
  'Deck & Patio Washing': 'Deck & Patio Washing',
  'Driveway Washing': 'Driveway Washing',
  'driveway washing': 'driveway washing',
  'Commercial Washing': 'Commercial Washing',
  'commercial washing': 'commercial washing',
  'House Exterior Washing': 'House Exterior Washing',
  'exterior washing': 'exterior washing',
  'Concrete & Surface Washing': 'Concrete & Surface Washing',
  
  // URLs and paths
  'roof-washing': 'roof-washing',
  'concrete-washing': 'concrete-washing',
  'gutter-washing': 'gutter-washing',
  'deck-and-patio-washing': 'deck-and-patio-washing',
  'commercial-washing': 'commercial-washing',
  
  // Generic cleaning references
  'washing services': 'washing services',
  'washing solutions': 'washing solutions',
  'washing needs': 'washing needs',
  'washing excellence': 'washing excellence',
  'washing results': 'washing results',
  'washing industry': 'washing industry',
  'washing company': 'washing company',
  'professional washing': 'professional washing',
  'exterior washing': 'exterior washing',
  'effective washing': 'effective washing',
  'excellent washing': 'excellent washing',
  'annual washing': 'annual washing',
  'frequent washing': 'frequent washing',
  'safe washing': 'safe washing',
  
  // Schema and descriptions
  'RoofWashing': 'RoofWashing',
  'ConcreteWashing': 'ConcreteWashing',
  'GutterWashing': 'GutterWashing',
  'DeckAndPatioWashing': 'DeckAndPatioWashing',
  'CommercialWashing': 'CommercialWashing',
  
  // Function names and variables
  'roofWashing': 'roofWashing',
  'concreteWashing': 'concreteWashing', 
  'gutterWashing': 'gutterWashing',
  'deckAndPatioWashing': 'deckAndPatioWashing',
  'commercialWashing': 'commercialWashing',
  
  // Image filenames that might be in text
  'roof-washing.jpg': 'roof-washing.jpg',
  'concrete-washing.jpg': 'concrete-washing.jpg',
  'gutter-washing.jpg': 'gutter-washing.jpg',
  'deck-and-patio-washing.jpg': 'deck-and-patio-washing.jpg',
  'commercial-washing.jpg': 'commercial-washing.jpg',
  'driveway-washing.jpg': 'driveway-washing.jpg',
  
  // Alt text and descriptions
  'before washing': 'before washing',
  'after washing': 'after washing',
  'washing process': 'washing process',
  'washing techniques': 'washing techniques',
  'washing equipment': 'washing equipment',
  'washing team': 'washing team',
  'washing projects': 'washing projects',
  'washing specialists': 'washing specialists',
  'washing journey': 'washing journey',
  'Washing Journey': 'Washing Journey',
  
  // Service types in schema
  '"serviceType": "Roof Washing"': '"serviceType": "Roof Washing"',
  '"serviceType": "Concrete Washing"': '"serviceType": "Concrete Washing"',
  '"serviceType": "Gutter Washing"': '"serviceType": "Gutter Washing"',
  '"serviceType": "Deck and Patio Washing"': '"serviceType": "Deck and Patio Washing"',
  '"serviceType": "Commercial Washing"': '"serviceType": "Commercial Washing"',
};

// File types to process
const fileExtensions = ['.tsx', '.ts', '.js', '.jsx', '.md', '.json'];

// Directories to process
const directories = [
  'src',
  'scripts', 
  'public'
];

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all replacements
    Object.entries(replacements).forEach(([oldText, newText]) => {
      const regex = new RegExp(oldText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(oldText)) {
        content = content.replace(regex, newText);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let filesUpdated = 0;
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, .next, out directories
      if (!['node_modules', '.git', '.next', 'out'].includes(item)) {
        filesUpdated += processDirectory(fullPath);
      }
    } else if (stat.isFile()) {
      const ext = path.extname(fullPath);
      if (fileExtensions.includes(ext)) {
        if (replaceInFile(fullPath)) {
          filesUpdated++;
        }
      }
    }
  });
  
  return filesUpdated;
}

function renameFiles() {
  console.log('\n🔄 Renaming image files...');
  
  const imageRenames = {
    'roof-washing.jpg': 'roof-washing.jpg',
    'concrete-washing.jpg': 'concrete-washing.jpg', 
    'gutter-washing.jpg': 'gutter-washing.jpg',
    'deck-and-patio-washing.jpg': 'deck-and-patio-washing.jpg',
    'commercial-washing.jpg': 'commercial-washing.jpg',
    'driveway-washing.jpg': 'driveway-washing.jpg'
  };
  
  const imagesDir = path.join(__dirname, '../public/images');
  
  Object.entries(imageRenames).forEach(([oldName, newName]) => {
    const oldPath = path.join(imagesDir, oldName);
    const newPath = path.join(imagesDir, newName);
    
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Renamed: ${oldName} → ${newName}`);
    }
  });
}

function renameDirectories() {
  console.log('\n🔄 Checking service directories...');
  
  const serviceDirs = [
    'src/app/services/roof-washing',
    'src/app/services/concrete-washing',
    'src/app/services/gutter-washing', 
    'src/app/services/deck-and-patio-washing',
    'src/app/services/commercial-washing'
  ];
  
  const dirRenames = {
    'roof-washing': 'roof-washing',
    'concrete-washing': 'concrete-washing',
    'gutter-washing': 'gutter-washing',
    'deck-and-patio-washing': 'deck-and-patio-washing',
    'commercial-washing': 'commercial-washing'
  };
  
  serviceDirs.forEach(dirPath => {
    const fullPath = path.join(__dirname, '..', dirPath);
    if (fs.existsSync(fullPath)) {
      Object.entries(dirRenames).forEach(([oldName, newName]) => {
        if (dirPath.includes(oldName)) {
          const newDirPath = dirPath.replace(oldName, newName);
          const newFullPath = path.join(__dirname, '..', newDirPath);
          
          try {
            fs.renameSync(fullPath, newFullPath);
            console.log(`✅ Renamed directory: ${dirPath} → ${newDirPath}`);
          } catch (error) {
            console.error(`❌ Error renaming directory ${dirPath}:`, error.message);
          }
        }
      });
    }
  });
}

// Main execution
function main() {
  console.log('🚀 Starting rebrand from "cleaning" to "washing"...\n');
  
  let totalFilesUpdated = 0;
  
  // Process each directory
  directories.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    if (fs.existsSync(dirPath)) {
      console.log(`\n📁 Processing ${dir}/ directory...`);
      const filesUpdated = processDirectory(dirPath);
      totalFilesUpdated += filesUpdated;
      console.log(`   ${filesUpdated} files updated in ${dir}/`);
    }
  });
  
  // Rename image files
  renameFiles();
  
  // Rename service directories  
  renameDirectories();
  
  console.log(`\n🎉 Rebrand complete!`);
  console.log(`📊 Total files updated: ${totalFilesUpdated}`);
  console.log(`\n⚠️  Next steps:`);
  console.log(`1. Test the site locally: npm run dev`);
  console.log(`2. Check for any broken links or images`);
  console.log(`3. Rebuild: npm run build:static`);
  console.log(`4. Commit changes: git add . && git commit -m "Rebrand: cleaning → washing"`);
  console.log(`5. Deploy: git push origin main`);
}

// Run the script
main(); 