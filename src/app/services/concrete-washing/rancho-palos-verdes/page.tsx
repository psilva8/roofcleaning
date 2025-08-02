import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ConcreteWashingRanchoPalosVerdes() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Washing in Rancho Palos Verdes",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rancho Palos Verdes",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Rancho Palos Verdes"
    },
    "description": "Looking for professional concrete washing services in Rancho Palos Verdes? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
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
        title="Concrete Washing in Rancho Palos Verdes"
        subtitle="Professional concrete washing services for Rancho Palos Verdes properties"
        backgroundImage="/images/driveway-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Concrete Washing in Rancho Palos Verdes
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional concrete washing services in Rancho Palos Verdes? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Rancho Palos Verdes</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Driveway cleaning</li>
                <li>Patio restoration</li>
                <li>Pool deck cleaning</li>
                <li>Walkway maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Rancho Palos Verdes Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Remove tough stains</li>
                <li>Restore surface appearance</li>
                <li>Improve safety</li>
                <li>Enhance property value</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Rancho Palos Verdes
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="concrete-washing" serviceTitle="Concrete Washing" />
    </>
  )
}