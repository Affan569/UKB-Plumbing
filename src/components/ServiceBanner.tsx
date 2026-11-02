
import React from 'react';
import { Phone } from 'lucide-react';

const ServiceBanner = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-elevated p-8 animate-fade-in relative z-10">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png" 
                  alt="UKB Plumbing | Qualified Local Plumbers Near You" 
                  className="h-24"
                />
              </div>
              <h2 className="text-3xl font-bold text-center mb-4 text-ukb-darkblue">Established 2003</h2>
              <p className="text-lg text-center text-gray-700 mb-6">
                Professional plumbing services you can trust. With over 20 years of experience, we provide affordable emergency plumber services for  boiler installation, boiler breakdown, emergency plumbing and heating breakdown, leaking toilet, leaking shower, leaking tap, gas leak repair, radiators not working, and leaking radiator issues. Our local emergency plumber team is available 24/7 for all your plumbing emergencies.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://ukbplumbing.fillout.com/t/s5uwzWcheNus" 
                  className="flex items-center gap-2 btn-primary"
                >
                  <Phone size={20} />
                  <span>Call Our Emergency Plumbing Company Now</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="bg-white rounded-2xl shadow-elevated overflow-hidden animate-fade-in">
              <img 
                src="/lovable-uploads/dd4e2b99-ddbc-4da0-ab63-2734291ac3f3.png" 
                alt="Radiators Not Working Repair Services" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
