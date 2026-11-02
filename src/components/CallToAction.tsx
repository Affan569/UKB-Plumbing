
import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 bg-ukb-gray"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 animate-fade-in">
                Plumbing Emergencies?<br />
                <span className="text-ukb-blue">We're Ready 24/7!</span>
              </h2>
              <p className="text-xl text-black/90 mb-8 animate-fade-in delay-100">
                Need a local emergency plumber for leaking toilet, leaking shower, leaking tap, gas leak repair, washing machine installation, radiators not working, or leaking radiator problems? Our same-day plumbing services are available for all urgent plumbing repair Call our affordable emergency plumber team now!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 bg-ukb-blue text-white font-medium py-3 px-8 rounded-full shadow-button transition-all duration-300 hover:shadow-lg hover:bg-ukb-darkblue"
                >
                  Contact Us
                </a>
                <div className="flex items-center gap-3">
                  <div className="bg-ukb-blue rounded-full p-3">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">24/7 Emergency Plumbing Services:</div>
                    <a href="tel:07359605766" className="font-semibold text-lg text-ukb-darkblue hover:text-ukb-blue transition-colors">
                      07359605766
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-3 -right-3 bg-ukb-blue rounded-full text-white text-sm px-4 py-2 font-bold transform rotate-12">
                  100% TRUSTED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
