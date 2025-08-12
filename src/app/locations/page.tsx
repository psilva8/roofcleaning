'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

const laCities = [
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

function formatCityName(city: string): string {
  return city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function LocationsPage() {
  return (
    <>
      <Head>
        <title>Service Locations - Pressure & Power Washing Throughout Los Angeles County</title>
        <meta name="description" content="Professional pressure washing and power washing services available throughout Los Angeles County. Find your city and get a free estimate today." />
        <link rel="canonical" href="https://www.prontocleanz.com/locations/" />
      </Head>
      <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Service Locations Throughout Los Angeles County
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional pressure washing and power washing services available in {laCities.length} cities across Los Angeles County. 
            Find your location below and discover our specialized cleaning solutions for your area.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Two Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer both pressure washing and power washing services, each tailored to specific cleaning needs and surface types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                Perfect for residential properties, delicate surfaces, and regular maintenance. Uses ambient temperature water 
                with varying pressure levels to safely clean homes, decks, and outdoor furniture.
              </p>
              <Link 
                href="/pressure-washing/" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More About Pressure Washing
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Power Washing</h3>
              <p className="text-gray-600 mb-4">
                Ideal for commercial properties, tough stains, and heavy-duty cleaning. Uses heated water with high pressure 
                to tackle grease, oil stains, and stubborn grime on concrete and industrial surfaces.
              </p>
              <Link 
                href="/power-washing/" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More About Power Washing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your City</h2>
            <p className="text-lg text-gray-600">
              Select your location to learn about our specialized cleaning services in your area
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {laCities.map((city, index) => {
              const formattedCity = formatCityName(city);
              
              return (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.01 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-center">{formattedCity}</h3>
                    <div className="space-y-2">
                      <Link 
                        href={`/pressure-washing/${city}/`}
                        className="block w-full text-center py-2 px-3 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors text-sm"
                      >
                        Pressure Washing
                      </Link>
                      <Link 
                        href={`/power-washing/${city}/`}
                        className="block w-full text-center py-2 px-3 bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors text-sm"
                      >
                        Power Washing
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Location?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We may still service your area! Contact us to discuss your pressure washing or power washing needs.
          </p>
          <a 
            href="tel:+12136649502" 
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Call (213) 664-9502
          </a>
        </div>
      </section>
    </main>
    </>
  )
}
