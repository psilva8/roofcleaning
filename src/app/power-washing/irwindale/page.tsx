import Script from "next/script";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Professional Power Washing Services in Irwindale | Pronto Cleanz",
  description: "Expert power washing services in Irwindale. Commercial & industrial solutions for business properties. Get a free quote today!",
  canonical: "https://www.prontocleanz.com/power-washing/irwindale",
  alternates: {
    canonical: "https://www.prontocleanz.com/power-washing/irwindale",
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
  "name": "Power Washing Services in Irwindale",
  "description": "Professional power washing services for commercial and industrial properties in Irwindale",
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
    "name": "Irwindale"
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
  "name": "Power Washing Irwindale",
  "description": "Professional power washing services in Irwindale, Los Angeles County",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "360 E 2nd St Ste 800",
    "addressLocality": "Irwindale",
    "addressRegion": "CA",
    "postalCode": "90012",
    "addressCountry": "US"
  },
  "telephone": "12136649502",
  "email": "prontocleanpw@gmail.com",
  "url": "https://www.prontocleanz.com/power-washing/irwindale",
  "areaServed": {
    "@type": "City",
    "name": "Irwindale"
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
  "image": "https://www.prontocleanz.com/images/commercial-cleaning.jpg",
  "sameAs": [
    "https://www.facebook.com/prontocleanz",
    "https://www.instagram.com/prontocleanz"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Power Washing Services in Irwindale",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Power Washing in Irwindale",
          "description": "Commercial power washing services for businesses in Irwindale"
        },
        "price": "350.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Power Washing in Irwindale",
          "description": "Heavy-duty power washing for industrial properties in Irwindale"
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
        title={`Professional Power Washing in Irwindale`}
        subtitle="Commercial & Industrial Cleaning Solutions for Your Business Property"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Get a Free Quote"
        ctaLink="#contact"
      />
      <ServicesSection 
        title={`Our Power Washing Services in Irwindale`}
        subtitle="Specialized solutions for commercial and industrial properties"
      />
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle={`Trusted by Irwindale businesses`}
      />
      <FAQSection 
        title={`Frequently Asked Questions About Power Washing in Irwindale`}
        subtitle="Get answers to common questions about our services"
      />
      <CallToAction 
        title="Ready to Transform Your Business Property?"
        subtitle={`Contact us today for professional power washing in Irwindale`}
        ctaText="Get Started"
        ctaLink="#contact"
      />
      <ContactSection 
        title="Contact Us"
        subtitle={`Request a free power washing quote in Irwindale`}
      />
    </>
  );
}