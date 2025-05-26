'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface AreasWeServeProps {
  servicePath: string // e.g., 'roof-cleaning' or 'concrete-cleaning'
  serviceTitle: string // e.g., 'Roof Cleaning' or 'Concrete Cleaning'
}

// List of LA County cities
const losAngelesCities = [
  'Agoura Hills', 'Alhambra', 'Arcadia', 'Artesia', 'Avalon', 'Azusa', 'Baldwin Park',
  'Bell', 'Bell Gardens', 'Bellflower', 'Beverly Hills', 'Bradbury', 'Burbank', 'Calabasas',
  'Carson', 'Cerritos', 'Claremont', 'Commerce', 'Compton', 'Covina', 'Cudahy', 'Culver City',
  'Diamond Bar', 'Downey', 'Duarte', 'El Monte', 'El Segundo', 'Gardena', 'Glendale', 'Glendora',
  'Hawaiian Gardens', 'Hawthorne', 'Hermosa Beach', 'Hidden Hills', 'Huntington Park', 'Industry',
  'Inglewood', 'Irwindale', 'La Canada Flintridge', 'La Habra Heights', 'La Mirada', 'La Puente',
  'La Verne', 'Lakewood', 'Lancaster', 'Lawndale', 'Lomita', 'Long Beach', 'Los Angeles', 'Lynwood',
  'Malibu', 'Manhattan Beach', 'Maywood', 'Monrovia', 'Montebello', 'Monterey Park', 'Norwalk',
  'Palmdale', 'Palos Verdes Estates', 'Paramount', 'Pasadena', 'Pico Rivera', 'Pomona', 'Rancho Palos Verdes',
  'Redondo Beach', 'Rolling Hills', 'Rolling Hills Estates', 'Rosemead', 'San Dimas', 'San Fernando',
  'San Gabriel', 'San Marino', 'Santa Clarita', 'Santa Fe Springs', 'Santa Monica', 'Sierra Madre',
  'Signal Hill', 'South El Monte', 'South Gate', 'South Pasadena', 'Temple City', 'Torrance', 'Vernon',
  'Walnut', 'West Covina', 'West Hollywood', 'Westlake Village', 'Whittier'
].sort()

export default function AreasWeServe({ servicePath, serviceTitle }: AreasWeServeProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Function to convert city name to URL-friendly slug
  const cityToSlug = (city: string) => city.toLowerCase().replace(/\s+/g, '-')

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide professional {serviceTitle.toLowerCase()} services throughout Los Angeles County. 
            Click on your city below to learn more about our services in your area.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="text-lg font-medium text-gray-900">
              Find {serviceTitle} Services in Your City
            </span>
            <ChevronDownIcon 
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div className={`mt-4 transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-[60vh] opacity-100 overflow-y-auto' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {losAngelesCities.map((city) => (
                  <Link
                    key={city}
                    href={`/services/${servicePath}/${cityToSlug(city)}`}
                    className="text-gray-600 hover:text-primary hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-200"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your city listed? We likely still serve your area!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Us for Service Availability
          </Link>
        </div>
      </div>
    </section>
  )
} 