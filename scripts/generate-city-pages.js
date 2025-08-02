const fs = require('fs');
const path = require('path');

// List of LA County cities
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

// Function to capitalize words
function capitalizeWords(str) {
  return str.split(' ').map(word => {
    if (word === 'la' || word === 'el') return word.toUpperCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to generate pressure washing page template
function generatePressureWashingTemplate(city, formattedCityName) {
  const cityUrl = `${baseUrl}/pressure-washing/${city}`;
  const mainServiceUrl = `${baseUrl}/pressure-washing`;

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
    "url": cityUrl,
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Pressure Washing Services in ${formattedCityName}`,
    "description": `Professional pressure washing services for residential and commercial properties in ${formattedCityName}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pronto Cleanz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "360 E 2nd St Ste 800",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90012",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": formattedCityName
    },
    "serviceType": "Pressure Washing",
    "offers": {
      "@type": "Offer",
      "price": "150.00",
      "priceCurrency": "USD"
    }
  };

  return `import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Pressure Washing Services in ${formattedCityName} | Pronto Cleanz",
  description: "Expert pressure washing services in ${formattedCityName}. Residential & commercial solutions for houses, driveways, and more. Get a free quote today!",
  canonical: "${cityUrl}",
  alternates: {
    canonical: "${cityUrl}",
    types: {
      'application/rss+xml': [
        { url: "${mainServiceUrl}", title: "Pressure Washing Services" }
      ]
    }
  },
};

export default function PressureWashingCityPage() {
  // Service schema for rich results
  const serviceSchema = ${JSON.stringify(serviceSchema, null, 2)};

  // LocalBusiness schema for city-specific business info
  const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero
        title={\`Professional Pressure Washing in ${formattedCityName}\`}
        subtitle="Restore Your Property's Beauty with Our Expert Pressure Washing Services"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title={\`Our Pressure Washing Services in ${formattedCityName}\`}
        subtitle="Specialized solutions for all your exterior washing needs"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle={\`Trusted by ${formattedCityName} residents and businesses\`}
      />
      <FAQSection 
        title={\`Frequently Asked Questions About Pressure Washing in ${formattedCityName}\`}
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Property?"
        subtitle={\`Contact us today for professional pressure washing in ${formattedCityName}\`}
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle={\`Request a free pressure washing quote in ${formattedCityName}\`}
      />
    </>
  );
}`;
}

// Function to generate power washing page template
function generatePowerWashingTemplate(city, formattedCityName) {
  const cityUrl = `${baseUrl}/power-washing/${city}`;
  const mainServiceUrl = `${baseUrl}/power-washing`;

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
    "url": cityUrl,
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Power Washing Services in ${formattedCityName}`,
    "description": `Professional power washing services for commercial and industrial properties in ${formattedCityName}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pronto Cleanz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "360 E 2nd St Ste 800",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90012",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": formattedCityName
    },
    "serviceType": "Power Washing",
    "offers": {
      "@type": "Offer",
      "price": "350.00",
      "priceCurrency": "USD"
    }
  };

  return `import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Power Washing Services in ${formattedCityName} | Pronto Cleanz",
  description: "Expert power washing services in ${formattedCityName}. Commercial & industrial solutions for business properties. Get a free quote today!",
  canonical: "${cityUrl}",
  alternates: {
    canonical: "${cityUrl}",
    types: {
      'application/rss+xml': [
        { url: "${mainServiceUrl}", title: "Power Washing Services" }
      ]
    }
  },
};

export default function PowerWashingCityPage() {
  // Service schema for rich results
  const serviceSchema = ${JSON.stringify(serviceSchema, null, 2)};

  // LocalBusiness schema for city-specific business info
  const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero
        title={\`Professional Power Washing in ${formattedCityName}\`}
        subtitle="Commercial & Industrial Cleaning Solutions for Your Business Property"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title={\`Our Power Washing Services in ${formattedCityName}\`}
        subtitle="Specialized solutions for commercial and industrial properties"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle={\`Trusted by ${formattedCityName} businesses\`}
      />
      <FAQSection 
        title={\`Frequently Asked Questions About Power Washing in ${formattedCityName}\`}
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Business Property?"
        subtitle={\`Contact us today for professional power washing in ${formattedCityName}\`}
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle={\`Request a free power washing quote in ${formattedCityName}\`}
      />
    </>
  );
}`;
}

