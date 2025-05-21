import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Pressure Washing Services in Lynwood | Pronto Cleanz",
  description: "Expert pressure washing services in Lynwood. Residential & commercial solutions for houses, driveways, and more. Get a free quote today!",
  canonical: "https://www.prontocleanz.com/pressure-washing/lynwood",
  alternates: {
    canonical: "https://www.prontocleanz.com/pressure-washing/lynwood",
    types: {
      'application/rss+xml': [
        { url: "https://www.prontocleanz.com/pressure-washing", title: "Pressure Washing Services" }
      ]
    }
  },
};

export default function PressureWashingCityPage() {
  // Service schema for rich results
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pressure Washing Services in Lynwood",
  "description": "Professional pressure washing services for residential and commercial properties in Lynwood",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pronto Cleanz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "360 E 2nd St Ste 800",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90012",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Lynwood"
  },
  "serviceType": "Pressure Washing",
  "offers": {
    "@type": "Offer",
    "price": "150.00",
    "priceCurrency": "USD"
  }
};

  // LocalBusiness schema for city-specific business info
  const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pressure Washing Lynwood",
  "description": "Professional pressure washing services in Lynwood, Los Angeles County",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "360 E 2nd St Ste 800",
    "addressLocality": "Lynwood",
    "addressRegion": "CA",
    "postalCode": "90012",
    "addressCountry": "US"
  },
  "telephone": "12136649502",
  "email": "prontocleanpw@gmail.com",
  "url": "https://www.prontocleanz.com/pressure-washing/lynwood",
  "areaServed": {
    "@type": "City",
    "name": "Lynwood"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0522",
    "longitude": "-118.2437"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
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
  "image": "https://www.prontocleanz.com/images/pressure-washing.jpg",
  "sameAs": [
    "https://www.facebook.com/prontocleanz",
    "https://www.instagram.com/prontocleanz"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pressure Washing Services in Lynwood",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "House Washing in Lynwood",
          "description": "Complete exterior house washing services in Lynwood"
        },
        "price": "250.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Driveway Cleaning in Lynwood",
          "description": "Professional driveway and concrete cleaning in Lynwood"
        },
        "price": "150.00",
        "priceCurrency": "USD"
      }
    ]
  }
};

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero
        title={`Professional Pressure Washing in Lynwood`}
        subtitle="Restore Your Property's Beauty with Our Expert Pressure Washing Services"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title={`Our Pressure Washing Services in Lynwood`}
        subtitle="Specialized solutions for all your exterior cleaning needs"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle={`Trusted by Lynwood residents and businesses`}
      />
      <FAQSection 
        title={`Frequently Asked Questions About Pressure Washing in Lynwood`}
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Property?"
        subtitle={`Contact us today for professional pressure washing in Lynwood`}
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle={`Request a free pressure washing quote in Lynwood`}
      />
    </>
  );
}