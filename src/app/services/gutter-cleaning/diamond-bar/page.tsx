import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function GutterCleaningDiamondBar() {
  // Service schema with city-specific information
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gutter Cleaning in Diamond Bar",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Diamond Bar",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Diamond Bar"
    },
    "description": "Professional gutter cleaning and maintenance services in Diamond Bar, Los Angeles County.",
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
        title="Gutter Cleaning in Diamond Bar"
        subtitle="Professional gutter cleaning services for Diamond Bar properties"
        backgroundImage="/images/gutter-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Gutter Cleaning in Diamond Bar
            </h2>
            <p className="text-lg text-gray-600">
              We provide professional gutter cleaning services throughout Diamond Bar. 
              Our experienced team uses state-of-the-art equipment and eco-friendly cleaning solutions 
              to deliver exceptional results for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us in Diamond Bar</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Local Diamond Bar service provider</li>
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
              Get a Free Quote in Diamond Bar
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="gutter-cleaning" serviceTitle="Gutter Cleaning" />
    </>
  )
}