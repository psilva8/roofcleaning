import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Power Washing Services in Gardena | Pronto Cleanz",
  description: "Expert power washing services in Gardena. Commercial & industrial solutions for business properties. Get a free quote today!",
  canonical: "https://www.prontocleanz.com/power-washing/gardena",
  alternates: {
    canonical: "https://www.prontocleanz.com/power-washing/gardena",
    types: {
      'application/rss+xml': [
        { url: "https://www.prontocleanz.com/power-washing", title: "Power Washing Services" }
      ]
    }
  },
};

export default function PowerWashingCityPage() {
  // Service schema for rich results
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Power Washing Services in Gardena",
  "description": "Professional power washing services for commercial and industrial properties in Gardena",
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
    "name": "Gardena"
  },
  "serviceType": "Power Washing",
  "offers": {
    "@type": "Offer",
    "price": "350.00",
    "priceCurrency": "USD"
  }
};

  // LocalBusiness schema for city-specific business info
  const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Power Washing Gardena",
  "description": "Professional power washing services in Gardena, Los Angeles County",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "360 E 2nd St Ste 800",
    "addressLocality": "Gardena",
    "addressRegion": "CA",
    "postalCode": "90012",
    "addressCountry": "US"
  },
  "telephone": "12136649502",
  "email": "prontocleanpw@gmail.com",
  "url": "https://www.prontocleanz.com/power-washing/gardena",
  "areaServed": {
    "@type": "City",
    "name": "Gardena"
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
  "priceRange": "$",
  "image": "https://www.prontocleanz.com/images/commercial-washing.jpg",
  "sameAs": [
    "https://www.facebook.com/prontocleanz",
    "https://www.instagram.com/prontocleanz"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Power Washing Services in Gardena",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Power Washing in Gardena",
          "description": "Commercial power washing services for businesses in Gardena"
        },
        "price": "350.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Power Washing in Gardena",
          "description": "Heavy-duty power washing for industrial properties in Gardena"
        },
        "price": "450.00",
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
        title={`Professional Power Washing in Gardena`}
        subtitle="Commercial & Industrial Cleaning Solutions for Your Business Property"
        backgroundImage="/images/hero-bg.jpg" quality={100}
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title={`Our Power Washing Services in Gardena`}
        subtitle="Specialized solutions for commercial and industrial properties"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle={`Trusted by Gardena businesses`}
      />
      <FAQSection 
        title={`Frequently Asked Questions About Power Washing in Gardena`}
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Business Property?"
        subtitle={`Contact us today for professional power washing in Gardena`}
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle={`Request a free power washing quote in Gardena`}
      />
    </>
  );
}