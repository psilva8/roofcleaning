'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
  isPhoneLink?: boolean
}

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink, isPhoneLink = false }: HeroProps) {
  return (
    <div 
      className="relative h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
          {ctaText && ctaLink && (
            <motion.a
              href={ctaLink}
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPhoneLink && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>}
              {ctaText}
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  )
} 