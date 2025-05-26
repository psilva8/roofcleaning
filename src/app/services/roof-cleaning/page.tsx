import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'

export default function RoofCleaning() {
  // Service schema for roof cleaning
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Cleaning Los Angeles",
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
    "description": "Professional roof cleaning services in Los Angeles. Safe and effective removal of algae, moss, and stains from all roof types.",
    "serviceType": "Roof Cleaning"
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Professional Roof Cleaning"
        subtitle="Safe and effective cleaning for all roof types"
        backgroundImage="/images/roof-cleaning.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Roof Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              Our professional roof cleaning service safely removes algae, moss, lichens, and black streaks from your roof. We use specialized soft washing techniques that protect your roofing materials while delivering superior cleaning results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Roof Types We Clean</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Asphalt shingles</li>
                <li>Tile roofs</li>
                <li>Metal roofing</li>
                <li>Slate roofs</li>
                <li>Cedar shake</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Issues We Address</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Black streaks and stains</li>
                <li>Algae growth</li>
                <li>Moss buildup</li>
                <li>Lichen colonies</li>
                <li>Accumulated debris</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Soft Wash Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Inspection</h4>
                <p className="text-gray-600">Thorough assessment of your roof's condition and cleaning needs.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Protection</h4>
                <p className="text-gray-600">Safeguarding of surrounding landscaping and surfaces.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Application</h4>
                <p className="text-gray-600">Gentle application of specialized cleaning solutions.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Rinse</h4>
                <p className="text-gray-600">Low-pressure rinse to remove contaminants safely.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Professional Roof Cleaning</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Extended Lifespan</h4>
                <p className="text-gray-600">Regular cleaning helps prevent damage and extends your roof's life.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Energy Efficiency</h4>
                <p className="text-gray-600">Clean roofs reflect more heat, improving energy efficiency.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Curb Appeal</h4>
                <p className="text-gray-600">Restore your roof's appearance and enhance property value.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Roof Cleaning Service?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Specialized soft washing equipment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Eco-friendly cleaning solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Experienced technicians</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Comprehensive insurance coverage</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule a Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 