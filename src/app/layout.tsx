import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Google Search Console verification code
const GOOGLE_VERIFICATION = 'QBMtT5i2-74QWJW2b9ONewW6QZiJ-2JyEhyHJ5fYy8Y'

export const metadata: Metadata = {
  title: 'LA Pressure Washing - Professional Pressure Washing Services',
  description: 'Professional pressure washing services in Los Angeles. We offer residential and commercial pressure washing, including house washing, driveway cleaning, and more.',
  keywords: 'pressure washing, Los Angeles, power washing, driveway cleaning, house washing, deck cleaning, roof cleaning, commercial parking lot cleaning',
  robots: 'index, follow',
  authors: [{ name: 'LA Pressure Washing' }],
  openGraph: {
    title: 'LA Pressure Washing - Professional Pressure Washing Services',
    description: 'Professional pressure washing services in Los Angeles. We offer residential and commercial pressure washing, including house washing, driveway cleaning, and more.',
    url: 'https://lapressurewashing.com',
    siteName: 'LA Pressure Washing',
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
} 