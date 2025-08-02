import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ResidentialHouseWashing() {
  // Service schema for residential house washing
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential House Washing Los Angeles",
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
    "description": "Professional residential house washing services in Los Angeles. We safely clean siding, stucco, brick, and other exterior surfaces.",
    "serviceType": "Residential House Washing"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Residential House Washing"
        subtitle="Restore your home's beauty with our professional house washing services"
        backgroundImage="/images/house-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert House Washing Services
            </h2>
            <p className="text-lg text-gray-600">
              Our professional house washing service removes dirt, mold, mildew, and algae from your home's exterior, restoring its beauty and protecting your investment. We use safe, effective washing methods suitable for all types of exterior surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exterior Surface Cleaning</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Vinyl siding cleaning</li>
                <li>Stucco washing</li>
                <li>Brick and stone cleaning</li>
                <li>Wood siding restoration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Services</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Window cleaning</li>
                <li>Trim and soffit cleaning</li>
                <li>Eaves and fascia washing</li>
                <li>Entry and porch cleaning</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our House Washing Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Inspection</h4>
                <p className="text-gray-600">Thorough assessment of your home's exterior surfaces and washing needs.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Preparation</h4>
                <p className="text-gray-600">Protection of landscaping and sensitive areas around your home.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Cleaning</h4>
                <p className="text-gray-600">Application of appropriate washing solutions and gentle pressure washing.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Final Inspection</h4>
                <p className="text-gray-600">Quality check and cleanup to ensure complete satisfaction.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Professional House Washing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Curb Appeal</h4>
                <p className="text-gray-600">Dramatically improve your home's appearance and make a great first impression.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Protection</h4>
                <p className="text-gray-600">Prevent damage from mold, mildew, and other harmful contaminants.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Property Value</h4>
                <p className="text-gray-600">Maintain and potentially increase your home's market value.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="residential-house-washing" serviceTitle="Residential House Washing" />
    </>
  )
} 