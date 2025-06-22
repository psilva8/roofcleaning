import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// List of services with unique selling points and features
const services = [
  {
    path: 'commercial-pressure-washing',
    title: 'Commercial Pressure Washing',
    description: 'Professional commercial pressure washing services for businesses',
    image: '/images/commercial-cleaning.jpg',
    features: [
      'Building exterior cleaning',
      'Parking lot and garage cleaning',
      'Sidewalk and walkway cleaning',
      'Dumpster pad cleaning',
      'Graffiti removal',
      'Oil and grease removal'
    ],
    benefits: [
      'Enhance property value',
      'Improve business appearance',
      'Maintain safe environment',
      'Prevent slip hazards',
      'Remove harmful contaminants',
      'Extend surface life'
    ]
  },
  {
    path: 'residential-house-washing',
    title: 'Residential House Washing',
    description: 'Expert house washing services for homes',
    image: '/images/house-washing.jpg',
    features: [
      'Siding and stucco cleaning',
      'Window washing',
      'Entry and porch cleaning',
      'Fence washing',
      'Eaves and soffit cleaning',
      'Garage door cleaning'
    ],
    benefits: [
      'Boost curb appeal',
      'Protect home value',
      'Remove harmful mold',
      'Prevent paint damage',
      'Prepare for painting',
      'Maintain home condition'
    ]
  },
  {
    path: 'concrete-cleaning',
    title: 'Concrete Cleaning',
    description: 'Professional concrete cleaning and restoration services',
    image: '/images/driveway-cleaning.jpg',
    features: [
      'Driveway cleaning',
      'Patio restoration',
      'Pool deck cleaning',
      'Walkway maintenance',
      'Garage floor cleaning',
      'Stain removal'
    ],
    benefits: [
      'Restore surface appearance',
      'Remove tough stains',
      'Prevent concrete damage',
      'Improve safety',
      'Extend concrete life',
      'Enhance property value'
    ]
  },
  {
    path: 'roof-cleaning',
    title: 'Roof Cleaning',
    description: 'Safe and effective roof cleaning services',
    image: '/images/roof-cleaning.jpg',
    features: [
      'Algae removal',
      'Moss treatment',
      'Shingle cleaning',
      'Tile roof cleaning',
      'Gutter system cleaning',
      'Preventive treatments'
    ],
    benefits: [
      'Extend roof lifespan',
      'Prevent damage',
      'Improve energy efficiency',
      'Maintain warranty',
      'Enhance curb appeal',
      'Prevent leaks'
    ]
  },
  {
    path: 'deck-and-patio-cleaning',
    title: 'Deck and Patio Cleaning',
    description: 'Expert deck and patio cleaning services',
    image: '/images/deck-and-patio-cleaning.jpg',
    features: [
      'Wood deck cleaning',
      'Composite deck restoration',
      'Stone patio cleaning',
      'Furniture cleaning',
      'Mildew removal',
      'Sealing services'
    ],
    benefits: [
      'Restore natural beauty',
      'Prevent wood rot',
      'Extend deck life',
      'Improve safety',
      'Enhance outdoor space',
      'Protect investment'
    ]
  },
  {
    path: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Professional gutter cleaning and maintenance services',
    image: '/images/gutter-cleaning.jpg',
    features: [
      'Debris removal',
      'Downspout cleaning',
      'Gutter inspection',
      'Minor repairs',
      'Guard installation',
      'Maintenance plans'
    ],
    benefits: [
      'Prevent water damage',
      'Protect foundation',
      'Avoid pest issues',
      'Maintain roof health',
      'Prevent overflow',
      'Save on repairs'
    ]
  }
]

// City characteristics for content variation
const cityCharacteristics = {
  'Beverly Hills': {
    propertyTypes: 'luxury estates and high-end commercial properties',
    challenges: 'maintaining prestigious property appearances',
    focus: 'premium service with attention to detail'
  },
  'Long Beach': {
    propertyTypes: 'coastal properties and marine-adjacent buildings',
    challenges: 'salt air exposure and maritime climate',
    focus: 'corrosion prevention and salt removal'
  },
  'Pasadena': {
    propertyTypes: 'historic homes and traditional architecture',
    challenges: 'preserving delicate historical surfaces',
    focus: 'gentle cleaning methods and heritage preservation'
  },
  // Add default characteristics for cities not specifically defined
  default: {
    propertyTypes: 'residential and commercial properties',
    challenges: 'maintaining property appearance and value',
    focus: 'quality service and customer satisfaction'
  }
}

