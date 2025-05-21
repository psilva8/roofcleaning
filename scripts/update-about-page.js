const fs = require('fs');
const path = require('path');

// Function to update the About page content
async function updateAboutPage() {
  console.log('Updating About page with unique content...');
  
  const aboutPagePath = path.join(__dirname, '../src/app/about/page.tsx');
  
  if (!fs.existsSync(aboutPagePath)) {
    console.log('About page does not exist. Creating it...');
    
    // Create the directory if it doesn't exist
    const aboutDir = path.join(__dirname, '../src/app/about');
    if (!fs.existsSync(aboutDir)) {
      fs.mkdirSync(aboutDir, { recursive: true });
    }
    
    // Create a completely unique About page
    const aboutContent = `import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaUsers, FaAward, FaRecycle } from "react-icons/fa";

export const metadata = {
  title: "About Pronto Cleanz | Our Story & Mission",
  description: "Learn about Pronto Cleanz's journey, our dedicated team, eco-friendly approach, and commitment to exceptional cleaning services in Los Angeles County.",
  canonical: "https://www.prontocleanz.com/about",
};

export default function AboutPage() {
  // Company schema markup for rich results
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pronto Cleanz",
    "url": "https://www.prontocleanz.com",
    "logo": "https://www.prontocleanz.com/images/logo.png",
    "foundingDate": "2015",
    "founders": [
      {
        "@type": "Person",
        "name": "Michael Rodriguez"
      }
    ],
    "description": "Pronto Cleanz is a professional cleaning service company specializing in pressure washing and power washing services throughout Los Angeles County.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "360 E 2nd St Ste 800",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90012",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+12136649502",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/prontocleanz",
      "https://www.instagram.com/prontocleanz"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "15"
    }
  };

  return (
    <>
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
      />
      
      {/* Hero Section with Company Story */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Cleaning Journey</h1>
              <p className="text-xl mb-8">
                Founded in 2015 by Michael Rodriguez, Pronto Cleanz began with a single pressure washer 
                and a vision to transform the exterior cleaning industry in Los Angeles.
              </p>
              <p className="text-lg mb-8">
                What started as a small residential service has grown into a comprehensive cleaning 
                company with specialized teams serving both homeowners and businesses throughout 
                Los Angeles County.
              </p>
              <div className="flex items-center">
                <FaAward className="text-yellow-400 text-4xl mr-4" />
                <p className="text-lg">Celebrating 8+ years of cleaning excellence</p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about-team.jpg" 
                  alt="Pronto Cleanz Team" 
                  width={600} 
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To deliver exceptional cleaning results that not only meet but exceed our clients' expectations
              while maintaining the highest standards of environmental responsibility and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Commitment</h3>
              <p className="text-gray-600">
                We stand behind every job with our satisfaction guarantee. Our technicians are trained to 
                deliver consistent, high-quality results using the best equipment and techniques.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Building relationships is at our core. We listen to our clients' needs, provide personalized 
                solutions, and follow up to ensure complete satisfaction after every service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4">
                <FaRecycle />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly Approach</h3>
              <p className="text-gray-600">
                We utilize environmentally responsible cleaning methods and biodegradable solutions that 
                effectively clean without harming landscapes, pets, or our local ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="/images/team-1.jpg" 
                  alt="Michael Rodriguez - Founder & CEO" 
                  width={400} 
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Michael Rodriguez</h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years in the cleaning industry, Michael's expertise and vision drive our company's growth and quality standards.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="/images/team-2.jpg" 
                  alt="Sarah Chen - Operations Manager" 
                  width={400} 
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Sarah Chen</h3>
                <p className="text-blue-600 mb-4">Operations Manager</p>
                <p className="text-gray-600">
                  Sarah ensures all projects run smoothly, coordinating our cleaning teams to provide the highest level of service efficiency.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image 
                  src="/images/team-3.jpg" 
                  alt="David Martinez - Technical Director" 
                  width={400} 
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">David Martinez</h3>
                <p className="text-blue-600 mb-4">Technical Director</p>
                <p className="text-gray-600">
                  David heads our equipment and technical training, keeping Pronto Cleanz at the forefront of cleaning technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team maintains the highest standards through continuous training and professional certifications.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="p-4 border-2 border-gray-200 rounded-lg flex items-center justify-center">
              <Image 
                src="/images/cert-1.jpg" 
                alt="Pressure Washing Certification" 
                width={180} 
                height={120}
              />
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-lg flex items-center justify-center">
              <Image 
                src="/images/cert-2.jpg" 
                alt="Environmental Safety Certification" 
                width={180} 
                height={120}
              />
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-lg flex items-center justify-center">
              <Image 
                src="/images/cert-3.jpg" 
                alt="OSHA Safety Training" 
                width={180} 
                height={120}
              />
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-lg flex items-center justify-center">
              <Image 
                src="/images/cert-4.jpg" 
                alt="Professional Cleaning Association" 
                width={180} 
                height={120}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Pronto Cleanz Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your cleaning needs and get a customized quote.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

// Run the function
updateAboutPage().catch(console.error); 