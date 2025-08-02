'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface VideoItem {
  id: string
  title: string
  description: string
  videoUrl?: string // YouTube/Vimeo URL
  localVideo?: string // Local video file
  thumbnail: string
  type: 'transformation' | 'testimonial' | 'process'
  duration?: string
}

interface VideoGalleryProps {
  videos: VideoItem[]
  title: string
  subtitle?: string
}

export default function VideoGallery({ videos, title, subtitle }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => openVideo(video)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group"
                  aria-label={`Play ${video.title}`}
                >
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>

                {/* Duration Badge */}
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    video.type === 'transformation' ? 'bg-blue-500 text-white' :
                    video.type === 'testimonial' ? 'bg-green-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {video.type === 'transformation' ? 'Before/After' :
                     video.type === 'testimonial' ? 'Testimonial' :
                     'Process'}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">{selectedVideo.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-2"
                aria-label="Close video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video bg-black">
              {selectedVideo.videoUrl ? (
                // YouTube/Vimeo Embed
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : selectedVideo.localVideo ? (
                // Self-hosted Video
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.localVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // Fallback
                <div className="flex items-center justify-center h-full">
                  <p className="text-white">Video not available</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4">
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 