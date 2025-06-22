import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function DeckAndPatioCleaning() {
  // Service schema for deck and patio cleaning
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Deck and Patio Cleaning Los Angeles",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles"
    },
    "description": "Professional deck and patio cleaning services in Los Angeles. Expert cleaning for wood, composite, and concrete outdoor living spaces.",
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
        title="Deck & Patio Cleaning"
        subtitle="Restore your outdoor living spaces to their original beauty"
        backgroundImage="/images/deck-and-patio-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Deck & Patio Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in cleaning and restoring all types of outdoor living spaces. Our professional cleaning services remove dirt, grime, mold, and mildew while protecting your deck or patio's surface and extending its lifespan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deck Cleaning Services</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Wood deck cleaning</li>
                <li>Composite deck restoration</li>
                <li>Deck railing cleaning</li>
                <li>Deck staining preparation</li>
                <li>Waterproofing services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patio Cleaning Services</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Concrete patio cleaning</li>
                <li>Stone patio restoration</li>
                <li>Brick paver cleaning</li>
                <li>Patio furniture cleaning</li>
                <li>Outdoor kitchen cleaning</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Cleaning Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Assessment</h4>
                <p className="text-gray-600">Evaluate surface condition and identify cleaning requirements.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Pre-treatment</h4>
                <p className="text-gray-600">Application of appropriate cleaning solutions for surface type.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Cleaning</h4>
                <p className="text-gray-600">Careful pressure washing with appropriate techniques.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Protection</h4>
                <p className="text-gray-600">Optional sealing or treatment for lasting protection.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Surface Types We Clean</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Wood</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Pressure-treated lumber</li>
                  <li>Cedar</li>
                  <li>Redwood</li>
                  <li>IPE</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Composite</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Trex</li>
                  <li>TimberTech</li>
                  <li>Fiberon</li>
                  <li>AZEK</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Stone & Concrete</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Stamped concrete</li>
                  <li>Pavers</li>
                  <li>Natural stone</li>
                  <li>Flagstone</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Professional Cleaning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Enhanced Safety</h4>
                  <p className="text-gray-600">Removes slippery algae and mold growth</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Extended Lifespan</h4>
                  <p className="text-gray-600">Prevents premature aging and deterioration</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Improved Appearance</h4>
                  <p className="text-gray-600">Restores original color and beauty</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Property Value</h4>
                  <p className="text-gray-600">Maintains and enhances outdoor living spaces</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="deck-and-patio-cleaning" serviceTitle="Deck & Patio Cleaning" />
    </>
  )
} 