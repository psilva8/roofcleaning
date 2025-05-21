const fs = require('fs');
const path = require('path');

// Function to update the Power Washing page content
async function updatePowerWashingPage() {
  console.log('Updating Power Washing page with unique content...');
  
  const pageFilePath = path.join(__dirname, '../src/app/power-washing/page.tsx');
  
  // Create a completely unique Power Washing page focused on commercial services
  const pageContent = `import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FaIndustry, FaWarehouse, FaStore, FaHardHat, FaThumbsUp, FaClock } from "react-icons/fa";

export const metadata = {
  title: "Commercial Power Washing Services | Industrial & Business Cleaning",
  description: "Heavy-duty power washing for commercial properties, warehouses, and industrial facilities. Superior cleaning technology for the toughest jobs.",
  canonical: "https://www.prontocleanz.com/power-washing",
};

export default function PowerWashingPage() {
  // Service schema for rich results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Power Washing Services",
    "description": "Professional high-pressure power washing services for commercial and industrial properties, including warehouses, factories, parking lots, and retail centers",
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
      "@type": "State",
      "name": "California"
    },
    "serviceType": "Power Washing",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "350.00",
      "highPrice": "1500.00",
      "priceCurrency": "USD",
      "offerCount": "5"
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Hero Section - Industrial/Commercial Focus */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-90 z-0"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/industrial-power-washing.jpg" 
            alt="Industrial Power Washing" 
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industrial-Grade Power Washing for Commercial Properties
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Heavy-duty cleaning solutions for warehouses, factories, retail centers, and industrial facilities. 
              Our commercial power washing equipment handles the toughest grime, oil, and industrial residue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services" 
                className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                Commercial Services
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial Benefits - Unique to Power Washing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Commercial Power Washing Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our industrial-grade equipment and specialized techniques deliver superior results for commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-yellow-500 text-4xl mb-4">
                <FaHardHat />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industrial-Grade Equipment</h3>
              <p className="text-gray-600">
                We utilize commercial-grade power washing systems with up to 4000 PSI and hot water capabilities 
                to tackle the toughest commercial cleaning challenges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-yellow-500 text-4xl mb-4">
                <FaThumbsUp />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">OSHA Compliance</h3>
              <p className="text-gray-600">
                All our technicians are OSHA certified and follow strict safety protocols, ensuring your facility 
                is cleaned safely and in compliance with regulations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="text-yellow-500 text-4xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Minimal Downtime</h3>
              <p className="text-gray-600">
                Our efficient cleaning processes and flexible scheduling options minimize business interruption, 
                with after-hours and weekend service availability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries We Serve - Unique Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized power washing solutions for diverse commercial and industrial settings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/warehouse-cleaning.jpg" 
                  alt="Warehouse & Distribution Centers" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaWarehouse className="text-yellow-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Warehouse & Distribution</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Keep loading docks, warehouse floors, and distribution centers clean and safe with 
                  our industrial cleaning solutions that remove oil, debris, and stains.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/retail-cleaning.jpg" 
                  alt="Retail & Shopping Centers" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaStore className="text-yellow-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Retail & Shopping Centers</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Enhance customer experience with pristine walkways, storefronts, and common areas. 
                  Regular cleaning maintains property value and appealing aesthetics.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/manufacturing-cleaning.jpg" 
                  alt="Manufacturing & Industrial" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaIndustry className="text-yellow-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Manufacturing & Industrial</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for factory floors, production equipment, and industrial facilities 
                  that removes heavy grease, chemical residues, and industrial grime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial Services - Different from Pressure Washing */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Commercial Power Washing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Heavy-duty cleaning solutions designed for commercial and industrial properties.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3">
                <Image 
                  src="/images/parking-lot-cleaning.jpg" 
                  alt="Parking Lot & Garage Cleaning" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Parking Lot & Garage Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleaning of parking lots, garages, and structures that removes oil stains, 
                  tire marks, gum, and debris. Our surface cleaners ensure even, streak-free results across 
                  large areas with efficient water reclamation systems.
                </p>
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold">Starting at $450</span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span className="text-gray-600">Based on square footage</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3">
                <Image 
                  src="/images/dumpster-pad-cleaning.jpg" 
                  alt="Dumpster Pad & Loading Dock Cleaning" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Dumpster Pad & Loading Dock Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Sanitizing and degreasing services for trash enclosures, dumpster pads, and loading docks. 
                  We eliminate odors, stains, and health hazards using hot water pressure systems and 
                  commercial-grade sanitizing agents.
                </p>
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold">Starting at $350</span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span className="text-gray-600">Includes degreasing and sanitizing</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3">
                <Image 
                  src="/images/fleet-washing.jpg" 
                  alt="Fleet & Equipment Washing" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Fleet & Equipment Washing</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for commercial vehicles, heavy machinery, and equipment. Our mobile 
                  power washing services come to your location and remove dirt, grime, salt, and road 
                  residue, extending the life of your valuable assets.
                </p>
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold">Starting at $75 per vehicle</span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span className="text-gray-600">Volume discounts available</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3">
                <Image 
                  src="/images/graffiti-removal.jpg" 
                  alt="Graffiti Removal" 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Graffiti Removal</h3>
                <p className="text-gray-600 mb-4">
                  Professional removal of graffiti and vandalism from building exteriors, walls, and 
                  structures. Our specialized techniques and solutions remove paint without damaging the 
                  underlying surface, restoring your property's appearance.
                </p>
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold">Starting at $300</span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span className="text-gray-600">Varies by size and surface type</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial Maintenance Plans */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Maintenance Programs</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Scheduled cleaning plans to keep your property consistently maintained.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Quarterly</h3>
              <p className="text-gray-300 mb-6">
                Four scheduled cleanings per year, ideal for lower-traffic commercial properties 
                that need seasonal maintenance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Seasonal deep cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">10% discount on regular rates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Priority scheduling</span>
                </li>
              </ul>
              <Link
                href="#contact" 
                className="block w-full py-3 text-center bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Request Quote
              </Link>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-yellow-500 transform scale-105">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Monthly</h3>
              <p className="text-gray-300 mb-6">
                Regular monthly cleanings for high-traffic commercial properties that require consistent maintenance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Monthly thorough cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">15% discount on regular rates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Free emergency spot cleaning</span>
                </li>
              </ul>
              <Link
                href="#contact" 
                className="block w-full py-3 text-center bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                Request Quote
              </Link>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Custom</h3>
              <p className="text-gray-300 mb-6">
                Tailored maintenance schedule based on your specific business needs and property requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Customized cleaning schedule</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Volume-based pricing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
              </ul>
              <Link
                href="#contact" 
                className="block w-full py-3 text-center bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Commercial Power Washing FAQs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our commercial and industrial power washing services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How does commercial power washing differ from residential pressure washing?</h3>
              <p className="text-gray-600">
                Commercial power washing uses higher pressure levels (up to 4000 PSI), hot water capabilities, 
                and industrial-grade cleaning solutions to tackle tough industrial grime, oil, grease, and 
                chemical residues that are common in commercial settings. Our equipment is specifically designed 
                for larger areas and more challenging cleaning tasks.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What is your process for minimizing business disruption?</h3>
              <p className="text-gray-600">
                We offer flexible scheduling including evenings, weekends, and overnight service windows to 
                work around your business hours. Our efficient equipment and experienced crews minimize onsite 
                time, and we section off work areas to allow for continued operations in other parts of your facility.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How do you handle wastewater and environmental compliance?</h3>
              <p className="text-gray-600">
                We use water reclamation systems that collect, filter, and properly dispose of wastewater in 
                compliance with local environmental regulations. For projects involving chemicals or heavy contaminants, 
                we implement containment measures and follow strict EPA guidelines for wastewater management.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Do you provide documentation for compliance requirements?</h3>
              <p className="text-gray-600">
                Yes, we provide detailed service documentation and certificates of completion for your maintenance 
                records. This documentation can be valuable for compliance with health department regulations, 
                insurance requirements, and facility maintenance standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commercial Call to Action */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Commercial Property?</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Contact us today for a comprehensive commercial power washing consultation and free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#contact" 
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/commercial-gallery" 
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              View Commercial Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form - id used for anchor links */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Request a Commercial Consultation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commercial team will analyze your needs and provide a customized power washing solution.
            </p>
          </div>
          
          {/* Contact form would go here */}
        </div>
      </section>
    </>
  );
}

// Run the function
updatePowerWashingPage().catch(console.error); 