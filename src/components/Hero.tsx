'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
}

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink }: HeroProps) {
  return (
    <div 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">{subtitle}</p>
          {ctaText && ctaLink && (
            <motion.a
              href={ctaLink}
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  )
} 