'use client'

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
  cityName?: string;
}

const defaultFaqs: FAQ[] = [
  {
    question: "What types of surfaces can you power wash?",
    answer: "Our professional power washing services are effective for a wide range of surfaces including concrete, brick, stucco, metal, and many other commercial and industrial surfaces. We adjust our techniques and equipment based on the specific material to ensure effective washing without damage."
  },
  {
    question: "How often should commercial properties be power washed?",
    answer: "Most commercial properties benefit from power washing 2-4 times per year, depending on foot traffic, environmental factors, and industry requirements. High-traffic areas like entrances and sidewalks may need more frequent washing, while building exteriors might only need annual service."
  },
  {
    question: "Is power washing safe for the environment?",
    answer: "Yes, we use environmentally friendly washing solutions and water conservation techniques. Our equipment and methods are designed to minimize runoff and prevent contamination while still providing excellent washing results."
  },
  {
    question: "Do you offer emergency power washing services?",
    answer: "Yes, we understand that some situations require immediate attention. We offer expedited and emergency power washing services for situations like graffiti removal, pre-health inspection cleaning, or cleanup after construction or renovation work."
  }
];

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to commonly asked questions about our services",
  cityName = ""
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const displayTitle = cityName ? `FAQ About ${cityName} Services` : title;
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{displayTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0'}`}
              >
                <div className="px-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 