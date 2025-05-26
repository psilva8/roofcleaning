import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ConcreteCleaningLaVerne() {
  // Service schema with city-specific information
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Cleaning in La Verne",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "La Verne",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "La Verne"
    },
    "description": "Professional concrete cleaning and restoration services in La Verne, Los Angeles County.",
    "serviceType": "Concrete Cleaning"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Concrete Cleaning in La Verne"
        subtitle="Professional concrete cleaning services for La Verne properties"
        backgroundImage="/images/driveway-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Concrete Cleaning in La Verne
            </h2>
            <p className="text-lg text-gray-600">
              We provide professional concrete cleaning services throughout La Verne. 
              Our experienced team uses state-of-the-art equipment and eco-friendly cleaning solutions 
              to deliver exceptional results for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us in La Verne</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Local La Verne service provider</li>
                <li>Experienced and professional team</li>
                <li>Advanced cleaning equipment</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>Satisfaction guaranteed</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Free property assessment</li>
                <li>Customized cleaning plan</li>
                <li>Professional execution</li>
                <li>Quality inspection</li>
                <li>Customer satisfaction review</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote in La Verne
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="concrete-cleaning" serviceTitle="Concrete Cleaning" />
    </>
  )
}