const fs = require('fs');
const path = require('path');

// Function to update the About page content
function updateAboutPage() {
  console.log('Updating About page with unique content...');
  
  const aboutPagePath = path.join(__dirname, '../src/app/about/page.tsx');
  
  // Create directory if it doesn't exist
  const aboutDir = path.join(__dirname, '../src/app/about');
  if (!fs.existsSync(aboutDir)) {
    fs.mkdirSync(aboutDir, { recursive: true });
  }
    
  // Create About page with unique content
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
    "description": "Pronto Cleanz is a professional cleaning service company specializing in pressure washing and power washing services throughout Los Angeles County."
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
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
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
}`;
  
  try {
    fs.writeFileSync(aboutPagePath, aboutContent);
    console.log('✅ Updated About page with unique content');
  } catch (error) {
    console.error('❌ Error updating About page:', error);
  }
}

// Run the function
updateAboutPage(); 