import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ConcreteWashingWhittier() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Washing in Whittier",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Whittier",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Whittier"
    },
    "description": "Looking for professional concrete washing services in Whittier? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
    "serviceType": "Concrete Washing"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Concrete Washing in Whittier"
        subtitle="Professional concrete washing services for Whittier properties"
        backgroundImage="/images/driveway-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Concrete Washing in Whittier
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional concrete washing services in Whittier? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Whittier</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Pool deck cleaning</li>
                <li>Walkway maintenance</li>
                <li>Stain removal</li>
                <li>Patio restoration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Whittier Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Restore surface appearance</li>
                <li>Remove tough stains</li>
                <li>Extend concrete life</li>
                <li>Prevent concrete damage</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Whittier
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="concrete-washing" serviceTitle="Concrete Washing" />
    </>
  )
}