import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function DeckAndPatioWashingBeverlyHills() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Deck and Patio Washing in Beverly Hills",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Beverly Hills",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Beverly Hills"
    },
    "description": "Looking for professional deck and patio washing services in Beverly Hills? We specialize in serving luxury estates and high-end commercial properties, addressing common challenges like maintaining prestigious property appearances. Our team focuses on premium service with attention to detail to deliver exceptional results.",
    "serviceType": "Deck and Patio Washing"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Deck and Patio Washing in Beverly Hills"
        subtitle="Professional deck and patio washing services for Beverly Hills properties"
        backgroundImage="/images/deck-and-patio-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Deck and Patio Washing in Beverly Hills
            </h2>
            <p className="text-lg text-gray-600">
              Looking for professional deck and patio washing services in Beverly Hills? We specialize in serving luxury estates and high-end commercial properties, addressing common challenges like maintaining prestigious property appearances. Our team focuses on premium service with attention to detail to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services in Beverly Hills</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Composite deck restoration</li>
                <li>Sealing services</li>
                <li>Wood deck cleaning</li>
                <li>Mildew removal</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits for Beverly Hills Properties</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Restore natural beauty</li>
                <li>Prevent wood rot</li>
                <li>Extend deck life</li>
                <li>Protect investment</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in Beverly Hills
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="deck-and-patio-washing" serviceTitle="Deck and Patio Washing" />
    </>
  )
}