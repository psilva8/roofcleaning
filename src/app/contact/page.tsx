'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch for professional pressure washing services in Los Angeles"
        backgroundImage="/images/contact-bg.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
            <p className="text-gray-600 mb-12 text-center">
              Ready to transform your property? Contact us today for a free estimate on our pressure washing services in Los Angeles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">1 (213) 664-9502</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@prontocleanz.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Office Address</h3>
                  <p className="text-gray-600">360 E 2nd St Ste 800</p>
                  <p className="text-gray-600">Los Angeles, CA 90012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ClockIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="mailto:info@prontocleanz.com" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Email Us Now
              </a>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7426913369097!2d-118.24066232333083!3d34.04988847304867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c63c9fb04de1%3A0x1234!2s360%20E%202nd%20St%20%23800%2C%20Los%20Angeles%2C%20CA%2090012!5e0!3m2!1sen!2sus!4v1683579696244!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pronto Clean Office Location"
                ></iframe>
              </div>
              <p className="text-gray-600">
                Our office is centrally located in downtown Los Angeles, allowing us to serve customers throughout the LA area with fast response times and exceptional service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Service Areas in Los Angeles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We provide professional pressure washing services throughout Los Angeles, including Downtown LA, Beverly Hills, Santa Monica, Hollywood, and surrounding areas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium text-gray-900">Downtown LA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium text-gray-900">Beverly Hills</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium text-gray-900">Santa Monica</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium text-gray-900">Hollywood</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 