import Hero from '@/components/Hero'
import Script from 'next/script'
import { capitalizeWords } from '@/utils/formatting'
import { Metadata } from 'next'

// Explicitly generate static params - needed for static export
export function generateStaticParams() {
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

  return losAngelesCities.map((city) => ({
    city,
  }));
}

// This is needed for static generation
export const dynamicParams = false;

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = params.city.replace(/-/g, ' ');
  const formattedCityName = capitalizeWords(cityName);
  
  return {
    title: `Power Washing in ${formattedCityName} - Professional Cleaning Services`,
    description: `Professional power washing services in ${formattedCityName}, Los Angeles County. Advanced equipment for effective washing of all surfaces.`,
    alternates: {
      canonical: `https://www.prontocleanz.com/power-washing/${params.city}`,
    }
  };
}

export default function CityPowerWashing({ params }: { params: { city: string } }) {
  const cityName = params.city.replace(/-/g, ' ');
  const formattedCityName = capitalizeWords(cityName);
  
  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Power Washing in ${formattedCityName}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles"
    },
    "serviceType": "Power Washing",
    "areaServed": {
      "@type": "City",
      "name": formattedCityName
    },
    "description": `Professional power washing services in ${formattedCityName}, Los Angeles County. Advanced equipment for effective washing of all surfaces.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "150.00",
      "priceCurrency": "USD"
    }
  };
  
  // LocalBusiness schema for city-specific business info
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
    "url": `https://www.prontocleanz.com/power-washing/${params.city}`,
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
        title={`Power Washing in ${formattedCityName}`}
        subtitle={`High-performance power washing for homes and businesses in ${formattedCityName}`}
        backgroundImage="/images/hero-bg.jpg" quality={100}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {formattedCityName} Power Washing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our power washing services in {formattedCityName} utilize high-pressure water systems to effectively remove tough dirt, grime, mold, and stains from various surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fadeIn bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Power Washing Benefits in {formattedCityName}</h3>
              <p className="text-gray-600 mb-4">
                Power washing uses heated water and high pressure to clean surfaces, making it particularly effective for {formattedCityName} properties:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Removing oil and grease stains from driveways and garage floors</li>
                <li>Eliminating stubborn grime from concrete and brick surfaces</li>
                <li>Cleaning commercial and industrial equipment</li>
                <li>Preparing surfaces for painting or sealing</li>
                <li>Removing tough stains that ordinary cleaning can't handle</li>
              </ul>
              <p className="text-gray-600">
                The combination of heat and pressure makes power washing ideal for tackling the toughest cleaning challenges in {formattedCityName} that standard pressure washing might struggle with.
              </p>
            </div>
            
            <div className="animate-fadeIn">
              <img
                src="/images/driveway-washing.jpg"
                alt={`Power Washing in ${formattedCityName}`}
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our {formattedCityName} Power Washing Equipment</h3>
              <p className="text-gray-600">
                We bring the best power washing equipment to {formattedCityName} with adjustable pressure and temperature controls. This allows us to customize our approach for each surface and type of contaminant, ensuring optimal washing results without causing damage to your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {formattedCityName} Power Washing Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our power washing services are suitable for a wide range of applications in {formattedCityName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Concrete Surfaces", 
                description: `Driveways, sidewalks, parking lots, and garage floors throughout ${formattedCityName}.`,
                image: "/images/driveway-washing.jpg"
              },
              {
                title: "Commercial Properties", 
                description: `${formattedCityName} storefronts, building exteriors, loading docks, and dumpster areas.`,
                image: "/images/commercial-washing.jpg"
              },
              {
                title: "Industrial Cleaning", 
                description: `Equipment, machinery, warehouses, and factory floors in the ${formattedCityName} area.`,
                image: "/images/equipment.jpg"
              },
              {
                title: "Deck & Patio Restoration", 
                description: `Wooden decks, stone patios, and outdoor living spaces for ${formattedCityName} homes.`,
                image: "/images/house-washing.jpg"
              },
              {
                title: "Graffiti Removal", 
                description: `Effective removal of graffiti from walls and other surfaces in ${formattedCityName}.`,
                image: "/images/eco-friendly.jpg"
              },
              {
                title: "Pre-painting Preparation", 
                description: `Preparing ${formattedCityName} surfaces for painting, staining, or sealing.`,
                image: "/images/roof-washing.jpg"
              }
            ].map((application, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={application.image} 
                    alt={`${application.title} in ${formattedCityName}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="tel:+12136649502" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 