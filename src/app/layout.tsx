import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Los Angeles Pressure Washing Services',
  description: 'Professional pressure washing services in Los Angeles. Expert cleaning for homes, driveways, decks, and commercial properties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <nav className="bg-white shadow-md fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold text-primary">LA Pressure Wash</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                    Home
                  </a>
                  <a href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    About
                  </a>
                  <a href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-secondary text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">LA Pressure Wash</h3>
                <p className="text-gray-300">Professional pressure washing services in Los Angeles.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Los Angeles, CA</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@lapressurewash.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} LA Pressure Wash. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 