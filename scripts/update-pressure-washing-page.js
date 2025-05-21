const fs = require('fs');
const path = require('path');

// Function to update the Pressure Washing page content
async function updatePressureWashingPage() {
  console.log('Updating Pressure Washing page with unique content...');
  
  const pageFilePath = path.join(__dirname, '../src/app/pressure-washing/page.tsx');
  
  // Create a completely unique Pressure Washing page
  const pageContent = `import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaDryer, FaBuilding, FaRoad, FaLeaf, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Residential Pressure Washing Services | Home Exterior Cleaning",
  description: "Specialized pressure washing services for homes, driveways, decks, fences, and more. Restore your property's appearance with our gentle yet effective cleaning.",
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
    "serviceType": "Pressure Washing",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "150.00",
      "highPrice": "500.00",
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
      
      {/* Hero Section - Completely Different from Other Pages */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 mt-12 lg:mt-0 pr-0 lg:pr-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
                Residential Pressure Washing Specialists
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Gentle yet powerful cleaning solutions specifically designed for homes and residential properties.
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
      
      {/* Benefits Section - Unique to Pressure Washing */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Residential Pressure Washing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized residential pressure washing services are designed to safely clean 
              your home's surfaces while protecting your landscaping and property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-500 text-4xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Surface Protection</h3>
              <p className="text-gray-600">
                Our soft washing techniques adjust pressure levels to safely clean delicate surfaces 
                without causing damage to siding, paint, or wood.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-500 text-4xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">
                We use biodegradable cleaning solutions that effectively remove dirt, algae, 
                and mildew while being safe for your plants, pets, and the environment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-500 text-4xl mb-4">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Curb Appeal Enhancement</h3>
              <p className="text-gray-600">
                Boost your home's appearance and value by removing unsightly stains, mold, 
                and grime that diminish the beauty of your property.
              </p>
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
              We offer comprehensive cleaning solutions for all exterior surfaces of your home.
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
                  Safe and effective cleaning for all home exterior surfaces, including vinyl, 
                  aluminum, stucco, brick, and painted wood siding.
                </p>
                <p className="font-semibold text-gray-800">Starting at $250</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/driveway-cleaning.jpg" 
                  alt="Driveway & Sidewalk Cleaning" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaRoad className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Driveway & Sidewalk Cleaning</h3>
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
                  alt="Deck & Fence Restoration" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaDryer className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Deck & Fence Restoration</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Gentle cleaning that removes algae, mildew, and weathering from wood, 
                  composite, and vinyl decking and fencing.
                </p>
                <p className="font-semibold text-gray-800">Starting at $200</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/roof-cleaning.jpg" 
                  alt="Roof Cleaning" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaHome className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Roof Cleaning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Low-pressure soft wash techniques that safely remove black streaks, moss, 
                  and algae from asphalt shingles, tile, and metal roofing.
                </p>
                <p className="font-semibold text-gray-800">Starting at $350</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/patio-cleaning.jpg" 
                  alt="Patio & Pool Deck Cleaning" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaBuilding className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Patio & Pool Deck Cleaning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Revitalize your outdoor living spaces by removing stains, dirt, and 
                  slip-causing algae from all patio and pool deck surfaces.
                </p>
                <p className="font-semibold text-gray-800">Starting at $200</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src="/images/gutter-cleaning.jpg" 
                  alt="Gutter Whitening" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaHome className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Gutter Whitening</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Restore the appearance of exterior gutters by removing the black "tiger stripes" 
                  and stains that detract from your home's appearance.
                </p>
                <p className="font-semibold text-gray-800">Starting at $180</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Before & After Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Stunning Transformations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the remarkable difference our residential pressure washing services can make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Home Exterior Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Before</p>
                  <Image 
                    src="/images/home-before.jpg" 
                    alt="Home Before Pressure Washing" 
                    width={400} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">After</p>
                  <Image 
                    src="/images/home-after.jpg" 
                    alt="Home After Pressure Washing" 
                    width={400} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Driveway Revival</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Before</p>
                  <Image 
                    src="/images/driveway-before.jpg" 
                    alt="Driveway Before Pressure Washing" 
                    width={400} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">After</p>
                  <Image 
                    src="/images/driveway-after.jpg" 
                    alt="Driveway After Pressure Washing" 
                    width={400} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Our Full Gallery
            </Link>
          </div>
        </div>
      </section>
      
      {/* Residential FAQs - Specific to Pressure Washing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our residential pressure washing services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How often should I have my home pressure washed?</h3>
              <p className="text-gray-600">
                For most homes in the Los Angeles area, we recommend pressure washing your exterior 
                surfaces once a year to prevent buildup of dirt, mold, and mildew. Homes in areas with 
                more trees or moisture may require more frequent cleaning, typically every 6-9 months.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Is pressure washing safe for all home surfaces?</h3>
              <p className="text-gray-600">
                Not all surfaces can withstand the same pressure. Our technicians are trained to 
                adjust the pressure and techniques based on your specific surfaces. For delicate 
                materials like stucco, wood, and older masonry, we use soft washing methods with 
                lower pressure and specialized cleaning solutions.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Will pressure washing damage my plants and landscaping?</h3>
              <p className="text-gray-600">
                We take great care to protect your landscaping during the cleaning process. Our team 
                will cover sensitive plants, use eco-friendly cleaning solutions, and rinse thoroughly 
                to ensure no residue remains that could harm your vegetation.
              </p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How long does residential pressure washing take?</h3>
              <p className="text-gray-600">
                The time required depends on the size of your home and the services needed. A typical 
                single-family home exterior cleaning takes 2-4 hours, while a complete package including 
                driveway, deck, and other surfaces may take 4-6 hours to complete thoroughly.
              </p>
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
          
          {/* Contact form would go here */}
        </div>
      </section>
    </>
  );
}

// Run the function
updatePressureWashingPage().catch(console.error); 