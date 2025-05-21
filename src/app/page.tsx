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
  // Local business schema for home page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pressure Washing Los Angeles",
    "description": "Top pressure washing in Los Angeles offering professional residential and commercial cleaning services",
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
    "keywords": "pressure washing in Los Angeles, Los Angeles pressure washing, commercial pressure washing, residential pressure washing, driveway cleaning, house washing"
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
              As the leading provider of pressure washing in Los Angeles, we offer comprehensive cleaning solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {title: 'Residential Pressure Washing', image: '/images/house-washing.jpg'},
              {title: 'Commercial Pressure Washing', image: '/images/commercial-cleaning.jpg'},
              {title: 'Driveway & Sidewalk Cleaning', image: '/images/driveway-cleaning.jpg'},
              {title: 'Roof Cleaning', image: '/images/roof-cleaning.jpg'},
              {title: 'Regular Maintenance', image: '/images/equipment.jpg'},
              {title: 'Eco-Friendly Solutions', image: '/images/eco-friendly.jpg'}
            ].map((service, index) => (
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
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">Professional cleaning services to restore your property's appearance.</p>
                </div>
              </motion.div>
            ))}
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
        </div>
      </section>
    </main>
  )
} 