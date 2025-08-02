import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function RoofWashingAgouraHills() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Washing in Agoura Hills",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Agoura Hills",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Agoura Hills"
    },
    "description": "Looking for professional roof washing services in Agoura Hills? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
    "serviceType": "Roof Washing"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Roof Washing in Agoura Hills"
        subtitle="Professional roof washing services for Agoura Hills properties"
        backgroundImage="/images/roof-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Roof Washing in Agoura Hills
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional roof washing services in Agoura Hills? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Agoura Hills</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Algae removal</li>
                <li>Moss treatment</li>
                <li>Shingle cleaning</li>
                <li>Gutter system cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Agoura Hills Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Maintain warranty</li>
                <li>Prevent damage</li>
                <li>Enhance curb appeal</li>
                <li>Extend roof lifespan</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Agoura Hills
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="roof-washing" serviceTitle="Roof Washing" />
    </>
  )
}