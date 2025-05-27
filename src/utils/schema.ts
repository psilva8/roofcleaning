interface LocalBusinessSchemaProps {
  city: string;
  state?: string;
  postalCode?: string;
  streetAddress?: string;
}

export function generateLocalBusinessSchema({
  city,
  state = "CA",
  postalCode,
  streetAddress,
}: LocalBusinessSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Pronto Cleanz - Professional Pressure Washing Services in ${city}, ${state}`,
    "description": `Professional pressure washing and exterior cleaning services in ${city}, California. Residential and commercial cleaning solutions.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      ...(postalCode && { "postalCode": postalCode }),
      ...(streetAddress && { "streetAddress": streetAddress }),
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates"
      // Coordinates would be added dynamically if needed
    },
    "url": `https://prontocleanz.com/pressure-washing/${city.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "(555) 555-5555", // Replace with actual phone number
    "priceRange": "$$",
    "openingHours": "Mo-Su 07:00-19:00",
    "areaServed": {
      "@type": "City",
      "name": city,
      "sameAs": `https://en.wikipedia.org/wiki/${city},_California`
    },
    "serviceType": [
      "Pressure Washing",
      "Power Washing",
      "Exterior Cleaning",
      "Commercial Pressure Washing",
      "Residential Pressure Washing"
    ]
  };
} 