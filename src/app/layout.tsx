import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Google Search Console verification code
const GOOGLE_VERIFICATION = 'SkngvUfZruyOu-Et9A6xJi3Lv8v4yOo7jzWobPjKWDc'

export const metadata: Metadata = {
  metadataBase: new URL('https://prontoclean.com'),
  title: 'Pronto Clean - Professional Pressure Washing Services',
  description: 'Professional pressure washing services in Los Angeles. We offer residential and commercial pressure washing, including house washing, driveway cleaning, and more.',
  keywords: 'pressure washing, Los Angeles, power washing, driveway cleaning, house washing, deck cleaning, roof cleaning, commercial parking lot cleaning',
  robots: 'index, follow',
  authors: [{ name: 'Pronto Clean' }],
  openGraph: {
    title: 'Pronto Clean - Professional Pressure Washing Services',
    description: 'Professional pressure washing services in Los Angeles. We offer residential and commercial pressure washing, including house washing, driveway cleaning, and more.',
    url: 'https://prontoclean.com',
    siteName: 'Pronto Clean',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: GOOGLE_VERIFICATION,
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
          "text": "For residential properties in Los Angeles, we recommend pressure washing every 6-12 months. Commercial properties may require more frequent cleaning depending on foot traffic and location."
        }
      },
      {
        "@type": "Question",
        "name": "Is pressure washing safe for all surfaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While pressure washing is effective for many surfaces, we adjust our techniques and pressure levels based on the material being cleaned. We use soft washing for delicate surfaces to ensure safe and effective cleaning."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="SkngvUfZruyOu-Et9A6xJi3Lv8v4yOo7jzWobPjKWDc" />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
} 