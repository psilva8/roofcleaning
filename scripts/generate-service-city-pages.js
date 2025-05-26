import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// List of services
const services = [
  {
    path: 'commercial-pressure-washing',
    title: 'Commercial Pressure Washing',
    description: 'Professional commercial pressure washing services for businesses',
    image: '/images/commercial-cleaning.jpg'
  },
  {
    path: 'residential-house-washing',
    title: 'Residential House Washing',
    description: 'Expert house washing services for homes',
    image: '/images/house-washing.jpg'
  },
  {
    path: 'concrete-cleaning',
    title: 'Concrete Cleaning',
    description: 'Professional concrete cleaning and restoration services',
    image: '/images/driveway-cleaning.jpg'
  },
  {
    path: 'roof-cleaning',
    title: 'Roof Cleaning',
    description: 'Safe and effective roof cleaning services',
    image: '/images/roof-cleaning.jpg'
  },
  {
    path: 'deck-and-patio-cleaning',
    title: 'Deck and Patio Cleaning',
    description: 'Expert deck and patio cleaning services',
    image: '/images/deck-cleaning.jpg'
  },
  {
    path: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description: 'Professional gutter cleaning and maintenance services',
    image: '/images/gutter-cleaning.jpg'
  }
]

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

// Function to generate page content
function generatePageContent(service, city) {
  return `import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ${service.path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}${city.replace(/[^a-zA-Z0-9]/g, '')}() {
  // Service schema with city-specific information
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${service.title} in ${city}",
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
    "description": "${service.description} in ${city}, Los Angeles County.",
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
        title="${service.title} in ${city}"
        subtitle="Professional ${service.title.toLowerCase()} services for ${city} properties"
        backgroundImage="${service.image}"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert ${service.title} in ${city}
            </h2>
            <p className="text-lg text-gray-600">
              We provide professional ${service.title.toLowerCase()} services throughout ${city}. 
              Our experienced team uses state-of-the-art equipment and eco-friendly cleaning solutions 
              to deliver exceptional results for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us in ${city}</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Local ${city} service provider</li>
                <li>Experienced and professional team</li>
                <li>Advanced cleaning equipment</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>Satisfaction guaranteed</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Free property assessment</li>
                <li>Customized cleaning plan</li>
                <li>Professional execution</li>
                <li>Quality inspection</li>
                <li>Customer satisfaction review</li>
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
  return `import { Metadata } from 'next'

export const metadata = {
  title: '${service.title} ${city} | Professional Services',
  description: 'Expert ${service.title.toLowerCase()} services in ${city}. Professional team, advanced equipment, and eco-friendly solutions. Get a free quote today!',
  keywords: '${service.title.toLowerCase()}, ${city.toLowerCase()} ${service.title.toLowerCase()}, professional cleaning services, eco-friendly cleaning, ${city.toLowerCase()} property maintenance',
  alternates: {
    canonical: 'https://www.prontocleanz.com/services/${service.path}/${cityToSlug(city)}',
  },
  openGraph: {
    title: '${service.title} ${city} | Professional Services',
    description: 'Expert ${service.title.toLowerCase()} services in ${city}. Professional team, advanced equipment, and eco-friendly solutions. Get a free quote today!',
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
    // Create service directory if it doesn't exist
    const serviceDir = path.join(baseDir, service.path)
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true })
    }

    for (const city of losAngelesCities) {
      const citySlug = cityToSlug(city)
      const cityDir = path.join(serviceDir, citySlug)

      // Create city directory if it doesn't exist
      if (!fs.existsSync(cityDir)) {
        fs.mkdirSync(cityDir, { recursive: true })
      }

      // Generate and write page.tsx
      const pagePath = path.join(cityDir, 'page.tsx')
      fs.writeFileSync(pagePath, generatePageContent(service, city))

      // Generate and write metadata.ts
      const metadataPath = path.join(cityDir, 'metadata.ts')
      fs.writeFileSync(metadataPath, generateMetadataContent(service, city))

      console.log(`✅ Generated pages for ${service.title} in ${city}`)
    }
  }

  console.log('✨ All service city pages have been generated!')
}

// Run the generator
generatePages().catch(console.error) 