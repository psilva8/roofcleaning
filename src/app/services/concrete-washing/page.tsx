import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function ConcreteWashing() {
  // Service schema for concrete washing
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Washing Los Angeles",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles"
    },
    "description": "Professional concrete washing services in Los Angeles. We clean driveways, sidewalks, patios, and all concrete surfaces.",
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
        title="Concrete Washing Services"
        subtitle="Restore your concrete surfaces to like-new condition"
        backgroundImage="/images/driveway-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Concrete Washing
            </h2>
            <p className="text-lg text-gray-600">
              Our concrete washing service removes tough stains, oil, grease, and grime from all types of concrete surfaces. We use professional-grade equipment and eco-friendly washing solutions to restore your concrete's appearance while protecting its integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Concrete Washing</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Driveway cleaning</li>
                <li>Sidewalk cleaning</li>
                <li>Patio cleaning</li>
                <li>Pool deck cleaning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Concrete Washing</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Parking lot cleaning</li>
                <li>Loading dock cleaning</li>
                <li>Walkway cleaning</li>
                <li>Commercial entrance cleaning</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Concrete Washing Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Surface Preparation</h4>
                <p className="text-gray-600">Thorough sweeping and debris removal before washing begins.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Deep Cleaning</h4>
                <p className="text-gray-600">Application of specialized cleaners and high-pressure washing to remove stains.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Surface Protection</h4>
                <p className="text-gray-600">Optional sealing services to protect against future staining.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Stains We Remove</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Oil & Grease</h4>
                <p className="text-gray-600">Vehicle leaks and mechanical stains</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Rust</h4>
                <p className="text-gray-600">Metal furniture and equipment stains</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Organic</h4>
                <p className="text-gray-600">Leaf stains, moss, and algae</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Chemical</h4>
                <p className="text-gray-600">Fertilizer and chemical spills</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="concrete-washing" serviceTitle="Concrete Washing" />
    </>
  )
} 