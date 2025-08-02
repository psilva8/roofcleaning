'use client'

import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Transformations from '@/components/sections/Transformations'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Head from 'next/head'

const faqs = [
  {
    question: 'What areas in Los Angeles do you service?',
    answer: 'We provide pressure washing services throughout the greater Los Angeles area, including downtown LA, Beverly Hills, Santa Monica, and surrounding neighborhoods.',
  },
  {
    question: 'How often should I have my property pressure washed?',
    answer: 'For residential properties in Los Angeles, we recommend pressure washing every 6-12 months. Commercial properties may require more frequent washing depending on foot traffic and location.',
  },
  {
    question: 'Is pressure washing safe for all surfaces?',
    answer: 'While pressure washing is effective for many surfaces, we adjust our techniques and pressure levels based on the material being cleaned. We use soft washing for delicate surfaces to ensure safe and effective washing.',
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
  // Local business schema for home page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pressure Washing Los Angeles",
    "description": "Top pressure washing in Los Angeles offering professional residential and commercial washing services",
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
        "name": "Hollywood"
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
    "image": "https://www.prontocleanz.com/images/hero-bg.jpg",
    "sameAs": [
      "https://www.facebook.com/pressurewashinglosangeles",
      "https://www.yelp.com/biz/pressure-washing-los-angeles"
    ],
    "slogan": "The trusted choice for pressure washing in Los Angeles",
    "keywords": "pressure washing in Los Angeles, Los Angeles pressure washing, commercial pressure washing, residential pressure washing, driveway washing, house washing"
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
                    title="Top Pressure Washing in Los Angeles"
        subtitle="Professional, affordable pressure washing services throughout Los Angeles County"
        backgroundImage="/images/hero-bg.jpg" quality={100}
        ctaText="Call Now"
        ctaLink="tel:+12136649502"
        isPhoneLink={true}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pressure Washing Services in Los Angeles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As the leading provider of pressure washing in Los Angeles, we offer comprehensive washing solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Pressure Washing',
                image: '/images/house-washing.jpg',
                link: 'https://www.prontocleanz.com/services/residential-house-washing/'
              },
              {
                title: 'Commercial Pressure Washing',
                image: '/images/commercial-washing.jpg',
                link: 'https://www.prontocleanz.com/services/commercial-pressure-washing/'
              },
              {
                title: 'Driveway & Sidewalk Cleaning',
                image: '/images/driveway-washing.jpg',
                link: 'https://www.prontocleanz.com/services/concrete-washing/'
              },
              {
                title: 'Roof Washing',
                image: '/images/roof-washing.jpg',
                link: 'https://www.prontocleanz.com/services/roof-washing/'
              },
              {
                title: 'Gutter Washing',
                image: '/images/gutter-washing.jpg',
                link: 'https://www.prontocleanz.com/services/gutter-washing/'
              },
              {
                title: 'Deck & Patio Washing',
                image: '/images/deck-and-patio-washing.jpg',
                link: 'https://www.prontocleanz.com/services/deck-and-patio-washing/'
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
                    <p className="text-gray-600">Professional washing services to restore your property's appearance.</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Maintenance Programs</h3>
              <p className="text-gray-600 mb-4">
                Keep your property looking its best with our scheduled pressure washing in Los Angeles. Our maintenance programs are designed to prevent buildup and maintain your property's curb appeal year-round.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized cleaning schedules
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority scheduling for maintenance clients
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Preventive care to extend surface life
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly Pressure Washing</h3>
              <p className="text-gray-600 mb-4">
                As a responsible pressure washing company in Los Angeles, we use environmentally friendly washing solutions and water-saving techniques to protect both your property and the environment.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Biodegradable washing solutions
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Water reclamation systems
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  EPA-compliant practices
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our pressure washing services in Los Angeles</p>
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
              Call Now: (213) 664-9502
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 