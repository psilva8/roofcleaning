import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>LA Pressure Washing - Professional Pressure Washing Services</title>
        <meta name="description" content="Professional pressure washing services in Los Angeles. We offer residential and commercial pressure washing, including house washing, driveway cleaning, and more." />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
} 