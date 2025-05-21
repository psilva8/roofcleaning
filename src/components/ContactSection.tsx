import React from 'react';
import Link from 'next/link';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  cityName?: string;
  phoneNumber?: string;
  email?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Contact Us",
  subtitle = "Get in touch for a free quote on our services",
  cityName = "",
  phoneNumber = "+12136649502",
  email = "prontocleanpw@gmail.com"
}) => {
  const displayTitle = cityName ? `Contact Us in ${cityName}` : title;
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{displayTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="mb-6">
                  <p className="font-semibold mb-1">Phone:</p>
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="text-white hover:text-blue-100 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {phoneNumber}
                  </a>
                </div>
                
                <div className="mb-6">
                  <p className="font-semibold mb-1">Email:</p>
                  <a 
                    href={`mailto:${email}`} 
                    className="text-white hover:text-blue-100 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {email}
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Hours:</p>
                  <p className="mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="button"
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 