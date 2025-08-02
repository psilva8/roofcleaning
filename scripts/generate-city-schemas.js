const fs = require('fs');
const path = require('path');

// List of LA County cities (same as in the Next.js pages)
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

// Function to capitalize words
function capitalizeWords(str) {
  return str.split(' ').map(word => {
    // Handle special cases like "la", "el", etc.
    if (word === 'la' || word === 'el') return word.toUpperCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Generate LocalBusiness schema for pressure washing
async function updatePressureWashingSchemas() {
  console.log('Updating pressure washing city pages with LocalBusiness schema...');
  
  for (const city of losAngelesCities) {
    const formattedCityName = capitalizeWords(city.replace(/-/g, ' '));
    const filePath = path.join(__dirname, `../src/app/pressure-washing/${city}/page.tsx`);
    
    // Check if file exists before trying to update it
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping pressure-washing/${city} - file does not exist`);
      continue;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Create LocalBusiness schema specific to the city
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Pressure Washing ${formattedCityName}`,
        "description": `Professional pressure washing services in ${formattedCityName}, Los Angeles County`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "360 E 2nd St Ste 800",
          "addressLocality": formattedCityName,
          "addressRegion": "CA",
          "postalCode": "90012",
          "addressCountry": "US"
        },
        "telephone": "12136649502",
        "email": "prontocleanpw@gmail.com",
        "url": `https://www.prontocleanz.com/pressure-washing/${city}`,
        "areaServed": {
          "@type": "City",
          "name": formattedCityName
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0522",
          "longitude": "-118.2437"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
          }
        ],
        "priceRange": "$$",
        "image": "https://www.prontocleanz.com/images/pressure-washing.jpg",
        "sameAs": [
          "https://www.facebook.com/prontocleanz",
          "https://www.instagram.com/prontocleanz"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Pressure Washing Services in ${formattedCityName}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `House Washing in ${formattedCityName}`,
                "description": `Complete exterior house washing services in ${formattedCityName}`
              },
              "price": "250.00",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Driveway Washing in ${formattedCityName}`,
                "description": `Professional driveway and concrete washing in ${formattedCityName}`
              },
              "price": "150.00",
              "priceCurrency": "USD"
            }
          ]
        }
      };
      
      // Check if a LocalBusiness schema already exists and replace it, otherwise add one
      if (content.includes('localBusinessSchema')) {
        // Replace existing schema
        const schemaRegex = /const localBusinessSchema = {[\s\S]*?};/;
        content = content.replace(schemaRegex, `const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};`);
      } else {
        // Add new schema after serviceSchema
        const serviceSchemaEndIndex = content.indexOf('};', content.indexOf('const serviceSchema'));
        const insertPosition = serviceSchemaEndIndex + 2;
        
        const schemaToInsert = `\n\n  // LocalBusiness schema for city-specific business info
  const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};`;
        
        content = content.slice(0, insertPosition) + schemaToInsert + content.slice(insertPosition);
        
        // Add the new script tag to render the schema
        const scriptTagToInsert = `\n      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />`;
        
        const returnStartIdx = content.indexOf('return (');
        const afterScriptCloseIdx = content.indexOf('</Script>', content.indexOf('service-schema')) + 10;
        
        content = content.slice(0, afterScriptCloseIdx) + scriptTagToInsert + content.slice(afterScriptCloseIdx);
      }
      
      // Ensure hero image is set to hero-bg.jpg
      if (content.includes('backgroundImage="/images/pressure-washing.jpg"')) {
        content = content.replace(
          'backgroundImage="/images/pressure-washing.jpg"', 
          'backgroundImage="/images/hero-bg.jpg"'
        );
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated schema for pressure-washing/${city}`);
    } catch (error) {
      console.error(`❌ Error processing pressure-washing/${city}:`, error);
    }
  }
}

// Generate LocalBusiness schema for power washing
async function updatePowerWashingSchemas() {
  console.log('Updating power washing city pages with LocalBusiness schema...');
  
  for (const city of losAngelesCities) {
    const formattedCityName = capitalizeWords(city.replace(/-/g, ' '));
    const filePath = path.join(__dirname, `../src/app/power-washing/${city}/page.tsx`);
    
    // Check if file exists before trying to update it
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping power-washing/${city} - file does not exist`);
      continue;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Create LocalBusiness schema specific to the city
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Power Washing ${formattedCityName}`,
        "description": `Professional power washing services in ${formattedCityName}, Los Angeles County`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "360 E 2nd St Ste 800",
          "addressLocality": formattedCityName,
          "addressRegion": "CA",
          "postalCode": "90012",
          "addressCountry": "US"
        },
        "telephone": "12136649502",
        "email": "prontocleanpw@gmail.com",
        "url": `https://www.prontocleanz.com/power-washing/${city}`,
        "areaServed": {
          "@type": "City",
          "name": formattedCityName
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0522",
          "longitude": "-118.2437"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
          }
        ],
        "priceRange": "$$",
        "image": "https://www.prontocleanz.com/images/commercial-washing.jpg",
        "sameAs": [
          "https://www.facebook.com/prontocleanz",
          "https://www.instagram.com/prontocleanz"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Power Washing Services in ${formattedCityName}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Commercial Power Washing in ${formattedCityName}`,
                "description": `Commercial power washing services for businesses in ${formattedCityName}`
              },
              "price": "350.00",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Industrial Power Washing in ${formattedCityName}`,
                "description": `Heavy-duty power washing for industrial properties in ${formattedCityName}`
              },
              "price": "450.00",
              "priceCurrency": "USD"
            }
          ]
        }
      };
      
      // Check if a LocalBusiness schema already exists and replace it, otherwise add one
      if (content.includes('localBusinessSchema')) {
        // Replace existing schema
        const schemaRegex = /const localBusinessSchema = {[\s\S]*?};/;
        content = content.replace(schemaRegex, `const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};`);
      } else {
        // Add new schema after serviceSchema
        const serviceSchemaEndIndex = content.indexOf('};', content.indexOf('const serviceSchema'));
        const insertPosition = serviceSchemaEndIndex + 2;
        
        const schemaToInsert = `\n\n  // LocalBusiness schema for city-specific business info
  const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};`;
        
        content = content.slice(0, insertPosition) + schemaToInsert + content.slice(insertPosition);
        
        // Add the new script tag to render the schema
        const scriptTagToInsert = `\n      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />`;
        
        const returnStartIdx = content.indexOf('return (');
        const afterScriptCloseIdx = content.indexOf('</Script>', content.indexOf('service-schema')) + 10;
        
        content = content.slice(0, afterScriptCloseIdx) + scriptTagToInsert + content.slice(afterScriptCloseIdx);
      }
      
      // Ensure hero image is set to hero-bg.jpg
      if (content.includes('backgroundImage="/images/commercial-washing.jpg"')) {
        content = content.replace(
          'backgroundImage="/images/commercial-washing.jpg"', 
          'backgroundImage="/images/hero-bg.jpg"'
        );
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated schema for power-washing/${city}`);
    } catch (error) {
      console.error(`❌ Error processing power-washing/${city}:`, error);
    }
  }
}

// Run the schema update
async function updateAllSchemas() {
  await updatePressureWashingSchemas();
  await updatePowerWashingSchemas();
  console.log('✅ All city schemas have been updated!');
}

updateAllSchemas().catch(console.error); 