// Function to generate all city pages
async function generateCityPages() {
  console.log('Generating city pages with proper canonical tags...');
  
  // Create pressure washing pages
  const pressureWashingDir = path.join(__dirname, '../src/app/pressure-washing');
  ensureDirectoryExists(pressureWashingDir);
  
  // Generate parent page for pressure-washing with canonical
  const pressureWashingParentPath = path.join(pressureWashingDir, 'page.tsx');
  if (!fs.existsSync(pressureWashingParentPath)) {
    console.log('Creating parent pressure washing page...');
    const parentPageContent = `import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Pressure Washing Services | Pronto Cleanz",
  description: "Expert pressure washing services for residential and commercial properties. Restore your property's appearance with our professional solutions.",
  canonical: "https://www.prontocleanz.com/pressure-washing",
};

export default function PressureWashingPage() {
  // Service schema for rich results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pressure Washing Services",
    "description": "Professional pressure washing services for residential and commercial properties",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pronto Cleanz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "360 E 2nd St Ste 800",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90012",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "serviceType": "Pressure Washing",
    "offers": {
      "@type": "Offer",
      "price": "150.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero
        title="Professional Pressure Washing Services"
        subtitle="Restore Your Property's Beauty with Our Expert Pressure Washing Solutions"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title="Our Pressure Washing Services"
        subtitle="Specialized solutions for all your exterior washing needs"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle="Trusted by homeowners and businesses throughout Los Angeles County"
      />
      <FAQSection 
        title="Frequently Asked Questions About Pressure Washing"
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Property?"
        subtitle="Contact us today for professional pressure washing services"
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle="Request a free pressure washing quote"
      />
    </>
  );
}`;
    fs.writeFileSync(pressureWashingParentPath, parentPageContent);
    console.log('✅ Created parent pressure washing page with canonical tag');
  }
  
  // Generate city pages for pressure washing
  let pressureWashingCitiesCreated = 0;
  
  for (const city of losAngelesCities) {
    const formattedCityName = capitalizeWords(city.replace(/-/g, ' '));
    const cityDir = path.join(pressureWashingDir, city);
    const filePath = path.join(cityDir, 'page.tsx');
    
    ensureDirectoryExists(cityDir);
    
    if (!fs.existsSync(filePath)) {
      try {
        fs.writeFileSync(filePath, generatePressureWashingTemplate(city, formattedCityName));
        pressureWashingCitiesCreated++;
        
        if (pressureWashingCitiesCreated % 10 === 0) {
          console.log(`Created ${pressureWashingCitiesCreated} pressure washing city pages so far...`);
        }
      } catch (error) {
        console.error(`❌ Error creating pressure-washing/${city}:`, error);
      }
    }
  }
  
  console.log(`✅ Created ${pressureWashingCitiesCreated} pressure washing city pages with proper canonical tags`);
  
  // Create power washing pages
  const powerWashingDir = path.join(__dirname, '../src/app/power-washing');
  ensureDirectoryExists(powerWashingDir);
  
  // Generate parent page for power-washing with canonical
  const powerWashingParentPath = path.join(powerWashingDir, 'page.tsx');
  if (!fs.existsSync(powerWashingParentPath)) {
    console.log('Creating parent power washing page...');
    const parentPageContent = `import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Power Washing Services | Pronto Cleanz",
  description: "Expert power washing services for commercial and industrial properties. Heavy-duty washing solutions for your business needs.",
  canonical: "https://www.prontocleanz.com/power-washing",
};

export default function PowerWashingPage() {
  // Service schema for rich results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Power Washing Services",
    "description": "Professional power washing services for commercial and industrial properties",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pronto Cleanz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "360 E 2nd St Ste 800",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90012",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "serviceType": "Power Washing",
    "offers": {
      "@type": "Offer",
      "price": "350.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero
        title="Professional Power Washing Services"
        subtitle="Heavy-Duty Cleaning Solutions for Commercial and Industrial Properties"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title="Our Power Washing Services"
        subtitle="Specialized solutions for commercial and industrial properties"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle="Trusted by businesses throughout Los Angeles County"
      />
      <FAQSection 
        title="Frequently Asked Questions About Power Washing"
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Business Property?"
        subtitle="Contact us today for professional power washing services"
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle="Request a free power washing quote"
      />
    </>
  );
}`;
    fs.writeFileSync(powerWashingParentPath, parentPageContent);
    console.log('✅ Created parent power washing page with canonical tag');
  }
  
  // Generate city pages for power washing
  let powerWashingCitiesCreated = 0;
  
  for (const city of losAngelesCities) {
    const formattedCityName = capitalizeWords(city.replace(/-/g, ' '));
    const cityDir = path.join(powerWashingDir, city);
    const filePath = path.join(cityDir, 'page.tsx');
    
    ensureDirectoryExists(cityDir);
    
    if (!fs.existsSync(filePath)) {
      try {
        fs.writeFileSync(filePath, generatePowerWashingTemplate(city, formattedCityName));
        powerWashingCitiesCreated++;
        
        if (powerWashingCitiesCreated % 10 === 0) {
          console.log(`Created ${powerWashingCitiesCreated} power washing city pages so far...`);
        }
      } catch (error) {
        console.error(`❌ Error creating power-washing/${city}:`, error);
      }
    }
  }
  
  console.log(`✅ Created ${powerWashingCitiesCreated} power washing city pages with proper canonical tags`);
  
  // Add canonical tag to about page if it exists
  const aboutPagePath = path.join(__dirname, '../src/app/about/page.tsx');
  if (fs.existsSync(aboutPagePath)) {
    try {
      let aboutContent = fs.readFileSync(aboutPagePath, 'utf8');
      
      if (!aboutContent.includes('canonical:')) {
        if (aboutContent.includes('export const metadata')) {
          // Add canonical to existing metadata
          const metadataEndIndex = aboutContent.indexOf('}', aboutContent.indexOf('export const metadata'));
          aboutContent = aboutContent.slice(0, metadataEndIndex) + 
            `  canonical: "https://www.prontocleanz.com/about",\n` + 
            aboutContent.slice(metadataEndIndex);
        } else {
          // Add new metadata export before the component
          const importEndIndex = aboutContent.lastIndexOf('import');
          const importBlockEndIndex = aboutContent.indexOf(';', importEndIndex) + 1;
          
          const metadataToAdd = `\nexport const metadata = {\n  title: "About Pronto Cleanz | Professional Cleaning Services",\n  description: "Learn about Pronto Cleanz, a trusted provider of professional pressure and power washing services in Los Angeles County.",\n  canonical: "https://www.prontocleanz.com/about",\n};\n\n`;
          
          aboutContent = aboutContent.slice(0, importBlockEndIndex) + metadataToAdd + aboutContent.slice(importBlockEndIndex);
        }
        
        fs.writeFileSync(aboutPagePath, aboutContent);
        console.log('✅ Added canonical tag to about page');
      }
    } catch (error) {
      console.error('❌ Error processing about page:', error);
    }
  }
  
  console.log('✅ All pages have been generated with proper canonical tags!');
}

// Run the function
generateCityPages().catch(console.error); 