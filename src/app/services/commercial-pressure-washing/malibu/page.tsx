import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function CommercialPressureWashingMalibu() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Pressure Washing in Malibu",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malibu",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Malibu"
    },
    "description": "Looking for professional commercial pressure washing services in Malibu? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
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
        title="Commercial Pressure Washing in Malibu"
        subtitle="Professional commercial pressure washing services for Malibu properties"
        backgroundImage="/images/commercial-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Commercial Pressure Washing Services in Malibu
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional commercial pressure washing services in Malibu? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Malibu</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Sidewalk and walkway cleaning</li>
                <li>Dumpster pad cleaning</li>
                <li>Oil and grease removal</li>
                <li>Parking lot and garage cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Malibu Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Extend surface life</li>
                <li>Enhance property value</li>
                <li>Prevent slip hazards</li>
                <li>Improve business appearance</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Malibu
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="commercial-pressure-washing" serviceTitle="Commercial Pressure Washing" />
    </>
  )
}