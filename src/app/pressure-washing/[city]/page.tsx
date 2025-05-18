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
    title: `Pressure Washing in ${formattedCityName} - Professional Cleaning Services`,
    description: `Professional pressure washing services in ${formattedCityName}, Los Angeles County. Residential and commercial cleaning solutions for all surfaces.`,
    alternates: {
      canonical: `https://www.prontocleanz.com/pressure-washing/${params.city}`,
    }
  };
}

export default function CityPressureWashing({ params }: { params: { city: string } }) {
  const cityName = params.city.replace(/-/g, ' ');
  const formattedCityName = capitalizeWords(cityName);
  
  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Pressure Washing in ${formattedCityName}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles"
    },
    "serviceType": "Pressure Washing",
    "areaServed": {
      "@type": "City",
      "name": formattedCityName
    },
    "description": `Professional pressure washing services in ${formattedCityName}, Los Angeles County. Residential and commercial cleaning solutions for all surfaces.`,
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
    "url": `https://www.prontocleanz.com/pressure-washing/${params.city}`,
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
            "name": `Driveway Cleaning in ${formattedCityName}`,
            "description": `Professional driveway and concrete cleaning in ${formattedCityName}`
          },
          "price": "150.00",
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
        title={`Pressure Washing in ${formattedCityName}`}
        subtitle={`Professional pressure washing services throughout ${formattedCityName} and surrounding areas`}
        backgroundImage="/images/pressure-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top-Rated Pressure Washing Services in {formattedCityName}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pressure washing service in {formattedCityName} uses state-of-the-art equipment to deliver exceptional cleaning results for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fadeIn">
              <img
                src="/images/house-washing.jpg"
                alt={`Residential Pressure Washing in ${formattedCityName}`}
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{formattedCityName} Residential Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                Our residential pressure washing services in {formattedCityName} restore your home's curb appeal by removing dirt, grime, mold, and mildew from exterior surfaces including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>House siding and exterior walls</li>
                <li>Driveways and walkways</li>
                <li>Patios and decks</li>
                <li>Fences and gates</li>
                <li>Roofs (using soft washing techniques)</li>
              </ul>
            </div>
            
            <div className="animate-fadeIn">
              <img
                src="/images/commercial-cleaning.jpg"
                alt={`Commercial Pressure Washing in ${formattedCityName}`}
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{formattedCityName} Commercial Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                Keep your business looking professional with our commercial pressure washing services in {formattedCityName}. We work with various types of commercial properties including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Retail storefronts and shopping centers</li>
                <li>Office buildings</li>
                <li>Restaurants and food service locations</li>
                <li>Apartment complexes and condominiums</li>
                <li>Parking lots and garages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Pressure Washing Service in {formattedCityName}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're dedicated to providing exceptional pressure washing services to homeowners and businesses throughout {formattedCityName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise", 
                description: `Our team has extensive knowledge of ${formattedCityName}'s specific cleaning challenges and requirements.`
              },
              {
                title: "Customized Solutions", 
                description: "We tailor our pressure washing services to address your specific needs and property requirements."
              },
              {
                title: "Professional Equipment", 
                description: "We use commercial-grade pressure washing equipment for superior cleaning results."
              },
              {
                title: "Environmentally Friendly", 
                description: "Our cleaning solutions are effective yet environmentally responsible."
              },
              {
                title: "Fully Insured", 
                description: "We're fully insured for your protection and peace of mind."
              },
              {
                title: "Satisfaction Guaranteed", 
                description: "We stand behind our work with a satisfaction guarantee."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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