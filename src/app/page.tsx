'use client'

import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Transformations from '@/components/sections/Transformations'
import Team from '@/components/sections/Team'
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
    <main>
      <Hero />
      <Services />
      <Transformations />
      <Team />
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our pressure washing services in Los Angeles</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
    </main>
  )
} 