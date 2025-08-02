import VideoHero from '@/components/VideoHero'
import VideoGallery from '@/components/VideoGallery'
import ServicesSection from '@/components/sections/Services'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/FAQ'

// Example video data - replace with your actual videos
const videoData = [
  {
    id: 'transformation-1',
    title: 'Driveway Pressure Washing Transformation',
    description: 'Watch as we transform this heavily stained driveway in just 2 hours using our professional equipment.',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE', // Replace with actual YouTube URL
    thumbnail: '/images/driveway-before.jpg',
    type: 'transformation' as const,
    duration: '3:24'
  },
  {
    id: 'transformation-2',
    title: 'House Exterior Washing Time-lapse',
    description: 'Complete house exterior washing showing the dramatic difference our pressure washing makes.',
    localVideo: '/videos/house-cleaning-timelapse.mp4', // Local video file
    thumbnail: '/images/house-before.jpg',
    type: 'transformation' as const,
    duration: '2:15'
  },
  {
    id: 'testimonial-1',
    title: 'Customer Review - Sarah from Beverly Hills',
    description: 'Hear from Sarah about her experience with our residential pressure washing service.',
    videoUrl: 'https://www.youtube.com/embed/TESTIMONIAL_VIDEO_ID',
    thumbnail: '/images/testimonial-sarah.jpg',
    type: 'testimonial' as const,
    duration: '1:45'
  },
  {
    id: 'process-1',
    title: 'Our Professional Equipment in Action',
    description: 'See the commercial-grade equipment we use and our systematic washing process.',
    localVideo: '/videos/equipment-demo.mp4',
    thumbnail: '/images/equipment.jpg',
    type: 'process' as const,
    duration: '4:12'
  },
  {
    id: 'transformation-3',
    title: 'Commercial Building Restoration',
    description: 'Before and after footage of a complete commercial building exterior washing project.',
    videoUrl: 'https://vimeo.com/YOUR_VIMEO_ID/embed',
    thumbnail: '/images/commercial-before.jpg',
    type: 'transformation' as const,
    duration: '5:33'
  },
  {
    id: 'testimonial-2',
    title: 'Business Owner Testimonial',
    description: 'Local business owner shares how our commercial washing improved their property value.',
    videoUrl: 'https://www.youtube.com/embed/BUSINESS_TESTIMONIAL_ID',
    thumbnail: '/images/business-owner.jpg',
    type: 'testimonial' as const,
    duration: '2:30'
  }
]

export default function HomePageWithVideos() {
  return (
    <main>
      {/* Video Hero Section */}
      <VideoHero
        videoUrl="https://www.youtube.com/embed/YOUR_HERO_VIDEO_ID" // YouTube embed URL
        // OR use localVideo="/videos/hero-background.mp4" for self-hosted
        posterImage="/images/hero-bg.jpg"
        title="Professional Pressure Washing Services in Los Angeles"
        subtitle="Transform your property with our expert washing solutions"
        ctaText="Get Your Free Quote"
        ctaLink="/contact"
      />

      {/* Services Section (existing) */}
      <ServicesSection />

      {/* Video Transformations Gallery */}
      <VideoGallery
        videos={videoData.filter(video => video.type === 'transformation')}
        title="Amazing Transformations"
        subtitle="See the incredible before and after results from our pressure washing services"
      />

      {/* Video Testimonials */}
      <VideoGallery
        videos={videoData.filter(video => video.type === 'testimonial')}
        title="What Our Customers Say"
        subtitle="Hear directly from satisfied customers about their experience with our services"
      />

      {/* Process Videos */}
      <VideoGallery
        videos={videoData.filter(video => video.type === 'process')}
        title="Our Professional Process"
        subtitle="Learn about our equipment, techniques, and attention to detail"
      />

      {/* FAQ Section (existing) */}
      <FAQ items={[
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
        }
      ]} />

      {/* Call to Action (existing) */}
      <CallToAction />
    </main>
  )
}

// HOW TO USE:
// 1. Replace the video URLs with your actual YouTube/Vimeo URLs
// 2. Add video files to your public/videos/ directory for self-hosted videos
// 3. Update the page.tsx file to use this layout
// 4. Ensure video thumbnails exist in your public/images/ directory 