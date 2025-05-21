'use client'

import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function PowerWashing() {
  const [showAllLocations, setShowAllLocations] = useState(false);
export const metadata = {
  canonical: "https://www.prontocleanz.com/power-washing",
};



  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Power Washing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pressure Washing Los Angeles"
    },
    "serviceType": "Power Washing",
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles"
    },
    "description": "Professional power washing services in Los Angeles with advanced equipment for effective cleaning of all surfaces.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "150.00",
      "priceCurrency": "USD"
    }
  };

  // Top cities in Los Angeles county
  const featuredCities = [
    "los-angeles",
    "long-beach",
    "santa-monica",
    "beverly-hills",
    "pasadena",
    "malibu",
    "glendale",
    "burbank",
    "culver-city",
    "manhattan-beach",
    "west-hollywood",
    "redondo-beach"
  ];

  // All cities in Los Angeles county
  const allCities = [
    'agoura-hills', 'alhambra', 'arcadia', 'artesia', 'avalon', 'azusa', 'baldwin-park', 
    'bell', 'bell-gardens', 'bellflower', 'beverly-hills', 'bradbury', 'burbank', 'calabasas', 
    'carson', 'cerritos', 'claremont', 'commerce', 'compton', 'covina', 'cudahy', 'culver-city', 
    'diamond-bar', 'downey', 'duarte', 'el-monte', 'el-segundo', 'gardena', 'glendale', 'glendora', 
    'hawaiian-gardens', 'hawthorne', 'hermosa-beach', 'hidden-hills', 'huntington-park', 'industry', 
    'inglewood', 'irwindale', 'la-canada-flintridge', 'la-habra-heights', 'la-mirada', 'la-puente', 
    'la-verne', 'lakewood', 'lancaster', 'lawndale', 'lomita', 'long-beach', 'los-angeles', 'lynwood', 
    'malibu', 'manhattan-beach', 'maywood', 'monrovia', 'montebello', 'monterey-park', 'norwalk', 
    'palmdale', 'palos-verdes-estates', 'paramount', 'pasadena', 'pico-rivera', 'pomona', 'rancho-palos-verdes', 
    'redondo-beach', 'rolling-hills', 'rolling-hills-estates', 'rosemead', 'san-dimas', 'san-fernando', 
    'san-gabriel', 'san-marino', 'santa-clarita', 'santa-fe-springs', 'santa-monica', 'sierra-madre', 
    'signal-hill', 'south-el-monte', 'south-gate', 'south-pasadena', 'temple-city', 'torrance', 'vernon', 
    'walnut', 'west-covina', 'west-hollywood', 'westlake-village', 'whittier'
  ];

  // Display cities - either featured or all
  const displayCities = showAllLocations ? allCities : featuredCities;

  // Toggle show all locations
  const toggleShowAllLocations = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAllLocations(!showAllLocations);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.prontocleanz.com/power-washing" />
      </Head>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Hero
        title="Expert Power Washing Services"
        subtitle="High-performance power washing for homes and businesses in Los Angeles"
        backgroundImage="/images/commercial-cleaning.jpg"
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
              Los Angeles Power Washing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our power washing services utilize high-pressure water systems to effectively remove tough dirt, grime, mold, and stains from various surfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Power Washing?</h3>
              <p className="text-gray-600 mb-4">
                Power washing uses heated water and high pressure to clean surfaces, making it particularly effective for:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Removing oil and grease stains from driveways and garage floors</li>
                <li>Eliminating stubborn grime from concrete and brick surfaces</li>
                <li>Cleaning commercial and industrial equipment</li>
                <li>Preparing surfaces for painting or sealing</li>
              </ul>
              <p className="text-gray-600">
                The combination of heat and pressure makes power washing ideal for tackling the toughest cleaning challenges that standard pressure washing might struggle with.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="/images/driveway-cleaning.jpg"
                alt="Power Washing in Los Angeles"
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Equipment</h3>
              <p className="text-gray-600">
                We use commercial-grade power washing equipment with adjustable pressure and temperature controls. This allows us to customize our approach for each surface and type of contaminant, ensuring optimal cleaning results without causing damage to your property.
              </p>
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
              Power Washing Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our power washing services are suitable for a wide range of applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Concrete Surfaces", 
                description: "Driveways, sidewalks, parking lots, and garage floors.",
                image: "/images/driveway-cleaning.jpg"
              },
              {
                title: "Commercial Properties", 
                description: "Storefronts, building exteriors, loading docks, and dumpster areas.",
                image: "/images/commercial-cleaning.jpg"
              },
              {
                title: "Industrial Cleaning", 
                description: "Equipment, machinery, warehouses, and factory floors.",
                image: "/images/equipment.jpg"
              },
              {
                title: "Deck & Patio Restoration", 
                description: "Wooden decks, stone patios, and outdoor living spaces.",
                image: "/images/house-washing.jpg"
              },
              {
                title: "Graffiti Removal", 
                description: "Effective removal of graffiti from walls and other surfaces.",
                image: "/images/eco-friendly.jpg"
              },
              {
                title: "Pre-painting Preparation", 
                description: "Preparing surfaces for painting, staining, or sealing.",
                image: "/images/roof-cleaning.jpg"
              }
            ].map((application, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={application.image} 
                    alt={application.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
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
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Power Washing Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide specialized power washing services throughout Los Angeles County.
              Select your city below to learn about our power washing services in your area.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {displayCities.map((city, index) => {
              const formattedCity = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
              
              return (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link href={`/power-washing/${city}`} className="block py-3 px-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center">
                    <span className="font-medium text-gray-800">{formattedCity}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={toggleShowAllLocations}
              className="text-primary font-medium hover:underline flex items-center justify-center mx-auto"
            >
              {showAllLocations ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Show fewer service areas
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View all service areas
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  )
} 