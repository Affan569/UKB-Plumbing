
import React from 'react';
import { Clock, ShieldCheck, Trophy } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-elevated">
              <img
                src="/lovable-uploads/windowclean.jpg"
                alt="UKB Plumbing Team"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-ukb-blue text-white p-4 rounded-lg shadow-elevated animate-float hidden md:block">
              <div className="text-center">
                <span className="block text-3xl font-bold">15+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div>
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4 animate-fade-in">
              About UKB Plumbing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in delay-100 text-ukb-darkblue">
              Your Trusted Plumbing Partner
            </h2>
            <p className="text-lg text-ukb-darkgray mb-6 animate-fade-in delay-200">
              UKB Plumbing has been providing exceptional plumbing services to residents and businesses in the surrounding areas for over 15 years. Our team of fully certified plumbers is committed to delivering high-quality workmanship and excellent customer service.
            </p>
            <p className="text-lg text-ukb-darkgray mb-8 animate-fade-in delay-300">
              Whether you need emergency repairs, routine maintenance, or a complete installation, we have the expertise and equipment to handle all your plumbing needs efficiently and effectively.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in delay-400">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-ukb-lightblue rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-7 h-7 text-ukb-blue" />
                </div>
                <h4 className="font-semibold mb-1">Fast Response</h4>
                <p className="text-sm text-ukb-darkgray">24/7 emergency service</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-ukb-lightblue rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="w-7 h-7 text-ukb-blue" />
                </div>
                <h4 className="font-semibold mb-1">Fully Insured</h4>
                <p className="text-sm text-ukb-darkgray">Complete peace of mind</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-ukb-lightblue rounded-full flex items-center justify-center mb-3">
                  <Trophy className="w-7 h-7 text-ukb-blue" />
                </div>
                <h4 className="font-semibold mb-1">Quality Guaranteed</h4>
                <p className="text-sm text-ukb-darkgray">Satisfaction assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
