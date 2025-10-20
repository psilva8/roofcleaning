'use client'

import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Transformations from '@/components/sections/Transformations'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Head from 'next/head'

const faqs = [
  {
    question: 'What areas in Los Angeles do you service for roof cleaning?',
    answer: 'We provide professional roof cleaning services throughout the greater Los Angeles area, including downtown LA, Beverly Hills, Santa Monica, Pasadena, Glendale, and all surrounding neighborhoods.',
  },
  {
    question: 'How often should I have my roof cleaned in Los Angeles?',
    answer: 'For Los Angeles properties, we recommend roof cleaning every 1-2 years depending on your roof type and surrounding vegetation. Roofs with heavy moss or algae growth may need more frequent cleaning.',
  },
  {
    question: 'Is roof cleaning safe for all roof types?',
    answer: 'Yes, we use specialized soft washing techniques that are safe for all roof materials including asphalt shingles, tile, metal, and slate. We never use high-pressure washing that could damage your roof.',
  },
  {
    question: 'What can roof cleaning remove from my roof?',
    answer: 'Our roof cleaning services effectively remove moss, algae, lichen, black streaks, dirt, debris, and organic stains. This helps extend your roof\'s lifespan and improves curb appeal.',
  },
  {
    question: 'Do you offer free roof cleaning estimates?',
    answer: 'Yes, we provide free estimates for all roof cleaning services in Los Angeles. We\'ll assess your roof\'s condition and provide a detailed quote for our cleaning services.',
  },
]

export default function Home() {
  // Local business schema for home page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Roof Cleaning Los Angeles",
    "description": "Professional roof cleaning services in Los Angeles. Expert moss, algae, and stain removal for all roof types using safe soft washing techniques",
    "url": "https://www.prontocleanz.com",
    "telephone": "12136649502",
    "email": "prontocleanpw@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "360 E 2nd St Ste 800",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90012",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0478913731587",
      "longitude": "-118.24271722428371"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Los Angeles"
      },
      {
        "@type": "City",
        "name": "Beverly Hills"
      },
      {
        "@type": "City",
        "name": "Santa Monica"
      },
      {
        "@type": "City",
        "name": "Pasadena"
      },
      {
        "@type": "City",
        "name": "Glendale"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "34.0478913731587",
        "longitude": "-118.24271722428371"
      },
      "geoRadius": "50000"
    },
    "image": "https://www.prontocleanz.com/images/roof-washing.jpg",
    "sameAs": [
      "https://www.facebook.com/roofcleaninglosangeles",
      "https://www.yelp.com/biz/roof-cleaning-los-angeles"
    ],
    "slogan": "The trusted choice for roof cleaning in Los Angeles",
    "keywords": "roof cleaning Los Angeles, roof washing Los Angeles, moss removal, algae removal, residential roof cleaning, commercial roof cleaning, soft washing"
  };

  return (
    <main>
      <Head>
        <link rel="canonical" href="https://www.prontocleanz.com" />
      </Head>
      <Script
        id="local-business-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero
        title="Roof Cleaning Los Angeles"
        subtitle="Professional roof cleaning services to remove moss, algae, and stains. Safe soft washing techniques for all roof types."
        backgroundImage="/images/roof-washing.jpg" quality={100}
        ctaText="Get Free Estimate"
        ctaLink="tel:+12136649502"
        isPhoneLink={true}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Roof Cleaning Services in Los Angeles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Los Angeles' leading roof cleaning specialists, we safely remove moss, algae, black streaks, and stains from all roof types using gentle soft washing techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Roof Cleaning',
                image: '/images/roof-washing.jpg',
                link: 'https://www.prontocleanz.com/services/roof-washing/',
                description: 'Safe roof cleaning for homes using soft washing techniques to remove moss, algae, and stains.'
              },
              {
                title: 'Commercial Roof Cleaning',
                image: '/images/commercial-roof-cleaning.jpg',
                link: 'https://www.prontocleanz.com/services/commercial-pressure-washing/',
                description: 'Professional roof cleaning services for commercial buildings and multi-unit properties.'
              },
              {
                title: 'Moss & Algae Removal',
                image: '/images/moss-removal.jpg',
                link: 'https://www.prontocleanz.com/services/roof-washing/',
                description: 'Specialized treatment to safely remove moss and algae growth from all roof types.'
              },
              {
                title: 'Tile Roof Cleaning',
                image: '/images/tile-roof-cleaning.jpg',
                link: 'https://www.prontocleanz.com/services/roof-washing/',
                description: 'Expert cleaning for clay and concrete tile roofs, restoring their original color and beauty.'
              },
              {
                title: 'Asphalt Shingle Cleaning',
                image: '/images/shingle-cleaning.jpg',
                link: 'https://www.prontocleanz.com/services/roof-washing/',
                description: 'Gentle cleaning for asphalt shingles to remove black streaks and extend roof life.'
              },
              {
                title: 'Gutter Cleaning & Maintenance',
                image: '/images/gutter-cleaning.jpg',
                link: 'https://www.prontocleanz.com/services/gutter-washing/',
                description: 'Complete gutter cleaning and maintenance to complement your roof cleaning service.'
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={service.link} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Roof Cleaning Methods</h3>
              <p className="text-gray-600 mb-4">
                Our expert roof cleaning in Los Angeles uses industry-leading soft washing techniques to safely clean your roof without causing damage. We protect your investment while restoring your roof's appearance.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soft washing - no high pressure damage
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Safe for all roof materials
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Extends roof lifespan significantly
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Roof Cleaning</h3>
              <p className="text-gray-600 mb-4">
                As Los Angeles' trusted roof cleaning specialists, we deliver superior results using eco-friendly solutions and proven techniques. Our commitment to quality ensures your satisfaction.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Experienced & insured technicians
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100% satisfaction guarantee
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free estimates & consultations
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Transformations />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Roof Cleaning FAQ</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our roof cleaning services in Los Angeles</p>
          </div>
          <FAQ items={faqs} />
          
          <div className="mt-12 text-center">
            <a 
              href="tel:+12136649502" 
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Get Free Roof Cleaning Estimate: (213) 664-9502
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 