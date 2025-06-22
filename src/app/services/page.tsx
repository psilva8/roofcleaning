'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'

export default function Services() {
  // Service page schema
  const servicePageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Residential Pressure Washing",
          "url": "https://www.prontocleanz.com/services#residential",
          "description": "Professional pressure washing for homes including house washing, driveway cleaning, deck washing, and more."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Commercial Power Washing",
          "url": "https://www.prontocleanz.com/services#commercial",
          "description": "High-powered cleaning solutions for commercial buildings, parking lots, and other business properties."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Specialty Cleaning",
          "url": "https://www.prontocleanz.com/services#specialty",
          "description": "Specialized cleaning services including graffiti removal, gum removal, and other difficult cleaning tasks."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.prontocleanz.com/services" />
      </Head>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema) }}
      />
      
      <Hero
        title="Professional Cleaning Services"
        subtitle="Comprehensive pressure washing and power washing solutions throughout Los Angeles"
        backgroundImage="/images/hero-bg.jpg"
        quality={100}
      />

      {/* Main Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive cleaning solutions for both residential and commercial properties using state-of-the-art equipment and eco-friendly techniques.
            </p>
          </motion.div>

          {/* Residential Services */}
          <div id="residential" className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                Residential Pressure Washing
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our residential pressure washing services are designed to restore and maintain your home's appearance, preserving its value and extending the life of your property's surfaces.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/house-washing.jpg" 
                    alt="House Washing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">House Washing</h4>
                  <p className="text-gray-600 mb-4">
                    Our gentle yet effective house washing removes dirt, mold, mildew, and algae from your home's exterior surfaces, including siding, stucco, brick, and more.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Safe for all exterior surfaces</li>
                    <li>Removes organic growth and stains</li>
                    <li>Improves curb appeal</li>
                    <li>Prevents long-term damage</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/driveway-cleaning.jpg" 
                    alt="Driveway & Concrete Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Driveway & Concrete Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    We restore concrete surfaces to like-new condition by removing oil stains, tire marks, dirt, and grime from driveways, walkways, and patios.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Removes tough oil and grease stains</li>
                    <li>Eliminates weed growth and moss</li>
                    <li>Prevents cracking and deterioration</li>
                    <li>Improves safety by removing slippery residues</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/roof-cleaning.jpg" 
                    alt="Roof Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Roof Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    Our soft washing technique safely removes black streaks, moss, and algae from your roof without damaging shingles or roofing materials.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Extends roof lifespan</li>
                    <li>Improves energy efficiency</li>
                    <li>Prevents costly repairs</li>
                    <li>Enhances overall appearance</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/deck-and-patio-cleaning.jpg" 
                    alt="Deck & Patio Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Deck & Patio Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    Restore wood, vinyl, and composite decks and patios to their original beauty with our specialized cleaning services.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Removes dirt, mold, and mildew</li>
                    <li>Prepares surfaces for sealing or staining</li>
                    <li>Prevents rotting and deterioration</li>
                    <li>Brings back natural color and appearance</li>
                  </ul>
                  <Link 
                    href="/services/deck-and-patio-cleaning" 
                    className="inline-block bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/gutter-cleaning.jpg" 
                    alt="Gutter Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Gutter Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    Professional gutter cleaning services to protect your home from water damage and maintain proper drainage.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Complete debris removal</li>
                    <li>Downspout cleaning and testing</li>
                    <li>Minor repair services</li>
                    <li>Prevents water damage</li>
                  </ul>
                  <Link 
                    href="/services/gutter-cleaning" 
                    className="inline-block bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/equipment.jpg" 
                    alt="Window Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Window Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    Professional window cleaning services for crystal clear views and enhanced curb appeal.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Interior and exterior cleaning</li>
                    <li>Screen cleaning and repair</li>
                    <li>Streak-free finish</li>
                    <li>Regular maintenance programs</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/pressure-washing" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Learn More About Pressure Washing
              </Link>
            </div>
          </div>

          {/* Commercial Services */}
          <div id="commercial" className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                Commercial Power Washing
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our commercial power washing services help businesses maintain a professional appearance while protecting their property investments and ensuring safety for employees and customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/commercial-cleaning.jpg" 
                    alt="Building Exterior Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Building Exterior Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    We clean commercial building exteriors of all types, from retail storefronts to office buildings and industrial facilities.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Removes dirt, pollution, and stains</li>
                    <li>Cleans all surface types including glass, concrete, and metal</li>
                    <li>Maintains professional appearance</li>
                    <li>Prevents deterioration of building materials</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/eco-friendly.jpg" 
                    alt="Parking Lot & Garage Cleaning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Parking Lot & Garage Cleaning</h4>
                  <p className="text-gray-600 mb-4">
                    Our parking area cleaning removes oil stains, tire marks, gum, and debris while adhering to environmental regulations for runoff management.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    <li>Improves property appearance</li>
                    <li>Prevents slip hazards</li>
                    <li>Extends pavement lifespan</li>
                    <li>Environmentally responsible cleaning methods</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/power-washing" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Learn More About Power Washing
              </Link>
            </div>
          </div>

          {/* Specialty Services */}
          <div id="specialty">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                Specialty Cleaning Services
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We offer specialized cleaning solutions for unique situations and challenging cleaning tasks that require extra attention and expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">Graffiti Removal</h4>
                <p className="text-gray-600">
                  Our specialized techniques safely remove graffiti from various surfaces without causing damage to the underlying material.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">Gum Removal</h4>
                <p className="text-gray-600">
                  We effectively remove unsightly gum residue from sidewalks, parking lots, and other high-traffic areas.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">Construction Cleanup</h4>
                <p className="text-gray-600">
                  Post-construction cleaning to remove dust, debris, paint overspray, and other construction residues from new or renovated properties.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today for a free estimate on any of our professional cleaning services. We serve residential and commercial clients throughout Los Angeles County.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:+12136649502" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 