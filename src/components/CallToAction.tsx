import React from 'react';
import Link from 'next/link';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  bgColor?: string;
  textColor?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for a free quote on our professional cleaning services.",
  buttonText,
  buttonUrl,
  ctaText,
  ctaLink,
  secondaryButtonText,
  secondaryButtonUrl,
  bgColor = "bg-blue-600",
  textColor = "text-white"
}) => {
  // Allow for both naming conventions
  const finalButtonText = buttonText || ctaText || "Contact Us";
  const finalButtonUrl = buttonUrl || ctaLink || "/contact";
  
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href={finalButtonUrl} 
            className={`px-8 py-3 ${bgColor === 'bg-blue-600' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'} font-semibold rounded-lg hover:bg-opacity-90 transition duration-300`}
          >
            {finalButtonText}
          </Link>
          
          {secondaryButtonText && secondaryButtonUrl && (
            <Link 
              href={secondaryButtonUrl} 
              className={`px-8 py-3 border-2 ${textColor} font-semibold rounded-lg hover:bg-opacity-10 hover:bg-white transition duration-300`}
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 