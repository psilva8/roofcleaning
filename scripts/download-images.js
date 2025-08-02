const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'hero-bg.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80', // Pressure washing action shot
  },
  {
    name: 'house-washing.jpg',
    url: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=800&q=80', // House exterior
  },
  {
    name: 'driveway-washing.jpg',
    url: 'https://images.unsplash.com/photo-1578861256457-65f66c9a3015?w=800&q=80', // Clean driveway
  },
  {
    name: 'roof-washing.jpg',
    url: 'https://images.unsplash.com/photo-1632139238060-8a75b3e7716d?w=800&q=80', // Roof cleaning
  },
  {
    name: 'commercial-washing.jpg',
    url: 'https://images.unsplash.com/photo-1621195834629-c21c7be47b47?w=800&q=80', // Commercial building
  },
  {
    name: 'equipment.jpg',
    url: 'https://images.unsplash.com/photo-1621195834629-c21c7be47b47?w=800&q=80', // Professional equipment
  },
  {
    name: 'team.jpg',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', // Professional team
  },
  {
    name: 'eco-friendly.jpg',
    url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&q=80', // Eco-friendly concept
  },
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/images', filename);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download all images
images.forEach(image => {
  downloadImage(image.url, image.name);
}); 