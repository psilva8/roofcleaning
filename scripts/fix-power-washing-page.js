const fs = require('fs');
const path = require('path');

// Function to update the Power Washing page content
function updatePowerWashingPage() {
  console.log('Updating Power Washing page with unique commercial content...');
  
  const pageFilePath = path.join(__dirname, '../src/app/power-washing/page.tsx');
  
  // Create directory if it doesn't exist
  const dir = path.join(__dirname, '../src/app/power-washing');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create a completely unique Power Washing page focused on commercial
  const pageContent = `import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FaIndustry, FaWarehouse, FaStore, FaHardHat } from "react-icons/fa";

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
      "name": "Pronto Cleanz"
    },
    "serviceType": "Power Washing"
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
        <div className="relative container mx-auto px-4 z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industrial-Grade Power Washing for Commercial Properties
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Heavy-duty washing solutions for warehouses, factories, retail centers, and industrial facilities. 
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
                  our industrial washing solutions that remove oil, debris, and stains.
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
        </div>
      </section>
    </>
  );
}

// Run the function
updatePowerWashingPage(); 