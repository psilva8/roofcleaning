'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface VideoHeroProps {
  videoUrl?: string // YouTube or Vimeo embed URL
  localVideo?: string // Local video file path
  posterImage: string // Fallback image
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function VideoHero({ 
  videoUrl, 
  localVideo, 
  posterImage, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink 
}: VideoHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* YouTube/Vimeo Embed */}
      {videoUrl && showVideo && (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={`${videoUrl}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            title="Background Video"
            className="w-full h-full object-cover scale-150" // Scale to remove YouTube controls
            allow="autoplay; muted"
            style={{ filter: 'brightness(0.4)' }}
          />
        </div>
      )}

      {/* Self-hosted Video */}
      {localVideo && showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={localVideo} type="video/mp4" />
          {/* Fallback to poster image */}
          <img src={posterImage} alt="Video fallback" className="w-full h-full object-cover" />
        </video>
      )}

      {/* Fallback Background Image */}
      {!showVideo && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${posterImage})` }}
        />
      )}

      {/* Play Button Overlay (before video plays) */}
      {!showVideo && (
        <button 
          onClick={() => setShowVideo(true)}
          className="absolute inset-0 flex items-center justify-center group"
          aria-label="Play background video"
        >
          <div className="bg-black/30 rounded-full p-6 group-hover:bg-black/50 transition-colors">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </button>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.a
            href={ctaLink}
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {ctaText}
          </motion.a>
        </div>
      </div>

      {/* Video Controls (optional) */}
      {showVideo && (
        <div className="absolute bottom-4 right-4 z-20">
          <button 
            onClick={() => setShowVideo(false)}
            className="bg-black/50 text-white p-2 rounded hover:bg-black/70 transition-colors"
            aria-label="Pause video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
} 