'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Pressure Washing', href: '/pressure-washing' },
    { label: 'Power Washing', href: '/power-washing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-primary font-bold text-xl"
            >
              <span className="lg:block">Pressure Washing Los Angeles</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 font-medium tracking-wide hover:text-primary hover:scale-105 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold tracking-wide hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
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
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-gray-600 font-medium tracking-wide hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            className="block px-3 py-2 text-white bg-primary font-semibold tracking-wide hover:bg-primary/90 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
} 