'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
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

  const serviceItems = [
    { label: 'Commercial Pressure Washing', href: '/services/commercial-pressure-washing' },
    { label: 'Residential House Washing', href: '/services/residential-house-washing' },
    { label: 'Concrete Washing', href: '/services/concrete-washing' },
    { label: 'Roof Washing', href: '/services/roof-washing' },
    { label: 'Deck and Patio Washing', href: '/services/deck-and-patio-washing' },
    { label: 'Gutter Washing', href: '/services/gutter-washing' },
  ]

  const menuItems = [
    { label: 'Pressure Washing', href: '/pressure-washing' },
    { label: 'Power Washing', href: '/power-washing' },
    { label: 'Locations', href: '/locations' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const isServicePage = pathname?.startsWith('/services/')

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-primary font-bold text-lg lg:text-xl transition-all duration-300 hover:scale-105"
            >
              <span className="lg:block">Pressure Washing Los Angeles</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 lg:px-4 py-2 rounded-full font-medium tracking-wide transition-all duration-300 text-sm lg:text-base ${
                    isActive 
                      ? 'text-primary bg-blue-50 font-semibold shadow-sm' 
                      : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`px-3 lg:px-4 py-2 rounded-full font-medium tracking-wide transition-all duration-300 text-sm lg:text-base flex items-center ${
                  isServicePage || servicesOpen
                    ? 'text-primary bg-blue-50 font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                }`}
              >
                Services
                <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute right-0 mt-2 w-72 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform ${
                  servicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {serviceItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-4 py-3 text-sm hover:bg-blue-50 transition-colors duration-200 ${
                          isActive 
                            ? 'text-primary font-semibold bg-blue-50/50' 
                            : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <a
              href="tel:+12136649502"
              className="ml-2 bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              📞 Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
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
        className={`md:hidden transition-all duration-500 ease-in-out transform ${
          isOpen 
            ? 'max-h-[800px] opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
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
                    ? 'text-primary bg-blue-50 font-semibold shadow-sm' 
                    : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            )
          })}

          {/* Mobile Services Menu */}
          <div className="px-4 py-2">
            <div className={`font-medium mb-2 ${isServicePage ? 'text-primary' : 'text-gray-900'}`}>Services</div>
            {serviceItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary font-semibold bg-blue-50' 
                      : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="pt-2 px-4">
            <a
              href="tel:+12136649502"
              className="block w-full text-center px-4 py-3 text-white bg-primary font-semibold tracking-wide hover:bg-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 