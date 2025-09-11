import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pressure Washing Blog | Tips & Guides | Los Angeles',
  description: 'Expert pressure washing tips, guides, and industry insights from Los Angeles professionals. Learn proper techniques, maintenance tips, and best practices.',
  keywords: 'pressure washing tips, power washing guide, cleaning techniques, maintenance, Los Angeles pressure washing blog',
  openGraph: {
    title: 'Pressure Washing Blog | Tips & Guides | Los Angeles',
    description: 'Expert pressure washing tips, guides, and industry insights from Los Angeles professionals.',
    type: 'website',
  },
}

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Pressure Washing Your Home in Los Angeles',
    excerpt: 'Learn the best practices for safely and effectively pressure washing your home in the LA climate.',
    date: '2024-03-15',
    slug: 'ultimate-guide-pressure-washing-home-los-angeles',
    category: 'Homeowner Tips',
    readTime: '8 min read',
    image: '/images/hero-bg.jpg'
  },
  {
    id: 2,
    title: 'Commercial vs Residential Pressure Washing: What\'s the Difference?',
    excerpt: 'Understand the key differences between commercial and residential pressure washing services.',
    date: '2024-03-10',
    slug: 'commercial-vs-residential-pressure-washing',
    category: 'Industry Insights',
    readTime: '6 min read',
    image: '/images/commercial-before.jpg'
  },
  {
    id: 3,
    title: 'Seasonal Pressure Washing: When to Clean Different Surfaces',
    excerpt: 'Discover the optimal times throughout the year to pressure wash various surfaces around your property.',
    date: '2024-03-05',
    slug: 'seasonal-pressure-washing-guide',
    category: 'Maintenance Tips',
    readTime: '5 min read',
    image: '/images/about-bg.jpg'
  },
  {
    id: 4,
    title: 'Eco-Friendly Pressure Washing Solutions for Environmentally Conscious Homeowners',
    excerpt: 'Learn about sustainable pressure washing methods and eco-friendly cleaning solutions.',
    date: '2024-02-28',
    slug: 'eco-friendly-pressure-washing-solutions',
    category: 'Environmental',
    readTime: '7 min read',
    image: '/images/hero-bg.jpg'
  }
]

const categories = ['All', 'Homeowner Tips', 'Industry Insights', 'Maintenance Tips', 'Environmental']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pressure Washing Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Expert tips, guides, and insights from Los Angeles pressure washing professionals
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get the latest pressure washing tips and industry insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
