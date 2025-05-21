import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  image: string;
  price?: string;
}

interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  cityName?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  services, 
  title = "Our Services", 
  subtitle = "Professional cleaning services tailored to your needs",
  cityName = ""
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.price && (
                  <p className="font-semibold text-gray-800">Starting at {service.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 