// List of LA County cities
const losAngelesCities = [
  'Agoura Hills', 'Alhambra', 'Arcadia', 'Artesia', 'Avalon', 'Azusa', 'Baldwin Park',
  'Bell', 'Bell Gardens', 'Bellflower', 'Beverly Hills', 'Bradbury', 'Burbank', 'Calabasas',
  'Carson', 'Cerritos', 'Claremont', 'Commerce', 'Compton', 'Covina', 'Cudahy', 'Culver City',
  'Diamond Bar', 'Downey', 'Duarte', 'El Monte', 'El Segundo', 'Gardena', 'Glendale', 'Glendora',
  'Hawaiian Gardens', 'Hawthorne', 'Hermosa Beach', 'Hidden Hills', 'Huntington Park', 'Industry',
  'Inglewood', 'Irwindale', 'La Canada Flintridge', 'La Habra Heights', 'La Mirada', 'La Puente',
  'La Verne', 'Lakewood', 'Lancaster', 'Lawndale', 'Lomita', 'Long Beach', 'Los Angeles', 'Lynwood',
  'Malibu', 'Manhattan Beach', 'Maywood', 'Monrovia', 'Montebello', 'Monterey Park', 'Norwalk',
  'Palmdale', 'Palos Verdes Estates', 'Paramount', 'Pasadena', 'Pico Rivera', 'Pomona', 'Rancho Palos Verdes',
  'Redondo Beach', 'Rolling Hills', 'Rolling Hills Estates', 'Rosemead', 'San Dimas', 'San Fernando',
  'San Gabriel', 'San Marino', 'Santa Clarita', 'Santa Fe Springs', 'Santa Monica', 'Sierra Madre',
  'Signal Hill', 'South El Monte', 'South Gate', 'South Pasadena', 'Temple City', 'Torrance', 'Vernon',
  'Walnut', 'West Covina', 'West Hollywood', 'Westlake Village', 'Whittier'
]

// Function to convert city name to URL-friendly slug
const cityToSlug = (city) => city.toLowerCase().replace(/\s+/g, '-')

// Function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Function to generate unique content for each city
function generateCityContent(service, city) {
  const cityChar = cityCharacteristics[city] || cityCharacteristics.default
  const selectedFeatures = getRandomItems(service.features, 4)
  const selectedBenefits = getRandomItems(service.benefits, 4)

  return {
    intro: `Looking for professional ${service.title.toLowerCase()} services in ${city}? We specialize in serving ${cityChar.propertyTypes}, addressing common challenges like ${cityChar.challenges}. Our team focuses on ${cityChar.focus} to deliver exceptional results.`,
    features: selectedFeatures,
    benefits: selectedBenefits
  }
}

// Function to generate page content
function generatePageContent(service, city) {
  const content = generateCityContent(service, city)
  const pageTitle = `${service.title} in ${city}`
  
  return `import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ${service.path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}${city.replace(/[^a-zA-Z0-9]/g, '')}() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${pageTitle}",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${city}",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "${city}"
    },
    "description": "${content.intro}",
    "serviceType": "${service.title}"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="${pageTitle}"
        subtitle="Professional ${service.title.toLowerCase()} services for ${city} properties"
        backgroundImage="${service.image}"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ${pageTitle}
            </h2>
            <p className="text-lg text-gray-600">
              ${content.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in ${city}</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                ${content.features.map(feature => `<li>${feature}</li>`).join('\n                ')}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for ${city} Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                ${content.benefits.map(benefit => `<li>${benefit}</li>`).join('\n                ')}
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in ${city}
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="${service.path}" serviceTitle="${service.title}" />
    </>
  )
}`
}

// Function to generate metadata content
function generateMetadataContent(service, city) {
  const content = generateCityContent(service, city)
  const pageTitle = `${service.title} in ${city}`
  
  return `import { Metadata } from 'next'

export const metadata = {
  title: '${pageTitle} | Professional Services',
  description: '${content.intro}',
  keywords: '${service.title.toLowerCase()}, ${city.toLowerCase()} ${service.title.toLowerCase()}, ${content.features.join(', ').toLowerCase()}, ${city.toLowerCase()} property maintenance',
  alternates: {
    canonical: 'https://www.prontocleanz.com/services/${service.path}/${cityToSlug(city)}',
  },
  openGraph: {
    title: '${pageTitle} | Professional Services',
    description: '${content.intro}',
    url: 'https://www.prontocleanz.com/services/${service.path}/${cityToSlug(city)}',
    siteName: 'Pressure Washing Los Angeles',
    locale: 'en_US',
    type: 'website',
  }
}`
}

// Main function to generate all pages
async function generatePages() {
  const baseDir = path.join(process.cwd(), 'src', 'app', 'services')

  for (const service of services) {
    const serviceDir = path.join(baseDir, service.path)
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true })
    }

    for (const city of losAngelesCities) {
      const citySlug = cityToSlug(city)
      const cityDir = path.join(serviceDir, citySlug)

      if (!fs.existsSync(cityDir)) {
        fs.mkdirSync(cityDir, { recursive: true })
      }

      const pagePath = path.join(cityDir, 'page.tsx')
      fs.writeFileSync(pagePath, generatePageContent(service, city))

      const metadataPath = path.join(cityDir, 'metadata.ts')
      fs.writeFileSync(metadataPath, generateMetadataContent(service, city))

      console.log(`✅ Generated unique content for ${service.title} in ${city}`)
    }
  }

  console.log('✨ All service city pages have been generated with unique content!')
}

// Run the generator
generatePages().catch(console.error) 