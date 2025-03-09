'use client'

import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import FAQ from '@/components/FAQ'
import { motion } from 'framer-motion'
import {
  HomeIcon,
  BuildingOfficeIcon,
  SunIcon,
  SparklesIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Residential Pressure Washing',
    description: 'Professional house washing services to restore your home\'s exterior to its original beauty.',
    icon: HomeIcon,
  },
  {
    title: 'Commercial Pressure Washing',
    description: 'Keep your business looking pristine with our commercial pressure washing services.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Driveway & Sidewalk Cleaning',
    description: 'Remove tough stains and buildup from your concrete surfaces.',
    icon: SparklesIcon,
  },
  {
    title: 'Roof Cleaning',
    description: 'Gentle soft wash techniques to safely clean and protect your roof.',
    icon: SunIcon,
  },
  {
    title: 'Regular Maintenance',
    description: 'Scheduled cleaning services to keep your property looking its best year-round.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Environmental-friendly cleaning solutions that are tough on dirt but safe for your property.',
    icon: ShieldCheckIcon,
  },
]

const faqs = [
  {
    question: 'What areas in Los Angeles do you service?',
    answer: 'We provide pressure washing services throughout the greater Los Angeles area, including downtown LA, Beverly Hills, Santa Monica, and surrounding neighborhoods.',
  },
  {
    question: 'How often should I have my property pressure washed?',
    answer: 'For residential properties in Los Angeles, we recommend pressure washing every 6-12 months. Commercial properties may require more frequent cleaning depending on foot traffic and location.',
  },
  {
    question: 'Is pressure washing safe for all surfaces?',
    answer: 'While pressure washing is effective for many surfaces, we adjust our techniques and pressure levels based on the material being cleaned. We use soft washing for delicate surfaces to ensure safe and effective cleaning.',
  },
  {
    question: 'What types of stains can pressure washing remove?',
    answer: 'Our pressure washing services can effectively remove dirt, grime, mold, mildew, algae, oil stains, rust stains, and more from various surfaces.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide free estimates for all pressure washing services in Los Angeles. Contact us to schedule an assessment of your property.',
  },
]

export default function Home() {
  return (
    <>
      <Hero
        title="Professional Pressure Washing Services in Los Angeles"
        subtitle="Transform your property with our expert pressure washing solutions"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get Your Free Quote"
        ctaLink="/contact"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial properties, we provide comprehensive pressure washing services throughout Los Angeles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As the top pressure washing company in Los Angeles, we deliver exceptional results with our professional equipment and experienced team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced Professionals</h3>
              <p className="text-gray-600">Our team brings years of experience in pressure washing services, ensuring the highest quality results for your property.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Equipment</h3>
              <p className="text-gray-600">We use state-of-the-art pressure washing equipment and eco-friendly cleaning solutions for optimal results.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our pressure washing services in Los Angeles.
            </p>
          </motion.div>

          <FAQ items={faqs} />
        </div>
      </section>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8">Contact us today for a free estimate on our pressure washing services.</p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
} 