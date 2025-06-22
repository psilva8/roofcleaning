import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function GutterCleaning() {
  // Service schema for gutter cleaning
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gutter Cleaning Los Angeles",
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
    "description": "Professional gutter cleaning services in Los Angeles. We clean and maintain gutters to prevent water damage and protect your home.",
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
        title="Professional Gutter Cleaning"
        subtitle="Protect your home with our expert gutter maintenance services"
        backgroundImage="/images/gutter-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Gutter Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              Keep your gutters functioning properly with our professional cleaning services. We remove debris, check for damage, and ensure proper water flow to protect your home from water damage and foundation issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Gutter Services</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Complete gutter cleaning</li>
                <li>Downspout cleaning</li>
                <li>Gutter maintenance</li>
                <li>Minor repairs</li>
                <li>Gutter guard installation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Remove</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Leaves and twigs</li>
                <li>Pine needles</li>
                <li>Roof granules</li>
                <li>Bird nests</li>
                <li>Organic debris</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Cleaning Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Inspection</h4>
                <p className="text-gray-600">Visual assessment of gutters and downspouts.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Debris Removal</h4>
                <p className="text-gray-600">Hand removal of all accumulated debris.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Flushing</h4>
                <p className="text-gray-600">Water testing to ensure proper flow.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Final Check</h4>
                <p className="text-gray-600">Inspection of downspouts and drainage.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Clean Your Gutters?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Prevent Damage</h4>
                <p className="text-gray-600">Avoid water damage to your roof, walls, and foundation.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Pest Control</h4>
                <p className="text-gray-600">Eliminate breeding grounds for mosquitoes and other pests.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Maintenance</h4>
                <p className="text-gray-600">Extend the life of your gutter system and roof.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Signs You Need Gutter Cleaning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Overflowing Gutters</h4>
                  <p className="text-gray-600">Water spilling over the sides during rain</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Visible Plants</h4>
                  <p className="text-gray-600">Plants or weeds growing in gutters</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Sagging Gutters</h4>
                  <p className="text-gray-600">Gutters pulling away from the house</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Water Marks</h4>
                  <p className="text-gray-600">Stains on siding or foundation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule Gutter Cleaning
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="gutter-cleaning" serviceTitle="Gutter Cleaning" />
    </>
  )
} 