'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Script from 'next/script'
import Link from 'next/link'
import AreasWeServe from '@/components/AreasWeServe'

export default function RoofWashing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqData = [
    {
      question: "How much does it cost to clean a roof in Los Angeles?",
      answer: "Roof washing costs in Los Angeles typically range from $300 to $800 for most residential homes, depending on the size, pitch, and condition of your roof. Factors affecting price include roof square footage, accessibility, degree of contamination, and roof material type. We provide free, detailed estimates for all roof washing projects."
    },
    {
      question: "What is the average price for a roof wash?",
      answer: "The average price for professional roof washing in Los Angeles is $0.35 to $0.70 per square foot. A typical 2,000 square foot home roof costs between $400-$600 to wash professionally. This includes our soft washing process, eco-friendly solutions, and complete algae, moss, and stain removal."
    },
    {
      question: "What does it cost to have my roof cleaned?",
      answer: "The cost to have your roof professionally cleaned depends on several factors: roof size (typically $300-$800 for residential), roof material and condition, accessibility and safety requirements, and extent of algae or moss growth. We offer competitive pricing with no hidden fees and include a satisfaction guarantee with every roof washing service."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Service schema for roof washing
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Washing Los Angeles",
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
    "description": "Professional roof washing services in Los Angeles. Safe and effective removal of algae, moss, and stains from all roof types.",
    "serviceType": "Roof Washing"
  }

  // FAQ schema for roof washing pricing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to clean a roof in Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roof washing costs in Los Angeles typically range from $300 to $800 for most residential homes, depending on the size, pitch, and condition of your roof. Factors affecting price include roof square footage, accessibility, degree of contamination, and roof material type. We provide free, detailed estimates for all roof washing projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average price for a roof wash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average price for professional roof washing in Los Angeles is $0.35 to $0.70 per square foot. A typical 2,000 square foot home roof costs between $400-$600 to wash professionally. This includes our soft washing process, eco-friendly solutions, and complete algae, moss, and stain removal."
        }
      },
      {
        "@type": "Question",
        "name": "What does it cost to have my roof cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to have your roof professionally cleaned depends on several factors: roof size (typically $300-$800 for residential), roof material and condition, accessibility and safety requirements, and extent of algae or moss growth. We offer competitive pricing with no hidden fees and include a satisfaction guarantee with every roof washing service."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Hero
        title="Professional Roof Washing"
        subtitle="Safe and effective washing for all roof types"
        backgroundImage="/images/roof-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Roof Washing Services
            </h2>
            <p className="text-lg text-gray-600">
              Our professional roof washing service safely removes algae, moss, lichens, and black streaks from your roof. We use specialized soft washing techniques that protect your roofing materials while delivering superior washing results.
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
                <p className="text-gray-600">Thorough assessment of your roof's condition and washing needs.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Protection</h4>
                <p className="text-gray-600">Safeguarding of surrounding landscaping and surfaces.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Application</h4>
                <p className="text-gray-600">Gentle application of specialized washing solutions.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Rinse</h4>
                <p className="text-gray-600">Low-pressure rinse to remove contaminants safely.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Professional Roof Washing</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Roof Washing Service?</h3>
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
                <span className="text-gray-600">Eco-friendly washing solutions</span>
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about roof washing costs and services in Los Angeles
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <AreasWeServe servicePath="roof-washing" serviceTitle="Roof Washing" />
    </>
  )
} 