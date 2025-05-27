import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function DeckAndPatioCleaningLongBeach() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Deck and Patio Cleaning in Long Beach",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Long Beach",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Long Beach"
    },
    "description": "Looking for professional deck and patio cleaning services in Long Beach? We specialize in serving coastal properties and marine-adjacent buildings, addressing common challenges like salt air exposure and maritime climate. Our team focuses on corrosion prevention and salt removal to deliver exceptional results.",
    "serviceType": "Deck and Patio Cleaning"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Deck and Patio Cleaning in Long Beach"
        subtitle="Professional deck and patio cleaning services for Long Beach properties"
        backgroundImage="/images/deck-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Deck and Patio Cleaning in Long Beach
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional deck and patio cleaning services in Long Beach? We specialize in serving coastal properties and marine-adjacent buildings, addressing common challenges like salt air exposure and maritime climate. Our team focuses on corrosion prevention and salt removal to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Long Beach</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Wood deck cleaning</li>
                <li>Mildew removal</li>
                <li>Stone patio cleaning</li>
                <li>Furniture cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Long Beach Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Prevent wood rot</li>
                <li>Improve safety</li>
                <li>Restore natural beauty</li>
                <li>Enhance outdoor space</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Long Beach
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="deck-and-patio-cleaning" serviceTitle="Deck and Patio Cleaning" />
    </>
  )
}