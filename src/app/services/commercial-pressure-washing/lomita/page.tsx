import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function CommercialPressureWashingLomita() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Pressure Washing in Lomita",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lomita",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Lomita"
    },
    "description": "Looking for professional commercial pressure washing services in Lomita? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
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
        title="Commercial Pressure Washing in Lomita"
        subtitle="Professional commercial pressure washing services for Lomita properties"
        backgroundImage="/images/commercial-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Commercial Pressure Washing in Lomita
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional commercial pressure washing services in Lomita? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Lomita</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Oil and grease removal</li>
                <li>Building exterior cleaning</li>
                <li>Parking lot and garage cleaning</li>
                <li>Dumpster pad cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Lomita Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Enhance property value</li>
                <li>Remove harmful contaminants</li>
                <li>Improve business appearance</li>
                <li>Extend surface life</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Lomita
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="commercial-pressure-washing" serviceTitle="Commercial Pressure Washing" />
    </>
  )
}