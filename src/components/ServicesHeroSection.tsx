"use client"
import { Phone, Clock, Check, Home, MapPin } from "lucide-react";
import Link from "next/link";
import FilloutScript from '@/components/FilloutScript';

interface ServicesHeroSectionProps {
  serviceName: string;
  areaName: string;
  cityName?: string;
  heroTitle?: string;
  description?: string;
  response?: string;
  water?: string;
  postcodes?: string[];
}

const ServicesHeroSection = ({ 
  serviceName, 
  areaName, 
  cityName, 
  heroTitle, 
  description, 
  response, 
  water, 
}: ServicesHeroSectionProps) => {
  const defaultHeroTitle = `${serviceName} in ${areaName}`;
  const displayHeroTitle = heroTitle || defaultHeroTitle;
  
  const defaultDescription = `Professional ${serviceName.toLowerCase()} services in ${areaName}. We provide expert ${serviceName.toLowerCase()} across ${areaName} and the surrounding ${cityName || 'Southampton'} areas, with 24/7 support for emergencies and planned work. Our certified engineers are available day and night to handle all your ${serviceName.toLowerCase()} needs.`;
  const displayDescription = description || defaultDescription;
  
  const defaultResponse = "30–50 minutes during working hours, subject to availability and traffic";
  const displayResponse = response || defaultResponse;
  
  const defaultWater = `${cityName || 'Southampton'} is supplied largely from chalk aquifer sources, so hard-water scale can be an important consideration for plumbing and heating systems.`;
  const displayWater = water || defaultWater;

  return (
    <>
      <FilloutScript />
      <section className="relative min-h-[800px] md:min-h-[800px] flex items-center overflow-hidden bg-[#0a3b7c] hero-section-main pt-2.5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(8, 34, 82, 0.92) 0%, rgba(13, 55, 120, 0.88) 0%, rgba(10, 59, 124, 0.92) 50%), url('/lovable-uploads/hero.jpg')`,
          }}
        >
          <picture>
            <source
              srcSet="/lovable-uploads/hero.jpg"
              type="image/webp"
            />
            <img
              src="/lovable-uploads/hero.jpg"
              alt="UKB Plumbing emergency services"
              className="hidden"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2.5 pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-12">
            <div className="w-full lg:max-w-2xl text-white">
              
              {/* Breadcrumb */}
              <div className="text-xs text-white/80 flex items-center gap-2 flex-wrap mb-4 md:mb-6">
                <Link prefetch={false}
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Home size={14} className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
                <span className="opacity-50">›</span>
                <Link prefetch={false}
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <span className="opacity-50">›</span>
                <span className="text-white break-words">{areaName}</span>
                <span className="opacity-50">›</span>
                <span className="text-white break-words">{serviceName}</span>
              </div>
              
              {/* Google Rating */}
                 <div className="relative inline-flex items-center gap-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 pr-16 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">4.9</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    122 Google reviews
                  </div>
                </div>

                {/* Gas Safe Badge (Positioned inside top-right) */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
  <Link prefetch={false} href="https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbiuBv2%252fAVPRsfqLCaLBxH42HVXP6X2H0tU7wnaWL3fuUQwxGr9VjFTUyEYsIOpxxiIE%253d&backurl=%252ffindbusinessresults%253fep%253d1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE&searchurl=%252Ffindbusinessresults%253Fep%253D1xPOGK1AdTeDy4hfLti5P2suaiAfkgrUN0FAz91sbis41eO4MxUIdHAaMgU2gRiE" target="_blank" rel="noopener noreferrer">
    <img
      src="/lovable-uploads/gassafe.png"
      alt="Gas Safe Registered"
      className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
    />
  </Link>
</div>
              </div>


              {/* Main Heading */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6 break-words">
                {displayHeroTitle}
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-white/90 leading-relaxed">
                {displayDescription}
              </p>

              {/* Bullet Points for Response, Water, Postcodes */}
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="mt-0.5 md:mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Clock size={14} className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <div className="text-sm md:text-base">
                    <span className="text-white/90 font-semibold">Response: </span>
                    <span className="text-white/80">{displayResponse}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="mt-0.5 md:mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <MapPin size={14} className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400" strokeWidth={3} />
                  </div>
                  <div className="text-sm md:text-base">
                    <span className="text-white/90 font-semibold">Water: </span>
                    <span className="text-white/80">{displayWater}</span>
                  </div>
                </div>
               
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="tel:+447359605766"
                  className="bg-yellow-400 text-gray-900 px-4 md:px-6 py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition font-semibold text-sm md:text-base text-center"
                >
                  <Phone size={20} className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Call Now: 07359605766</span>
                </a>
                <Link prefetch={false} href="/inquiry-form"
                 className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition font-semibold"
                >
  Enquiry Form
</Link>
              </div>
            </div>

            {/* Form Container Right Side */}
            <div className="w-full lg:w-auto flex flex-col items-start lg:items-center">
              <div className="hero-form-wrapper w-full max-w-md lg:max-w-none">
                <div className="hero-form-card w-full">
                  {/* Form Heading */}
                  <h2 className="hero-form-title">
                    Send Us a Message
                  </h2>

                  <div
                    className="hero-fillout-embed w-full min-h-[320px] md:min-h-[360px] overflow-hidden"
                    data-fillout-id="s5uwzWcheNus"
                    data-fillout-embed-type="standard"
                    data-fillout-inherit-parameters
                    data-fillout-dynamic-resize
                  />
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="mt-4 md:mt-6 inline-flex items-center gap-2 md:gap-3 border-2 border-yellow-400/60 rounded-full px-4 md:px-6 py-2.5 md:py-3 bg-[#0a3b7c]/40 backdrop-blur-sm max-w-full text-center">
                <Clock size={20} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-xs md:text-sm font-bold text-yellow-400 tracking-wide uppercase">
                  30 to 60 minute emergency response
                </span>
              </div>
            </div>
          </div>
        </div>

           
      </section>
    </>
  );
};

export default ServicesHeroSection;