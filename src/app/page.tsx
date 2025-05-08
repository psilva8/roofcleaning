'use client'

import FAQ from '@/components/FAQ'

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
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Pressure Washing Services in Los Angeles
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Transform your property with our expert cleaning solutions
          </p>
          <a 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of professional pressure washing services in Los Angeles to keep your property looking its best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Residential Pressure Washing', 'Commercial Pressure Washing', 'Driveway & Sidewalk Cleaning', 
              'Roof Cleaning', 'Regular Maintenance', 'Eco-Friendly Solutions'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{service}</h3>
                <p className="text-gray-600">Professional cleaning services to restore your property's appearance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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