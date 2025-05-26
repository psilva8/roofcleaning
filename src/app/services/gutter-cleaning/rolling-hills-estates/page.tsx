import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function GutterCleaningRollingHillsEstates() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gutter Cleaning in Rolling Hills Estates",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rolling Hills Estates",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Rolling Hills Estates"
    },
    "description": "Looking for professional gutter cleaning services in Rolling Hills Estates? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.",
    "serviceType": "Gutter Cleaning"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Gutter Cleaning in Rolling Hills Estates"
        subtitle="Professional gutter cleaning services for Rolling Hills Estates properties"
        backgroundImage="/images/gutter-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Gutter Cleaning Services in Rolling Hills Estates
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional gutter cleaning services in Rolling Hills Estates? We specialize in serving residential and commercial properties, addressing common challenges like maintaining property appearance and value. Our team focuses on quality service and customer satisfaction to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Rolling Hills Estates</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Gutter inspection</li>
                <li>Minor repairs</li>
                <li>Downspout cleaning</li>
                <li>Maintenance plans</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Rolling Hills Estates Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Avoid pest issues</li>
                <li>Protect foundation</li>
                <li>Prevent water damage</li>
                <li>Prevent overflow</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Rolling Hills Estates
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="gutter-cleaning" serviceTitle="Gutter Cleaning" />
    </>
  )
}