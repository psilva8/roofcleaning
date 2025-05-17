'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Pressure Washing', href: '/pressure-washing' },
    { label: 'Power Washing', href: '/power-washing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-primary font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              <span className="lg:block">Pressure Washing Los Angeles</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 mx-1 rounded-full font-medium tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-blue-50 font-semibold' 
                      : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              href="/contact"
              className="ml-2 bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-2 bg-white shadow-inner">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium tracking-wide transition-all ${
                  isActive 
                    ? 'text-primary bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
          <div className="pt-2">
            <a
              href="/contact"
              className="block w-full text-center px-4 py-3 text-white bg-primary font-semibold tracking-wide hover:bg-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 