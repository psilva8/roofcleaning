import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Google Search Console verification code
const GOOGLE_VERIFICATION = 'Y_Vg6pl3APehkhKq1c-FWfo_Dh-Dpc3cw1bwwXblXCI'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.prontocleanz.com'),
  title: 'Roof Cleaning Los Angeles | Professional Roof Washing Services',
  description: 'Expert roof cleaning in Los Angeles. Professional roof washing services to remove moss, algae, and stains. Residential & commercial roof cleaning. Free estimates!',
  keywords: 'roof cleaning Los Angeles, roof washing Los Angeles, Los Angeles roof cleaning, moss removal Los Angeles, algae removal roof, roof stain removal, professional roof cleaning, residential roof cleaning, commercial roof cleaning',
  robots: 'index, follow',
  authors: [{ name: 'Roof Cleaning Los Angeles' }],
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
  openGraph: {
    title: 'Roof Cleaning Los Angeles | Professional Roof Washing Services',
    description: 'Expert roof cleaning in Los Angeles. Professional roof washing services to remove moss, algae, and stains. Residential & commercial roof cleaning. Free estimates!',
    url: 'https://www.prontocleanz.com',
    siteName: 'Roof Cleaning Los Angeles',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: GOOGLE_VERIFICATION,
    other: {
      'msvalidate.01': '3EC2BAE1C7DDC7EDD907451571391F94',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas in Los Angeles do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide pressure washing services throughout the greater Los Angeles area, including downtown LA, Beverly Hills, Santa Monica, and surrounding neighborhoods."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I have my property pressure washed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For residential properties in Los Angeles, we recommend pressure washing every 6-12 months. Commercial properties may require more frequent washing depending on foot traffic and location."
        }
      },
      {
        "@type": "Question",
        "name": "Is pressure washing safe for all surfaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While pressure washing is effective for many surfaces, we adjust our techniques and pressure levels based on the material being cleaned. We use soft washing for delicate surfaces to ensure safe and effective washing."
        }
      }
    ]
  };

  // LocalBusiness schema for business info
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pressure Washing Los Angeles",
    "description": "Professional pressure washing services in Los Angeles",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "360 E 2nd St Ste 800",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90012",
      "addressCountry": "US"
    },
    "telephone": "12136649502",
    "email": "prontocleanpw@gmail.com",
    "url": "https://www.prontocleanz.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "image": "https://www.prontocleanz.com/images/hero-bg.jpg"
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Y_Vg6pl3APehkhKq1c-FWfo_Dh-Dpc3cw1bwwXblXCI" />
        <meta name="msvalidate.01" content="3EC2BAE1C7DDC7EDD907451571391F94" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 