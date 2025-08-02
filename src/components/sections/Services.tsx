'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'House Washing',
    description: 'Restore your home\'s exterior to its original beauty',
    image: '/images/house-washing.jpg'
  },
  {
    title: 'Driveway Washing',
    description: 'Remove tough stains and buildup from concrete surfaces',
    image: '/images/driveway-washing.jpg'
  },
  {
    title: 'Roof Washing',
    description: 'Gentle soft wash techniques for your roof',
    image: '/images/roof-washing.jpg'
  },
  {
    title: 'Commercial Washing',
    description: 'Keep your business looking pristine',
    image: '/images/commercial-washing.jpg'
  },
  {
    title: 'Gutter Washing',
    description: 'Professional gutter maintenance and debris removal',
    image: '/images/gutter-washing.jpg'
  },
  {
    title: 'Deck & Patio Washing',
    description: 'Restore outdoor living spaces to their original beauty',
    image: '/images/deck-and-patio-washing.jpg'
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive pressure washing solutions for every need</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 