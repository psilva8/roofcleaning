import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ConcreteWashingIrwindale() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Washing in Irwindale",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Irwindale",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Irwindale"
    },
    "description": "Looking for professional concrete washing services in Irwindale? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
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
        title="Concrete Washing in Irwindale"
        subtitle="Professional concrete washing services for Irwindale properties"
        backgroundImage="/images/driveway-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Concrete Washing in Irwindale
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional concrete washing services in Irwindale? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Irwindale</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Pool deck cleaning</li>
                <li>Driveway cleaning</li>
                <li>Garage floor cleaning</li>
                <li>Walkway maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Irwindale Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Enhance property value</li>
                <li>Improve safety</li>
                <li>Extend concrete life</li>
                <li>Remove tough stains</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Irwindale
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="concrete-washing" serviceTitle="Concrete Washing" />
    </>
  )
}