'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Pressure Washing Los Angeles</h3>
            <p className="text-slate-300">
              Professional pressure washing services in Los Angeles
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-2 mb-2">
              <PhoneIcon className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-slate-300">1 (213) 664-9502</span>
            </div>
            <div className="flex items-start space-x-2 mb-2">
              <EnvelopeIcon className="h-5 w-5 text-primary mt-0.5" />
              <a href="mailto:prontocleanpw@gmail.com" className="text-slate-300 hover:text-white">
                prontocleanpw@gmail.com
              </a>
            </div>
            <div className="flex items-start space-x-2">
              <MapPinIcon className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-slate-300">
                360 E 2nd St Ste 800<br />
                Los Angeles, CA 90012
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <p className="text-slate-300">
              Monday - Friday: 8AM - 6PM<br />
              Saturday: 9AM - 4PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pressure Washing Los Angeles. All rights reserved.</p>
          <p className="mt-2">Marketing by: <a href="https://www.paulsilvamarketing.com/" className="text-primary hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">paulsilvamarketing.com</a></p>
        </div>
      </div>
    </footer>
  )
} 