import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function CommercialPressureWashing() {
  // Service schema for commercial pressure washing
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Pressure Washing Los Angeles",
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
    "description": "Professional commercial pressure washing services for businesses in Los Angeles. We clean building exteriors, parking lots, sidewalks, and more.",
    "serviceType": "Commercial Pressure Washing"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Commercial Pressure Washing"
        subtitle="Professional washing solutions for businesses throughout Los Angeles"
        backgroundImage="/images/commercial-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Commercial Pressure Washing Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive commercial pressure washing services to keep your business looking its best. Our experienced team uses state-of-the-art equipment and eco-friendly washing solutions to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building Exterior Cleaning</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Storefront and facade cleaning</li>
                <li>Graffiti removal</li>
                <li>Window cleaning</li>
                <li>Awning and signage cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parking Areas</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Parking lot cleaning</li>
                <li>Oil and grease removal</li>
                <li>Parking garage cleaning</li>
                <li>Line striping preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Areas</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Sidewalk and walkway cleaning</li>
                <li>Courtyard cleaning</li>
                <li>Plaza and patio cleaning</li>
                <li>Dumpster pad cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Cleaning</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Warehouse cleaning</li>
                <li>Loading dock cleaning</li>
                <li>Equipment cleaning</li>
                <li>Industrial floor cleaning</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">Years of experience serving Los Angeles businesses with professional pressure washing services.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Equipment</h4>
                <p className="text-gray-600">State-of-the-art pressure washing equipment and eco-friendly washing solutions.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h4>
                <p className="text-gray-600">Consistent, reliable service with flexible scheduling to minimize business disruption.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="commercial-pressure-washing" serviceTitle="Commercial Pressure Washing" />
    </>
  )
} 