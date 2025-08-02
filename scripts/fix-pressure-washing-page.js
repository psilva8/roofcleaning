const fs = require('fs');
const path = require('path');

// Function to update the Pressure Washing page content
function updatePressureWashingPage() {
  console.log('Updating Pressure Washing page with unique content...');
  
  const pageFilePath = path.join(__dirname, '../src/app/pressure-washing/page.tsx');
  
  // Create directory if it doesn't exist
  const dir = path.join(__dirname, '../src/app/pressure-washing');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create a completely unique Pressure Washing page with proper template literal closing
  const pageContent = `import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaDryer, FaBuilding, FaRoad } from "react-icons/fa";

export const metadata = {
  title: "Residential Pressure Washing Services | Home Exterior Cleaning",
  description: "Specialized pressure washing services for homes, driveways, decks, fences, and more. Restore your property's appearance with our gentle yet effective washing.",
  canonical: "https://www.prontocleanz.com/pressure-washing",
};

export default function PressureWashingPage() {
  // Service schema for rich results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Pressure Washing Services",
    "description": "Professional pressure washing services for residential properties, including homes, driveways, sidewalks, decks, and fences",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pronto Cleanz"
    },
    "serviceType": "Pressure Washing"
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Hero Section - Residential Focus */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 mt-12 lg:mt-0 pr-0 lg:pr-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
                Residential Pressure Washing Specialists
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Gentle yet powerful washing solutions specifically designed for homes and residential properties.
                Our specialized equipment and techniques preserve your surfaces while removing years of built-up dirt.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#services" 
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Our Home Services
                </Link>
                <Link 
                  href="#contact" 
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/residential-pressure-washing.jpg" 
                  alt="Residential Pressure Washing" 
                  width={700} 
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Residential Focused */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Residential Pressure Washing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive washing solutions for all exterior surfaces of your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/house-washing.jpg" 
                  alt="House Washing" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaHome className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">House Washing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Safe and effective washing for all home exterior surfaces, including vinyl, 
                  aluminum, stucco, brick, and painted wood siding.
                </p>
                <p className="font-semibold text-gray-800">Starting at $250</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/driveway-washing.jpg" 
                  alt="Driveway Washing" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaRoad className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Driveway Washing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Remove oil stains, tire marks, dirt, and organic growth from concrete, 
                  asphalt, and paver surfaces around your home.
                </p>
                <p className="font-semibold text-gray-800">Starting at $150</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/deck-cleaning.jpg" 
                  alt="Deck Restoration" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaDryer className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Deck Restoration</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Gentle cleaning that removes algae, mildew, and weathering from wood, 
                  composite, and vinyl decking and fencing.
                </p>
                <p className="font-semibold text-gray-800">Starting at $200</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Home's Beauty?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation quote on our residential pressure washing services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#contact" 
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Request a Quote
            </Link>
            <Link 
              href="/gallery" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form - id used for anchor links */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get a free quote for your residential pressure washing needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Run the function
updatePressureWashingPage(); 