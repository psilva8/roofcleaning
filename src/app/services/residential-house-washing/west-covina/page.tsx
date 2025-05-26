import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ResidentialHouseWashingWestCovina() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential House Washing in West Covina",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "West Covina",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "West Covina"
    },
    "description": "Looking for professional residential house washing services in West Covina? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
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
        title="Residential House Washing in West Covina"
        subtitle="Professional residential house washing services for West Covina properties"
        backgroundImage="/images/house-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Residential House Washing Services in West Covina
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional residential house washing services in West Covina? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in West Covina</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Garage door cleaning</li>
                <li>Siding and stucco cleaning</li>
                <li>Window washing</li>
                <li>Entry and porch cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for West Covina Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Prepare for painting</li>
                <li>Maintain home condition</li>
                <li>Protect home value</li>
                <li>Boost curb appeal</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in West Covina
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="residential-house-washing" serviceTitle="Residential House Washing" />
    </>
  )
}