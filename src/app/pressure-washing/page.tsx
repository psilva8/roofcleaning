'use client'

import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Head from 'next/head'

export default function PressureWashing() {
  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pressure Washing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles"
    },
    "serviceType": "Pressure Washing",
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles"
    },
    "description": "Professional pressure washing services throughout Los Angeles including residential and commercial solutions.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "150.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.prontocleanz.com/pressure-washing" />
      </Head>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Professional Pressure Washing Services"
        subtitle="Expert pressure washing solutions for all surfaces throughout Los Angeles"
        backgroundImage="/images/pressure-washing.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Top-Rated Pressure Washing Services in Los Angeles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pressure washing service uses state-of-the-art equipment to deliver exceptional cleaning results for residential and commercial properties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/images/house-washing.jpg"
                alt="Residential Pressure Washing"
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                Our residential pressure washing services restore your home's curb appeal by removing dirt, grime, mold, and mildew from exterior surfaces including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>House siding and exterior walls</li>
                <li>Driveways and walkways</li>
                <li>Patios and decks</li>
                <li>Fences and gates</li>
                <li>Roofs (using soft washing techniques)</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="/images/commercial-cleaning.jpg"
                alt="Commercial Pressure Washing"
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                Keep your business looking professional with our commercial pressure washing services. We work with various types of commercial properties including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Retail storefronts and shopping centers</li>
                <li>Office buildings</li>
                <li>Restaurants and food service locations</li>
                <li>Apartment complexes and condominiums</li>
                <li>Parking lots and garages</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Pressure Washing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a thorough process to ensure optimal results while protecting your property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Assessment", 
                description: "We evaluate the surfaces to determine the appropriate cleaning techniques, pressure levels, and cleaning solutions."
              },
              {
                title: "Pre-Treatment", 
                description: "We apply specialized cleaning solutions to break down stubborn dirt, grime, mold, and other contaminants."
              },
              {
                title: "Pressure Washing", 
                description: "Using professional-grade equipment, we remove contaminants without damaging the underlying surfaces."
              },
              {
                title: "Detailing", 
                description: "We pay special attention to corners, edges, and hard-to-reach areas for a comprehensive clean."
              },
              {
                title: "Post-Treatment", 
                description: "When necessary, we apply protective treatments to help prevent future build-up and maintain cleanliness longer."
              },
              {
                title: "Final Inspection", 
                description: "We conduct a thorough inspection to ensure every surface meets our high standards of cleanliness."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 